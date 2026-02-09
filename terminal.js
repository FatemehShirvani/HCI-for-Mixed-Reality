// Terminal state
let currentPath = '/';
let history = [];
let historyIndex = -1;

// File system structure
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

## 📥 Download Full Presentation
<a href="Lecture-HW1-LocomotionPitch.pdf" download>Download PDF (Lecture-HW1-LocomotionPitch.pdf)</a>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Idea 1: Frame Split

<img src="hw1-slide2.jpg" alt="Frame Split Concept" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

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

<img src="hw1-slide3.jpg" alt="Frame Split Evaluation" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

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

<img src="hw1-slide4.jpg" alt="Motion Map Concept" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

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

<img src="hw1-slide5.jpg" alt="Motion Map Evaluation" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

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

<img src="hw1-slide6.jpg" alt="Move the World Concept" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

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

<img src="hw1-slide7.jpg" alt="Move the World Evaluation" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

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

### Comparison Baseline:
- Standard joystick locomotion
- Teleportation (if available)

### Presentation Date
Presented: Week 2 (December 9, 2024)

## Resources
- Inspiration: https://www.youtube.com/watch?v=p0YxzgQG2-E
- Full presentation: Lecture-HW1-LocomotionPitch.pdf`
  },
  '/lectures/hw2.md': {
    type: 'file',
    content: `# Lecture Homework 2: World-in-Hand Locomotion Pitch (15 Points)
By Fatemeh Shirvani & Amélien Le Meur

## 📥 Download Full Presentation
<a href="Lecture-HW2-WorldInHand.pdf" download>Download PDF (Lecture-HW2-WorldInHand.pdf)</a>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<img src="hw2-slide1.jpg" alt="World-in-Hand Title" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

## 🎯 Selected Technique: World-in-Hand

After brainstorming three locomotion ideas in HW1, we selected **"Move the World"** 
(now called "World-in-Hand") as our technique to implement for the parkour project.

### Why We Chose This Technique

✓ **Lower motion sickness** - User stays stationary in real space  
✓ **Intuitive metaphor** - Like holding and manipulating a map  
✓ **No additional UI** - Direct hand manipulation  
✓ **Solves elevated coins** - World manipulation allows vertical adjustment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 💡 Core Concept

<img src="hw2-slide5.jpg" alt="Core Concept Explanation" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

### Main Idea
Instead of moving the user through the world, we move the world toward the user.

**Like:**
- Zooming into a map
- Pulling the world closer to you
- Manipulating a miniature diorama in your hands

**Result:** The user stays physically still → lower motion sickness

### Inspiration: How We Perceive the World

<img src="hw2-slide3.jpg" alt="360-degree perception" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

<img src="hw2-slide4.jpg" alt="Pac-Man 360 example" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

We're inspired by 360-degree games where the environment wraps around 
the player, creating immersion without requiring physical movement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎮 Interaction Design

<img src="hw2-slide6.jpg" alt="Forward Movement and Jump" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

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

<img src="hw2-slide7.jpg" alt="Speed Control and Steering" style="max-width: 100%; height: auto; margin: 20px 0; border: 2px solid var(--border); border-radius: 8px;">

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

## 🏁 Application to Parkour Course

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

## 📊 Expected Advantages

✓ **Reduced motion sickness** - User's vestibular system not confused  
✓ **Intuitive controls** - Familiar zoom/map manipulation gesture  
✓ **No locomotion UI** - Pure hand interaction  
✓ **Fine speed control** - Exponential scaling provides precision  
✓ **3D navigation** - Jump mechanic handles vertical space  
✓ **Accessible** - No complex button combinations

## ⚠️ Potential Challenges

✗ **Learning curve** - Users need to understand the metaphor  
✗ **Arm fatigue?** - Sustained pinch gesture over long sessions  
✗ **Scale calibration** - Finding right sensitivity for speed/steering  
✗ **Motion sickness?** - World scaling might still affect some users

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🔬 Evaluation Plan

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

## 🛠️ Implementation Plan

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

## 🎓 Presentation Reflection

### What We Learned

This pitch helped us clarify:
- **The core metaphor** - "Holding the world in your hands"
- **Specific gestures** - Pinch, zoom, asymmetric steering, jump
- **Technical challenges** - Exponential scaling, calibration needs
- **Evaluation strategy** - Clear hypotheses to test

### Instructor/Peer Feedback

[Add feedback received during presentation here]

### Refinements Since Pitch

[Document any changes made after presentation feedback]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📅 Timeline

- **HW1:** Brainstormed 3 ideas (Frame Split, Motion Map, World-in-Hand)
- **HW2:** Pitched World-in-Hand technique ✅
- **HW3:** User evaluation with 3 participants (upcoming)
- **HW5:** Full implementation in Unity parkour scene (upcoming)
- **HW4:** Final presentation with results (Feb 3, 2025)

## 🔗 Resources

- Full presentation: Lecture-HW2-WorldInHand.pdf
- Related work: VR locomotion techniques, world-scaling interfaces
- Next: Implement and test (Labs HW4-5)`
  },
  '/lectures/hw3.md': {
    type: 'file',
    content: `# Lecture Homework 3: Evaluate Your Locomotion Technique (15 Points)

## Assignment
Conduct a user study with yourself + 2 other participants (3 total).

## Metrics to Collect

### Performance Metrics (measure and average):
- Average time per round
- Average accuracy per round  
- Average number of finished rounds

### Questionnaires (1-10 scale):

**Simulator Sickness:**
"On a scale from 1 to 10, how much motion sickness do you perceive right now?"
(1 = lowest, 10 = highest)

**Task Workload:**
"On a scale from 1 to 10, how easy was it to perform the task?"
(1 = lowest, 10 = highest)

**Presence:**
"On a scale from 1 to 10, how present did you feel in the virtual world?"
(1 = lowest, 10 = highest)

**Enjoyment:**
"On a scale from 1 to 10, how much fun did you have during the task?"
(1 = lowest, 10 = highest)

## My Results

### Participants
- Participant 1 (You): [brief description]
- Participant 2: [brief description]
- Participant 3: [brief description]

### Performance Data
| Metric | P1 | P2 | P3 | Average |
|--------|----|----|----|---------| 
| Time per round | | | | |
| Accuracy | | | | |
| Finished rounds | | | | |

### Questionnaire Results
| Question | P1 | P2 | P3 | Average |
|----------|----|----|----|---------| 
| Simulator Sickness | | | | |
| Task Workload | | | | |
| Presence | | | | |
| Enjoyment | | | | |

### Analysis
[What do these results tell you about your locomotion technique?]

### Observations
[What did you observe during testing?]
[Any unexpected behaviors?]`
  },
  '/lectures/hw4.md': {
    type: 'file',
    content: `# Lecture Homework 4: Final Presentation (15 Points)

## Presentation Structure (20 minutes total)

### Part 1: Presentation (5-10 minutes)
**Concept:**
- What is your locomotion technique?
- Why did you choose this approach?

**Implementation:**
- How did you implement it?
- What challenges did you face?
- How did you solve them?

**Evaluation:**
- How did participants perform?
- What did you learn from user evaluation?

### Part 2: Demo (5 minutes)
- Live demonstration for everyone to try

### Part 3: Discussion (5 minutes)
- Q&A and feedback

## My Presentation

### Concept
[Document your main idea and rationale]

### Implementation Details
[Technical approach, code snippets, architecture]

### Challenges & Solutions
| Challenge | Solution |
|-----------|----------|
| | |
| | |

### Evaluation Summary
[Key findings from user testing]

### Demo Plan
[How will you demonstrate your technique?]

## Preparation
- APK shared by January 28th
- Install before January 29th
- Presentation slides ready`
  },
  '/labs': {
    type: 'dir',
    children: ['hw1.md', 'hw2.md', 'hw3.md', 'hw4.md', 'hw5.md']
  },
  '/labs/hw1.md': {
    type: 'file',
    content: `# Lab Homework 1: Setup Blog (5 Points)

## Assignment
Create your own online blog with any tool you prefer.

## Recommended Stack
- GitHub Pages
- Hugo (https://gohugo.io/)

## Requirements
- Document your process
- Share your blog URL

## My Blog Setup

### Platform Choice
[Which platform did you choose? Why?]

### Blog URL
[Your blog URL here]

### Setup Process
[Document the steps you took]

### Challenges
[Any issues you encountered?]

### Screenshots
[Add screenshots of your blog]

## Documentation Tips
Remember: Don't just write results and upload code!
Document your process:
- How did you approach this task?
- What problems did you encounter?
- How did you overcome them?
- What should others know that you didn't initially?`
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

## My Setup

### Unity Version
[Which version did you install?]

### Installation Process
[Document your setup steps]

### First Project
[What did you create?]

### Screenshots
[Add screenshots of your Unity environment]

### IP-Paris Modifications
[If you added IP-Paris flavor, describe it here]

### Challenges & Solutions
[What problems did you face?]
[How did you solve them?]

## Resources
- Unity Learn: https://learn.unity.com/
- Unity Documentation
- IP-Paris branding guidelines (if applicable)`
  },
  '/labs/hw3.md': {
    type: 'file',
    content: `# Lab Homework 3: Unity Roll-A-Ball (15 Points)

## Assignment
Create your first Unity application following the Roll-A-Ball tutorial.

## Tutorial
https://learn.unity.com/project/roll-a-ball

## Requirements
- Complete the full Roll-A-Ball tutorial
- Document your learning process
- Bonus: Add IP-Paris "flavor"

## My Implementation

### Learning Journey
[What did you learn from this tutorial?]

### Key Concepts Covered
- Player movement
- Camera control
- Collectibles
- UI elements
- [Add others you learned]

### Screenshots/Video
[Show your completed Roll-A-Ball game]

### IP-Paris Customization
[How did you customize it?]

### Code Highlights
[Any interesting code snippets you wrote?]

\`\`\`csharp
// Example: Your player movement code
\`\`\`

### Challenges
[What was difficult?]
[How did you debug issues?]

## Reflection
[What will you apply from this tutorial to future projects?]`
  },
  '/labs/hw4.md': {
    type: 'file',
    content: `# Lab Homework 4: Unity Roll-A-Ball in VR (15 Points)

## Assignment
Adapt Roll-A-Ball into a VR version with selection techniques.

## Tasks
1. Implement Roll-A-Ball in VR
2. Adapt for VR environment (check Lab3 on Moodle)
3. Implement direct selection
4. Implement raycasting

## Optional Features
- Different selection techniques (e.g., Go-Go)
- Select multiple objects
- Progressive refinement for disambiguation
- Hand tracking input (trigger + pinch)
- Sound/visual effects when picking up objects
- Explosion effects

## My VR Implementation

### VR Adaptation Process
[How did you convert Roll-A-Ball to VR?]

### Direct Selection
[Describe your implementation]

\`\`\`csharp
// Direct selection code
\`\`\`

### Raycasting
[Describe your implementation]

\`\`\`csharp
// Raycasting code
\`\`\`

### Optional Features Implemented
[Which optional features did you add?]

### Demo Video
[Link to video showing your VR Roll-A-Ball]

### Technical Challenges
[VR-specific issues you encountered]

### User Testing
[Did anyone else try it? What was their feedback?]

## Code Repository
[GitHub link to your project]`
  },
  '/labs/hw5.md': {
    type: 'file',
    content: `# Lab Homework 5: Locomotion Technique Implementation (30 Points)

## Assignment
Implement your locomotion technique in Unity in the provided parkour scene.

## Requirements
- Implement in the provided scene
- Upload code to GitHub
- Create demonstration video
- Bonus: Add IP-Paris "flavor"

## My Implementation

### Locomotion Concept
[Restate your chosen locomotion technique]

### Implementation Details

#### Architecture
[High-level overview of your code structure]

#### Key Components
[List main scripts/components]

#### Code Structure
\`\`\`csharp
// Main locomotion script example
public class MyLocomotion : MonoBehaviour
{
    // Your code here
}
\`\`\`

### Technical Challenges

| Challenge | Solution | Code Example |
|-----------|----------|--------------|
| | | |
| | | |

### Features Implemented
- [ ] Basic movement through parkour course
- [ ] Pass through all 4 banners
- [ ] Collect ground-level coins
- [ ] Collect elevated coins
- [ ] Handle curves smoothly
- [ ] Additional features: [list any extras]

### Demo Video
[Link to your demonstration video]

### Screenshots
[In-game screenshots showing your locomotion in action]

### GitHub Repository
[Link to your complete project]

## Documentation Process
[How did you approach building this?]
[What would you do differently next time?]

## IP-Paris Customization
[If applicable, describe your IP-Paris modifications]`
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

// DOM elements
const input = document.getElementById('termIn');
const output = document.getElementById('termOut');
const blk = document.getElementById('blk');

// Initialize terminal
function init() {
  printWelcome();
  updatePrompt();
  setupInputHandlers();
  input.focus();
}

function printWelcome() {
  addOutput(`IGD301: HCI for Mixed Reality - Course Blog
Fatemeh Shirvani | IP Paris 2025-2026

Type 'help' for commands or 'ls' to start exploring.
Try: cd lectures → cat hw1.md
`, 'system');
}

function addOutput(text, type = 'output') {
  const line = document.createElement('div');
  line.className = `terminal-line ${type}`;
  line.innerHTML = text.replace(/\n/g, '<br>');
  output.appendChild(line);
}

function addCommand(cmd) {
  const line = document.createElement('div');
  line.className = 'terminal-line command';
  line.innerHTML = `<span class="prompt">$</span> ${cmd}`;
  output.appendChild(line);
}

function updatePrompt() {
  const promptSpan = document.querySelector('.term-inputline .prompt');
  promptSpan.textContent = `${currentPath === '/' ? '~' : currentPath}$`;
}

function processCommand(cmd) {
  cmd = cmd.trim();
  if (!cmd) return;

  history.push(cmd);
  historyIndex = history.length;
  
  addCommand(cmd);

  const parts = cmd.split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch(command) {
    case 'help':
      showHelp();
      break;
    case 'ls':
      listDirectory(args[0]);
      break;
    case 'cd':
      changeDirectory(args[0]);
      break;
    case 'pwd':
      addOutput(currentPath);
      break;
    case 'cat':
      showFile(args[0]);
      break;
    case 'tree':
      showTree();
      break;
    case 'clear':
      output.innerHTML = '';
      break;
    case 'about':
      showFile('about.txt');
      break;
    default:
      addOutput(`Command not found: ${command}. Type 'help' for available commands.`, 'error');
  }

  // Removed auto-scroll - let users scroll manually to read content
  // setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 0);
}

function showHelp() {
  const helpText = `Available Commands:

Navigation:
  ls [dir]        - list contents of current directory or specified directory
  cd <dir>        - change to directory
  cd ..           - go to parent directory
  pwd             - print working directory

File Operations:
  cat <file>      - display file contents
  tree            - show directory tree structure

Utility:
  clear           - clear terminal screen
  help            - show this help message
  about           - show course information

Examples:
  $ ls lecture
  $ cd lecture
  $ cat week1.md
  $ cd ..`;
  
  addOutput(helpText);
}

function listDirectory(dir) {
  const targetPath = dir ? resolvePath(dir) : currentPath;
  const item = fileSystem[targetPath];

  if (!item) {
    addOutput(`ls: cannot access '${dir}': No such file or directory`, 'error');
    return;
  }

  if (item.type !== 'dir') {
    addOutput(`ls: ${dir}: Not a directory`, 'error');
    return;
  }

  const entries = item.children.map(name => {
    const childPath = targetPath === '/' ? `/${name}` : `${targetPath}/${name}`;
    const child = fileSystem[childPath];
    return child && child.type === 'dir' ? `<span style="color: #7dd3fc">${name}/</span>` : name;
  });

  addOutput(entries.join('  '));
}

function changeDirectory(dir) {
  if (!dir) {
    currentPath = '/';
    updatePrompt();
    return;
  }

  if (dir === '..') {
    if (currentPath === '/') return;
    currentPath = currentPath.substring(0, currentPath.lastIndexOf('/')) || '/';
    updatePrompt();
    return;
  }

  const newPath = resolvePath(dir);
  const item = fileSystem[newPath];

  if (!item) {
    addOutput(`cd: ${dir}: No such file or directory`, 'error');
    return;
  }

  if (item.type !== 'dir') {
    addOutput(`cd: ${dir}: Not a directory`, 'error');
    return;
  }

  currentPath = newPath;
  updatePrompt();
}

function showFile(filename) {
  if (!filename) {
    addOutput('cat: missing file operand', 'error');
    return;
  }

  const filePath = resolvePath(filename);
  const item = fileSystem[filePath];

  if (!item) {
    addOutput(`cat: ${filename}: No such file or directory`, 'error');
    return;
  }

  if (item.type === 'dir') {
    addOutput(`cat: ${filename}: Is a directory`, 'error');
    return;
  }

  // Format markdown-style content
  const formatted = item.content
    .replace(/^# (.*$)/gm, '<span style="color: #7dd3fc; font-weight: bold;">$1</span>')
    .replace(/^## (.*$)/gm, '<span style="color: #94a3b8; font-weight: bold;">$1</span>')
    .replace(/^### (.*$)/gm, '<span style="color: #94a3b8;">$1</span>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code style="background: #0f1623; padding: 2px 4px;">$1</code>');
  
  addOutput(formatted);
}

function showTree() {
  addOutput('.', 'tree');
  showTreeRecursive('/', '', true);
}

function showTreeRecursive(path, prefix, isLast) {
  const item = fileSystem[path];
  if (!item || item.type !== 'dir') return;

  const children = item.children || [];
  
  children.forEach((name, index) => {
    const isLastChild = index === children.length - 1;
    const childPath = path === '/' ? `/${name}` : `${path}/${name}`;
    const child = fileSystem[childPath];
    
    const connector = isLastChild ? '└── ' : '├── ';
    const displayName = child && child.type === 'dir' ? 
      `<span style="color: #7dd3fc">${name}/</span>` : name;
    
    addOutput(prefix + connector + displayName);
    
    if (child && child.type === 'dir') {
      const newPrefix = prefix + (isLastChild ? '    ' : '│   ');
      showTreeRecursive(childPath, newPrefix, isLastChild);
    }
  });
}

function resolvePath(path) {
  if (path.startsWith('/')) return path;
  
  if (currentPath === '/') {
    return '/' + path;
  }
  
  return currentPath + '/' + path;
}

// Input handling
function setupInputHandlers() {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value;
      processCommand(cmd);
      input.value = '';
      updateBlock();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
        setTimeout(() => {
          input.setSelectionRange(input.value.length, input.value.length);
          updateBlock();
        }, 0);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        input.value = '';
      }
      setTimeout(() => {
        input.setSelectionRange(input.value.length, input.value.length);
        updateBlock();
      }, 0);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      autocomplete();
    }
  });

  // Block cursor positioning
  function updateBlock() {
    const pos = input.selectionStart ?? 0;
    const style = getComputedStyle(input);
    const font = `${style.fontSize} ${style.fontFamily}`;
    const text = input.value.slice(0, pos);

    const canvas = updateBlock._c || (updateBlock._c = document.createElement('canvas'));
    const ctx = canvas.getContext('2d');
    ctx.font = font;

    const w = ctx.measureText(text).width;
    blk.style.transform = `translateX(${w}px)`;
  }

  ['input','click','keyup','focus'].forEach(ev =>
    input.addEventListener(ev, () => requestAnimationFrame(updateBlock))
  );

  updateBlock();
}

function autocomplete() {
  const text = input.value;
  const parts = text.split(' ');
  const lastPart = parts[parts.length - 1];
  
  if (!lastPart) return;
  
  const item = fileSystem[currentPath];
  if (!item || item.type !== 'dir') return;
  
  const matches = item.children.filter(name => name.startsWith(lastPart));
  
  if (matches.length === 1) {
    parts[parts.length - 1] = matches[0];
    input.value = parts.join(' ');
    updateBlock();
  } else if (matches.length > 1) {
    addOutput(matches.join('  '));
  }
}

// Start terminal
init();
