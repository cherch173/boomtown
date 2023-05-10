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

// CACHED ELEMENTS //

const stick = document.querySelector(".stick");
const puck = document.querySelector(".puck");
const startButton = document.querySelector("#start");
const container = document.querySelector(".ice");
let contRect = container.getBoundingClientRect();
let padRect = stick.getBoundingClientRect();
console.log(contRect)


// EVENT LISTENERS //

const moveStick = (event) => {
  let x = event.clientX;
  let y = event.clientY;
  stick.style.left = `${x - 20}px`;
  stick.style.top = `${y - 20}px`;
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

const startGame = () => {
  rightInterval = setInterval(movePuckRight, SPEED);
  downInterval = setInterval(movePuckDown, SPEED);
  document.addEventListener("mousemove", moveStick);
}
startButton.addEventListener("click", startGame);