using UnityEngine;

public class SkiPizzaBrakeVisual : MonoBehaviour
{
    [Header("Assign ski mesh transforms (children of this SkiRig)")]
    public Transform leftSki;
    public Transform rightSki;

    [Header("Controllers")]
    public OVRInput.Controller leftController = OVRInput.Controller.LTouch;
    public OVRInput.Controller rightController = OVRInput.Controller.RTouch;

    [Header("Pizza settings")]
    [Range(0f, 45f)] public float pizzaAngleDeg = 25f;
    public float gripThreshold = 0.5f;     // when grip considered "braking"
    public float lerpSpeed = 10f;          // smoothness

    [Header("Axis mapping")]
    public bool useAnalogGrip = true;      // if true: angle scales with grip amount

    [Header("Airborne visuals")]
    public SkiLocomotionV10 locomotion;
    public bool outwardWhenAirborne = true;
    [Range(0f, 45f)] public float airborneAngleDeg = 25f;

    private Quaternion _leftStart;
    private Quaternion _rightStart;

    void Awake()
    {
        if (leftSki)  _leftStart = leftSki.localRotation;
        if (rightSki) _rightStart = rightSki.localRotation;
    }

    void Update()
    {
        if (!leftSki || !rightSki) return;

        bool inAir = outwardWhenAirborne && locomotion && locomotion.IsInAir;

        Quaternion leftTarget;
        Quaternion rightTarget;

        if (inAir)
        {
            float ang = Mathf.Clamp(airborneAngleDeg, 0f, 45f);

            // Airborne: reverse pizza (tips outward)
            Quaternion leftOut  = _leftStart  * Quaternion.Euler(0f, +ang, 0f);
            Quaternion rightOut = _rightStart * Quaternion.Euler(0f, -ang, 0f);

            leftTarget = leftOut;
            rightTarget = rightOut;
        }
        else
        {
            float leftGrip = OVRInput.Get(OVRInput.Axis1D.PrimaryHandTrigger, leftController);
            float rightGrip = OVRInput.Get(OVRInput.Axis1D.PrimaryHandTrigger, rightController);

            float brake01;
            if (useAnalogGrip)
            {
                // Use whichever hand is squeezing more
                brake01 = Mathf.Max(leftGrip, rightGrip);
            }
            else
            {
                // On/off
                brake01 = (leftGrip > gripThreshold || rightGrip > gripThreshold) ? 1f : 0f;
            }

            float ang = pizzaAngleDeg * Mathf.Clamp01(brake01);

            // Grounded: pizza inward
            Quaternion leftIn  = _leftStart  * Quaternion.Euler(0f, -ang, 0f);
            Quaternion rightIn = _rightStart * Quaternion.Euler(0f, +ang, 0f);

            leftTarget = leftIn;
            rightTarget = rightIn;
        }

        leftSki.localRotation  = Quaternion.Slerp(leftSki.localRotation,  leftTarget,  lerpSpeed * Time.deltaTime);
        rightSki.localRotation = Quaternion.Slerp(rightSki.localRotation, rightTarget, lerpSpeed * Time.deltaTime);
    }

    // Optional: call this if you re-align skis in editor and want to re-save their "normal" pose at runtime
    [ContextMenu("Recalibrate Start Rotations")]
    public void Recalibrate()
    {
        if (leftSki)  _leftStart = leftSki.localRotation;
        if (rightSki) _rightStart = rightSki.localRotation;
    }
}
