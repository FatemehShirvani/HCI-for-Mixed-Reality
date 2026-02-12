using UnityEngine;
using TMPro;

public class SkiDebugHUDV10 : MonoBehaviour
{
    public TextMeshProUGUI debugText;
    public SkiLocomotionV10 ski;

    void Update()
    {
        if (!debugText || !ski) return;

        // Left tip status
        string leftTip = ski.debugLeftTipGrounded 
            ? $"<color=green>GND ({ski.debugLeftTipHeight:F2}m)</color>"
            : $"<color=red>AIR ({ski.debugLeftTipHeight:F2}m)</color>";
            
        // Right tip status
        string rightTip = ski.debugRightTipGrounded 
            ? $"<color=green>GND ({ski.debugRightTipHeight:F2}m)</color>"
            : $"<color=red>AIR ({ski.debugRightTipHeight:F2}m)</color>";

        // Hand states
        string leftState = GetStateDisplay(ski.debugLeftState, ski.debugLeftTrigger);
        string rightState = GetStateDisplay(ski.debugRightState, ski.debugRightTrigger);

        // Speed bar
        float pct = ski.debugSpeed / Mathf.Max(ski.maxSpeed, 1f);
        string bar = SpeedBar(pct);

        // Ground state
        string groundState;
        if (ski.debugInAir)
            groundState = $"<color=yellow>IN AIR (v={ski.debugVerticalVel:F1})</color>";
        else if (ski.debugBraking)
            groundState = "<color=orange>BRAKING</color>";
        else if (ski.debugGoingUphill)
            groundState = $"<color=red>UPHILL {ski.debugSlopeAngle:F0}deg</color>";
        else if (ski.debugSlopeAngle > 5f)
            groundState = $"<color=green>DOWNHILL {ski.debugSlopeAngle:F0}deg</color>";
        else
            groundState = "<color=white>FLAT</color>";

        // Turning state
        string turningState = ski.debugTurning
            ? $"<color=yellow>TURNING</color> ({ski.debugTurnAngle:F1} deg)"
            : $"<color=grey>STRAIGHT</color> ({ski.debugTurnAngle:F1} deg)";

        debugText.text = $@"<b>SKI</b> <size=80%>V10</size>

<b>LEFT</b>  {leftState}   <size=80%>Tip {leftTip}</size>
<b>RIGHT</b> {rightState}  <size=80%>Tip {rightTip}</size>

--------------------
<b>SPEED</b>  {ski.debugSpeed:F1} / {ski.maxSpeed:F1}
[{bar}]

<b>TERRAIN</b> {groundState}
<b>TURN</b>    {turningState}";
    }

    string GetStateDisplay(string state, bool trigger)
    {
        string trig = trigger ? "<color=green>T</color>" : "<color=grey>T</color>";
        string stateColor = state switch
        {
            "IDLE" => "grey",
            "WINDING_UP" => "yellow",
            "GROUND_CONTACT" => "cyan",
            _ => "white"
        };
        return $"[{trig}] <color={stateColor}>{state}</color>";
    }

    string SpeedBar(float pct)
    {
        int filled = Mathf.Clamp(Mathf.RoundToInt(pct * 15), 0, 15);
        return new string('#', filled) + new string('-', 15 - filled);
    }
}
