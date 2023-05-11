# **BOOMTOWN**
##### **working title:**  _ARCADIA_
### _A Letterkenny Themed Air Hockey Game_

![Image](https://media.tenor.com/IrfZ5LGhnckAAAAC/letterkenny-boomtown.gif)


#### Written by: Brian Cherchiglia
#### Published by: Cherch Games
##### Created on 05/04/2023
***
***

#### [**GitHub Repo**](https://github.com/cherch173/arcadia)
***



### _**Description**_
###### Barts.
##### Yorkie.
##### Scholtzy.
#### Fisky.
### BOOMTOWN

#### 
***
Ok.

This is what dreams are made of...

Deadlocked after a brutal overtime against the THREE RIVERS LAKERS we find ourselves at the tail end of the Shootout up 4-3.

It's all come down to you, **Boomtown**. You're the best Tendy in the league.

The name of the game is defense.

Jean Jacques François Jacques Jean (better known as "JJ Frankie JJ") has **the _last_ shot**.

Can you stop him? 

Can you get me that **W**???

_Need_ that **W**, boys!

***
***
#### _**CONCEPT**_

The idea is to create a simple marriage of AIR HOCKEY, PONG, and PENALTY SHOOUTOUTS into a browser-based game.

Using just a few **divs** and assigning them different **Classes**, **IDs** and using **CSS Flexbox** we can construct a facsimile Ice Rink, a Joystick, a Puck, a Goals, and more. 

We'll use CSS Style Property Manipulation to create the essence of movement and clock that to a setInterval function.


#### _**STICK**_ 

To make the stick (player1) I made a div and through combining Event Listeners and MouseMove I allow the user to control their Joystick up until a secret border at Center Ice.

We'll combine Collision Detection and Change Direction functions to emulate a stick directing the puck towards the goal (otherwise known as a _**shot**_).

![Image](https://media.tenor.com/kD3R5YQkmVgAAAAd/shoresy-sticks.gif)

**Sticks** are _unbelieveable_.

***

### _**Technologies**_

![Image](https://media.tenor.com/Ou43IQbE6YMAAAAd/letterkenny-jonesy-and-shorsey.gif)

- CSS Style Property Manipulation
- Event Listeners
- Callback Functions

### _**Getting Started**_
       
![Image](https://media4.giphy.com/media/25aH5q5MlW3XgpiX3v/giphy.gif?cid=6c09b952e039ebfaf587f81ce4bd459cc6f4406566bdf4dc&rid=giphy.gif&ct=g)

To begin select the FACE OFF Button which will drop the puck.

The game will initialize and Player1 (The Blue Circle)'s controller will become active and can be used via the Mouse.

You play the GOALIE so it's your job to STOP THE PUCK from entering the NET.

The puck will move upon contact and bounce of the parameters of the grid I build out of Divs and simply change the border style and color to emulate boards.

The MVP version will showcase the Puck DIV disappearing if it enters the GOAL DIV.

The 2.0 version of the game will run for a facsimile period elapsing when one player **scores 5 goals**. Aka first to 5 goals = winner, winner chicken dinner...

To PLAY AGAIN simply just click the FACE OFF Button which will reset the game.

***
***

### **WIREFRAME**
To effectively build this we'll be utilizing DIVS and and their GRID COORDNATES to create shapes and the assigning them Classes and IDs to assign them different property values.

![Image](https://github.com/cherch173/arcadia/blob/main/wireframe_boomtown.png?raw=true)


***

#### **STICK TAPE?**
![Image](https://gifs.knuth.me/letterkenny/you_dont_need_it.gif)
***
***
### **PROJECT FLOW**
- Weekend
    - Build Skeleton for main page (HTML)
    - Refine ReadME as concept improves
- School Week 
    - Functionality (JS)
    - Tweak Aesthetics (CSS)
- Final Stretch
    - Build **LANDING PAGE** and link it to GAME PAGE
    - Test Code on different browsers
    - Test Code on different devices
    - Deploy

***
***

### _**Task Lists**_
- [x] Make an adorable README.md
- [X] Complete **ICE** using HTML & CSS
- [X] Complete **STICK** using HTML & CSS
- [X] Complete **PUCK** using HTML & CSS
- [X] Compose Gameplay using JAVASCRIPT pt1
    - Make the _Puck_, _Stick_ and _Goal_ appear on the ICE

- [ ] Compose **GAMEPLAY** using JAVASCRIPT pt2 (
    - Make the _Puck_ CHANGE DIRECTION upon COLLISION
- [ ] Ensure Functionality
- [ ] Glam up all **AESTHETICS** using CSS

![Image](https://media.tenor.com/ciShAY-mXXkAAAAC/wonderous-letterkenny.gif)
***
***
### _**Credits**_
##### Fisky Gif: [Giphy](https://media2.giphy.com/media/VgBk8EZQILIaPIJymY/giphy.gif)
##### Shoresy Drumstick Gif: [Tenor](https://media.tenor.com/kD3R5YQkmVgAAAAd/shoresy-sticks.gif0)
##### Coach Laughing Gif: [Giphy](https://media4.giphy.com/media/25aH5q5MlW3XgpiX3v/giphy.gif?cid=6c09b952e039ebfaf587f81ce4bd459cc6f4406566bdf4dc&rid=giphy.gif&ct=g)
##### Reilly & Jonesy Technique Gif:  [Tenor](https://media.tenor.com/Ou43IQbE6YMAAAAd/letterkenny-jonesy-and-shorsey.gif) 
##### Coach Gif: [Reddit r/Letterkenny](https://gifs.knuth.me/letterkenny/you_dont_need_it.gif)
##### Stewart Gif: [Tenor](https://media.tenor.com/ciShAY-mXXkAAAAC/wonderous-letterkenny.gif)