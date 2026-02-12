using UnityEngine;

public class SkiPole : MonoBehaviour
{
    public Rigidbody playerRb;          // OVRCameraRig Rigidbody
    public Transform hmd;                // Headset
    public float pushForce = 120f;       // strength of pole push
    public float minBackwardSpeed = 0.2f;

    private Vector3 lastPos;
    private bool grounded;

    void Start()
    {
        lastPos = transform.position;
    }

    void FixedUpdate()
    {
        Vector3 velocity = (transform.position - lastPos) / Time.fixedDeltaTime;
        lastPos = transform.position;

        if (!grounded) return;

        Vector3 forward = hmd.forward;
        forward.y = 0f;
        forward.Normalize();

        float backwardSpeed = -Vector3.Dot(velocity, forward);
        if (backwardSpeed < minBackwardSpeed) return;

        Vector3 force = forward * backwardSpeed * pushForce;
        playerRb.AddForce(force, ForceMode.Force);
    }

    void OnCollisionEnter(Collision c)
    {
        if (c.collider.CompareTag("Ground"))
            grounded = true;
    }

    void OnCollisionExit(Collision c)
    {
        if (c.collider.CompareTag("Ground"))
            grounded = false;
    }
}
