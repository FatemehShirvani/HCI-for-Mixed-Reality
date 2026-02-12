using UnityEngine;

public class PoleTipContact : MonoBehaviour
{
    [Header("Ground detection (either Layer OR Tag)")]
    public LayerMask groundLayers = ~0;
    public string groundTag = "Ground";

    [Header("Raycast fallback")]
    public bool useRaycastFallback = true;
    public float raycastDistance = 0.25f;
    public float sphereRadius = 0.03f;
    public float skin = 0.02f;
    public float groundedGraceTime = 0.1f;

    [Header("Debug (read-only)")]
    public bool Grounded;
    public string LastHitName;
    public string LastHitTag;
    public int LastHitLayer;
    public float LastRaycastHitDistance;

    float lastGroundTime = -999f;

    void FixedUpdate()
    {
        bool hitGround = false;

        Vector3 up = Vector3.up;
        Vector3 origin = transform.position + up * skin;
        float maxDist = raycastDistance + skin;

        if (useRaycastFallback)
        {
            if (Physics.SphereCast(origin, sphereRadius, -up, out RaycastHit hit, maxDist, groundLayers, QueryTriggerInteraction.Ignore))
            {
                bool layerOk = ((groundLayers.value & (1 << hit.collider.gameObject.layer)) != 0);
                bool tagOk = string.IsNullOrEmpty(groundTag) || hit.collider.CompareTag(groundTag);

                if (layerOk || tagOk)
                {
                    hitGround = true;
                    lastGroundTime = Time.time;

                    LastHitName = hit.collider.name;
                    LastHitTag = hit.collider.tag;
                    LastHitLayer = hit.collider.gameObject.layer;
                    LastRaycastHitDistance = hit.distance;
                }
            }
        }

        Grounded = hitGround || (Time.time - lastGroundTime) <= groundedGraceTime;
    }
}
