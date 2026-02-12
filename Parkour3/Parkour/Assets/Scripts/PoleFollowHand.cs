using UnityEngine;

public class PoleFollowHand : MonoBehaviour
{
    [Header("References")]
    public Transform hand;   // LeftHandAnchor or RightHandAnchor

    [Header("Follow Settings")]
    public float followPositionSpeed = 25f;
    public float followRotationSpeed = 25f;

        void LateUpdate()
    {
        if (!hand) return;

        transform.position = hand.position;
        transform.rotation = hand.rotation;
    }

}
