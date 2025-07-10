# [extrastellar worlds](https://apps.apple.com/us/app/extrastellar-worlds/id6744341114)

Pseudo-procedural environments with a Sci-Fi theme. It mostly made in Reality Composer Pro's shadergraph, meaning all of the geometries and surfaces are mathematically calculated in the fragment(pixel) shader, including planetary bodies, directional lighting, and reflective surfaces. 

![earth, with textures from NASA's Visisble Earth](/images/projects/extrastellar-earth.jpeg)
![procedural clouds](/images/projects/extrastellar-clouds.jpeg)
![water and ripples](/images/projects/extrastellar-lake.jpeg)

<br />
<br />
<br />
<br />
<br />

---

# my ami: Modern Tamagotchi on Apple Platforms

This project is in-progress. The plan is to create a virtual pet game that is updated to the modern day. Specifically, on the iOS side, it'd be able to leverage standard statistical models and machine learning to learn habits and behaviors in ways that current virtual pets do not. On the visionOS side, it'd be able to interact with objects in the environment, both visually and auditorily. Specifically, it'd utilize ML models like YOLO and Apple's Sound Classifier to use them as input to the previously mentioned learning models on the iOS side.

This is inspired by ideas from Pokémon, specifically the emotions from the [Piplup Step music video](https://www.youtube.com/watch?v=bm0nLJuRNbw&pp=ygULcGlwbHVwIHN0ZXA%3D).

## [See the Sounds (retired)](https://apps.apple.com/us/app/see-the-sounds/id6476731565)

This is an application for Apple's MR headset (Apple Vision Pro). This is essentially just a demo that demonstrates how machine learning models can be used on AVP to create interesting experiences. Specifically, it was taken as a partial feature as a proof of concept that a virtual pet can hear (and understand) the environment it is in. To get a sense of how this works, see this [demo video](https://youtu.be/42cqkCwPSmg) submitted to Apple for App Store approval.

It was also one of the launch day apps for the AVP. 

## [take dimensions](https://apps.apple.com/us/app/take-dimensions/id6477896834)

This is also another application for the AVP. This is a demo using Apple's provided scene understanding to replicate the base behavior of the measure app from iPhone. Specifically, it uses plane detection (with classification) and scene reconstruction, along with user input, to create measurements of the environment.

## Technical Details

This project completely uses Swift. Specifically, it uses SwiftUI for 2D rendering, RealityKit for 3D rendering, SwiftData for database backing, and The Composable Architecture (TCA) for app logic. Features utilizes MLCore (for Vision and Sound Analysis), AVAudio for audio routing, etc.

<br />
<br />
<br />
<br />
<br />

---

# [AutoTA](https://github.com/willcrichton/r-autota): Debugging Assistant for R

> AutoTA is an RStudio addin to help novice data scientists debug common R errors. Auto TA provides real-time, in-context support for common errors like object not found and unexpected string constant.

## My Contributions

In this Stanford class project, I exposed the abstract syntax tree of the R application to the front end of the plugin. This AST is the compiler's understanding of the written code, and is used to explain to the user the components of the offending code statement and how they might be able to fix it.
In addition, I designed and implemented the icons and UX of the application.

<br />
<br />
<br />
<br />
<br />

---

# [Fidelius](https://crypto.stanford.edu/fidelius/): Protecting Secrets from Compromised Browsers

> Users regularly enter sensitive data, such as passwords, credit card numbers, or tax information, into the browser window. While modern browsers provide powerful client-side privacy measures to protect this data, none of these defenses prevent a browser compromised by malware from stealing it. Fidelius is a new architecture that uses trusted hardware enclaves integrated into the browser to enable protection of user secrets during web browsing sessions, even if the entire underlying browser and OS are fully controlled by a malicious attacker.  
As part of this project, we develop the first open source system that provides a trusted path from input and output peripherals to a hardware enclave with no reliance on additional hypervisor security assumptions. These components may be of independent interest and useful to future projects.

![image of the hardware used](/images/gallery/fidelius_1.jpg)

[diagram showing the trusted display](/images/gallery/fidelius.jpg)

## My Contributions

In this Stanford research paper, I was a part of a 2-person mini-team that focused on enabling the protected data to be shown on a trusted display. We (Forest Fraser and I) implemented the solution by encrypting the necessary data in the Intel SGX enclave and transmitting it over Bluetooth to the display, where we then decrypt to show the user the sensitive data on a secure overlay.

<br />
<br />
<br />
<br />
<br />

---

# [Inclusive XR Testing](https://devpost.com/software/inclusive-user-testing-in-vr)
> … our goal is to create a tool that allows user testers to provide timely feedback on VR projects by annotation in an efficient and accessible way.


## My Contributions

In this Reality Hack hackathon project, I worked on enabling the technologies necessary to allow for inclusive user testing for Unity projects. Specifically, I integrated Google's Speech-To-Text and Azure's Text-To-Speech as well as created the screenshot annotation systems in Unity. This allows for both voice-only or controller-only paths to give user testing feedback inside VR.

<br />
<br />
<br />
<br />
<br />

---

# [Guess What?](https://guesswhat.stanford.edu) Heads Up Game for Emotion Recognition

Guess What? is heads-up mobile game to help the [Wall Lab](https://wall-lab.stanford.edu) at Stanford learn more about autism. Specifically, users can use the game to teach their kids about emotion recognition, and participants can submit gameplay footage to be used for training machine learning models. These models will hopefully/eventually learn to recognize emotions in children, or even detect early signs of autism.

![image](/images/gallery/guesswhat.jpg)

## Responsibilities
I was tasked with aiding the mobile developer on the iOS side to implement whatever we needed and report them back to team meetings. Most of the work became remote starting April 2020.

## Technologies Involved
- AWS/S3/Cognito
- ARKit APIs
- Swift (with Storyboard)
- Figma (for prototyping)
- SwiftyGif APIs

## Contribution 1: Fixing 1 Bug

**Context**. If you've never played "Heads Up," it's a game you put on your phone on your forehead and you have to guess what is being displayed by clues that other people are giving you. If it's right, you flick it down; if you want to skip, you flip it up.  

**Challenge/The Bug**. The app was using accelerometer data to guess which direction; so, when someone flips it down slowly but then flips it back up quickly, it sometimes thinks that it was flicked up, not down.  

**Solution**. I implemented the fix to instead use the device's gyroscope and instead checked the orientation of the phone; A tilt down, at any speed, will trigger the correct event.

## Contribution 2: Adding 1 Feature

**Context**. The app's size previously scaled linearly with the number of images it held, so it's app store size often was huge.  

**Challenge**. AWS Swift APIs were terribly documented, and there were already existing infrastructures to display the prompts (specifically with public buckets and Cognito.)  

**Solution**. I was able to utilize the various AWS buckets that the lab was already using and incorporate it into the app. Now, users can dynamically download decks for the buckets as they play without seeing any difference in performance.

## Contribution 3: Game Mode #1: Gather & Scatter - AR Treasure Hunt

**Context**. After each game, the child's reward is an animated gif of a cartoon character. While this is fun, the lab wanted to explore the possibilities of using AR as a more enticing reward system. ![reward screen of the app](/images/projects/guesswhat_reward.jpeg)

**Challenge**. The most challenge aspect here is no one knew what should be made. It would be simple enough to show a 3D model instead of a 2D one; but what would that achieve? Why would this be more enticing?  

I ended up building ontop of one of the default experiences for ARKit to create Gather & Scatter, a completely different game mode that increase caretaker-child interactions through a treasure-map game. Caretaker-child interactions to establish shared experiences, like objects, were shown to be beneficial to children with ASD (citation needed; will link when I find it.)  

**Solution**. To play, the parent starts out placing 3D toys in their home ("scattering".) Placing is shown on the left. They can also just scan the house, and press the randomize button to automatically place the toys everywhere (shown on the right.)  
Then, the child could then gather the toys, by finding all of them throughout the house ("gather"). The child can then also place the toys wherever they want in the house, and save those locations so they can find and look at their virtual toys later.  
Due to time constraints, I was not able to finish the "gather" process, as the team had to shift focus to the next project.

[Final Demo 1](/videos/projects/guesswhat_PlacingDemo.MP4)  [Final Demo 2](/videos/projects/guesswhat_ScatteringDemo.mp4)

## Contribution 4: Game Mode #2: Humpty Dumpty (Competitive)

**Context**. Humpty Dumpty is based on the term "Emotion Guessing Game" (EGG.) The idea was conceptualized by the lab in 2019, and was first implemented by another researcher; it would be a game that also acts as a data labeling tool.

[the child labeling the emotion in the image](/images/projects/guesswhat_child_old.png)  [the parent identifying if the child's classification was correct](/images/projects/guesswhat_parent_old.png)

**Challenge**. The original setup: The child guesses at 10 emotions, then passes the phone to the parent. Then, the parent either confirms that the child guessed correctly, or fixes the child's guess with the correct emotion label for that gif. This felt clunky and space-inefficient in landscape mode, which is how we first received the game mode. In fact, how do we make data labeling fun?

![image](/images/projects/guesswhat_figma.png)

**Solution**. The lead mobile developer and I sat down to prototype various ideas. We knew that we wanted to make it portrait, as we'll be using a specific Tik Tok challenge that involved emoting to the camera. We also wanted the experience to be more engaging.  
We eventually came up with a competitive mode: the child and parent would rate the same 10 videos separately at the same time, sitting across from each other (like shown.) We were able to prototype it in a couple weeks, and started doing beta/feasability testing with current participants. With their input, we were able to fix many bugs and the lab gained valuable feedback on where to go from there.

[Final Demo](/videos/projects/guesswhat_HDCompDemo.mp4)

<br />
<br />
<br />
<br />
<br />

---

# Oculus Hand-Tracking for Gesture & ASL Recognition

This was a personal project to implement hand pose recognition using the Oculus SDK.

<br />
<br />
<br />
<br />
<br />

---

# [Growing Up Viet](/tet): Vietnamese Stories in America

> We (Vy & Hung) started out this project with the intention of capturing subtle, "Vietnamese" moments that we experience as Vietnamese-identifying young adults in America. As we embarked on this journey collecting stories, we were able to emotionally connect back to our heritage and each other, in a time of physical disconnect, in ways we never could have imagined before.  
So with this **audio-first, nonlinear walking simulator** of stories from Vietnamese-identifying students, we want to celebrate and share our unique Vietnamese culture, experiences, and perspectives. This is **not a game**; rather, it is a **virtual space** that will connect you to a brief moment within the five thousand years of Vietnamese heritage, using the anonymous voices of those born near the start of the millennium living in America.

![Screenshot of the experience](/images/gallery/vnstories.jpg)

# My contribution

In this senior project, my partner Vy Mai and I did interviews and collected them in a React web application. I implemented the movement, spatial audio system, and cookie-based save state to allow for a game-like interface to allow the listener to experience the stories. Thought was put into the emotional beat of the listener throughout the experience.

<br />
<br />
<br />
<br />
<br />

---

# [(Are You) Here](https://youtu.be/V9qXbP2Tl0A): VR Installation Artwork

In this art project, I captured a tree trunk with photogrammetry and recreated it in VR. Then, I set up the virtual tree in the same space as the actual tree, creating a virtual-augmented reality frankenstein. The setup was used for a meditative experience where users can leave voice messages on the tree for others to hear.

![close up of the photogrammetry tree](/images/gallery/areyouhere.jpg)

<br />
<br />
<br />
<br />
<br />

---

# [The Clock Ticks For You](/storage/tctfy/play.html): Short Interactive Fiction About Death

The write up is best read [here](https://medium.com/serious-games-377g/the-clock-ticks-and-ticks-again-db55c69798b). The ending statement:
> Still, making this game has been a great learning experience for me. I have always wanted to design experiences to make users/players feel. I believe it’s the most important part of being human: to feel compassion and empathy, especially for strangers like the character in my story.

![screenshot of the IF](/images/gallery/tctfy.jpg)

<br />
<br />
<br />
<br />
<br />

---

# [Making Simple Sublime](/storage/simple-sublime-vr/): VR Art Installation Collab

![screenshot of the model](/images/gallery/sublime.jpg)

## My Contributions

This was a collaboration with another artist, where I toured his 8-room installation and recreated it with the dimensions given. We also recorded all the audio from the installation and played it in the virtual copy.

<br />
<br />
<br />
<br />
<br />

---

# [FamiliAR](https://www.youtube.com/watch?v=o0UHfR5vzJI): Mobile AR Escape Room

Our team utilized ARKit in its early days to create a virtual reality through the mobile phone. We made an escape room where the players had to find clues around the room Nancy Drew-style before the story can proceed.

![FamiliAR icon](/images/gallery/familiar.jpg)

## My Contributions

I worked on moving from Unreal to Unity, and implemented a 3D text popup overlay (tooltip) to give the user information when they did find objects in the virtual environment.

<br />
<br />
<br />
<br />
<br />

---

# Motorized Freelines

I designed a mechanical/electrical system to add hub motors onto mini freeline skates.

![freeline image](/images/gallery/freelines_1.jpg)

[me using the electrified skate](/images/projects/freeline_skating.jpeg)

<br />
<br />
<br />
<br />
<br />

---

# Trash Bin: Just Another Hackintosh

I designed CAD models in Fusion360 and printed/laser cut the case. I also installed a nearly fully-featured macOS for the Hackintosh.

## Motivation

I started this project in 2019, when small form factor (SFX) computer cases were expensive and inaccessible (and I was broke.) However, as a lover of technology and computers, I knew I had to build my own portable PC.
Thus, the Trash Bin was born from the [CAD files](https://www.reddit.com/r/sffpc/comments/aubxxd/louqe_ghost_s1_3d_model/) provided by the Louqe community of the Ghost S1.

![current build](/images/projects/trashbin/20210212_machines.jpg)

## Materials Exloration

**[PLA Plastic](/images/projects/trashbin/20200215_melted.jpg)**.  
When working at Stanford's Tech Desk, I had access to free 3D printing. Intrigued by the idea of a a fully 3D-printed case, I foolishly built a computer case with thermoplastics with low melting temperatures. Parts were warped after a few weeks of use. Only the PSU bracket is still made of PLA.

**[MDF](/images/projects/trashbin/20200214_lasercut.jpg)**.  
With access to a laser cutter through the Graduate School of Education, I began building more flat, structural parts out of MDF (medium density fiberboards). Despite being heavy, the core has held up the past 3 years with very slight bowing. The case was still only loosely held together by my hopes and dreams. Only the core center piece is made of MDF.

**Acrylic**.  
The top and 1 side panel was made out of acrylic to help keep the case...unique. It turns out, acrylic will crack and bow when exposed to computer heat exhaust. The current case does not utilize acrylic anymore.

**[Aluminum](/images/projects/trashbin/20201219_aluminum.jpg)**.  
After starting work, I was able to afford aluminum pieces. My goal: build a sturdy case that I can trust to travel with. So I got back to work in my sister's basement gluing and screwing metal together (because I didn't have welding tools.) I underestimated how difficult it'd be to work with metal. The front, back, and edges of the current case is made of aluminum.

## PC Components

**Original (2019)**.  
[The components] were chosen base on Hackintosh compatibility. I wanted to build sometihng from the ground up that would make running Mac on the machine as seamless as possible.
- CPU: Intel Core i7-8700K
- Mobo: AsRock Z390 Phantom Gaming ITX/ac
- GPU: Sapphire Radeon RX580 8GB NITRO+ Video Card
- PSU: EVGA SuperNOVA GM650 80+ Gold SFX

![preassembled components](/images/projects/trashbin/20191205_preassembly.jpg)

[assembled components](/images/projects/trashbin/20200211_inside.jpg)

**Rev.1 (2021)**.  
I wanted to run VR, and was hopeful Apple will continue to put out AMD drivers for their "Cheese Grater" Mac Pro. Upgrades were:
- GPU: Sapphire Radeon RX6900XT 16GB NITRO+
- PSU: Silverstone 1000 80+ Platinum SFX-L

[dualtone 3d printed pieces](/images/projects/trashbin/20200214_dualtone.jpg)  
[computer in standing mode](/images/projects/trashbin/20200216_tower.jpg)  
[continuity features working](/images/projects/trashbin/20200209_hackintosh.jpg)  
[computer in the dark with rgb](/images/projects/trashbin/20211129_inthedark.jpg)  
[vr and pc setup](/images/projects/trashbin/20210909_setup.jpg)  
[old pc case front](/images/projects/trashbin/20211127_front.jpg)  
[old pc case side](/images/projects/trashbin/20211127_brokendual.jpg)  
[old pc case back](/images/projects/trashbin/20211127_back.jpg)  
[old pc case top](/images/projects/trashbin/20211127_top.jpg)  
[old pc case](/images/gallery/trashbin.jpg)

<br />
<br />
<br />
<br />
<br />

---

# [Sumowoodo](https://me210sumowoodo.weebly.com): Robot-sumo Mechatron

## The Project

The Sumowoodo Project is our final for Intro to Mechatronics (ME210) at Stanford. Each team is to build an autonomous robot, which will compete against two other robots. Each robot will be positioned in a sector of a circular playing field, sectioned off by walls. The objective is to push on these walls to claim a larger slice of the circle. The team occupying the largest slice of the circle when time runs out wins.

![the diagram of the problem to solve](/images/projects/sumowoodo-pi-sumo.png)

[teammates](/images/projects/sumowoodo-squad.jpg)

## Responsibility

I was tasked with designing the software architecture, and helped with both the mechanical and electrical implementations (drilling holes, building circuits, soldering, wiring, etc.)

## The State Machine

With any software engineering endeavor, clear and concise code is important for understanding and debugging. That's why we first made sure that our state machine is theoretically sound, base on a rough mechanical design before ever touching code.  
Specifically, this gives 7 functional states (not including the start state/the black circle.)

![code of the program](/images/projects/sumowoodo-code2.png)

[state diagram of robot](/images/projects/sumowoodo-state-diag.png)

## The Code

We noticed that the incoming edges to a state always did the same function, so instead of 2 lists (for edges and nodes), we associate the functions directly with the state itself. This is important in microcontroller applications, where memory and processing power are limited.  
So, the code consists of 2 main loops: one to switch state, and one to act on the switched state. Of course, everything is event-driven (simulated, not through actual interrupts), with custom classes to handle motors, sensors, and timers. That way, we would only need to edit the constants.cpp file while setting up.  
Download the complete source code [here](/files/projects/sumowoodo-code.zip).

## The Final Product

![the final robot](/images/projects/sumowoodo.jpg)

<br />
<br />
<br />
<br />
<br />

---
