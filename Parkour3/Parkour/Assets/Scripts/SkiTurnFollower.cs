using UnityEngine;

public class SkiTurnFollower : MonoBehaviour
{
    public SkiLocomotionV10 locomotion;
    public Transform fallbackForward;
    public LayerMask groundLayers = ~0;
    public float turnSmooth = 10f;
    public float minSpeed = 0.1f;
    public bool alignToGround = true;
    public bool yawOnly = true;
    public float maxGroundTilt = 25f;
    public bool stickToGround = true;
    public float groundOffset = 0.02f;
    public float groundSnapSpeed = 15f;
    public bool useLocomotionGround = true;
    public bool pitchToGround = true;
    public float maxPitch = 20f;
    public float pitchOffset = 0f;

    void Update()
    {
        if (!locomotion) return;

        Vector3 vel = locomotion.HorizontalVelocity;
        Vector3 fwd = vel.sqrMagnitude > minSpeed * minSpeed
            ? vel
            : (fallbackForward ? fallbackForward.forward : transform.forward);

        fwd.y = 0f;
        if (fwd.sqrMagnitude < 0.0001f) return;

        Vector3 up = Vector3.up;
        bool hasGround = false;
        RaycastHit groundHit = default;
        if (useLocomotionGround && locomotion && locomotion.HasGround)
        {
            hasGround = true;
            if (alignToGround)
            {
                up = locomotion.GroundNormal;
            }
        }
        else if (alignToGround && Physics.Raycast(transform.position + Vector3.up, Vector3.down, out groundHit, 10f, groundLayers))
        {
            up = groundHit.normal;
            hasGround = true;
        }

        if (alignToGround && hasGround && maxGroundTilt > 0f)
        {
            float tilt = Vector3.Angle(Vector3.up, up);
            if (tilt > maxGroundTilt)
            {
                float t = maxGroundTilt / tilt;
                up = Vector3.Slerp(Vector3.up, up, t);
            }
        }

        bool inAir = locomotion && locomotion.IsInAir;
        if (stickToGround && !inAir && hasGround)
        {
            Vector3 targetPos = transform.position;
            targetPos.y = useLocomotionGround && locomotion ? locomotion.GroundY + groundOffset : groundHit.point.y + groundOffset;
            transform.position = Vector3.Lerp(transform.position, targetPos, groundSnapSpeed * Time.deltaTime);
        }

        Vector3 fwdFlat = fwd;
        fwdFlat.y = 0f;
        if (fwdFlat.sqrMagnitude < 0.0001f) return;

        Vector3 upForRotation = yawOnly ? Vector3.up : up;
        Vector3 fwdForRotation = yawOnly ? fwdFlat : Vector3.ProjectOnPlane(fwd, upForRotation);
        if (fwdForRotation.sqrMagnitude < 0.0001f) return;

        Quaternion target = Quaternion.LookRotation(fwdForRotation.normalized, upForRotation);

        if (yawOnly && pitchToGround && hasGround)
        {
            Vector3 right = Vector3.Cross(Vector3.up, fwdFlat).normalized;
            Vector3 groundForward = Vector3.ProjectOnPlane(fwdFlat, up);
            if (right.sqrMagnitude > 0.0001f && groundForward.sqrMagnitude > 0.0001f)
            {
                groundForward.Normalize();
                float pitchAngle = Vector3.SignedAngle(fwdFlat, groundForward, right);
                pitchAngle = Mathf.Clamp(pitchAngle, -maxPitch, maxPitch);
                target = target * Quaternion.AngleAxis(pitchAngle + pitchOffset, Vector3.right);
            }
        }
        transform.rotation = Quaternion.Slerp(transform.rotation, target, turnSmooth * Time.deltaTime);
    }
}
