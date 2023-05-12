// OK HERE WE GO //


// CONSTANTS //

const speed = 2
const XMAX = 635
const YMAX = 385
const XMIN = 17.3
const YMIN = 60
const pxMOVE = 1

// STATE //

// Interval //
let rightInterval
let leftInterval
let upInterval
let downInterval

// Joystick //
let stickX = 0
let stickY = 0
let stickSpeed

// Scoring //
let playerScore = 0
let compScore = 0


// CACHED ELEMENTS //

const stick = document.querySelector(".stick");
const puck = document.querySelector(".puck");
const faceOffButton = document.querySelector("#start");
const ice = document.querySelector(".ice");
// let iceRect = ice.getBoundingClientRect();
// let stickRect = stick.getBoundingClientRect();
let puckRect = puck.getBoundingClientRect();
console.log(puckRect)

const playerGoal = document.querySelector(".goal2")
const compGoal = document.querySelector(".goal")
// const playerGoalWidth = playerGoal.style.width;
// const playerGoalHeight = playerGoal.style.height;
// const compGoalWidth = compGoal.style.width;
// const compGoalHeight = compGoal.style.height;


// EVENT LISTENERS //

// JOYSTICK MOTION plus ICE BORDER & CENTER ICE RECOGNITION //

  const moveStick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    if (x < XMIN) {     
      // keeps stick within LEFT border of ICE
      // console.log(x);
      stick.style.left = x + 'px';
    }
    else if (y < YMIN) {
    // keeps stick within TOP border of ICE
      // console.log(y);
      stick.style.top = y + 'px';
    } 
    else if (x > 600) {
    // keeps stick within CENTER ICE (to the right)
      // console.log(x);
      stick.style.left = x + 'px';
    }
    else if (y > 333) {
  // keeps stick within BOTTOM border of ICE
      // console.log(y);
      stick.style.top = y + 'px'
    }
    stick.style.left = `${x - 10}px`;
    stick.style.top = `${y - 10}px`;
    stick.style.right = `${x + 10}px`;
    stick.style.bottom = `${y + 10}px`;
    // console.log(stick.style.right);
  }

// FUNCTIONS //

const movePuckDown = () => {
  clearInterval(upInterval);
  let y = puck.getBoundingClientRect().top;
  if (y > YMAX) {
    clearInterval(downInterval);
    upInterval = setInterval(movePuckUp, speed)
  }
  puck.style.top = `${y + pxMOVE}px`;
  // console.log(puck.style.left)
  collisionDetection(stick, puck);
}

const movePuckUp = () => {
  clearInterval(downInterval);
  let y = puck.getBoundingClientRect().top;
  if (y < YMIN) {
    clearInterval(upInterval);
    downInterval = setInterval(movePuckDown, speed)
  }
  puck.style.top = `${y - pxMOVE}px`;
  collisionDetection(stick, puck);
}
const movePuckLeft = () => {
  clearInterval(rightInterval)
  let x = puck.getBoundingClientRect().left;
  if (x < XMIN || stick.style.top > x < stick.style.right || stick.style.right > x > stick.style.bottom || stick.style.left === puck.style.right
    //if TOP LEFT portion of PUCK is GREATER THAN the BOTTOM RIGHT of STICK and LESS THAN the TOP RIGHT of the STICK that is a COLLISION
    //...OR if the BOTTOM LEFT of the PUCK is LESS THAN the TOP RIGHT of the STICK **AND** its GREATER THAN the STICK that is the CONDITION NEEDED to MOVE LEFT
    ) {
    clearInterval(leftInterval)
    rightInterval = setInterval(movePuckRight, speed);
  }
  puck.style.left = `${x - pxMOVE}px`;
  collisionDetection(stick, puck);
}

const movePuckRight = () => {
  clearInterval(leftInterval)
  let x = puck.getBoundingClientRect().left;
  if (x > XMAX || stick.style.top < x > stick.style.right || stick.style.right < x < stick.style.bottom ||
    stick.style.right === puck.style.left
    // if TOP LEFT portion of PUCK is LESS THAN the BOTTOM RIGHT of STICK and GREATER THAN the TOP RIGHT of the STICK that is a COLLISION
   // ...OR if the BOTTOM LEFT of the PUCK is GREATER THAN the TOP RIGHT of the STICK **AND** its LESS THAN the STICK that is the CONDITION NEEDED to MOVE RIGHT
    
    ) {
    clearInterval(rightInterval)
    leftInterval = setInterval(movePuckLeft, speed);
  }
  puck.style.left = `${x + pxMOVE}px`;
collisionDetection(stick, puck);
}

const puckMotion = () => {
  // let x = puck.getBoundingClientRect().left;
  // let y = puck.getBoundingClientRect().top;

  // if (x < XMIN) {
  //   if (leftInterval) {
  //     clearInterval(leftInterval)
  //   }
  //   rightInterval = setInterval(movePuckRight, speed);
  // }

  // if (y < YMIN) {
  //   if (upInterval) {
  //     clearInterval(upInterval)
  //   }
  //   downInterval = setInterval(movePuckDown, speed);
  // }
}
  
  // COLLISION DETECTION //
function collisionDetection(stick, puck) {
  if (puck.style.left === stick.style.right) {
    // console.log('s', stick.style.top) 
    // console.log('p', puck.style.top)
    // console.log('sR', stick.style.right)
    // console.log('pL', puck.style.left)
    console.log('collision')
  } 
  if (puck.style.right === stick.style.left) {
    console.log('collision')
  }
// 
}

// console.log('collisionDetection(stick, puckLeft)', collisionDetection(stickRight, puckLeft))
// console.log('collisionDetection(ice, puck)', collisionDetection(ice, puck))


// SCORING //

function goalScore() {
  if (puck <= 0) {
    playerScore += 1;
    updateScore();
    return;
  }
  if (puck >= playerGoal.style.height) {
    compScore += 1;
    updateScore();
    return;
  }
}


const startGame = () => {
  rightInterval = setInterval(movePuckRight, speed);
  downInterval = setInterval(movePuckDown, speed);
  document.addEventListener("mousemove", moveStick);
}
faceOffButton.addEventListener("click", startGame);