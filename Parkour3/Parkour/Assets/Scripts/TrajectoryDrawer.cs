using UnityEngine;

/// <summary>
/// Draws the movement trajectory on the ground.
/// Add this to a new GameObject, or the same object as SkiLocomotionV8.
/// Creates its own LineRenderer if not assigned.
/// </summary>
public class TrajectoryDrawer : MonoBehaviour
{
    [Header("Target to Track")]
    public Transform target; // Usually the OVRCameraRig/player

    [Header("Line Settings")]
    public float lineWidth = 0.1f;
    public Color lineColor = Color.yellow;
    public Material lineMaterial; // Optional - will create default if null

    [Header("Trail Settings")]
    public int maxPoints = 100;
    public float minDistanceBetweenPoints = 0.3f;
    public float heightAboveGround = 0.05f;

    private LineRenderer _lineRenderer;
    private Vector3[] _points;
    private int _pointCount;
    private Vector3 _lastRecordedPos;

    void Start()
    {
        // Create or get LineRenderer
        _lineRenderer = GetComponent<LineRenderer>();
        if (_lineRenderer == null)
        {
            _lineRenderer = gameObject.AddComponent<LineRenderer>();
        }

        // Configure LineRenderer
        _lineRenderer.startWidth = lineWidth;
        _lineRenderer.endWidth = lineWidth;
        _lineRenderer.startColor = lineColor;
        _lineRenderer.endColor = lineColor;
        _lineRenderer.positionCount = 0;

        // Set material
        if (lineMaterial != null)
        {
            _lineRenderer.material = lineMaterial;
        }
        else
        {
            // Create a simple unlit material
            _lineRenderer.material = new Material(Shader.Find("Sprites/Default"));
            _lineRenderer.material.color = lineColor;
        }

        // Initialize points array
        _points = new Vector3[maxPoints];
        _pointCount = 0;

        if (target != null)
        {
            _lastRecordedPos = GetGroundPosition(target.position);
        }
    }

    void Update()
    {
        if (target == null) return;

        Vector3 currentPos = GetGroundPosition(target.position);

        // Check if we've moved enough to record a new point
        if (Vector3.Distance(currentPos, _lastRecordedPos) >= minDistanceBetweenPoints)
        {
            AddPoint(currentPos);
            _lastRecordedPos = currentPos;
        }
    }

    void AddPoint(Vector3 pos)
    {
        // Shift all points if we're at max
        if (_pointCount >= maxPoints)
        {
            for (int i = 0; i < maxPoints - 1; i++)
            {
                _points[i] = _points[i + 1];
            }
            _pointCount = maxPoints - 1;
        }

        // Add new point
        _points[_pointCount] = pos;
        _pointCount++;

        // Update LineRenderer
        _lineRenderer.positionCount = _pointCount;
        for (int i = 0; i < _pointCount; i++)
        {
            _lineRenderer.SetPosition(i, _points[i]);
        }
    }

    Vector3 GetGroundPosition(Vector3 pos)
    {
        // Raycast down to find ground
        if (Physics.Raycast(pos + Vector3.up * 2f, Vector3.down, out RaycastHit hit, 10f))
        {
            return hit.point + Vector3.up * heightAboveGround;
        }
        
        // Fallback: just use position at a fixed height
        return new Vector3(pos.x, heightAboveGround, pos.z);
    }

    /// <summary>
    /// Clear the trajectory
    /// </summary>
    public void ClearTrajectory()
    {
        _pointCount = 0;
        _lineRenderer.positionCount = 0;
        
        if (target != null)
        {
            _lastRecordedPos = GetGroundPosition(target.position);
        }
    }
}