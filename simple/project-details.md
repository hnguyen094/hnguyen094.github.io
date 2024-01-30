# [AutoTA](https://github.com/willcrichton/r-autota): Debugging Assistant for R

> AutoTA is an RStudio addin to help novice data scientists debug common R errors. Auto TA provides real-time, in-context support for common errors like object not found and unexpected string constant.

![screenshot of AutoTA in action](https://camo.githubusercontent.com/6b56eb98d32e9aeb70acffe538ef6d3407dcdf25f5adee73a657600821b47708/68747470733a2f2f707265766965772e726564642e69742f67743039797935796f696a34312e706e673f77696474683d3335383426666f726d61743d706e67266175746f3d7765627026733d38653361643262366133386331646162323962393866326334343837343962313238643361363633)

## My Contributions

In this Stanford class project, I exposed the abstract syntax tree of the R application to the front end of the plugin. This AST is the compiler's understanding of the written code, and is used to explain to the user the components of the offending code statement and how they might be able to fix it.
In addition, I designed and implemented the icons and UX of the application.

---

# [Fidelius](https://crypto.stanford.edu/fidelius/): Protecting Secrets from Compromised Browsers

> Users regularly enter sensitive data, such as passwords, credit card numbers, or tax information, into the browser window. While modern browsers provide powerful client-side privacy measures to protect this data, none of these defenses prevent a browser compromised by malware from stealing it. Fidelius is a new architecture that uses trusted hardware enclaves integrated into the browser to enable protection of user secrets during web browsing sessions, even if the entire underlying browser and OS are fully controlled by a malicious attacker.  
As part of this project, we develop the first open source system that provides a trusted path from input and output peripherals to a hardware enclave with no reliance on additional hypervisor security assumptions. These components may be of independent interest and useful to future projects.

![diagram showing the trusted display](/images/gallery/fidelius.jpg)
![image of the hardware used](/images/gallery/fidelius_1.jpg)

## My Contributions

In this Stanford research paper, I was a part of a 2-person mini-team that focused on enabling the protected data to be shown on a trusted display. We (Forest Fraser and I) implemented the solution by encrypting the necessary data in the Intel SGX enclave and transmitting it over Bluetooth to the display, where we then decrypt to show the user the sensitive data on a secure overlay.

---

# [Inclusive XR Testing](https://devpost.com/software/inclusive-user-testing-in-vr)
> … our goal is to create a tool that allows user testers to provide timely feedback on VR projects by annotation in an efficient and accessible way.


## My Contributions

In this Reality Hack hackathon project, I worked on enabling the technologies necessary to allow for inclusive user testing for Unity projects. Specifically, I integrated Google's Speech-To-Text and Azure's Text-To-Speech as well as created the screenshot annotation systems in Unity. This allows for both voice-only or controller-only paths to give user testing feedback inside VR.

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

![the child labeling the emotion in the image](/images/projects/guesswhat_child_old.png)  ![the parent identifying if the child's classification was correct](/images/projects/guesswhat_parent_old.png)

**Challenge**. The original setup: The child guesses at 10 emotions, then passes the phone to the parent. Then, the parent either confirms that the child guessed correctly, or fixes the child's guess with the correct emotion label for that gif. This felt clunky and space-inefficient in landscape mode, which is how we first received the game mode. In fact, how do we make data labeling fun?

![image](/images/projects/guesswhat_figma.png)

**Solution**. The lead mobile developer and I sat down to prototype various ideas. We knew that we wanted to make it portrait, as we'll be using a specific Tik Tok challenge that involved emoting to the camera. We also wanted the experience to be more engaging.  
We eventually came up with a competitive mode: the child and parent would rate the same 10 videos separately at the same time, sitting across from each other (like shown.) We were able to prototype it in a couple weeks, and started doing beta/feasability testing with current participants. With their input, we were able to fix many bugs and the lab gained valuable feedback on where to go from there.

[Final Demo](/videos/projects/guesswhat_HDCompDemo.mp4)

---

# Oculus Hand-Tracking for Gesture & ASL Recognition

This was a personal project to implement hand pose recognition using the Oculus SDK.

---

# [Growing Up Viet](/tet): Vietnamese Stories in America

> We (Vy & Hung) started out this project with the intention of capturing subtle, "Vietnamese" moments that we experience as Vietnamese-identifying young adults in America. As we embarked on this journey collecting stories, we were able to emotionally connect back to our heritage and each other, in a time of physical disconnect, in ways we never could have imagined before.  
So with this **audio-first, nonlinear walking simulator** of stories from Vietnamese-identifying students, we want to celebrate and share our unique Vietnamese culture, experiences, and perspectives. This is **not a game**; rather, it is a **virtual space** that will connect you to a brief moment within the five thousand years of Vietnamese heritage, using the anonymous voices of those born near the start of the millennium living in America.

![Screenshot of the experience](/images/gallery/vnstories.jpg)

# My contribution

In this senior project, my partner Vy Mai and I did interviews and collected them in a React web application. I implemented the movement, spatial audio system, and cookie-based save state to allow for a game-like interface to allow the listener to experience the stories. Thought was put into the emotional beat of the listener throughout the experience.