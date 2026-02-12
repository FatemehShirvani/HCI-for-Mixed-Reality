using UnityEngine;

public class LocomotionTechnique : MonoBehaviour
{
    public OVRInput.Controller leftController;
    public OVRInput.Controller rightController;

    [Range(0, 100)] public float translationGain = 40;

    [Header("Debug/Override")]
    public bool forceGainOverride = true;
    [Range(0, 200)] public float forcedGain = 35;

    public GameObject hmd;

    [SerializeField] private float leftTriggerValue;
    [SerializeField] private float rightTriggerValue;
    [SerializeField] private Vector3 startPos;
    [SerializeField] private bool isIndexTriggerDown;

    private Rigidbody rb;

    public ParkourCounter parkourCounter;
    public string stage;
    public SelectionTaskMeasure selectionTaskMeasure;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        leftTriggerValue  = OVRInput.Get(OVRInput.Axis1D.PrimaryIndexTrigger, leftController);
        rightTriggerValue = OVRInput.Get(OVRInput.Axis1D.PrimaryIndexTrigger, rightController);

        Vector3 forward = hmd.transform.forward;
        forward.y = 0f;
        forward = forward.sqrMagnitude > 0.0001f ? forward.normalized : Vector3.forward;

        bool leftDown  = leftTriggerValue  > 0.95f;
        bool rightDown = rightTriggerValue > 0.95f;
        bool active = leftDown || rightDown;

        float gain = forceGainOverride ? forcedGain : translationGain;
        bool useRb = rb != null && !rb.isKinematic;

        if (active && !isIndexTriggerDown)
        {
            isIndexTriggerDown = true;

            if (leftDown && rightDown)
                startPos = (OVRInput.GetLocalControllerPosition(leftController) + OVRInput.GetLocalControllerPosition(rightController)) / 2f;
            else if (leftDown)
                startPos = OVRInput.GetLocalControllerPosition(leftController);
            else
                startPos = OVRInput.GetLocalControllerPosition(rightController);
        }

        if (!active && isIndexTriggerDown)
        {
            isIndexTriggerDown = false;

            if (useRb)
            {
                Vector3 v = rb.linearVelocity;
                v.x = 0f;
                v.z = 0f;
                rb.linearVelocity = v;
            }
        }

        if (active)
        {
            Vector3 curr;
            if (leftDown && rightDown)
                curr = (OVRInput.GetLocalControllerPosition(leftController) + OVRInput.GetLocalControllerPosition(rightController)) / 2f;
            else if (leftDown)
                curr = OVRInput.GetLocalControllerPosition(leftController);
            else
                curr = OVRInput.GetLocalControllerPosition(rightController);

            Vector3 delta = curr - startPos;
            startPos = curr;

            float backSpeed = -Vector3.Dot(delta, forward) / Time.deltaTime;
            if (backSpeed < 0f) backSpeed = 0f;

            float targetSpeed = backSpeed * gain;

            if (useRb)
            {
                Vector3 v = rb.linearVelocity;
                Vector3 horiz = forward * targetSpeed;
                v.x = horiz.x;
                v.z = horiz.z;
                rb.linearVelocity = v;
            }
            else
            {
                transform.position = transform.position + forward * targetSpeed * Time.deltaTime;
            }
        }

        if (OVRInput.Get(OVRInput.Button.Two) || OVRInput.Get(OVRInput.Button.Four))
        {
            if (parkourCounter.parkourStart)
            {
                if (useRb)
                {
                    rb.position = parkourCounter.currentRespawnPos;
                    rb.linearVelocity = Vector3.zero;
                }
                else
                {
                    transform.position = parkourCounter.currentRespawnPos;
                }
            }
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("banner"))
        {
            stage = other.gameObject.name;
            parkourCounter.isStageChange = true;
        }
        else if (other.CompareTag("objectInteractionTask"))
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
        else if (other.CompareTag("coin"))
        {
            parkourCounter.coinCount += 1;
            GetComponent<AudioSource>().Play();
            other.gameObject.SetActive(false);
        }
    }
}
