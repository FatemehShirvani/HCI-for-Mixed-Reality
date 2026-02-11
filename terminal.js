// ============================================================
// FILE SYSTEM — all original content preserved exactly
// ============================================================

const fileSystem = {
  '/': {
    type: 'dir',
    children: ['lectures', 'labs', 'about.txt', 'README.md']
  },
  '/lectures': {
    type: 'dir',
    children: ['hw1.md', 'hw2.md', 'hw3.md', 'hw4.md']
  },
  '/lectures/hw1.md': {
    type: 'file',
    content: `# Lecture Homework 1: Locomotion Techniques for VR
By Fatemeh Shirvani & Amélien Le Meur

##  Download Full Presentation
<a href="Lecture-HW1-LocomotionPitch.pdf" download>Download PDF (Lecture-HW1-LocomotionPitch.pdf)</a>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Idea 1: Frame Split

<img src="homework/hw1/hw1-slide2.jpg" alt="Frame Split Concept" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Concept
The user uses their handheld controllers to split the frame, bringing 
them close to the location they are looking towards.

### Goal
Mimic traditional animation frames and limit motion-sickness

### How It Works
- User holds both controllers
- Controllers act as "frame edges" that can be pulled apart
- Pulling the controllers splits the current view into multiple frames
- Each frame shows a step closer to the destination
- Inspired by stop-motion animation and flipbook aesthetics

<img src="homework/hw1/hw1-slide3.jpg" alt="Frame Split Evaluation" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Advantages
✓ No motion sickness
✓ Unique, creative approach
✓ Visual feedback through frame progression

### Potential Drawbacks
✗ Might not feel intuitive at first
✗ Learning curve for new users

### Evaluation Plan
What we want to test:
- Ease of use: Can users get precisely where they want?
- Learning time: How long to understand the mechanic?
- Motion sickness levels vs traditional locomotion
- User preference and enjoyment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Idea 2: Motion Map

<img src="homework/hw1/hw1-slide4.jpg" alt="Motion Map Concept" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Concept
The user can pull out a map of their surroundings with their right hand 
and drag themselves to the desired position with the left. They are then 
teleported to that position.

### Goal
Mimic tabletop games with tokens

### How It Works
- Right hand: Pull out miniature map of environment
- Left hand: Drag player token to desired location
- Release: Teleport to that position
- Like moving a chess piece on a board

<img src="homework/hw1/hw1-slide5.jpg" alt="Motion Map Evaluation" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Advantages
✓ No motion sickness
✓ Fast navigation
✓ Precise positioning
✓ Strategic planning possible (can see layout)

### Potential Drawbacks
✗ May be hard to picture exact landing spot
✗ Breaks immersion (reminds you it's a game)
✗ Requires UI element (the map)

### Evaluation Plan
What we want to test:
- Ease of use: Can users select precisely where they want to go?
- Spatial awareness: Do users understand where they'll land?
- Speed vs traditional walking
- User preference for strategic vs immersive locomotion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Idea 3: Move the World

<img src="homework/hw1/hw1-slide6.jpg" alt="Move the World Concept" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Concept
Instead of walking, the user "grabs" the world and pulls themselves forward.

### Goal
Simple, intuitive control

### How It Works
- Reach out and "grab" the air (grip button)
- Pull your hand backward
- The world moves past you (or you move through the world)
- Like climbing a rope or pulling yourself along a rail
- Release and repeat for continuous movement

<img src="homework/hw1/hw1-slide7.jpg" alt="Move the World Evaluation" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Advantages
✓ Doesn't require physical space
✓ No additional UI needed
✓ Intuitive metaphor (like climbing)
✓ Fine control over speed and direction

### Potential Drawbacks
✗ Potential motion sickness?
✗ Arm fatigue for long distances
✗ May feel less natural than walking

### Evaluation Plan
What we want to test:
- Motion sickness levels compared to joystick walking
- User preference vs traditional methods
- Ease of use and intuitiveness
- Physical fatigue over extended use

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Overall Evaluation Strategy

### Metrics We'll Collect (for all 3 techniques):
1. Completion time for parkour course
2. Accuracy (staying on path, hitting banners)
3. Motion sickness ratings (1-10 scale)
4. Ease of use ratings (1-10 scale)
5. User preference rankings
6. Qualitative feedback
`
  },
  '/lectures/hw2.md': {
    type: 'file',
    content: `# Lecture Homework 2: World-in-Hand Locomotion Pitch (15 Points)
By Fatemeh Shirvani & Amélien Le Meur

##  Download Full Presentation
<a href="Lecture-HW2-WorldInHand.pdf" download>Download PDF (Lecture-HW2-WorldInHand.pdf)</a>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<img src="homework/hw2/hw2-slide1.jpg" alt="World-in-Hand Title" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

## Selected Technique: World-in-Hand

After brainstorming three locomotion ideas in HW1, we selected **"Move the World"** 
(now called "World-in-Hand") as our technique to implement for the parkour project.

### Why We Chose This Technique

- **Lower motion sickness** - User stays stationary in real space  
- **Intuitive metaphor** - Like holding and manipulating a map  
- **No additional UI** - Direct hand manipulation  
- **Solves elevated coins** - World manipulation allows vertical adjustment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Core Concept

<img src="homework/hw2/hw2-slide5.jpg" alt="Core Concept Explanation" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Main Idea
Instead of moving the user through the world, we move the world toward the user.

**Like:**
- Zooming into a map
- Pulling the world closer to you
- Manipulating a miniature diorama in your hands

**Result:** The user stays physically still → lower motion sickness

### Inspiration: How We Perceive the World

<img src="homework/hw2/hw2-slide3.jpg" alt="360-degree perception" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

<img src="homework/hw2/hw2-slide4.jpg" alt="Pac-Man 360 example" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

We're inspired by 360-degree games where the environment wraps around 
the player, creating immersion without requiring physical movement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

##  Interaction Design

<img src="homework/hw2/hw2-slide6.jpg" alt="Forward Movement and Jump" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Forward Movement

**Input:**
1. User **pinches both controllers** (grip buttons on both hands)
2. **Pulls hands slightly apart** → zoom in gesture
3. Scene scales up uniformly
4. **Result:** Player appears to move forward through the parkour course

**Why it works:**
- Natural gesture (like stretching/zooming a map)
- Continuous control (distance between hands = movement speed)
- User maintains orientation and balance

### Jump Mechanic

**Input:**
- **Brief upward hand motion** while zooming
- Hands move up together while maintaining pinch

**Effect:**
- World shifts down slightly
- Player reaches airborne coins
- Solves the "elevated coins" requirement from parkour scene

**Why it works:**
- Intuitive (lift world down = you go up)
- Doesn't break the core zooming metaphor
- Enables 3D navigation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<img src="homework/hw2/hw2-slide7.jpg" alt="Speed Control and Steering" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Speed Control

**Mechanic:**
- Distance between hands = movement speed
- Wider apart = faster movement
- Closer together = slower movement

**Implementation:**
- **Smooth exponential scaling** (important!)
- Prevents jerky movements
- Gives fine control at slow speeds
- Allows rapid traversal when needed

### Steering (Turning)

**Mechanic:**
- **Asymmetric hand movement** while zooming
- Right hand moves more than left → turn right
- Left hand moves more than right → turn left

**Why it works:**
- Natural gesture (like turning a steering wheel)
- Doesn't require additional buttons
- Integrates smoothly with forward movement
- Handles curved sections of parkour course

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

##  Application to Parkour Course

### How It Addresses Requirements

**Route Navigation:**
- Pinch + pull apart → move along winding road
- Asymmetric hands → navigate curves smoothly

**Banner Passage:**
- Continuous zooming allows precise control
- Easy to align with banner gates

**Coin Collection:**
- Ground coins: Normal forward movement
- **Elevated coins: Jump gesture** (upward hand motion)

**User Comfort:**
- User stays stationary → minimal motion sickness
- No joystick drift or teleportation disorientation
- Natural hand gestures reduce cognitive load

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Expected Advantages

- **Reduced motion sickness** - User's vestibular system not confused  
- **Intuitive controls** - Familiar zoom/map manipulation gesture  
- **No locomotion UI** - Pure hand interaction  
- **Fine speed control** - Exponential scaling provides precision  
- **3D navigation** - Jump mechanic handles vertical space  
- **Accessible** - No complex button combinations

## Potential Challenges

**Learning curve** - Users need to understand the metaphor  
**Arm fatigue?** - Sustained pinch gesture over long sessions  
**Scale calibration** - Finding right sensitivity for speed/steering  
**Motion sickness?** - World scaling might still affect some users

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

##  Evaluation Plan

### Metrics to Test (from HW1)

**Performance:**
- Completion time through parkour course
- Accuracy (staying on path, hitting banners)
- Coins collected (ground + elevated)

**User Experience (1-10 scales):**
- Motion sickness: "How much motion sickness do you perceive?"
- Ease of use: "How easy was it to perform the task?"
- Presence: "How present did you feel in the virtual world?"
- Enjoyment: "How much fun did you have?"

**Comparison Baseline:**
- Traditional joystick locomotion
- Teleportation (if available)

### Hypotheses

**H1:** World-in-Hand will have **lower motion sickness** than joystick  
**H2:** Users will achieve **similar accuracy** after brief learning period  
**H3:** **Elevated coin collection** will be more successful than joystick  
**H4:** Initial ease-of-use may be **lower** (learning curve) but improve quickly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Implementation Plan

### Technical Requirements

1. **Hand tracking or controller input**
   - Detect pinch gesture (grip buttons)
   - Track hand positions in 3D space
   - Calculate distance between hands

2. **World transformation**
   - Scale entire scene based on hand distance
   - Translate scene for steering (asymmetric input)
   - Vertical offset for jump mechanic

3. **Smoothing and calibration**
   - Exponential scaling function
   - Dead zones to prevent jitter
   - Maximum/minimum speed limits

### Next Steps (for HW3 & HW5)

- Implement basic forward movement
- Add steering mechanics
- Integrate jump for elevated coins
- Calibrate speed scaling curve
- User testing with 3 participants
- Iterate based on feedback

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Presentation Reflection

### What We Learned

This pitch helped us clarify:
- **The core metaphor** - "Holding the world in your hands"
- **Specific gestures** - Pinch, zoom, asymmetric steering, jump
- **Technical challenges** - Exponential scaling, calibration needs
- **Evaluation strategy** - Clear hypotheses to test
`
  },
  '/lectures/hw3.md': {
    type: 'file',
    content: `# Lecture Homework 3: Evaluate Your Locomotion Technique (15 Points)

    We tested our locomotion technique on three participants. Here are a quick summary of the results:
    <img src="homework/hw4/hw4-slide10.png" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">


`
  },
  '/lectures/hw4.md': {
    type: 'file',
    content: `# Lecture Homework 4: Final Presentation - Ski Pole Locomotion (15 Points)
By Fatemeh Shirvani & Amélien Le Meur

##  Download Presentation & Demo
<a href="homework/hw4/Lecture-HW4-FinalPresentation.pdf" download>Download PDF Presentation</a>

<video width="320" height="240" controls>
  <source src="demo.mp4" type="video/mp4">
</video>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

##  Presentation Overview

**Structure:**
1. Previous Concept Review (Frame Split)
2. New Concept: Ski Pole Locomotion
3. Implementation Challenges & Solutions
4. User Testing Results
5. Conclusions & Reflections

**Presentation Date:** February 3, 2025  
**Duration:** 20 minutes total (10min presentation + 5min demo + 5min discussion)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

##  Why We Changed From Frame Split

<img src="homework/hw4/hw4-slide3.png" alt="Previous Concept: Frame Split Issues" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Frame Split Concept Recap
From HW1, we explored splitting the frame into sequential views like animation frames to reduce motion sickness.

### Why We Abandoned It

**Technical Issues:**
- **Recursive rendering instability** - Rendering frames within frames caused performance problems
- **High complexity, low interaction payoff** - Complex to implement, limited control
- **Already implemented** - Someone had done a similar approach

**Design Issues:**
- **Mismatch with embodied VR strengths** - Doesn't leverage physical interaction
- **Feels like a video effect, not movement** - Breaks sense of presence
- **Limited expressiveness for navigation** - Hard to control direction precisely
- **Still caused motion sickness** - Didn't solve the core problem

**Decision:** Pivot to a more physical, embodied locomotion technique → **Ski Poles**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

##  New Concept: Ski Pole Locomotion

<img src="homework/hw4/hw4-slide4.png" alt="New Concept: Skiing" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Core Metaphor
**User uses two poles to pull themselves forward** - like cross-country skiing

### Inspiration
- Real-world skiing mechanics
- VR Ski Simulator by Aploft
- Physical, embodied interaction

### Key Advantages
- **Natural physical metaphor** - Everyone understands skiing motion  
- **Active, engaging** - Physical movement keeps users immersed  
- **Precise control** - Speed/direction controlled by push force  
- **Reduced motion sickness** - Self-generated motion (proprioception)  
- **Works for parkour** - Can handle turns, slopes, jumps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Implementation: Technical Challenges

### Overview
Implementing ski pole locomotion required solving 5 major challenges:
1. **Push Detection** - How to detect valid ski pole pushes?
2. **Ground Contact** - When is the pole tip touching the ground?
3. **Steering** - How to turn without hip tracking?
4. **Gravity & Slopes** - How to handle hills realistically?
5. **Airborne Physics** - Jumping and landing mechanics

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

##  Challenge 1: Push Detection

<img src="homework/hw4/hw4-slide5.png" alt="Push Detection State Machine" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Problem
How to detect a valid ski pole push gesture?
- ✗ Simple trigger press too sensitive (any press = push)
- ✗ Velocity-only detection unreliable (shaky hands)
- ✗ Need to distinguish intentional pushes from random movement

### Solution: State Machine

**Three States:**

**1. IDLE** (Waiting)
- Pole is idle, waiting for user action

**2. WINDING_UP** (Tracking)
- **Trigger conditions:**
  - Acceleration > threshold (detecting forward swing)
  - Hand in FRONT of face (not behind)
  - Trigger button held
- **Accumulates impulse** from backward hand velocity
- Tracks push "wind-up" motion

**3. GROUND_CONTACT** (Push!)
- **Trigger:** Pole tip touches ground (raycast detection)
- **Apply force** to character

### Power Calculation

\`\`\`javascript
gain = pushPower (minimum speed) + impulse
impulse accumulates from backward hand velocity

float gain = Mathf.Min(pushPower + pushImpulse, maxPushGain);
_velocity += headForward * gain;
\`\`\`

**Result:** Strong, deliberate pushes = more speed; weak pushes = less speed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Challenge 2: Tip Ground Detection

<img src="homework/hw4/hw4-slide6.png" alt="Ground Detection Problem" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Problem
**Pole tips never detected as "grounded"**
- VR tracking heights differ from expected Unity coordinates
- Fixed distance checks failed
- Users have different heights and arm lengths

### Solution: Raycast-Based Detection

**A pole is considered grounded when:**
- Downward raycast from its tip detects ground
- Within a small height tolerance (adaptive)

**Benefits:**
- ✓ Works regardless of user height
- ✓ Adapts to terrain (hills, ramps)
- ✓ Reliable and consistent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Challenge 4 & 5: Gravity and Slope Physics

<img src="homework/hw4/hw4-slide8.png" alt="Gravity and Slope Physics" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Challenge 4: Gravity & Ground Following

**Problem:**
- Unity gravity caused constant sinking
- But we needed gravity for airborne condition (jumps)

**Solution:**
- **On ground:** Snap Y position to ground height
- **In air:** Apply custom gravity manually
- Best of both worlds!

### Challenge 5: Hill & Slope Physics

**Implementation:**
- Raycast returns ground normal vector
- slopeAngle = Angle(normal, up)
- Project velocity onto slope plane

**Terrain-Based Friction:**

| Terrain | Friction | Effect |
|---------|----------|--------|
| Flat | Normal (0.3) | Base slowdown |
| Uphill | 2.5× higher | Harder to climb |
| Downhill | 0.3× + boost | Accelerate! |

**Result:** Realistic skiing feel - fast downhill, slow uphill

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Advanced Features: Airborne, Jumping, Braking

<img src="homework/hw4/hw4-slide9.png" alt="Airborne Motion and Braking" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Airborne Motion
- Ground detected via downward raycast
- Loss of ground → enter airborne state
- Horizontal velocity preserved in air
- Vertical motion controlled with custom gravity

### Jumping Over Ramps
- Triggered at slope discontinuities (ramps)
- Requires minimum speed threshold
- Launch direction aligned with slope forward
- Smooth landing by snapping back to ground

### Braking System
- Braking mapped to controller grip input
- Grip increases effective friction
- Speed reduced smoothly over time
- Works consistently on flat and sloped terrain

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## User Testing Results

<img src="homework/hw4/hw4-slide10.png" alt="User Test Results" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Testing Protocol
- Make users go around track **3 times**
- Gives time to get acquainted with locomotion
- **3 participants** total

### Key Findings

** Completion Time: 1min 30s**
- Average time around the track
- Consistent across participants

** Motion Sickness: Low**
- Some motion sickness toward the end
- But overall **very low levels**
- Much better than expected!

** Ease of Use / Fun: High**
- Users thought it was **pretty easy to use**
- Intuitive after brief learning period
- Engaging and fun!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Conclusion

We successfully implemented **ski pole locomotion** for VR parkour:

**Solved technical challenges** - Push detection, ground following, steering, physics  
**Positive user feedback** - Easy to use, fun, low motion sickness  
**Works in parkour context** - Handles curves, slopes, elevated coins  
**Better than Frame Split** - More engaging, more controllable

**Thank you for following our journey!**`
  },
  '/labs': {
    type: 'dir',
    children: ['hw1.md', 'hw2.md', 'hw3.md', 'hw4.md', 'hw5.md']
  },
  '/labs/hw1.md': {
    type: 'file',
    content: `# Lab Homework 1: Setup Blog (5 Points)
By Fatemeh Shirvani & Amélien Le Meur

## Assignment Completed

**Objective:** Create a course blog to document our HCI for Mixed Reality journey


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Live Blog

**URL:** https://fatemehshirvani.github.io/HCI-for-Mixed-Reality/

**Repository:** https://github.com/FatemehShirvani/HCI-for-Mixed-Reality

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Concept: Terminal-Style Blog

Instead of a traditional blog, we created an **interactive terminal interface** 
where visitors can explore our coursework using Unix-style commands.

### Why Terminal Interface?

- **Unique & Memorable** - Stands out from typical course blogs  
- **Interactive** - Visitors actively explore content  
- **Fits Theme** - Technical aesthetic matches HCI/VR course  
- **Portfolio Piece** - Demonstrates web development skills  
- **Organized** - File system structure keeps work organized

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Technical Implementation

### Technologies Used

**Frontend:**
- HTML5 (structure)
- CSS3 (styling, animations)
- Vanilla JavaScript (terminal logic)

**Hosting:**
- GitHub Pages (free, automatic deployment)
- GitHub repository for version control

**Features:**
- Command-line interface simulation
- File system navigation (ls, cd, cat, tree, pwd)
- Command history (arrow keys)
- Tab completion
- Markdown rendering
- Responsive design
- Custom cursor animation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## File Structure

Our blog follows a Unix-like directory structure:

\`\`\`
/
├── lectures/
│   ├── hw1.md    (Locomotion brainstorming)
│   ├── hw2.md    (World-in-Hand pitch)
│   ├── hw3.md    (User evaluation)
│   └── hw4.md    (Final presentation)
│
├── labs/
│   ├── hw1.md    (This file - Blog setup)
│   ├── hw2.md    (Unity environment setup)
│   ├── hw3.md    (Roll-A-Ball tutorial)
│   ├── hw4.md    (Roll-A-Ball in VR)
│   └── hw5.md    (Locomotion implementation)
│
├── about.txt     (Course information)
└── README.md     (Documentation)
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Design Choices

### Visual Style

**Color Scheme:**
- Pure black background (#000000)
- Light gray text (#e5e7eb)
- Green accents (#22c55e) - for commands and prompts
- Cyan links (#7dd3fc)
- Terminal aesthetic (monospace font)

**Typography:**
- JetBrains Mono / Fira Code - monospace fonts
- 16px base size for readability
- 1.6 line height for comfortable reading

### User Experience

**Commands Available:**
- \`ls\` - List files and directories
- \`cd [path]\` - Change directory
- \`cat [file]\` - Display file contents
- \`tree\` - Show directory structure
- \`pwd\` - Print working directory
- \`clear\` - Clear terminal
- \`help\` - Show available commands
- \`about\` - Show course information

**Interactive Features:**
- ↑/↓ arrow keys - Navigate command history
- Tab key - Auto-complete commands
- Blinking cursor - Classic terminal feel
- Smooth scroll - Modern UX

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Setup Process

### Step 1: Design & Planning
- Researched terminal blog examples
- Decided on Unix-style command structure
- Sketched file organization for coursework

### Step 2: Development
- Created HTML structure with ASCII art header
- Styled with pure black terminal aesthetic
- Implemented JavaScript for:
  - Command parsing
  - File system simulation
  - Command history
  - Tab completion
  - Markdown rendering

### Step 3: Content Organization
- Created directory structure matching course assignments
- Populated lecture homework templates
- Populated lab homework templates
- Added course information

### Step 4: Deployment
- Created GitHub repository: HCI-for-Mixed-Reality
- Pushed code to main branch
- Enabled GitHub Pages in repository settings
- Site automatically deployed to https://fatemehshirvani.github.io/HCI-for-Mixed-Reality/

### Step 5: Testing
- Tested all commands (ls, cd, cat, tree, pwd, clear, help)
- Verified command history works (arrow keys)
- Checked tab completion functionality
- Tested on different browsers (Chrome, Firefox, Safari)
- Verified mobile responsiveness

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Features Implemented

### Core Functionality
Command-line interface  
File system navigation  
Markdown content rendering  
Command history  
Tab completion  
Help system  
Responsive design

### Content Management
Lecture homework sections  
Lab homework sections  
Course information  
Documentation (README)

### Advanced Features
Embedded images support  
PDF downloads  
Video placeholders  
Custom styling  
No auto-scroll (user-friendly reading)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## How to Use the Blog

### For Visitors:

**1. Start exploring:**
\`\`\`bash
$ help
# Shows all available commands
\`\`\`

**2. List available work:**
\`\`\`bash
$ ls
# Shows: lectures  labs  about.txt  README.md
\`\`\`

**3. Navigate to lectures:**
\`\`\`bash
$ cd lectures
$ ls
# Shows: hw1.md  hw2.md  hw3.md  hw4.md
\`\`\`

**4. View homework:**
\`\`\`bash
$ cat hw1.md
# Displays Lecture Homework 1 with embedded images
\`\`\`

**5. Check course info:**
\`\`\`bash
$ cd ..
$ cat about.txt
# Shows course information, schedule, grading
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Benefits of This Approach

### For the Course

- **Centralized documentation** - All work in one place  
- **Easy to navigate** - Familiar Unix commands  
- **Version controlled** - Full history on GitHub  
- **Shareable** - Simple URL to share  
- **Professional** - Portfolio-worthy presentation

### For Learning

- **Demonstrates web dev skills** - HTML/CSS/JS proficiency  
- **Shows creativity** - Unique approach to assignment  
- **Organized thinking** - Clear file structure  
- **Accessible** - Works on any device with browser

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Lessons Learned

### Technical Skills Gained

**JavaScript:**
- Command parsing and interpretation
- State management (current directory, history)
- DOM manipulation
- Event handling (keyboard input)

**CSS:**
- Terminal aesthetics
- Custom cursor animations
- Responsive design
- Dark theme implementation

**Git & GitHub:**
- Repository management
- GitHub Pages deployment
- Version control workflow

### Design Insights

**What worked well:**
- Terminal metaphor is intuitive for tech audience
- Command history saves time for repeated navigation
- Pure black theme reduces eye strain
- File system organization mirrors coursework structure

**What we'd improve:**
- Add search functionality
- Implement file tree visualization
- Add keyboard shortcuts reference
- Mobile touch optimizations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Conclusion

We successfully created a unique, interactive terminal-style blog for documenting 
our HCI for Mixed Reality coursework. The blog is:

**Live** - https://fatemehshirvani.github.io/HCI-for-Mixed-Reality/  
**Functional** - All commands working  
**Organized** - Clear file structure  
**Documented** - README and help system  
**Portfolio-ready** - Professional presentation

**This terminal blog serves as both a course requirement and a demonstration 
of our web development capabilities!**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Lab HW1 Status:** COMPLETE  
**Next:** Lab HW2 - Unity Environment Setup`
  },
  '/labs/hw2.md': {
    type: 'file',
    content: `# Lab Homework 2: Setup Unity (10 Points)

## Assignment
Set up Unity3D environment following the tutorial.

## Tasks
1. Complete: https://learn.unity.com/tutorial/create-your-first-unity-project
2. Bonus (if fast): https://learn.unity.com/tutorial/beginner-walkthroughs
3. Bonus: Add IP-Paris "flavor" to your project


### Unity Version
We installed Unity 6.2 which was the most recent version at the time.

### Installation Process
<img src="labs/lab2/lab2-1.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Here is the (empty) installs menu. We click on install, then choose the latest version: unity 6.2. the install starts (top right corner)
<img src="labs/lab2/lab2-2.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
When the install is done, the editor appears and we can now suse it. Done ! 

### Challenges & Solutions
We had a trouble syncing up at first because we didnt download exactly the same version as one another, so we had to redownload everything. 
The installation also made one of our laptop crash;

## Resources
- Unity Learn: https://learn.unity.com/
- Unity Documentation

`
  },
  '/labs/hw3.md': {
    type: 'file',
    content: `# Lab Homework 3: Unity Roll-A-Ball (15 Points)
<img src="labs/lab3/lab3-1.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We start with an empty scene.
<img src="labs/lab3/lab3-2.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
First, we create a floor on which everything will be placed

<img src="labs/lab3/lab3-4.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We add a ball on the floor.

<img src="labs/lab3/lab3-5.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We change the lighting so that it's warmer, we select a nice orange.

<img src="labs/lab3/lab3-6.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We create a material & apply it to the ball to make it blue & shiny.

<img src="labs/lab3/lab3-7.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
The ball now rolls with the user's inputs with a playercontroller script.

<img src="labs/lab3/lab3-9.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We make it so the camera follows the ball with a cameracontroller script.

<img src="labs/lab3/lab3-10.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Added walls all around the arena to prevent the ball from falling.

<img src="labs/lab3/lab3-11.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We create collectible coins around the arena.

<img src="labs/lab3/lab3-12.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Added a UI element thatt counts the amount of coins the player has collected.

<img src="labs/lab3/lab3-13.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
When all the collectibles have been collected, the game ends and a "you win screen" appears.

<img src="labs/lab3/lab3-14.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Skipping forward a little bit, we now have obstacles, the purples ones being moveable. We also added an AI enemy that follows the play and makes them lose when they touch each other.

### Challenges & Solutions
This tutorial was pretty straightforward, the only issue was with the player controller which wouldn't work only because one of the letters was not capitalized.
  `},
  '/labs/hw4.md': {
    type: 'file',
    content: `# Lab Homework 4: Unity Roll-A-Ball in VR (15 Points)
<img src="labs/lab4/lab4-1.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We start by switching the platform to android, and we install the Meta All-in-one SDK

<img src="labs/lab4/lab4-2.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We then install the XR plugin management

<img src="labs/lab4/lab4-3.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We import the package created from the roll a ball assignment.

<img src="labs/lab4/lab4-5.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
<img src="labs/lab4/lab4-4.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We import the assets from tdhe X Interaction Toolkit, then added the XRI default input actions as actions assets and changed the normal camera.


<img src="labs/lab4/lab4-6.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We Change palyer input and use XRI Default Input action instead of input action managment that was previously assigned.
We also change Active Input Handling to Input System Package (New) 

<img src="labs/lab4/lab4-7.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We have this error. The the game runned successfully and we could control the ball with left joystick as intended, but the camera was up and we did not have control to always see the ball 

<img src="labs/lab4/lab4-8.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We make the camera xr origin a child of player so that they follow eacher other.
We freeze the rotation in x and z directions to prevent the rotation of the camera with the ball.

<img src="labs/lab4/lab4-9.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We update the FixedUpdate() function so the ball turns where the player is looking

<img src="labs/lab4/lab4-10.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
But making the xr origin a child of Player was not a good idea because the world was following us. For example, when we were looking upward, it was like the world was rotating so we make sure xr origin is not a child of player and player is not a child of xr origin and we make the xr origin follow the ball with a new script FollowBallPosition

<img src="labs/lab4/lab4-11.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
we assign a player to the script.

<img src="labs/lab4/lab4-12.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We change the logic to move when we hold the trigger and joystick and follow the head direction

<img src="labs/lab4/lab4-13.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We move the ball a bit in front of the camera to fill,  like a chasing camera and that always sees the ball.
Now the game is functioning well: we roll around the scene and follow the ball.

<img src="labs/lab4/lab4-14.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Added left and right hand controllers as a child of XR origin.
Added XR Grab Interactable to pickup prefab and turned off trigger check box.
now the problem is that we never enter in trigger because we unchecked that box but it is fine since we want to grab from now on not trigger and we should change them 


# Tracking controller positions

<img src="labs/lab4/lab4-15.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Added tracked pose driver component to track the position and rotation of the controller in vr environment and assigned the refrence to left and right controller

<img src="labs/lab4/lab4-17.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We turned them to match the real controllers 

# Grabbing PickUp Objects

<img src="labs/lab4/lab4-18.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Right now the ball is colliding with boxes and pushes them away since they are rigid bodies. 

<img src="labs/lab4/lab4-19.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Added a layer grabbable

<img src="labs/lab4/lab4-20.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Unchecked the collision between  grabbable layer and Player layer which is the layer of Player.

# Raycasting

<img src="labs/lab4/lab4-21.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
We tried to add xr ray interactor to each hand but got this error

<img src="labs/lab4/lab4-22.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
So we created a Ray child for each hand and added the components  XR Ray Interactor, XR Interactor Line Visual to them

<img src="labs/lab4/lab4-23.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
<img src="labs/lab4/lab4-24.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
Now we have rays coming from each controller.

<img src="labs/lab4/lab4-25.png" alt="" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">
For selecting we then added a XR Simple Interactable to enemy game obj.
`
  },
  '/labs/hw5.md': {
    type: 'file',
    content: `# Lab Homework 5: Ski Pole Locomotion Implementation
By Fatemeh Shirvani & Amélien Le Meur

<a href="https://github.com/FatemehShirvani/HCI-for-Mixed-Reality" target="_blank">GitHub Repository</a>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Overview

We implemented a **ski pole locomotion technique** for the VR parkour scene using Unity 6 and Meta Quest 3. The user holds virtual ski poles and pushes against the ground to propel themselves forward, like cross-country skiing. The final implementation (V10) handles push detection, ground contact, slope physics, airborne mechanics, braking, and ramp-based jumping.

This page documents the **full iterative development process** — from our first broken prototype to the final working version, including every challenge we faced and how we solved it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Demo Video

<!-- PLACEHOLDER_VIDEO: Record a demo video of the final ski locomotion in action. Upload as labs/lab5/demo.mp4 or link to YouTube -->
<p style="color: #facc15; border: 1px dashed #facc15; padding: 12px; border-radius: 8px;">📹 [Upload demo video here — labs/lab5/demo.mp4 or YouTube link]</p>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Architecture

Our final implementation consists of one main script attached to the OVRCameraRig, plus a debug HUD and the existing PoleFollowHand scripts:

| Script | Purpose | Attached To |
|--------|---------|-------------|
| SkiLocomotionV10.cs | Main locomotion controller | OVRCameraRig |
| SkiDebugHUDV10.cs | In-VR debug display | World Space Canvas |
| PoleFollowHand.cs | Makes poles follow controllers | LeftPole / RightPole |

### Unity Hierarchy

\`\`\`
OVRCameraRig               ← Rigidbody + CapsuleCollider + SkiLocomotionV10
├── SkiPoles
│   ├── LeftPole            ← PoleFollowHand (hand = LeftHandAnchor)
│   │   ├── Visual          ← Pole mesh
│   │   └── Tip             ← Empty transform (NO Rigidbody, NO Collider)
│   └── RightPole           ← PoleFollowHand (hand = RightHandAnchor)
│       ├── Visual
│       └── Tip             ← Empty transform (NO Rigidbody, NO Collider)
└── TrackingSpace
    ├── CenterEyeAnchor     ← HMD reference
    ├── LeftHandAnchor
    └── RightHandAnchor
\`\`\`

<!-- PLACEHOLDER_IMG_1: Screenshot of the Unity hierarchy panel showing this structure. Save as labs/lab5/hierarchy.png -->
<img src="labs/lab5/hierarchy.png" alt="Unity hierarchy showing OVRCameraRig setup with poles" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

The poles are children of the hand anchors, with Tip transforms at the bottom of each pole for ground detection. A critical lesson: tips must be **plain Transforms** — no Rigidbodies, no Colliders. We learned this the hard way.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## The Development Journey: V1 → V10

We went through **10 major iterations** to reach the final version. Each version solved specific problems but revealed new ones.

### V1: The First Attempt (Broken)

<!-- PLACEHOLDER_IMG_2: Screenshot of V1 Inspector showing original SkiLocomotion settings with the wrong values. Save as labs/lab5/v1-inspector.png -->
<img src="labs/lab5/v1-inspector.png" alt="V1 Inspector showing original broken settings" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

Our initial implementation had three critical problems:

**Problem 1: Ground detection never triggered.** The pole tips had their own Kinematic Rigidbodies and Capsule Colliders with a separate PoleTipContact script. The raycast distance was only 0.25m — far too short for VR where the tracking coordinate space doesn't match what you'd expect. The debug HUD always showed "Grounded: false".

**Problem 2: Insane spinning.** We used AddTorque for steering with a yawTorqueGain of 18. The calculation was steerAngle × backSpeed × yawTorqueGain, which could produce values like 45° × 1 m/s × 18 = **810 torque**. The player spun wildly out of control.

**Problem 3: Physics conflicts.** Having Kinematic Rigidbodies on the pole tips (which are children of hand-tracked transforms) caused unpredictable physics behavior.

<!-- PLACEHOLDER_IMG_3: Screenshot of V1 debug HUD in VR showing "Grounded: false" on both tips. Save as labs/lab5/v1-debug.png -->
<img src="labs/lab5/v1-debug.png" alt="Debug HUD showing Grounded: false" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### V2: Fixing the Fundamentals

The first major rewrite tackled all three root causes:

1. **Removed all physics components** from pole tips (Rigidbody, Capsule Collider, PoleTipContact). Tips became plain Transforms.
2. **Replaced AddTorque** with velocity-direction steering.
3. **Built ground detection** directly into the main script using SphereCast with 0.5m distance.

\`\`\`csharp
// V2: Built-in ground detection via SphereCast
if (Physics.SphereCast(tip.position + Vector3.up * 0.05f,
    groundCheckRadius, Vector3.down, out hit,
    groundCheckDistance, groundLayers))
{
    isGrounded = true;
}
\`\`\`

**Result:** Ground detection finally worked! But movement was still unreliable — we had to push our hands extremely low, and even when grounded, the player barely moved. Cranking pushGain to 50 and minBackSpeed to 0.05 made it move, but then even tiny hand tremors caused unintended movement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### V3–V4: Real Momentum & Independent Steering

V2 had a flat force model — every push gave the same speed boost. V3 introduced proper physics:

- Speed builds with each push (momentum accumulation)
- Faster/harder pushes = exponentially more speed
- Higher minPushSpeed threshold (0.3 m/s) to ignore hand tremors
- Natural deceleration when not pushing

V4 separated steering from head tracking and introduced trigger-based controls — you hold the trigger while pushing, which prevents accidental movement.

**New problem discovered:** Steering was still tied to head direction. We wanted to turn with the poles, not by looking around.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### V5: Sound & Push Feedback

<!-- PLACEHOLDER_IMG_4: Screenshot or photo showing VR testing with V5, ideally showing the debug HUD with momentum bar. Save as labs/lab5/v5-testing.png -->
<img src="labs/lab5/v5-testing.png" alt="Testing V5 with momentum system" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

Key additions:
- Direction became **independent from head** — only poles control turning
- Each push **adds to current speed** rather than replacing it
- Push sound plays on each stroke
- Longer/faster pushes = more speed

**New problem:** We realized the code couldn't detect body orientation. Without a hip tracker, we only have HMD + 2 controllers, which makes pure pole-based steering unreliable because users naturally look around while skiing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### V7: Anchor/Pivot Steering (Experimental)

We tried a completely different steering model inspired by real skiing: poles as **anchors** you pull yourself toward.

- Both poles planted on the RIGHT → you curve right
- Plant LEFT pole + push RIGHT → PIVOT around the left pole
- The planted pole becomes the center of rotation

\`\`\`
        YOU
         ↓
    ←────●────→  (moving forward)
        / \\
       /   \\
      ●     ●   ← poles planted here
     LEFT  RIGHT

If both poles to the RIGHT:
  → Average anchor point is RIGHT of you
  → You get pulled RIGHT as you push
\`\`\`

**Why we abandoned it:** Without a hip tracker, we couldn't reliably determine the player's body axis. Users look around while skiing, so the left/right classification of pole positions was incorrect whenever the head turned. The steering felt unpredictable and frustrating.

**Decision:** We went back to head-direction-based steering but made it much more refined with a gradual RotateTowards and speed loss on turns.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### V8–V9: The VR Height Problem

<!-- PLACEHOLDER_IMG_5: Screenshot of debug HUD showing tip height values far above ground. Save as labs/lab5/v8-height-debug.png -->
<img src="labs/lab5/v8-height-debug.png" alt="Debug showing tip height values vs ground" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

We discovered a fundamental VR coordinate problem. The OVRCameraRig sits at floor level (Y ≈ 0), the HMD is ~1.6m above, hand controllers ~1.0m above. Our code had a playerHeight offset that made things worse.

Pole tips were always too high to reach the ground, and users had to push their hands uncomfortably low.

**Fix:** We removed the playerHeight assumption and switched to **tolerance-based detection**. Instead of checking exact ground contact, we raycast down from each tip and check if ground is within poleTipGroundTolerance (0.3m). This works regardless of user height or arm length.

We also integrated the game systems in V9 — the original LocomotionTechnique.cs had an OnTriggerEnter that handled coins, banners, and tasks. We had to port this into our script. Without it, passing through the start banner didn't trigger the coin spawns.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### V10: The Final Version

V10 brought together everything from V1–V9 and added slope physics, ramp jumping, and terrain-aware friction. This is the version we used for the final demo and user testing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Core Systems — Final Code (V10)

### 1. Push Detection: 3-State Machine

The hardest problem was reliably detecting intentional push gestures vs. random hand movement. Simple trigger presses were too sensitive. Velocity-only detection was unreliable with shaky hands. We needed a multi-condition state machine.

\`\`\`csharp
private enum PushState { IDLE, WINDING_UP, GROUND_CONTACT }

void ProcessHand(Transform hand, ref Vector3 prevPos, ref Vector3 prevVel,
    ref PushState state, ref float pushImpulse, bool triggerHeld,
    bool tipGrounded, Vector3 headPos, Vector3 headForward, string handName)
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
            if (triggerHeld && acceleration > accelerationThreshold
                && forwardDist > minForwardDistance)
            {
                state = PushState.WINDING_UP;
            }
            break;

        case PushState.WINDING_UP:
            if (!triggerHeld)
            {
                state = PushState.IDLE;
            }
            else
            {
                float velAlong = Vector3.Dot(currentVel, headForward);
                float backwardVel = Mathf.Max(0f, -velAlong);
                pushImpulse += backwardVel * pushVelocityScale
                    * Time.fixedDeltaTime;

                if (tipGrounded)
                {
                    state = PushState.GROUND_CONTACT;
                    float gain = Mathf.Min(pushPower + pushImpulse,
                        maxPushGain);
                    _velocity += headForward * gain;
                    PlayPushSound();
                }
            }
            break;

        case PushState.GROUND_CONTACT:
            if (!triggerHeld || !tipGrounded)
            {
                state = PushState.IDLE;
            }
            break;
    }
}
\`\`\`

**How it works:**
- **IDLE:** Waiting. Requires trigger held + hand acceleration above threshold + hand in front of face.
- **WINDING_UP:** Tracking the stroke. Accumulates impulse from backward hand velocity — harder/faster push = more impulse.
- **GROUND_CONTACT:** Tip touches ground → apply force. Gain = pushPower (base) + accumulated impulse, capped at maxPushGain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 2. Ground Detection

Two separate ground detection systems — one for the player and one for each pole tip:

\`\`\`csharp
// Player ground: raycast from above player downward
Vector3 rayStart = playerRb.position + Vector3.up * 1f;
if (Physics.Raycast(rayStart, Vector3.down, out RaycastHit groundHit,
    groundRayLength, groundLayers, QueryTriggerInteraction.Ignore))
{
    groundY = groundHit.point.y;
    groundNormal = groundHit.normal;
    slopeAngle = Vector3.Angle(groundNormal, Vector3.up);
}

// Pole tip: tolerance-based (works regardless of user height)
if (Physics.Raycast(leftTip.position + Vector3.up * 0.5f, Vector3.down,
    out RaycastHit tipHit, 2f, groundLayers,
    QueryTriggerInteraction.Ignore))
{
    float tipHeight = leftTip.position.y - tipHit.point.y;
    leftTipGrounded = tipHeight <= poleTipGroundTolerance;
}
\`\`\`

**Critical detail:** QueryTriggerInteraction.Ignore is essential — without it, raycasts hit trigger colliders (coins, banners) and report wrong ground positions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 3. Steering

After the failed V7 anchor experiment, we settled on **head-direction steering** with turn speed loss:

\`\`\`csharp
// Gradually steer velocity toward where user is looking
if (!_isInAir && foundGround && _velocity.sqrMagnitude > 0.0001f)
{
    float maxRadians = turnResponsiveness * Mathf.Deg2Rad
        * Time.fixedDeltaTime;
    Vector3 targetVel = headForward * _velocity.magnitude;
    _velocity = Vector3.RotateTowards(_velocity, targetVel,
        maxRadians, 0f);
}

// Speed loss on turns (carving costs energy, like real skiing)
if (isTurning && _velocity.sqrMagnitude > 0.0001f)
{
    float speedScale = 1f + (_velocity.magnitude
        * turnSpeedLossSpeedFactor);
    float turnLoss = frameTurnAngle * turnSpeedLossPerDegree
        * speedScale;
    float reducedSpeed = Mathf.Max(0f,
        _velocity.magnitude - turnLoss);
    _velocity = _velocity.normalized * reducedSpeed;
}
\`\`\`

Turn detection uses a **windowed approach** — we measure heading change over turnAngleWindow (0.2s) and only count it as a turn if the change exceeds turnAngleThreshold (4°). This prevents jitter from counting as turning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 4. Gravity, Slopes & Ground Following

<!-- PLACEHOLDER_IMG_6: Screenshot showing the parkour course hills — one uphill and one downhill section. Save as labs/lab5/slopes.png -->
<img src="labs/lab5/slopes.png" alt="Parkour course hills showing slope sections" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

Our early versions only moved horizontally, causing the player to sink into slopes. V10 projects movement onto the terrain surface:

\`\`\`csharp
// Slope acceleration (gravity component along slope)
Vector3 slopeDown = Vector3.ProjectOnPlane(Vector3.down, groundNormal);
slopeDown.y = 0f;
if (slopeDown.sqrMagnitude > 0.001f) slopeDown.Normalize();
float slopeFactor = Mathf.Sin(slopeAngle * Mathf.Deg2Rad);
_velocity += slopeDown * (downhillAcceleration * slopeFactor
    * Time.fixedDeltaTime);

// Terrain-based friction
float effectiveFriction = friction;           // base: 0.3
if (goingUphill)
    effectiveFriction = friction * uphillFrictionMultiplier;  // 2.5×
else if (goingDownhill)
    effectiveFriction = friction * 0.3f;                      // reduced
\`\`\`

**On ground:** Player Y is snapped to groundY every frame. Horizontal velocity follows the slope.

**In air:** Unity's gravity is disabled. We apply custom gravity (15 m/s²) manually to vertical velocity. This gives full control over airborne feel.

\`\`\`csharp
if (_isInAir)
{
    _verticalVelocity -= customGravity * Time.fixedDeltaTime;
    newPos += _velocity * Time.fixedDeltaTime;
    newPos.y += _verticalVelocity * Time.fixedDeltaTime;

    // Land when falling and reaching ground
    if (foundGround && newPos.y <= groundY
        && _verticalVelocity <= 0)
    {
        _isInAir = false;
        _verticalVelocity = 0f;
        newPos.y = groundY;
    }
}
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 5. Ramp Jumping

<!-- PLACEHOLDER_IMG_7: Screenshot of the ramp in the parkour scene with floating coins above. Save as labs/lab5/ramp.png -->
<img src="labs/lab5/ramp.png" alt="Ramp with floating coins above" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

Some coins float in the air. We added a ramp and implemented automatic launch detection:

\`\`\`csharp
// Ramp launch: going uphill + fast enough + no ground ahead
if (goingUphill && _currentSpeed >= minLaunchSpeed
    && slopeAngle > 15f)
{
    Vector3 aheadPos = newPos + travelDir * 1.5f
        + Vector3.up * 1f;
    if (!Physics.Raycast(aheadPos, Vector3.down, 4f,
        groundLayers, QueryTriggerInteraction.Ignore))
    {
        _isInAir = true;
        _verticalVelocity = _lastSlopeForward.y * _currentSpeed
            + rampLaunchBoost;
    }
}
\`\`\`

When going uphill fast enough on a steep slope (> 15°), we check if there's ground ahead. If not (ramp edge), launch into air. Vertical velocity comes from the slope's upward component plus a boost.

\`\`\`
┌─────────────┐                    ┌─────────────┐
│  ON GROUND  │───── Launch ──────▶│   IN AIR    │
│             │    (uphill+speed   │             │
│ • Snap to Y │     +no ground     │ • Custom    │
│ • Friction  │      ahead)        │   gravity   │
│ • Slope acc │                    │ • 3D move   │
└─────────────┘◀───── Land ────────└─────────────┘
                  (ground found
                   + falling
                   + Y ≤ groundY)
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 6. Braking & Game Integration

Braking is mapped to grip buttons:

\`\`\`csharp
bool leftGrip = OVRInput.Get(
    OVRInput.Axis1D.PrimaryHandTrigger, leftController) > 0.5f;
bool rightGrip = OVRInput.Get(
    OVRInput.Axis1D.PrimaryHandTrigger, rightController) > 0.5f;
if (leftGrip || rightGrip)
    effectiveFriction = brakeFriction;  // 3.0 vs normal 0.3
\`\`\`

Game integration (coins, banners, tasks) is handled via OnTriggerEnter on the OVRCameraRig's Capsule Collider — the same approach as the original LocomotionTechnique.cs. We had to port this into our script since ParkourCounter reads stage from the locomotion script directly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Summary of Challenges

| # | Challenge | What Went Wrong | Solution |
|---|-----------|----------------|----------|
| 1 | Ground detection | Raycast 0.25m too short, tips never reached | Tolerance-based: tip within 0.3m = grounded |
| 2 | Crazy spinning | AddTorque × 18 gain = 810 torque | Removed torque, velocity-direction steering |
| 3 | Physics conflicts | Rigidbody + Collider on tips = chaos | Tips are plain Transforms, no physics |
| 4 | No movement | Threshold too strict, gain too low | 3-state machine with impulse accumulation |
| 5 | No momentum | Flat force model | Backward velocity accumulates into impulse |
| 6 | Head-locked steering | Direction tied to gaze | RotateTowards + turn speed loss |
| 7 | No body tracking | Can't detect body axis for V7 | Abandoned pole-steering, refined head steering |
| 8 | VR height mismatch | Wrong coordinate assumptions | Tolerance-based detection, no height offset |
| 9 | Sinking into hills | Horizontal-only movement | Project velocity onto slope, snap Y |
| 10 | No airborne state | Can't jump off ramps | Custom gravity, ramp edge detection |
| 11 | Coins not spawning | OnTriggerEnter was in old script | Ported game integration into our script |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Final Settings

\`\`\`
Push Detection:
  Acceleration Threshold: 1.5 m/s²
  Min Forward Distance:   0.05m
  Trigger Threshold:      0.5

Speed:
  Push Power:         3.0 (base speed per push)
  Push Velocity Scale: 1.2
  Max Push Gain:       4.0
  Max Speed:           10.0 m/s

Friction:
  Base:               0.3
  Uphill Multiplier:  2.5×
  Downhill:           0.3× base
  Brake Friction:     3.0

Turning:
  Responsiveness:     120°/s
  Angle Window:       0.2s
  Angle Threshold:    4°
  Speed Loss/Degree:  0.015

Ramp Jump:
  Min Launch Speed:   4.0 m/s
  Launch Boost:       4.0
  Custom Gravity:     15.0 m/s²

Ground Detection:
  Tip Tolerance:      0.3m
  Ground Ray Length:   10m
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Features Checklist

- [x] Basic movement through parkour course
- [x] Pass through all 4 banners
- [x] Collect ground-level coins
- [x] Collect elevated coins (via ramp jump)
- [x] Handle curves smoothly
- [x] Slope physics (uphill/downhill)
- [x] Braking system (grip buttons)
- [x] Ramp jumping
- [x] Push sound effects
- [x] Respawn system (B/Y button)
- [x] Debug HUD for development

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## What We Learned

**VR physics is not game physics.** Standard Unity physics (Rigidbody, AddForce, gravity) doesn't work well for VR locomotion. We had to disable Unity's gravity and implement our own, manually snap the player to ground, and use MovePosition instead of velocity-based movement.

**Test on device constantly.** Many issues (height mismatch, ground detection, push sensitivity) only appeared on the actual Quest 3, not in the editor.

**Iterative development is unavoidable.** 10 versions. Each one solved something but revealed the next problem. The final V10 is clean, but it took V1–V9's failures to know what "clean" means in VR locomotion.

**User behavior breaks assumptions.** Our biggest surprise: users naturally look around while skiing. This broke pole-based steering (V7) completely — physically correct but unusable when you can't track the body.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Full Source Code: SkiLocomotionV10.cs

Below is the complete final script.

\`\`\`csharp
using UnityEngine;

public class SkiLocomotionV10 : MonoBehaviour
{
    public Vector3 HorizontalVelocity =>
        new Vector3(_velocity.x, 0f, _velocity.z);
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
    public OVRInput.Controller leftController
        = OVRInput.Controller.LTouch;
    public OVRInput.Controller rightController
        = OVRInput.Controller.RTouch;
    [Range(0.1f, 1f)] public float triggerThreshold = 0.5f;

    [Header("=== Audio ===")]
    public AudioSource pushSound;
    [Range(0f, 1f)] public float pushSoundVolume = 1f;

    [Header("=== Ground Detection ===")]
    public LayerMask groundLayers = ~0;
    public float poleTipGroundTolerance = 0.3f;
    public float groundRayLength = 10f;

    [Header("=== Push Detection ===")]
    public float accelerationThreshold = 1.5f;
    public float minForwardDistance = 0.05f;

    [Header("=== Speed Settings ===")]
    public float pushPower = 3f;
    public float pushVelocityScale = 1.2f;
    public float maxPushGain = 4f;
    public float maxSpeed = 10f;

    [Header("=== Friction ===")]
    [Range(0f, 3f)] public float friction = 0.3f;
    [Range(0f, 3f)] public float airDrag = 0f;
    public float uphillFrictionMultiplier = 2.5f;
    public float downhillAcceleration = 2f;
    public float maxSlopeAngle = 45f;

    [Header("=== Turning ===")]
    public float turnAngleWindow = 0.2f;
    public float turnAngleThreshold = 4f;
    public float turnSpeedLossPerDegree = 0.015f;
    public float turnSpeedLossSpeedFactor = 0.05f;
    public float turnResponsiveness = 120f;

    [Header("=== Brake ===")]
    public float brakeFriction = 3f;

    [Header("=== Ramp Jump ===")]
    public float rampLaunchBoost = 4f;
    public float minLaunchSpeed = 4f;
    public float customGravity = 15f;

    [Header("=== Game Integration ===")]
    public ParkourCounter parkourCounter;
    public SelectionTaskMeasure selectionTaskMeasure;
    public string stage;

    // Debug fields (visible in Inspector)
    [Header("=== Debug ===")]
    public string debugLeftState, debugRightState;
    public bool debugLeftTrigger, debugRightTrigger;
    public bool debugLeftTipGrounded, debugRightTipGrounded;
    public float debugLeftTipHeight, debugRightTipHeight;
    public float debugSpeed, debugLastPushPower, debugSlopeAngle;
    public bool debugOnGround, debugGoingUphill, debugBraking;
    public bool debugInAir, debugTurning;
    public float debugVerticalVel, debugGroundY, debugPlayerY;
    public float debugTurnAngle;
    public string lastTriggerName, lastTriggerTag;
    public int triggerEnterCount;

    private enum PushState { IDLE, WINDING_UP, GROUND_CONTACT }

    private PushState _leftState = PushState.IDLE;
    private PushState _rightState = PushState.IDLE;
    private Vector3 _prevLeftHandPos, _prevRightHandPos;
    private Vector3 _prevLeftHandVel, _prevRightHandVel;
    private float _leftPushImpulse, _rightPushImpulse;

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
            playerRb.interpolation
                = RigidbodyInterpolation.Interpolate;
            playerRb.linearVelocity = Vector3.zero;
        }
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

        // Head direction (horizontal)
        Vector3 headForward = hmd.forward;
        headForward.y = 0;
        headForward = headForward.sqrMagnitude > 0.001f
            ? headForward.normalized : Vector3.forward;
        Vector3 headPos = hmd.position;

        // Controller inputs
        debugLeftTrigger = OVRInput.Get(
            OVRInput.Axis1D.PrimaryIndexTrigger, leftController)
            >= triggerThreshold;
        debugRightTrigger = OVRInput.Get(
            OVRInput.Axis1D.PrimaryIndexTrigger, rightController)
            >= triggerThreshold;
        bool leftGrip = OVRInput.Get(
            OVRInput.Axis1D.PrimaryHandTrigger, leftController)
            > 0.5f;
        bool rightGrip = OVRInput.Get(
            OVRInput.Axis1D.PrimaryHandTrigger, rightController)
            > 0.5f;
        debugBraking = leftGrip || rightGrip;

        // Find ground below player
        float groundY = _lastGroundY;
        Vector3 groundNormal = Vector3.up;
        float slopeAngle = 0f;
        bool foundGround = false;

        Vector3 rayStart = playerRb.position + Vector3.up * 1f;
        if (Physics.Raycast(rayStart, Vector3.down,
            out RaycastHit groundHit, groundRayLength,
            groundLayers, QueryTriggerInteraction.Ignore))
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

        // Pole tip ground detection
        debugLeftTipGrounded = false;
        debugRightTipGrounded = false;
        debugLeftTipHeight = 999f;
        debugRightTipHeight = 999f;

        if (leftTip != null)
        {
            if (Physics.Raycast(leftTip.position
                + Vector3.up * 0.5f, Vector3.down,
                out RaycastHit tipHit, 2f, groundLayers,
                QueryTriggerInteraction.Ignore))
            {
                debugLeftTipHeight
                    = leftTip.position.y - tipHit.point.y;
                debugLeftTipGrounded
                    = debugLeftTipHeight <= poleTipGroundTolerance;
            }
        }
        if (rightTip != null)
        {
            if (Physics.Raycast(rightTip.position
                + Vector3.up * 0.5f, Vector3.down,
                out RaycastHit tipHit, 2f, groundLayers,
                QueryTriggerInteraction.Ignore))
            {
                debugRightTipHeight
                    = rightTip.position.y - tipHit.point.y;
                debugRightTipGrounded
                    = debugRightTipHeight <= poleTipGroundTolerance;
            }
        }

        // Process hand pushes
        if (leftHand) ProcessHand(leftHand,
            ref _prevLeftHandPos, ref _prevLeftHandVel,
            ref _leftState, ref _leftPushImpulse,
            debugLeftTrigger, debugLeftTipGrounded,
            headPos, headForward, "LEFT");
        if (rightHand) ProcessHand(rightHand,
            ref _prevRightHandPos, ref _prevRightHandVel,
            ref _rightState, ref _rightPushImpulse,
            debugRightTrigger, debugRightTipGrounded,
            headPos, headForward, "RIGHT");

        debugLeftState = _leftState.ToString();
        debugRightState = _rightState.ToString();

        // Slope direction
        Vector3 slopeDown = Vector3.zero;
        if (foundGround && slopeAngle <= maxSlopeAngle)
        {
            slopeDown = Vector3.ProjectOnPlane(
                Vector3.down, groundNormal);
            slopeDown.y = 0f;
            if (slopeDown.sqrMagnitude > 0.001f)
                slopeDown.Normalize();
        }

        if (!_isInAir && foundGround
            && slopeDown.sqrMagnitude > 0.001f)
        {
            float slopeFactor
                = Mathf.Sin(slopeAngle * Mathf.Deg2Rad);
            _velocity += slopeDown * (downhillAcceleration
                * slopeFactor * Time.fixedDeltaTime);
        }

        float speed = _velocity.magnitude;
        Vector3 headingDir = speed > 0.01f
            ? _velocity / speed : headForward;

        if (_prevHeadingDir.sqrMagnitude < 0.001f)
            _prevHeadingDir = headingDir;
        if (_turnWindowStartDir.sqrMagnitude < 0.001f
            || _turnWindowTimer <= 0f)
            _turnWindowStartDir = headingDir;

        bool goingUphill = false;
        bool goingDownhill = false;
        if (slopeDown.sqrMagnitude > 0.001f)
        {
            float alongSlope
                = Vector3.Dot(headingDir, slopeDown);
            goingDownhill = alongSlope > 0.1f;
            goingUphill = alongSlope < -0.1f;
        }
        debugGoingUphill = goingUphill;

        // Turning detection
        float frameTurnAngle
            = Vector3.Angle(_prevHeadingDir, headingDir);
        _prevHeadingDir = headingDir;
        _turnWindowTimer += Time.fixedDeltaTime;
        float windowTurnAngle
            = Vector3.Angle(_turnWindowStartDir, headingDir);
        if (_turnWindowTimer >= turnAngleWindow)
        {
            _turnWindowTimer = 0f;
            _turnWindowStartDir = headingDir;
        }
        bool isTurning = windowTurnAngle > turnAngleThreshold;
        debugTurning = isTurning && !_isInAir && foundGround;
        debugTurnAngle = windowTurnAngle;

        // Friction / drag
        float speedBefore = _velocity.magnitude;
        if (_isInAir)
        {
            if (airDrag > 0f && speedBefore > 0.001f)
            {
                float ns = Mathf.MoveTowards(
                    speedBefore, 0f,
                    airDrag * Time.fixedDeltaTime);
                _velocity = _velocity.normalized * ns;
            }
        }
        else
        {
            float effectiveFriction = friction;
            if (debugBraking)
                effectiveFriction = brakeFriction;
            else if (foundGround)
            {
                if (goingUphill)
                    effectiveFriction
                        = friction * uphillFrictionMultiplier;
                else if (goingDownhill)
                    effectiveFriction = friction * 0.3f;
            }
            float ns = Mathf.MoveTowards(
                speedBefore, 0f,
                effectiveFriction * Time.fixedDeltaTime);
            if (speedBefore > 0.001f)
                _velocity = _velocity.normalized * ns;
        }

        // Turn speed loss
        if (!_isInAir && foundGround && isTurning
            && _velocity.sqrMagnitude > 0.0001f)
        {
            float speedScale = 1f + (_velocity.magnitude
                * turnSpeedLossSpeedFactor);
            float turnLoss = frameTurnAngle
                * turnSpeedLossPerDegree * speedScale;
            float reduced = Mathf.Max(0f,
                _velocity.magnitude - turnLoss);
            _velocity = _velocity.normalized * reduced;
        }

        // Steer toward head
        if (!_isInAir && foundGround
            && _velocity.sqrMagnitude > 0.0001f)
        {
            float maxRad = turnResponsiveness
                * Mathf.Deg2Rad * Time.fixedDeltaTime;
            Vector3 targetVel
                = headForward * _velocity.magnitude;
            _velocity = Vector3.RotateTowards(
                _velocity, targetVel, maxRad, 0f);
        }

        if (_velocity.magnitude > maxSpeed)
            _velocity = _velocity.normalized * maxSpeed;

        _currentSpeed = _velocity.magnitude;
        debugSpeed = _currentSpeed;

        // === MOVEMENT ===
        Vector3 newPos = playerRb.position;
        Vector3 travelDir = _velocity.sqrMagnitude > 0.0001f
            ? _velocity.normalized : headForward;

        if (_isInAir)
        {
            debugInAir = true;
            debugOnGround = false;
            _verticalVelocity
                -= customGravity * Time.fixedDeltaTime;
            debugVerticalVel = _verticalVelocity;
            newPos += _velocity * Time.fixedDeltaTime;
            newPos.y += _verticalVelocity * Time.fixedDeltaTime;

            if (foundGround && newPos.y <= groundY
                && _verticalVelocity <= 0)
            {
                _isInAir = false;
                _verticalVelocity = 0f;
                newPos.y = groundY;
            }
        }
        else
        {
            debugInAir = false;
            debugOnGround = foundGround;
            _verticalVelocity = 0f;
            debugVerticalVel = 0f;

            if (foundGround)
            {
                newPos.y = groundY;
                Vector3 moveDelta
                    = _velocity * Time.fixedDeltaTime;
                newPos.x += moveDelta.x;
                newPos.z += moveDelta.z;

                _lastSlopeForward = Vector3.ProjectOnPlane(
                    travelDir, groundNormal).normalized;
                if (_lastSlopeForward.sqrMagnitude < 0.001f)
                    _lastSlopeForward = travelDir;

                // Ramp launch check
                if (goingUphill
                    && _currentSpeed >= minLaunchSpeed
                    && slopeAngle > 15f)
                {
                    Vector3 aheadPos = newPos
                        + travelDir * 1.5f + Vector3.up * 1f;
                    if (!Physics.Raycast(aheadPos,
                        Vector3.down, 4f, groundLayers,
                        QueryTriggerInteraction.Ignore))
                    {
                        _isInAir = true;
                        _verticalVelocity
                            = _lastSlopeForward.y * _currentSpeed
                            + rampLaunchBoost;
                    }
                }
            }
        }

        playerRb.MovePosition(newPos);

        // Respawn
        if (OVRInput.Get(OVRInput.Button.Two)
            || OVRInput.Get(OVRInput.Button.Four))
        {
            if (parkourCounter != null
                && parkourCounter.parkourStart)
            {
                playerRb.position
                    = parkourCounter.currentRespawnPos;
                _velocity = Vector3.zero;
                _currentSpeed = 0f;
                _verticalVelocity = 0f;
                _isInAir = false;
            }
        }
    }

    void ProcessHand(Transform hand, ref Vector3 prevPos,
        ref Vector3 prevVel, ref PushState state,
        ref float pushImpulse, bool triggerHeld,
        bool tipGrounded, Vector3 headPos,
        Vector3 headForward, string handName)
    {
        Vector3 currentVel
            = (hand.position - prevPos) / Time.fixedDeltaTime;
        Vector3 accelVec
            = (currentVel - prevVel) / Time.fixedDeltaTime;
        float acceleration = accelVec.magnitude;
        Vector3 handRelative = hand.position - headPos;
        float forwardDist
            = Vector3.Dot(handRelative, headForward);

        prevPos = hand.position;
        prevVel = currentVel;

        switch (state)
        {
            case PushState.IDLE:
                pushImpulse = 0f;
                if (triggerHeld
                    && acceleration > accelerationThreshold
                    && forwardDist > minForwardDistance)
                {
                    state = PushState.WINDING_UP;
                    pushImpulse = 0f;
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
                    float velAlong = Vector3.Dot(
                        currentVel, headForward);
                    float backwardVel
                        = Mathf.Max(0f, -velAlong);
                    pushImpulse += backwardVel
                        * pushVelocityScale
                        * Time.fixedDeltaTime;
                    float maxImpulse = Mathf.Max(0f,
                        maxPushGain - pushPower);
                    if (pushImpulse > maxImpulse)
                        pushImpulse = maxImpulse;

                    if (tipGrounded)
                    {
                        state = PushState.GROUND_CONTACT;
                        float gain = Mathf.Min(
                            pushPower + pushImpulse,
                            maxPushGain);
                        _velocity += headForward * gain;
                        debugLastPushPower = gain;
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
            if (parkourCounter != null)
                parkourCounter.isStageChange = true;
        }
        else if (other.CompareTag("objectInteractionTask"))
        {
            if (selectionTaskMeasure != null)
            {
                selectionTaskMeasure.isTaskStart = true;
                selectionTaskMeasure.scoreText.text = "";
                selectionTaskMeasure.partSumErr = 0f;
                selectionTaskMeasure.partSumTime = 0f;
                float tempValueY
                    = other.transform.position.y > 0
                    ? 12 : 0;
                Vector3 tmpTarget = new(
                    hmd.transform.position.x, tempValueY,
                    hmd.transform.position.z);
                selectionTaskMeasure.taskUI.transform
                    .LookAt(tmpTarget);
                selectionTaskMeasure.taskUI.transform
                    .Rotate(new Vector3(0, 180f, 0));
                selectionTaskMeasure.taskStartPanel
                    .SetActive(true);
            }
        }
        else if (other.CompareTag("coin"))
        {
            if (parkourCounter != null)
                parkourCounter.coinCount += 1;
            AudioSource audio = GetComponent<AudioSource>();
            if (audio != null) audio.Play();
            other.gameObject.SetActive(false);
        }
    }
}
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Debug HUD: SkiDebugHUDV10.cs

\`\`\`csharp
using UnityEngine;
using TMPro;

public class SkiDebugHUDV10 : MonoBehaviour
{
    public TextMeshProUGUI debugText;
    public SkiLocomotionV10 ski;

    void Update()
    {
        if (!debugText || !ski) return;

        string leftTip = ski.debugLeftTipGrounded
            ? $"<color=green>GND ({ski.debugLeftTipHeight:F2}m)"
            + "</color>"
            : $"<color=red>AIR ({ski.debugLeftTipHeight:F2}m)"
            + "</color>";
        string rightTip = ski.debugRightTipGrounded
            ? $"<color=green>GND ({ski.debugRightTipHeight:F2}m)"
            + "</color>"
            : $"<color=red>AIR ({ski.debugRightTipHeight:F2}m)"
            + "</color>";

        string leftState = GetStateDisplay(
            ski.debugLeftState, ski.debugLeftTrigger);
        string rightState = GetStateDisplay(
            ski.debugRightState, ski.debugRightTrigger);

        float pct = ski.debugSpeed
            / Mathf.Max(ski.maxSpeed, 1f);
        string bar = SpeedBar(pct);

        string groundState;
        if (ski.debugInAir)
            groundState = $"<color=yellow>IN AIR "
                + $"(v={ski.debugVerticalVel:F1})</color>";
        else if (ski.debugBraking)
            groundState = "<color=orange>BRAKING</color>";
        else if (ski.debugGoingUphill)
            groundState = $"<color=red>UPHILL "
                + $"{ski.debugSlopeAngle:F0}°</color>";
        else if (ski.debugSlopeAngle > 5f)
            groundState = $"<color=green>DOWNHILL "
                + $"{ski.debugSlopeAngle:F0}°</color>";
        else
            groundState = "<color=white>FLAT</color>";

        debugText.text = $@"<b>SKI V10</b>

<b>LEFT:</b>  {leftState}
  Tip: {leftTip}
<b>RIGHT:</b> {rightState}
  Tip: {rightTip}

<b>SPEED:</b> {ski.debugSpeed:F1} / {ski.maxSpeed}
[{bar}]
Last push: +{ski.debugLastPushPower:F1}

<b>TERRAIN:</b> {groundState}
PlayerY={ski.debugPlayerY:F1} GroundY={ski.debugGroundY:F1}";
    }

    string GetStateDisplay(string state, bool trigger)
    {
        string trig = trigger
            ? "<color=green>T</color>"
            : "<color=grey>T</color>";
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
        int filled = Mathf.Clamp(
            Mathf.RoundToInt(pct * 15), 0, 15);
        return new string('█', filled)
            + new string('░', 15 - filled);
    }
}
\`\`\`

<a href="https://github.com/FatemehShirvani/HCI-for-Mixed-Reality" target="_blank">View Full Repository on GitHub</a>`
  },
  '/about.txt': {
    type: 'file',
    content: `IGD301: Human-Computer Interaction for Mixed Reality
Course Blog by Fatemeh Shirvani

Instructor: Daniel Medeiros
Institution: Institut Polytechnique de Paris / LTCI / Télécom Paris
Semester: 2025-2026

Course Structure:
├── Virtual Reality
│   ├── Week 1: Introduction and History
│   ├── Week 2: VR Technology and Perception I
│   ├── Week 3: VR Technology and Perception II
│   ├── Week 4: Input Devices and Interaction Techniques I
│   └── Week 5: Input Devices and Interaction Techniques II
├── Human-Computer Interaction in VR
│   └── Week 6: Design Processes and Guidelines
├── Augmented Reality
│   └── Week 7: Augmented Reality
├── Research
│   └── Week 8: Current Research Topics
└── Project Presentation
    └── Week 9: Presentations

Grading:
- 50% Theory (Lecture Homework)
- 50% Lab Exercises (Implementation)

Key Dates:
- Final blog deadline: February 10, 2025
- Project presentation: February 3, 2025

Project: VR Locomotion System for Parkour Scene
GitHub: https://github.com/danielpiressm/Parkour
Personal GitHub: https://github.com/FatemehShirvani/HCI-for-Mixed-Reality

Blog Philosophy:
This blog documents not just results, but the entire process:
- How I approached each task
- Problems encountered and solutions found
- Learning journey and reflections
- What others should know that I didn't initially

Inspired by MIT's "How to Make Almost Anything"
http://fab.cba.mit.edu/classes/863.19/people.html`
  },
  '/README.md': {
    type: 'file',
    content: `# HCI for MR Terminal Blog

Welcome to my course documentation!

## Available Commands

Navigation:
  ls              - list contents of current directory
  cd <dir>        - change directory
  cd ..           - go up one directory
  pwd             - print working directory

File Operations:
  cat <file>      - display file contents
  tree            - show directory tree

Utility:
  clear           - clear terminal screen
  help            - show this help message
  about           - course information

## Course Structure

/lectures/
  ├── hw1.md    - Sketch 3 Locomotion Ideas (15pts)
  ├── hw2.md    - Locomotion Pitch (15pts)
  ├── hw3.md    - Evaluate Locomotion (15pts)
  └── hw4.md    - Final Presentation (15pts)

/labs/
  ├── hw1.md    - Setup Blog (5pts)
  ├── hw2.md    - Setup Unity (10pts)
  ├── hw3.md    - Roll-A-Ball (15pts)
  ├── hw4.md    - Roll-A-Ball VR (15pts)
  └── hw5.md    - Locomotion Implementation (30pts)

## Quick Start Examples

$ ls                    # See all folders
$ cd lectures          # Enter lectures
$ cat hw1.md           # Read homework 1
$ cd ../labs           # Go to labs
$ ls                    # See lab assignments
$ cat hw5.md           # Read final lab assignment
$ tree                  # See full structure

## Total Points: 100
- Lectures: 60 points (4 assignments)
- Labs: 75 points (5 assignments)
Note: Normalized to 50% theory + 50% implementation

Good luck with your VR locomotion project!`
  }
};

// ============================================================
// METADATA — titles & points for each HW (used in list views)
// ============================================================

const hwMeta = {
  '/lectures/hw1.md': { num: 'HW 1', title: 'Locomotion Techniques for VR', points: '15 pts' },
  '/lectures/hw2.md': { num: 'HW 2', title: 'World-in-Hand Locomotion Pitch', points: '15 pts' },
  '/lectures/hw3.md': { num: 'HW 3', title: 'Evaluate Your Locomotion Technique', points: '15 pts' },
  '/lectures/hw4.md': { num: 'HW 4', title: 'Final Presentation — Ski Pole Locomotion', points: '15 pts' },
  '/labs/hw1.md':     { num: 'HW 1', title: 'Setup Blog', points: '5 pts' },
  '/labs/hw2.md':     { num: 'HW 2', title: 'Setup Unity', points: '10 pts' },
  '/labs/hw3.md':     { num: 'HW 3', title: 'Unity Roll-A-Ball', points: '15 pts' },
  '/labs/hw4.md':     { num: 'HW 4', title: 'Unity Roll-A-Ball in VR', points: '15 pts' },
  '/labs/hw5.md':     { num: 'HW 5', title: 'Ski Pole Locomotion Implementation', points: '30 pts' },
};

// ============================================================
// NAVIGATION STATE
// ============================================================

let currentView = 'home'; // 'home' | 'lectures' | 'labs' | 'about' | 'readme' | 'file'
let currentFile = null;
let currentSection = null;

const contentEl = document.getElementById('content');
const breadcrumbEl = document.getElementById('breadcrumb');

// ============================================================
// NAVIGATION
// ============================================================

function navigateTo(view, file) {
  currentView = view;
  currentFile = file || null;
  window.scrollTo(0, 0);

  switch (view) {
    case 'home':
      currentSection = null;
      renderHome();
      break;
    case 'lectures':
      currentSection = 'lectures';
      renderHWList('lectures');
      break;
    case 'labs':
      currentSection = 'labs';
      renderHWList('labs');
      break;
    case 'file':
      renderFile(file);
      break;
    case 'about':
      currentSection = null;
      renderInfoFile('/about.txt', 'Course Information');
      break;
    case 'readme':
      currentSection = null;
      renderInfoFile('/README.md', 'README');
      break;
  }

  updateBreadcrumb();
}

// ============================================================
// BREADCRUMB
// ============================================================

function updateBreadcrumb() {
  let html = '<a href="#" onclick="navigateTo(\'home\'); return false;">Home</a>';

  if (currentSection) {
    const label = currentSection === 'lectures' ? 'Lectures' : 'Labs';
    if (currentView === 'file') {
      html += `<span class="sep">/</span><a href="#" onclick="navigateTo('${currentSection}'); return false;">${label}</a>`;
      if (currentFile && hwMeta[currentFile]) {
        html += `<span class="sep">/</span><span class="current">${hwMeta[currentFile].num}</span>`;
      }
    } else {
      html += `<span class="sep">/</span><span class="current">${label}</span>`;
    }
  } else if (currentView === 'about') {
    html += '<span class="sep">/</span><span class="current">Course Info</span>';
  } else if (currentView === 'readme') {
    html += '<span class="sep">/</span><span class="current">README</span>';
  }

  breadcrumbEl.innerHTML = html;
}

// ============================================================
// RENDER: HOME
// ============================================================

function renderHome() {
  contentEl.innerHTML = `
    <p class="home-intro">
      IGD301: Human-Computer Interaction for Mixed Reality — Course blog documenting
      our VR locomotion project, from initial brainstorming through final implementation and testing.
    </p>

    <div class="section-grid">
      <a class="section-card" href="#" onclick="navigateTo('lectures'); return false;">
        <span class="card-icon">&#x1F4D6;</span>
        <div class="card-title">Lectures</div>
        <div class="card-desc">Theory homework — locomotion brainstorming, pitch, evaluation, and final presentation.</div>
        <span class="card-count">4 assignments &middot; 60 pts</span>
      </a>
      <a class="section-card" href="#" onclick="navigateTo('labs'); return false;">
        <span class="card-icon">&#x1F6E0;</span>
        <div class="card-title">Labs</div>
        <div class="card-desc">Hands-on implementation — blog setup, Unity, Roll-A-Ball, VR, and locomotion.</div>
        <span class="card-count">5 assignments &middot; 75 pts</span>
      </a>
    </div>

    <div class="info-cards">
      <a class="info-card" href="#" onclick="navigateTo('about'); return false;">
        <div class="card-title">Course Information</div>
        <div class="card-desc">Schedule, grading, key dates, and project details</div>
      </a>
      <a class="info-card" href="#" onclick="navigateTo('readme'); return false;">
        <div class="card-title">README</div>
        <div class="card-desc">Blog documentation and structure overview</div>
      </a>
    </div>
  `;
}

// ============================================================
// RENDER: HW LIST
// ============================================================

function renderHWList(section) {
  const dir = fileSystem['/' + section];
  const sectionLabel = section === 'lectures' ? 'Lectures' : 'Labs';

  let listHTML = '';
  dir.children.forEach(child => {
    const path = '/' + section + '/' + child;
    const meta = hwMeta[path];
    if (!meta) return;

    listHTML += `
      <li>
        <a class="hw-item" href="#" onclick="navigateTo('file', '${path}'); return false;">
          <span class="hw-number">${meta.num}</span>
          <span class="hw-title">${meta.title}</span>
          <span class="hw-points">${meta.points}</span>
          <span class="hw-arrow">→</span>
        </a>
      </li>`;
  });

  contentEl.innerHTML = `
    <a href="#" class="back-link" onclick="navigateTo('home'); return false;">← Back to Home</a>
    <h1 style="color: var(--green); font-size: 1.5em; margin-bottom: 24px;">${sectionLabel} Homework</h1>
    <ul class="hw-list">${listHTML}</ul>
  `;
}

// ============================================================
// RENDER: FILE CONTENT
// ============================================================

function renderFile(path) {
  const item = fileSystem[path];
  if (!item) {
    contentEl.innerHTML = '<p>File not found.</p>';
    return;
  }

  // Determine which section for back link
  const section = path.startsWith('/lectures') ? 'lectures' : 'labs';
  const sectionLabel = section === 'lectures' ? 'Lectures' : 'Labs';

  const rendered = renderMarkdown(item.content);

  contentEl.innerHTML = `
    <a href="#" class="back-link" onclick="navigateTo('${section}'); return false;">← Back to ${sectionLabel}</a>
    <div class="file-content">${rendered}</div>
  `;
}

// ============================================================
// RENDER: INFO FILES (about.txt, README.md)
// ============================================================

function renderInfoFile(path, title) {
  const item = fileSystem[path];
  if (!item) return;

  const rendered = path.endsWith('.md') ? renderMarkdown(item.content) : renderPlainText(item.content);

  contentEl.innerHTML = `
    <a href="#" class="back-link" onclick="navigateTo('home'); return false;">← Back to Home</a>
    <div class="file-content">${rendered}</div>
  `;
}

// ============================================================
// MARKDOWN RENDERER (same logic as original, enhanced)
// ============================================================

function renderMarkdown(text) {
  let html = text;

  // Code blocks first (protect from other replacements)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre><code>${escapeHtml(code.trim())}</code></pre>`;
  });

  // Headers
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Links [text](url)
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>');

  // Images — keep as-is since they have full HTML tags
  // (already in <img> tag format in the content)

  // Horizontal rules (the ━━━ lines)
  html = html.replace(/━{10,}/g, '<hr style="border: none; border-top: 1px solid var(--border); margin: 28px 0;">');

  // Tables
  html = html.replace(/\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g, (_, header, sep, body) => {
    const ths = header.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const rows = body.trim().split('\n').map(row => {
      const tds = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${tds}</tr>`;
    }).join('');
    return `<table><thead><tr>${ths}</tr></thead><tbody>${rows}</tbody></table>`;
  });

  // Checkboxes
  html = html.replace(/- \[x\] (.+)/g, '<div>✅ $1</div>');
  html = html.replace(/- \[ \] (.+)/g, '<div>☐ $1</div>');

  // Unordered lists (simple)
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');

  // Wrap in paragraph
  html = '<p>' + html + '</p>';

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/<p>\s*(<h[1-4]>)/g, '$1');
  html = html.replace(/(<\/h[1-4]>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<pre>)/g, '$1');
  html = html.replace(/(<\/pre>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<table>)/g, '$1');
  html = html.replace(/(<\/table>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<hr[^>]*>)/g, '$1');
  html = html.replace(/(<hr[^>]*>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<img )/g, '$1');
  html = html.replace(/<p>\s*(<video )/g, '$1');
  html = html.replace(/<p>\s*(<div>)/g, '$1');

  return html;
}

function renderPlainText(text) {
  return '<pre style="white-space: pre-wrap; font-family: var(--mono); line-height: 1.7; color: var(--text);">' 
    + escapeHtml(text) + '</pre>';
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ============================================================
// INIT
// ============================================================

navigateTo('home');