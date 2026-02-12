using UnityEngine;

public class SkiLocomotion : MonoBehaviour
{
    [Header("Refs")]
    public Rigidbody playerRb;
    public Transform hmd;

    [Header("Pole tips")]
    public PoleTipContact leftTip;
    public PoleTipContact rightTip;

    [Header("Pole hands (direction + hand velocity)")]
    public Transform leftHand;
    public Transform rightHand;

    [Header("Forces")]
    public float pushGain = 12f;
    public float yawTorqueGain = 18f;
    public float minBackSpeed = 0.12f;
    public float maxSpeed = 6f;

    [Header("Friction")]
    public float glideFriction = 0.6f;     // slows forward motion
    public float lateralFriction = 2.5f;   // kills sideways drift

    [Header("Debug (read-only)")]
    public float debug_lastPushForce;
    public float debug_lastYawTorque;
    public float debug_lastSteerAngle;
    public float debug_leftBackSpeed;
    public float debug_rightBackSpeed;
    public Vector3 debug_playerVel;
    public bool debug_leftGrounded;
    public bool debug_rightGrounded;

    Vector3 _lastLeftHandPos;
    Vector3 _lastRightHandPos;

    void Start()
    {
        if (leftHand) _lastLeftHandPos = leftHand.position;
        if (rightHand) _lastRightHandPos = rightHand.position;
    }

    void FixedUpdate()
    {
        if (!playerRb || !hmd) return;

        // --- reset debug ---
        debug_lastPushForce = 0f;
        debug_lastYawTorque = 0f;
        debug_lastSteerAngle = 0f;
        debug_leftBackSpeed = 0f;
        debug_rightBackSpeed = 0f;

        // --- grounded states ---
        debug_leftGrounded = leftTip && leftTip.Grounded;
        debug_rightGrounded = rightTip && rightTip.Grounded;

        // --- friction model (horizontal) ---
        Vector3 v = playerRb.linearVelocity;
        Vector3 horiz = new Vector3(v.x, 0f, v.z);

        Vector3 forward = hmd.forward; forward.y = 0f;
        forward = forward.sqrMagnitude > 0.0001f ? forward.normalized : Vector3.forward;

        Vector3 right = new Vector3(forward.z, 0f, -forward.x);

        float fwdSpeed = Vector3.Dot(horiz, forward);
        float sideSpeed = Vector3.Dot(horiz, right);

        fwdSpeed = Mathf.MoveTowards(fwdSpeed, 0f, glideFriction * Time.fixedDeltaTime);
        sideSpeed = Mathf.MoveTowards(sideSpeed, 0f, lateralFriction * Time.fixedDeltaTime);

        horiz = forward * fwdSpeed + right * sideSpeed;
        playerRb.linearVelocity = new Vector3(horiz.x, v.y, horiz.z);

        // --- compute hand velocities ---
        Vector3 leftHandVel = Vector3.zero;
        Vector3 rightHandVel = Vector3.zero;

        if (leftHand)
        {
            leftHandVel = (leftHand.position - _lastLeftHandPos) / Time.fixedDeltaTime;
            _lastLeftHandPos = leftHand.position;
        }
        if (rightHand)
        {
            rightHandVel = (rightHand.position - _lastRightHandPos) / Time.fixedDeltaTime;
            _lastRightHandPos = rightHand.position;
        }

        // --- apply push from each grounded pole ---
        if (debug_leftGrounded && leftHand)
            ApplyPole(leftHand, leftHandVel, forward, isLeft: true);

        if (debug_rightGrounded && rightHand)
            ApplyPole(rightHand, rightHandVel, forward, isLeft: false);

        // --- clamp horizontal speed ---
        Vector3 pv = playerRb.linearVelocity;
        Vector3 ph = new Vector3(pv.x, 0f, pv.z);
        if (ph.magnitude > maxSpeed)
        {
            ph = ph.normalized * maxSpeed;
            playerRb.linearVelocity = new Vector3(ph.x, pv.y, ph.z);
        }

        debug_playerVel = playerRb.linearVelocity;
    }

    void ApplyPole(Transform hand, Vector3 handVel, Vector3 hmdForwardFlat, bool isLeft)
    {
        // Use controller forward as pole direction on ground plane
        Vector3 poleDir = hand.forward;
        poleDir.y = 0f;
        poleDir = poleDir.sqrMagnitude > 0.0001f ? poleDir.normalized : hmdForwardFlat;

        // push happens when hand moves backward relative to pole direction
        float backSpeed = -Vector3.Dot(handVel, poleDir);
        if (isLeft) debug_leftBackSpeed = backSpeed;
        else debug_rightBackSpeed = backSpeed;

        if (backSpeed < minBackSpeed) return;

        // 1) Push force
        float push = backSpeed * pushGain;
        playerRb.AddForce(poleDir * push, ForceMode.Acceleration);
        debug_lastPushForce += push;

        // 2) Turning torque (yaw)
        float steerAngle = Vector3.SignedAngle(hmdForwardFlat, poleDir, Vector3.up); // degrees
        float yaw = steerAngle * backSpeed * yawTorqueGain;

        playerRb.AddTorque(Vector3.up * yaw, ForceMode.Acceleration);

        // debug
        debug_lastSteerAngle = steerAngle;
        debug_lastYawTorque += yaw;
    }
}
