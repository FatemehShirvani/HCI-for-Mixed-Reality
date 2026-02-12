using UnityEngine;

/// <summary>
/// Ski Locomotion V10 - Proper VR Heights
/// 
/// VR Setup Reality:
/// - OVRCameraRig.position = floor level
/// - HMD (head) = ~1.6m above rig
/// - Hand controllers = ~1.0m above rig  
/// - Pole tips = near ground when pushing down
/// </summary>
public class SkiLocomotionV10 : MonoBehaviour
{
    public Vector3 HorizontalVelocity => new Vector3(_velocity.x, 0f, _velocity.z);
    public bool IsInAir => _isInAir;
    public float GroundY => _lastGroundY;
    public bool HasGround => _hasGround;
    public Vector3 GroundNormal => _lastGroundNormal;

    [Header("=== Required References ===")]
    public Rigidbody playerRb;
    public Transform hmd;

    [Header("=== Pole Tips ===")]
    public Transform leftTip;
    public Transform rightTip;

    [Header("=== Hand Anchors ===")]
    public Transform leftHand;
    public Transform rightHand;

    [Header("=== Controllers ===")]
    public OVRInput.Controller leftController = OVRInput.Controller.LTouch;
    public OVRInput.Controller rightController = OVRInput.Controller.RTouch;
    [Range(0.1f, 1f)] public float triggerThreshold = 0.5f;

    [Header("=== Audio ===")]
    public AudioSource pushSound;
    [Range(0f, 1f)] public float pushSoundVolume = 1f;

    [Header("=== Ground Detection ===")]
    public LayerMask groundLayers = ~0;
    [Tooltip("How high above ground the pole tip can be and still count as grounded")]
    public float poleTipGroundTolerance = 0.3f;
    [Tooltip("How far down to search for ground from player")]
    public float groundRayLength = 10f;

    [Header("=== Push Detection ===")]
    [Tooltip("Min hand acceleration to start push (lower = easier to start)")]
    public float accelerationThreshold = 1.5f;
    [Tooltip("Hand must be this far in front of face to start push")]
    public float minForwardDistance = 0.05f;
    
    [Header("=== Speed Settings ===")]
    [Tooltip("Base speed gained per push (before impulse)")]
    public float pushPower = 3f;
    [Tooltip("Scale for impulse-style push using backward hand velocity")]
    public float pushVelocityScale = 1.2f;
    [Tooltip("Max speed gain from single push")]
    public float maxPushGain = 4f;
    [Tooltip("Maximum speed")]
    public float maxSpeed = 10f;

    [Header("=== Friction ===")]
    [Range(0f, 3f)] public float friction = 0.3f;
    [Tooltip("Drag applied while in air")]
    [Range(0f, 3f)] public float airDrag = 0f;
    public float uphillFrictionMultiplier = 2.5f;
    public float downhillAcceleration = 2f;
    public float maxSlopeAngle = 45f;

    [Header("=== Turning ===")]
    [Tooltip("Time window (seconds) to measure heading change")]
    public float turnAngleWindow = 0.2f;
    [Tooltip("Minimum heading change (degrees) over the window to count as turning")]
    public float turnAngleThreshold = 4f;
    [Tooltip("Speed lost per degree of turn")]
    public float turnSpeedLossPerDegree = 0.015f;
    [Tooltip("Extra turn loss scaled by speed (0 = no scaling)")]
    public float turnSpeedLossSpeedFactor = 0.05f;
    [Tooltip("How quickly velocity direction steers toward head direction (deg/sec)")]
    public float turnResponsiveness = 120f;

    [Header("=== Brake (Grip Buttons) ===")]
    public float brakeFriction = 3f;

    [Header("=== Ramp Jump ===")]
    public float rampLaunchBoost = 4f;
    public float minLaunchSpeed = 4f;
    public float customGravity = 15f;

    [Header("=== Game Integration ===")]
    public ParkourCounter parkourCounter;
    public SelectionTaskMeasure selectionTaskMeasure;
    public string stage;

    [Header("=== Debug - Hands ===")]
    public string debugLeftState;
    public string debugRightState;
    public bool debugLeftTrigger;
    public bool debugRightTrigger;
    public bool debugLeftTipGrounded;
    public bool debugRightTipGrounded;
    public float debugLeftTipHeight;
    public float debugRightTipHeight;

    [Header("=== Debug - Movement ===")]
    public float debugSpeed;
    public float debugLastPushPower;
    public float debugSlopeAngle;
    public bool debugOnGround;
    public bool debugGoingUphill;
    public bool debugBraking;
    public bool debugInAir;
    public float debugVerticalVel;
    public float debugGroundY;
    public float debugPlayerY;
    public bool debugTurning;
    public float debugTurnAngle;

    [Header("=== Trigger Debug ===")]
    public string lastTriggerName;
    public string lastTriggerTag;
    public int triggerEnterCount;

    // Push states
    private enum PushState { IDLE, WINDING_UP, GROUND_CONTACT }
    
    // Hand tracking
    private PushState _leftState = PushState.IDLE;
    private PushState _rightState = PushState.IDLE;
    private Vector3 _prevLeftHandPos;
    private Vector3 _prevRightHandPos;
    private Vector3 _prevLeftHandVel;
    private Vector3 _prevRightHandVel;
    private float _leftPushImpulse;
    private float _rightPushImpulse;
    
    // Movement
    private Vector3 _velocity;
    private float _currentSpeed;
    private float _verticalVelocity;
    private bool _isInAir;
    private Vector3 _lastSlopeForward;
    private float _lastGroundY;
    private Vector3 _lastGroundNormal = Vector3.up;
    private bool _hasGround;
    private int _frameCount;
    private Vector3 _prevHeadingDir;
    private Vector3 _turnWindowStartDir;
    private float _turnWindowTimer;

    void Start()
    {
        _velocity = Vector3.zero;
        _currentSpeed = 0f;
        _verticalVelocity = 0f;
        _isInAir = false;
        _frameCount = 0;
        _lastGroundY = 0f;

        if (playerRb)
        {
            playerRb.useGravity = false;
            playerRb.isKinematic = false;
            playerRb.freezeRotation = true;
            playerRb.interpolation = RigidbodyInterpolation.Interpolate;
            playerRb.linearVelocity = Vector3.zero;
        }

        debugLeftState = "IDLE";
        debugRightState = "IDLE";
    }

    void FixedUpdate()
    {
        if (!playerRb || !hmd) return;

        _frameCount++;
        if (_frameCount < 10)
        {
            if (leftHand) _prevLeftHandPos = leftHand.position;
            if (rightHand) _prevRightHandPos = rightHand.position;
            return;
        }

        // === Head direction (horizontal only) ===
        Vector3 headForward = hmd.forward;
        headForward.y = 0;
        headForward = headForward.sqrMagnitude > 0.001f ? headForward.normalized : Vector3.forward;
        Vector3 headPos = hmd.position;

        // === Controller inputs ===
        debugLeftTrigger = OVRInput.Get(OVRInput.Axis1D.PrimaryIndexTrigger, leftController) >= triggerThreshold;
        debugRightTrigger = OVRInput.Get(OVRInput.Axis1D.PrimaryIndexTrigger, rightController) >= triggerThreshold;
        
        bool leftGrip = OVRInput.Get(OVRInput.Axis1D.PrimaryHandTrigger, leftController) > 0.5f;
        bool rightGrip = OVRInput.Get(OVRInput.Axis1D.PrimaryHandTrigger, rightController) > 0.5f;
        debugBraking = leftGrip || rightGrip;

        // === Find ground below player ===
        float groundY = _lastGroundY;
        Vector3 groundNormal = Vector3.up;
        float slopeAngle = 0f;
        bool foundGround = false;

        // Raycast from player position (which is at floor level)
        Vector3 rayStart = playerRb.position + Vector3.up * 1f;
        if (Physics.Raycast(rayStart, Vector3.down, out RaycastHit groundHit, groundRayLength, groundLayers, QueryTriggerInteraction.Ignore))
        {
            groundY = groundHit.point.y;
            groundNormal = groundHit.normal;
            slopeAngle = Vector3.Angle(groundNormal, Vector3.up);
            foundGround = true;
            _lastGroundY = groundY;
            _lastGroundNormal = groundNormal;
        }
        _hasGround = foundGround;

        debugGroundY = groundY;
        debugPlayerY = playerRb.position.y;
        debugSlopeAngle = slopeAngle;

        // === Check if pole tips are near ground ===
        debugLeftTipGrounded = false;
        debugRightTipGrounded = false;
        debugLeftTipHeight = 999f;
        debugRightTipHeight = 999f;

        if (leftTip != null)
        {
            // Find ground directly below tip
            if (Physics.Raycast(leftTip.position + Vector3.up * 0.5f, Vector3.down, out RaycastHit tipHit, 2f, groundLayers, QueryTriggerInteraction.Ignore))
            {
                debugLeftTipHeight = leftTip.position.y - tipHit.point.y;
                debugLeftTipGrounded = debugLeftTipHeight <= poleTipGroundTolerance;
            }
        }

        if (rightTip != null)
        {
            if (Physics.Raycast(rightTip.position + Vector3.up * 0.5f, Vector3.down, out RaycastHit tipHit, 2f, groundLayers, QueryTriggerInteraction.Ignore))
            {
                debugRightTipHeight = rightTip.position.y - tipHit.point.y;
                debugRightTipGrounded = debugRightTipHeight <= poleTipGroundTolerance;
            }
        }

        // === Process hand pushes ===
        if (leftHand) ProcessHand(leftHand, ref _prevLeftHandPos, ref _prevLeftHandVel, ref _leftState, ref _leftPushImpulse, debugLeftTrigger, debugLeftTipGrounded, headPos, headForward, "LEFT");
        if (rightHand) ProcessHand(rightHand, ref _prevRightHandPos, ref _prevRightHandVel, ref _rightState, ref _rightPushImpulse, debugRightTrigger, debugRightTipGrounded, headPos, headForward, "RIGHT");
        
        debugLeftState = _leftState.ToString();
        debugRightState = _rightState.ToString();

        // === Slope direction ===
        Vector3 slopeDown = Vector3.zero;
        if (foundGround && slopeAngle <= maxSlopeAngle)
        {
            slopeDown = Vector3.ProjectOnPlane(Vector3.down, groundNormal);
            slopeDown.y = 0f;
            if (slopeDown.sqrMagnitude > 0.001f) slopeDown.Normalize();
        }

        if (!_isInAir && foundGround && slopeDown.sqrMagnitude > 0.001f)
        {
            float slopeFactor = Mathf.Sin(slopeAngle * Mathf.Deg2Rad);
            _velocity += slopeDown * (downhillAcceleration * slopeFactor * Time.fixedDeltaTime);
        }

        float speed = _velocity.magnitude;
        Vector3 headingDir = speed > 0.01f ? _velocity / speed : headForward;

        if (_prevHeadingDir.sqrMagnitude < 0.001f)
        {
            _prevHeadingDir = headingDir;
        }

        if (_turnWindowStartDir.sqrMagnitude < 0.001f || _turnWindowTimer <= 0f)
        {
            _turnWindowStartDir = headingDir;
        }

        bool goingUphill = false;
        bool goingDownhill = false;
        if (slopeDown.sqrMagnitude > 0.001f)
        {
            float alongSlope = Vector3.Dot(headingDir, slopeDown);
            goingDownhill = alongSlope > 0.1f;
            goingUphill = alongSlope < -0.1f;
        }
        debugGoingUphill = goingUphill;

        // === Turning detection ===
        float frameTurnAngle = Vector3.Angle(_prevHeadingDir, headingDir);
        _prevHeadingDir = headingDir;

        _turnWindowTimer += Time.fixedDeltaTime;
        float windowTurnAngle = Vector3.Angle(_turnWindowStartDir, headingDir);
        if (_turnWindowTimer >= turnAngleWindow)
        {
            _turnWindowTimer = 0f;
            _turnWindowStartDir = headingDir;
        }

        bool isTurning = windowTurnAngle > turnAngleThreshold;
        debugTurning = isTurning && !_isInAir && foundGround;
        debugTurnAngle = windowTurnAngle;

        // === Friction / Drag calculation ===
        float speedBefore = _velocity.magnitude;
        if (_isInAir)
        {
            if (airDrag > 0f && speedBefore > 0.001f)
            {
                float newSpeed = Mathf.MoveTowards(speedBefore, 0f, airDrag * Time.fixedDeltaTime);
                _velocity = _velocity.normalized * newSpeed;
            }
        }
        else
        {
            float effectiveFriction = friction;
            if (debugBraking)
            {
                effectiveFriction = brakeFriction;
            }
            else if (foundGround)
            {
                if (goingUphill)
                    effectiveFriction = friction * uphillFrictionMultiplier;
                else if (goingDownhill)
                    effectiveFriction = friction * 0.3f;
            }

            float newSpeed = Mathf.MoveTowards(speedBefore, 0f, effectiveFriction * Time.fixedDeltaTime);
            if (speedBefore > 0.001f)
            {
                _velocity = _velocity.normalized * newSpeed;
            }
        }

        if (!_isInAir && foundGround && isTurning && _velocity.sqrMagnitude > 0.0001f)
        {
            float speedScale = 1f + (_velocity.magnitude * turnSpeedLossSpeedFactor);
            float turnLoss = frameTurnAngle * turnSpeedLossPerDegree * speedScale;
            float reducedSpeed = Mathf.Max(0f, _velocity.magnitude - turnLoss);
            _velocity = _velocity.normalized * reducedSpeed;
        }

        if (!_isInAir && foundGround && _velocity.sqrMagnitude > 0.0001f)
        {
            float maxRadians = turnResponsiveness * Mathf.Deg2Rad * Time.fixedDeltaTime;
            Vector3 targetVel = headForward * _velocity.magnitude;
            _velocity = Vector3.RotateTowards(_velocity, targetVel, maxRadians, 0f);
        }

        if (_velocity.magnitude > maxSpeed)
        {
            _velocity = _velocity.normalized * maxSpeed;
        }

        _currentSpeed = _velocity.magnitude;
        debugSpeed = _currentSpeed;

        // === MOVEMENT ===
        Vector3 newPos = playerRb.position;

        Vector3 travelDir = _velocity.sqrMagnitude > 0.0001f ? _velocity.normalized : headForward;

        if (_isInAir)
        {
            // === IN AIR - custom gravity ===
            debugInAir = true;
            debugOnGround = false;

            _verticalVelocity -= customGravity * Time.fixedDeltaTime;
            debugVerticalVel = _verticalVelocity;

            // Move
            newPos += _velocity * Time.fixedDeltaTime;
            newPos.y += _verticalVelocity * Time.fixedDeltaTime;

            // Check landing
            if (foundGround && newPos.y <= groundY && _verticalVelocity <= 0)
            {
                _isInAir = false;
                _verticalVelocity = 0f;
                newPos.y = groundY;
                Debug.Log("[SKI] LANDED!");
            }
        }
        else
        {
            // === ON GROUND ===
            debugInAir = false;
            debugOnGround = foundGround;
            _verticalVelocity = 0f;
            debugVerticalVel = 0f;

            if (foundGround)
            {
                // Snap to ground
                newPos.y = groundY;

                // Move horizontally
                Vector3 moveDelta = _velocity * Time.fixedDeltaTime;
                newPos.x += moveDelta.x;
                newPos.z += moveDelta.z;

                _lastSlopeForward = Vector3.ProjectOnPlane(travelDir, groundNormal).normalized;
                if (_lastSlopeForward.sqrMagnitude < 0.001f) _lastSlopeForward = travelDir;

                // === RAMP LAUNCH CHECK ===
                if (goingUphill && _currentSpeed >= minLaunchSpeed && slopeAngle > 15f)
                {
                    // Check if no ground ahead (ramp edge)
                    Vector3 aheadPos = newPos + travelDir * 1.5f + Vector3.up * 1f;
                    if (!Physics.Raycast(aheadPos, Vector3.down, 4f, groundLayers, QueryTriggerInteraction.Ignore))
                    {
                        _isInAir = true;
                        _verticalVelocity = _lastSlopeForward.y * _currentSpeed + rampLaunchBoost;
                        Debug.Log($"[SKI] LAUNCH! VertVel={_verticalVelocity:F1}");
                    }
                }
            }
        }

        playerRb.MovePosition(newPos);

        // === Respawn ===
        if (OVRInput.Get(OVRInput.Button.Two) || OVRInput.Get(OVRInput.Button.Four))
        {
            if (parkourCounter != null && parkourCounter.parkourStart)
            {
                playerRb.position = parkourCounter.currentRespawnPos;
                _velocity = Vector3.zero;
                _currentSpeed = 0f;
                _verticalVelocity = 0f;
                _isInAir = false;
            }
        }
    }

    void ProcessHand(Transform hand, ref Vector3 prevPos, ref Vector3 prevVel, ref PushState state, ref float pushImpulse, bool triggerHeld, bool tipGrounded, Vector3 headPos, Vector3 headForward, string handName)
    {
        Vector3 currentVel = (hand.position - prevPos) / Time.fixedDeltaTime;
        Vector3 accelVec = (currentVel - prevVel) / Time.fixedDeltaTime;
        float acceleration = accelVec.magnitude;

        Vector3 handRelative = hand.position - headPos;
        float forwardDist = Vector3.Dot(handRelative, headForward);

        prevPos = hand.position;
        prevVel = currentVel;

        switch (state)
        {
            case PushState.IDLE:
                pushImpulse = 0f;
                // Start push: trigger held, hand accelerating, hand in front of face
                if (triggerHeld && acceleration > accelerationThreshold && forwardDist > minForwardDistance)
                {
                    state = PushState.WINDING_UP;
                    pushImpulse = 0f;
                    Debug.Log($"[{handName}] WINDING_UP");
                }
                break;

            case PushState.WINDING_UP:
                if (!triggerHeld)
                {
                    state = PushState.IDLE;
                    pushImpulse = 0f;
                }
                else
                {
                    // Accumulate impulse based on backward hand velocity
                    float velAlong = Vector3.Dot(currentVel, headForward);
                    float backwardVel = Mathf.Max(0f, -velAlong);
                    pushImpulse += backwardVel * pushVelocityScale * Time.fixedDeltaTime;

                    float maxImpulse = Mathf.Max(0f, maxPushGain - pushPower);
                    if (pushImpulse > maxImpulse) pushImpulse = maxImpulse;

                    if (tipGrounded)
                    {
                        // TIP HIT GROUND - PUSH!
                        state = PushState.GROUND_CONTACT;
                        float gain = Mathf.Min(pushPower + pushImpulse, maxPushGain);
                        _velocity += headForward * gain;
                        debugLastPushPower = gain;

                        Debug.Log($"[{handName}] PUSH! impulse={pushImpulse:F2}, gain={gain:F1}");
                        PlayPushSound();
                    }
                }
                break;

            case PushState.GROUND_CONTACT:
                if (!triggerHeld || !tipGrounded)
                {
                    state = PushState.IDLE;
                    pushImpulse = 0f;
                }
                break;
        }
    }

    void PlayPushSound()
    {
        if (pushSound)
        {
            pushSound.volume = pushSoundVolume;
            pushSound.Play();
        }
    }

    void OnTriggerEnter(Collider other)
    {
        triggerEnterCount++;
        lastTriggerName = other.gameObject.name;
        lastTriggerTag = other.tag;

        if (other.CompareTag("banner"))
        {
            stage = other.gameObject.name;
            if (parkourCounter != null) parkourCounter.isStageChange = true;
        }
        else if (other.CompareTag("objectInteractionTask"))
        {
            if (selectionTaskMeasure != null)
            {
                selectionTaskMeasure.isTaskStart = true;
                selectionTaskMeasure.scoreText.text = "";
                selectionTaskMeasure.partSumErr = 0f;
                selectionTaskMeasure.partSumTime = 0f;
                float tempValueY = other.transform.position.y > 0 ? 12 : 0;
                Vector3 tmpTarget = new(hmd.transform.position.x, tempValueY, hmd.transform.position.z);
                selectionTaskMeasure.taskUI.transform.LookAt(tmpTarget);
                selectionTaskMeasure.taskUI.transform.Rotate(new Vector3(0, 180f, 0));
                selectionTaskMeasure.taskStartPanel.SetActive(true);
            }
        }
        else if (other.CompareTag("coin"))
        {
            if (parkourCounter != null) parkourCounter.coinCount += 1;
            AudioSource audio = GetComponent<AudioSource>();
            if (audio != null) audio.Play();
            other.gameObject.SetActive(false);
        }
    }
}
