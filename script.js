// OK HERE WE GO //


// CONSTANTS //

const SPEED = 5
const XMAX = 638
const YMAX = 410
const XMIN = 17.3
const YMIN = 30
const PXMOVE = 1

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


// CACHED ELEMENTS //

const stick = document.querySelector(".stick");
const puck = document.querySelector(".puck");
const startButton = document.querySelector("#start");
const ice = document.querySelector(".ice");
let contRect = ice.getBoundingClientRect();
let padRect = stick.getBoundingClientRect();
console.log(contRect)


// EVENT LISTENERS //

//// D-PAD ATTEMPT ////

// const moveStick = (key.event) => {
  // if (event.keyCode === 37) {
  //   // move stick to the left using LEFT ARROW
  //   if (stickX < XMIN) {
  //     stickX -= stickSpeed;
  //     console.log(stickX);
  //     stick.style.left = stickX + 'px';
  //   }
  // } else if (event.keyCode === 39) {
  //   // move stick to the right using RIGHT ARROW
  //   if (stickX > XMAX) {
  //     stickX += stickSpeed;
  //     console.log(stickX)
  //     stick.style.left = stickX + 'px';
  //   }
  // } else if (event.keyCode === 38) {
  //   if (stickY < YMIN) {
  //     stickY -= stickSpeed;
  //     console.log(stickY)
  //     stick.style.top = stickY + 'px';
  //   }
  // } else if (event.keyCode === 40) {
  //   if (stickY > YMAX) {
  //     stickY += stickSpeed;
  //     console.log(stickY);
  //     stick.style.top = stickY + 'px';
  //   }
  // }

// JOYSTICK MOTION plus ICE BORDER & CENTER ICE RECOGNITION //

  const moveStick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    if (x < XMIN) {     // keeps stick within LEFT border of ICE
      x -= stickSpeed;
      console.log(x);
      stick.style.left = x + 'px';
    }
    else if (y < YMIN) {
      y -= stickSpeed;    // keeps stick within TOP border of ICE
      console.log(y);
      stick.style.top = y + 'px';
    } 
    else if (x > 322) {
      x += stickSpeed;     // keeps stick within CENTER ICE (to the right)
      console.log(x);
      stick.style.left = x + 'px';
    }
    else if (y > 385) {
      y += stickSpeed;    // keeps stick within BOTTOM border of ICE
      console.log(y);
      stick.style.top = y + 'px'
    }
    stick.style.left = `${x - 10}px`;
    stick.style.top = `${y - 10}px`;
  }

// FUNCTIONS //

const movePuckDown = () => {
  clearInterval(upInterval);
  let y = puck.getBoundingClientRect().top;
  if (y > YMAX) {
    clearInterval(downInterval);
    upInterval = setInterval(movePuckUp, SPEED)
  }
  puck.style.top = `${y + PXMOVE}px`;
}

const movePuckUp = () => {
  clearInterval(downInterval);
  let y = puck.getBoundingClientRect().top;
  if (y < YMIN) {
    clearInterval(upInterval);
    downInterval = setInterval(movePuckDown, SPEED)
  }
  puck.style.top = `${y - PXMOVE}px`;
}
const movePuckLeft = () => {
  clearInterval(rightInterval)
  let x = puck.getBoundingClientRect().left;
  if (x < XMIN) {
    clearInterval(leftInterval)
    rightInterval = setInterval(movePuckRight, SPEED);
  }
  puck.style.left = `${x - PXMOVE}px`;
}

const movePuckRight = () => {
  clearInterval(leftInterval)
  let x = puck.getBoundingClientRect().left;
  if (x > XMAX) {
    clearInterval(rightInterval)
    leftInterval = setInterval(movePuckLeft, SPEED);
  }
  puck.style.left = `${x + PXMOVE}px`;
}

const puckMotion = () => {
  let x = puck.getBoundingClientRect().left;
  let y = puck.getBoundingClientRect().top;

  if (x < XMIN) {
    if (leftInterval) {
      clearInterval(leftInterval)
    }
    rightInterval = setInterval(movePuckRight, SPEED);
  }

  if (y < YMIN) {
    if (upInterval) {
      clearInterval(upInterval)
    }
    downInterval = setInterval(movePuckDown, SPEED);
  }
}

// COLLISION DETECTION //

const stickRight = stick.getBoundingClientRect().right;
const puckLeft = puck.getBoundingClientRect().left;

function isBoomtown(stick, puck) {
  return (stickRight + stick.clientWidth) >= puckLeft && (puckLeft + puck.clientWidth) >= stickRight;
}

console.log('isBoomtown(stick, puckLeft)', isBoomtown(stickRight, puckLeft))
console.log('isBoomtown(ice, puck)', isBoomtown(ice, puck))


// CHANGE DIRECTION after COLLISION //

const boomtown = () => {
  clearInterval(leftInterval)
  let stickRight = stick.getBoundingClientRect().right;
  let puckLeft = puck.getBoundingClientRect().left;
  if (puckLeft > stickRight) {
    clearInterval(rightInterval)
    leftInterval = setInterval(puck, SPEED);
  }
  puck.style.left = `${x + PXMOVE}px`;
}


// function checkCollision() {
// let stickBoom = stick.getBoundingClientRect().right;
// let puckBoom = puck.getBoundingClientRect().left;
// let boom = (stickBoom === puckBoom)
//   if (boom) {
//     return puckMotion;
//   }
// }



const startGame = () => {
  rightInterval = setInterval(movePuckRight, SPEED);
  downInterval = setInterval(movePuckDown, SPEED);
  document.addEventListener("mousemove", moveStick);
}
startButton.addEventListener("click", startGame);