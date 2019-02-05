"The Clock Ticks for You" by "Hung Nguyen".
Release along with a website. Release along with an interpreter.
Release along with the source text. 

[Variables & Constructor]
Sunset is a time that varies. Sunset is 7:30 PM.
Sunrise is a time that varies. Sunrise is 6:00 AM.
Time of death is a time that varies. Time of death is 7:00 AM.
Started is a truth state that varies. Started is false.
Introspection counter is a number that varies. The introspection counter is 0.
Will to leave is truth state that varies. Will to leave is false.
Incorrect action is a number that varies. Incorrect action is 1.
Life satisfaction is a number that varies. Life satisfaction is 1.
Life dissatisfaction is a number that varies. Life dissatisfaction is 1. [From GDC talk by Ingold]
Happiness is a number that varies. Happiness is 50.
Use analog is a truth state that varies. Use analog is true. [TODO: could also use love mom]
Time changed by clock is a truth state that varies. Time changed by clock is false.
Seen clock is a truth state that varies. Seen clock is false.
Clock counter is a number that varies. Clock counter is 0.
Stopped reading is a truth state that varies. Stopped reading is false. 
Done reading is a truth state that varies. Done reading is false.
You regain composure is an action applying to nothing.
Regained composure is a truth state that varies. Regained composure is false.
Shredded is a truth state that varies. Shredded is false.
Viewed laptop is a truth state that varies. Viewed laptop is false.
You die is an action applying to nothing.
Easy mode is a truth state that varies. Easy mode is false. [just bold the verbs]
Photo count is a number that varies. Photo count is 0.

Table of Love Letter
Line (indexed text)	EOF (truth state)
"'Babe, I love you.
[line break]The words ‘I[’]m sorry’ was scribbled out, but you can still see it underneath the ink marks. ‘Thank you. For everything. For all the loving moments.’"	False
"‘I[’]m sorry that I must leave you early. I’m sorry I must leave our child motherless early. [if use analog is true]But I know he will grow up to be amazing regardless; you certainly did. I love him, as your mom did you.'[otherwise]'I can only hope I was a better mother to him, than yours was to you.'"	False
"'Still, Be his friend and his dad. Take him to the baseball games or buy him makeup; whatever he’s into.'"	False
"'Love him. Love him again. Love him twice, so he can feel my love, too.’[line break]The text becomes a blur as your eyes water and your hands shake.[line break][italic type]Breathe.[roman type] You don't want to keep reading."	False
"Still, you wipe away the tears, and read on. ‘Lastly, mourn for me. Cry, punch, scream, write; whatever you need. [line break]Then move on.'"	False
"'I will always love you; but please, move on. For yourself, for me, for our child. [line break]Forever yours. [line break]Your wife, Kate.'[line break]"	True [Kate In-young Dessalegn]

[Prefabs]
Nighttime is a scene. Nighttime begins when the time of day is after sunset. Nighttime ends when the time of day is sunrise.
A window is a kind of thing that is fixed in place. The description of a window is "Outside, Manhattan
[if nighttime is happening]looks like a sea of fireflies, blinking[otherwise]glitters gold[end if] beneath you.
Everything is perfect. [if introspection counter is greater than 4][line break]Because you want it to end like this.".

[Verbs/ synonyms]
Helping is an action applying to nothing. Understand "help" and "I don't know" as helping.
Understand "sink in/into [something]", "sit down on [something]", "fall on/onto [something]", and "jump in/into/on [something]" as entering.
[TODO: make music a real thing >:D]
Understand "chair" as armchair.
Understand "close eyes", "breathe", "wait here", "move on", and "close my/your eyes" as waiting.
Understand "look around" as looking.
Understand "view [something]" as examining.
Understand the command "read" as something new. Understand "read [something]" and "read what's on [something]" as reading. Reading is an action applying to one thing. 
Understand the command "tear" as something new. Understand "tear [something]" as tearing. Tearing is an action applying to one thing. Understand "shred [something]" and "blend [something]" as tearing.
Understand "tap [something]" and "sign up on/for/to [laptop]" as touching.
Understand the command "kill" as something new. Understand "kill [someone]" as killing. Killing is an action applying to one thing.
Understand the command "hint" as something new. Understand "make it simple" as hinting. Hinting is an action applying to nothing.
Understand "die" as sleeping.
[Start]
When play begins:
	now the command prompt is "What do you do this moment? >";
	now the time of day is 6:30 PM;
	Say "[unicode 91]cw: euthanasia, suicide/suicidal behavior, depression[unicode 93][paragraph break]";
	[Say "[unicode 91]type 'help' for common commands often used in interactive fiction pieces like these[unicode 93][paragraph break]";]
	Say "[italic type]Is this the real life?[line break]Is this just fantasy?[line break]Caught in a landslide[line break]No escape from reality...[roman type][line break]".
	
[Update]
Every turn:
	If time changed by clock is false and seen clock is true:
		Let X be a random number from 5 to 30;
		Let Y be the time of day plus x minus 1 minutes;
		Now the time of day is Y;
		[say "It's been [X in words] minutes. It is [time of day in words]."; TODO: do X in clock]
	otherwise:
		now time changed by clock is false;
	Now happiness is (100 * life satisfaction) / (life satisfaction + life dissatisfaction); 
	If time of day >= time of death, and time of day is before 12:00 PM:
		you die in 0 turns from now.

[Rooms]
Bedroom is a room.  The description is "Your bed is perfectly made[if introspection counter is greater than 4] for you[end if]. Outside the window, you can see
[if nighttime is happening]the beautiful Manhattan skyline at night like a million stars[otherwise]the sun setting on the Manhattan skyline, bleeding orange onto you[end if].
[if photo count is 1]You can feel your mom's presence, but it feels empty.[otherwise if photo count is 2]Everything feels right. The bed invites you.[otherwise if photo count is 3]You don't want to be here. It's not the end for you yet.[end if]
The living room lies to the [if easy mode is true][bold type][end if]north[if easy mode is true][roman type][end if] of your bedroom. ". [TODO Change the backdrop scenery]
Living Room is a room. The description is "[if introspection counter < 3]Mostly bare, just the way you wanted it yesterday.[otherwise if introspection counter < 5]Mostly bare, but it's beginning to remind you of something.[otherwise]Looking around again, the room is filled with the mementos of your life.[end if] An armchair sits dead center, facing the window. [if seen clock is true]The clock ticks, signaling the passage of time.[end if] The bedroom lies to the [if easy mode is true][bold type][end if]south[if easy mode is true][roman type][end if][if will to leave is true], and a door lies to the east[end if]." It is north of the Bedroom.
Hallway is a room. "It's pitch black. The light from the living room behind you isn't doing anything at all.". It is east of the Living Room.
The Space of Reflection is a room. "You shouldn't be here. Your head hurts." It is east of the Hallway.

[Items/Instance objects]
The description of a thing is usually "[The noun] looks just the way you remember it.".
A bed is a thing in Bedroom. It is an enterable supporter and fixed in place. The description is "Tidy and perfect; you probably could sink into it. [if introspection counter > 4]A good place to end, you think."[Verb: sinking into] [TODO: change fake doors to real doors]
The bedroom window is a window in Bedroom. [Enables photoframe]
The living room window is a window in Living Room. [Enables photoframe]
The armchair is a thing in the Living Room. The armchair is an enterable supporter and fixed in place. The description is "It's a perfect replica of the same one your grandfather owned. It even [if easy mode is true][bold type][end if]smells[if easy mode is true][roman type][end if] of old cigarette smoke."
The clock is a thing and fixed in place. The description is "Well, time sure flies. The [if easy mode is true][bold type][end if]clock[if easy mode is true][roman type][end if] reads [if use analog is true][time of day in words][otherwise][time of day][end if]. [if photo count > 0]Thank you, mom. [end if]". 
The desk is a supporter and fixed in place. The description is "A clear, wooden desk, popular back in the 2030[']s.  You picked it out when you first got your own place. It brings back memories."
The shredder is a container on the desk and fixed in place. The description is "Despite its small size, this shredder will [if easy mode is true][bold type][end if]blend[if easy mode is true][roman type][end if] almost anything into dust."
The laptop is a thing on the desk and fixed in place.  The description is "An old laptop. It's a perfect replica of your university's Surface Air, and you're reminded how old you are when you realized it doesn't support air touch; instead, you can only [if easy mode is true][bold type][end if]tap[if easy mode is true][roman type][end if] it."
The letter is a thing on the desk. The description is "Your wife[’]s cursive handwriting is difficult to read. Despite having read it a million times, you want to [if easy mode is true][bold type][end if]read[if easy mode is true][roman type][end if] it again[if done reading is true] and again[end if].".
The shredded letter is a thing. The description is "This is what[']s left of your letter.".
The photo album is a thing. The photo album is nowhere. The description is "Family. That's how you ended here. It only feels right that you should think of them before you go. ".

[Interactions/Rules]
After printing a parser error:
	if incorrect action > 2:
		say "If you are new to interactive fiction, you may like to try typing 'help.'";
	otherwise:
		increase incorrect action by 1.

After examining the photo album:
	if photo count is less than 3:
		say "Open the album? >";
	if photo count is 0 and player consents:
		say "You open the album to a random page.";
		say "You see a picture of your mom, pregnant with you. She's candidly smiling, so brightly. You trace the crinkles on her face and the scars on her forarm. [line break][if use analog is true]The imperfections didn't take away from who she was. She wouldn't be mom without them.[otherwise]It seems like she, too, was just as unsure of life as you are now.[end if]You look up, and there she is. Your mom, standing in the room. You know it's just a figment of your imagination, manifested through the technology. [italic type]Why, mom? Why?[roman type][line break]";
		say "Do you tell her you [if use analog is true]love[otherwise]hate[end if] her? >";
		if use analog is true and player consents:
			say "The [if nighttime is happening]starlight[otherwise]sunlight[end if] illuminates her sad smile. 'I'm sorry I passed so early.'";
			increase life satisfaction by 1;
		otherwise if player consents:
			say "The [if nighttime is happening]starlight[otherwise]sunlight[end if] casts shadows over her saddened face. 'I'm... sorry. I didn't think I would turn out that way. Your dad left, then AI took over my field, and I...' her voice trails off. She looks at you. 'But these are just excuses. I wasn't a good mother. I wish I could've done better, but I didn't. I wish things were different.'[line break]";
			Increase life dissatisfaction by 1;
		say "She's the reason you wanted to live forever. You wanted love to be forever. She moves closer, and holds your hand.[line break]'But don't let me be the reason that keeps you from happiness. I am long gone.' She moves her fingers over the back of your hand.";
		say "'I hope you can move on. I don't want to be clich[unicode 233], but I think life is like a flower: beautiful [italic type]because[roman type] it is fleeting,' she continues quietly.";
		say "Continue holding her hand? >";
		if player consents:
			say "You hold on tight, as if you were still five and you were crossing the street with her. [line break]'I love you, mom. [if use analog is true]I didn't say it enough.[otherwise]I don't even remember ever saying that.[end if] Thank you for giving me life.'";
		otherwise:
			say "You know. [italic type]I know.[roman type] You look into her eyes. Your sight's blurring a little.[line break]You let go. [line break]'[if use analog is true]Thank you[otherwise]I forgive you[end if].'";
		say "She left last time, when you were young. The [if nighttime is happening]stars reflected through her [end if]tears rolls down her crinkled cheeks. [italic type]Breathe,[roman type] you tell yourself. With your fists clenched, eyes shut tight, head tilted up to heaven, you turn away."; [great place to play music]
		increase life satisfaction by 1;
		increase photo count by 1;
	otherwise if photo count is 1 and player consents:
		say "You open the album to a different page.";
		say "There's a picture of your grandpa, holding grandma up in his arms. He must have been only around 40.";
		increase photo count by 1;
	otherwise if photo count is 2 and player consents:
		say "You turn to the last page.";
		say "Your kids, rolling around the the sand. They're not even looking at the camera.[line break]You love them so much.";
		increase photo count by 1;
		now the photo album is nowhere;
		now will to leave is true;
	otherwise:
		say "You close it. You've thought about them enough today.";
		stop the action.

Before hinting: 
	say "The bold text are now usually your clue; it'll often be a [bold type]verb[roman type] or a [bold type]noun[roman type].";
	Now easy mode is true.
Instead of helping, say "Common IF commands: [line break]
-To e[unicode 91]x[unicode 93]amine something[roman type] that you can see [italic type]e.g. 'x table'[roman type] or [italic type]'examine table'[roman type][line break]
-To [unicode 91]l[unicode 93]ook around the room [italic type]e.g. 'look'[roman type][line break]
-To move in a cardinal direction: [unicode 91]N[unicode 93]orth/[unicode 91]e[unicode 93]ast/[unicode 91]s[unicode 93]outh/[unicode 91]w[unicode 93]est [italic type]e.g. 'Move east'[roman type] or simply [italic type]'e'[roman type][line break]
-To interact with objects: [italic type]e.g. 'read letter', 'sit down on chair', 'get in bed' [roman type][line break]
[if introspection counter > 0]-[unicode 91]Z[unicode 93]/wait[line break]
[otherwise if introspection counter > 3]
-Read[line break]
-Tap[line break]
-Shred[line break]
[otherwise if introspection counter > 4]
-Sleep[line break]
[end if]
[line break]There are other commands. Don't be afraid to try. Read carefully. If all else fails, type 'make it simple.'".
Instead of listening, say "You hear nothing[if seen clock is true] besides the ticking of the clock[end if]."
Before examining yourself:
	say "You look down at yourself. You're wearing your best Sunday clothes, but it feels like wearing pajamas."; [TODO: change this to reflect your life satisfaction]
	stop the action.
Before looking:
	if started is false:
		now started is true;
		say "You mentally turn off Queen from playing in your head.
				[line break][italic type]It's old and overplayed,[roman type] you thought to yourself and get out of bed.".
Before entering the bed:
	say "You fall onto the bed, as it engulfs you. [line break]Ah. It's soft. You could stay here forever.";
	if introspection counter is greater than 4 or photo count > 2:
		say "You climb under the sheets, and tuck yourself in. You close your eyes, [run paragraph on]";
		if happiness > 70:
			say "and enter a peaceful slumber. You have been loved, you have loved. Death comes naturally, and it just happens to be your turn. And maybe that's okay. [run paragraph on]";
		otherwise if happiness > 49:
			say "realizing you didn't amount to much in your life. [italic type]Just a victim of circumstance, [roman type]you thought to yourself. [run paragraph on]";
		otherwise if happiness > 30:
			say "crying. You miss them so much. Everyone you loved, dying one by one. [italic type]Everyone dies.[roman type] It[']s your turn. [run paragraph on]";
		otherwise if happiness > 0:
			say "but only for a brief moment. You open your eyes to a large syringe of pentobarbital next to you. You reach for it and plunge it into your heart. You close your eyes while making sure the full dose enters your bloodstream. [run paragraph on]";
		end the story;
		say "You won't wake again.";
	otherwise:
		say "[line break]You get up again, though. [italic type]There's a time and place for everything. But not now.";
	stop the action.
	
Instead of touching armchair, say "The fabric feels worn out.".
Instead of smelling armchair, say "You put your nose to the fabric and inhale the old tobacco smoke. [line break]It's home.".
Entering armchair is being reminiscient. Touching armchair is being reminiscient. Smelling armchair is being reminiscient.
Before being reminiscient: [TODO: make gendered memories or choices]
	if introspection counter is 0:
		say "You touch the fabric of the chair, and memories of being with your family flood back to you. You sit down. The smoky smell reminds you of your grandfather, and the way he always smiled at you when you walked by. You lean back and close your eyes to take in a deep breath. Your grandfather passed when you were fifteen. It'll be your turn soon. [line break]You open your eyes and turn towards your room, wanting to look around."; [TODO: add something that changes base on nighttime]
		Increase introspection counter by 1;[should now be 1]
		move the player to the armchair, without printing a room description;
		stop the action.

Before looking in the Living Room:
	if introspection counter is 1:
		Say "You wanted this room like this. It reminds you of the emptiness of life, and your impending death.
					[line break]You just want to close your eyes and [if easy mode is true][bold type][end if]wait[if easy mode is true][roman type][end if] here.";
		Increase introspection counter by 1; [should now be 2]
		stop the action.
		
Before waiting:
	if introspection counter is 2:
		say "[italic type]Breathe,[roman type] you tell yourself. In the silence, the [if easy mode is true][bold type][end if]clock[if easy mode is true][roman type][end if] ticks.";
		Now the clock is in the Living Room;
	otherwise:
		say "You inhale. Then exhale. [line break]You wait, patiently. [if introspection counter is 6]You look around for the bed.";
	if introspection counter is 4 and done reading is true:
		Now regained composure is true.

Examining the clock is checking the time. Reading the clock is checking the time.
Before checking the time:
	Increase clock counter by 1;
	Now time changed by clock is true;
	Let X be a random number from 10 to 60;
	Let Y be the time of day plus x minus 1 minutes;
	If Y > time of death and Y < 11:59 am:
		Let Y be the time of death;
	Now the time of day is Y;
	If clock counter is greater than 4:
		say "Life is composed of moments, unmeasurable by any clock.";
	if clock counter is greater than 5:
		say "[italic type]The more conscious we are of our time left, the less time we actually end up having. [roman type]";
	If seen clock is false:
		Increase introspection counter by 1; [should now be 3]
		Now seen clock is true;
		say "Your mother taught you how to read an analog clock. [line break][italic type]How 21st century she was. [roman type][line break]Do you remember how to read an analog clock? >[run paragraph on]";
		if player consents:
			say "She was a good teacher, despite not being a good mother.
				[line break]You take a deep breath. Still, you miss her. Her laughter was contagious. Her love, although conditional, was abundant. She wouldn’t want to see you like this.
				[paragraph break]You miss her.[paragraph break]";
			Now use analog is true;
			Increase life satisfaction by 1;
		otherwise:
			say "The memory of your mother makes your blood boil; she was never there for you. She was a terrible teacher, and an even worse mother. She stopped making dinner for the family when you were 6. She stopped picking you up from school when you were 9. She forgot your 13th birthday, and every birthday after that.
					[line break][italic type]    Breathe.[roman type][line break]Her birth date is July 29th, 2003.
					[line break][italic type]    Breathe.[roman type][line break]She’s a Leo. Your grandfather was also a Leo. You miss him.
					[line break][italic type]    Breathe.[roman type][line break]You regain some composure, as your mind wandered back to him."; [TODO: haven't done anything here]
			Now use analog is false;
			Increase life dissatisfaction by 2;
		if use analog is true:
			say "With your mother in your mind and heart, you're reminded that you have until [time of death in words] tomorrow morning, when you, too, will pass and join her.";
		otherwise:
			say "With your grandfather in your mind and heart, you're reminded that you have until [time of death] tomorrow, when you, too, will pass and join him.";
		now the photo album is in the Bedroom;
		continue the action;
	otherwise if introspection counter is 3:
		say "Ah, time. For thousands of years, humankind worried about their limited lifespan. But no more. In the last century, the advancements in medicine have allowed wealthy people to streamline the ability to live forever. The layman[’]s explanation? The cells are told to stop aging, and failed organs are replaced with artificial ones.[line break]
			[line break]And it was a simple decision, really. [line break]
			[line break]You can remember the exact layout of your desk, years ago, when you made the decision. You turn around and see it just the way it was that day, in the corner of the room. ";
		now the desk is in the Living Room;
		Increase introspection counter by 1; [should now be 4]
	say the description;
	stop the action.
Check reading:
	if the noun is the letter:
		say "The letter reads:[line break]";
		repeat with i running from 1 to the number of filled rows in the Table of Love Letter:
			choose row i in the Table of Love Letter;
			say "[Line entry]";
			if EOF entry is true:
				say "Your legs give out beneath you, and you break down in tears. You just need a [if easy mode is true][bold type][end if]moment[if easy mode is true][roman type][end if] to be okay.";
				You regain composure in 1 turn from now;
				Now done reading is true;
				break;
			say "[line break]Continue?  >[run paragraph on]";
			if player consents:
				next;
			otherwise:
				Say "You put the letter down. Her words remind you of her too much.";
				Now stopped reading is true;
				break;
	otherwise if the noun is the laptop:
		Now viewed laptop is true;
		say "August 10th, 2057 [line break]Dear friend, welcome to the future. My name is Steven Musk, founder of Elon Tech. If you are here, you know we have mastered death.  [line break]I[']m proud to announce that today, Elon Tech will open up this technology to the public, allowing anyone to be able to extend their lives indefinitely.  Join the human evolution with me. Subscribe below.[paragraph break][bold type]Sign Up Now";
	otherwise if the noun is shredded letter:
		say "Just the shredded handwriting of your wife.".
At the time when you regain composure:
	if introspection counter is 4 and regained composure is true:
		say "[italic type]Breathe,[roman type] you tell yourself. You wipe away the tears, regain control of your legs and arms, and pull yourself up. You look at the letter in your hand.".

Tearing the letter is destroying the momento. Inserting letter into the shredder is destroying the momento. 
Before destroying the momento:
	if shredded is true:
		say the description;
		stop the action;
	say "Are you sure you want to shred the [noun]? >[run paragraph on]";
	if player consents:
		remove letter from play;
		Now shredded is true;
		Move the shredded letter to the shredder;
		Now the description of the shredder is "You turn towards the shredder, and is reminded that it had already destroyed your letter.";
		say "Feeling betrayed, you [if use analog is true]shove[otherwise]put[end if] the [noun] into the shredder. 
			[line break]'Bbbbbbbbbshhhhhhzzzzzzzzzzzzzzzzzzzz,' the shredder hummed.[paragraph break]The [noun] is now completely destroyed, just like it was before, when you first read it years ago.";
		say "[italic type]How could she?[roman type] You thought to yourself back then. She didn't even fight it; she just accepted her death, and let the illness take her. You turn to the laptop, and you remember how you found yourself here.";
	stop the action.
Instead of touching laptop:
	say "There's only one button to tap, and it reads [bold type]'Sign Up Now.'[roman type] [if viewed laptop is false]You should probably read what's on the laptop first, though. Sign up anyway? [otherwise]Sign up? [end if]>[run paragraph on]";
	if player consents:
		Increase introspection counter by 1; [should now be 5]
		remove laptop from play;
		remove shredder from play;
		if shredded is true: 
			increase life dissatisfaction by 3;
		Otherwise: 
			increase life satisfaction by 2;
		If regained composure is true, increase life satisfaction by 3;
		if stopped reading is true and done reading is false, increase life dissatisfaction by 1;
		say "This is what you wanted. To live forever, so you can love forever, and never leave anyone behind. Your child, your grandchild, and your great-grandchild will never have to know loss. [paragraph break]How wrong you were. [if happiness < 40]You experienced loss. All they saw when they looked at you, was loss. Of a mother. Of a grandfather. Of a normal life.[otherwise]They have to experience loss, because that makes them love more passionately. They have to experience loss, to appreciate what's around them. [line break]For you to appreciate what's around [italic type]you.[roman type][end if][italic type]Why did I click it? [roman type]Here you are now, waiting out the last few moments of life. Intentionally waiting for someone to put you down, like a dog. You chuckle in the silence as tears stream down your face. [line break][italic type]This is the end. There's only one thing left for me to do here[roman type]. It's already [if use analog is true][time of day in words][otherwise][time of day][end if], and you're getting tired.".

At the time when you die:
	say "Your strength suddenly fades. You collapse. [if seen clock is true and use analog is true]It must be [time of death in words] in the morning. [otherwise if seen clock is true and use analog is false]It must be [time of death]. [end if] [run paragraph on]";
	if happiness > 74:
		say "You had been loved, you had loved. Death comes naturally, and it just happens to be your turn. [run paragraph on]";
	otherwise if happiness > 49:
		say "[italic type]Just a victim of circumstance, [roman type]you lie to yourself, one last time. [run paragraph on]";
	otherwise if happiness > 24:
		say "You miss them so much. Everyone you loved, dying one by one. [italic type]Everyone dies.[roman type] It's your turn. [italic type]Why was I born?[roman type] [run paragraph on]";
	otherwise:
		say "You can't feel your legs, as you collapse down on the ground. Then your sight goes. [line break]Then nothing. [run paragraph on]";
	end the story;
	say "You won't wake again.".
	
Sleeping is wanting to die. Killing yourself is wanting to die.
Before wanting to die:
	if introspection counter < 5 and photo count is not 2:
		say "You don[']t quite think it[']s time yet.";
	otherwise:
		say "You[']re getting rather tired. The bed must be nearby.";
	if bed is visible and introspection counter is 5 or photo count is 2:
		say "You just want to get in bed...";
	stop the action;

Before going to the Hallway:
	say "You're not supposed to leave. Are you sure you want to?  >[run paragraph on]";
	if player consents:
		continue the action;
	otherwise:
		stop the action.

Before going to the The Space of Reflection:
	if introspection counter is less than 5:
		say "It's pitch black.";
		stop the action.
