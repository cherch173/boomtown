// OK HERE WE GO //


// CONSTANTS //

const speed = 5
const XMAX = 638
const YMAX = 425
const XMIN = 17.3
const YMIN = 50
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


// CACHED ELEMENTS //

const stick = document.querySelector(".stick");
const puck = document.querySelector(".puck");
const startButton = document.querySelector("#start");
const ice = document.querySelector(".ice");
// let contRect = ice.getBoundingClientRect();
// let stickRect = stick.getBoundingClientRect();
// let puckRect = puck.getBoundingClientRect();
// console.log(puckRect)


// EVENT LISTENERS //

// JOYSTICK MOTION plus ICE BORDER & CENTER ICE RECOGNITION //

  const moveStick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    if (x < XMIN) {     // keeps stick within LEFT border of ICE
      x -= stickSpeed;
      // console.log(x);
      stick.style.left = x + 'px';
    }
    else if (y < YMIN) {
      y -= stickSpeed;    // keeps stick within TOP border of ICE
      // console.log(y);
      stick.style.top = y + 'px';
    } 
    else if (x > 322) {
      x += stickSpeed;     // keeps stick within CENTER ICE (to the right)
      // console.log(x);
      stick.style.left = x + 'px';
    }
    else if (y > 385) {
      y += stickSpeed;    // keeps stick within BOTTOM border of ICE
      // console.log(y);
      stick.style.top = y + 'px'
    }
    stick.style.left = `${x - 10}px`;
    stick.style.top = `${y - 10}px`;
    stick.style.right = `${x - 10}px`;
    console.log(stick.style.right);
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
}

const movePuckUp = () => {
  clearInterval(downInterval);
  let y = puck.getBoundingClientRect().top;
  if (y < YMIN) {
    clearInterval(upInterval);
    downInterval = setInterval(movePuckDown, speed)
  }
  puck.style.top = `${y - pxMOVE}px`;
}
const movePuckLeft = () => {
  clearInterval(rightInterval)
  let x = puck.getBoundingClientRect().left;
  if (x < XMIN) {
    clearInterval(leftInterval)
    rightInterval = setInterval(movePuckRight, speed);
  }
  puck.style.left = `${x - pxMOVE}px`;
}

const movePuckRight = () => {
  clearInterval(leftInterval)
  let x = puck.getBoundingClientRect().left;
  if (x > XMAX) {
    clearInterval(rightInterval)
    leftInterval = setInterval(movePuckLeft, speed);
  }
  puck.style.left = `${x + pxMOVE}px`;
// collisionDetection(puckRect);
}

const puckMotion = () => {
  let x = puck.getBoundingClientRect().left;
  let y = puck.getBoundingClientRect().top;

  if (x < XMIN) {
    if (leftInterval) {
      clearInterval(leftInterval)
    }
    rightInterval = setInterval(movePuckRight, speed);
  }

  if (y < YMIN) {
    if (upInterval) {
      clearInterval(upInterval)
    }
    downInterval = setInterval(movePuckDown, speed);
  }
}


// ALO'S A GENIUS
// if ((puckRect.top + puckRect.height >= stickRect.top &&
//   stick.left + puckRect.width >= stickRect.left &&
//   puckRect.right - puckRect.width <= stickRect.right)) {
//     clearInterval(rightInterval)
//     leftInterval = setInterval(movePuckLeft, speed);
//   }
  
  
  // COLLISION DETECTION //
function collisionDetection(stick, puck) {
  if (puck.style.top + puck.style.height >= stick.style.top && stick.style.left + puck.style.width >= stick.style.left && puck.style.right - puck.style.width <= stick.style.right) {
    return true;
  }
  console.log(collisionDetection);

    // return (stick.right) >= puck && (puckLeft.left) >= stick;
}

// console.log('collisionDetection(stick, puckLeft)', collisionDetection(stickRight, puckLeft))
// console.log('collisionDetection(ice, puck)', collisionDetection(ice, puck))

// CHANGE DIRECTION after COLLISION v1 //

// CHANGE DIRECTION after COLLISION v2 //

// const changePuckDirection = (event) => {
//   let x = event.clientX;
//   let y = event.clientY;
//   if (x < XMIN) {     // keeps stick within LEFT border of ICE
//     x -= stickSpeed;
//     // console.log(x);
//     puck.style.left = x + 'px';
//   }
//   else if (y < YMIN) {
//     y -= puckSpeed;    // keeps puck within TOP border of ICE
//     // console.log(y);
//     puck.style.top = y + 'px';
//   } 
//   else if (x > XMAX) {
//     x += puckSpeed;     // keeps puck within CENTER ICE (to the right)
//     // console.log(x);
//     puck.style.left = x + 'px';
//   }
//   else if (y > YMAX) {
//     y += puckSpeed;    // keeps puck within BOTTOM border of ICE
//     // console.log(y);
//     puck.style.top = y + 'px'
//   }
//   puck.style.left = `${x - 10}px`;
//   puck.style.top = `${y - 10}px`;
//   puck.style.right = `${x - 10}px`;
//   console.log('puckRight', puck.style.right);
// }



const startGame = () => {
  rightInterval = setInterval(movePuckRight, speed);
  downInterval = setInterval(movePuckDown, speed);
  document.addEventListener("mousemove", moveStick);
}
startButton.addEventListener("click", startGame);