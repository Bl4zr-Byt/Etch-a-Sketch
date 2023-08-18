// VARIABLES
let numberOfGrids = 16; // start value for number of grids
let color = "#000";
let grids;
let shouldDraw;


// ELEMENTS
const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".change-size");
const defaultBtn = document.querySelector(".defaults");
const eraseBtn = document.querySelector(".eraser")
const colorChanger = document.querySelector("#change-color");
colorChanger.value = "#000000"


// FUNCTIONS
function createGrid(numberOfGrids) {
  if (numberOfGrids > 100) {
    numberOfGrids = 16;
    alert("You can't create grid greater than 100x100");
  }

  let Size = `${container.clientHeight / numberOfGrids - 2}px`;
  for (let _ = 0; _ < numberOfGrids * numberOfGrids; _++) {
    let grid = document.createElement("div");
    grid.classList = "grid";
    grid.style.cssText = `border: 1px solid #e2e2e2; height: ${Size}; width: ${Size}`;
    container.appendChild(grid);
  }

  container.style.cursor = "crosshair";
  grids = document.querySelectorAll(".grid");
  draw();
}

function createNewGrid(numberOfGrids) {
  grids.forEach((grid) => grid.remove());
  createGrid(numberOfGrids)
}

function draw() { 
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      if (!shouldDraw) return;
      grid.style.borderColor = color;
      grid.style.backgroundColor = color;
    });
  });
}


// EVENTS
document.addEventListener("mousedown", () => {
  shouldDraw = true;
});
document.addEventListener("mouseup", () => {
  shouldDraw = false;
});

sizeBtn.addEventListener("click", () => {
  numberOfGrids = prompt("Enter no. of grids");
  createNewGrid(numberOfGrids);
});

defaultBtn.addEventListener("click", () => {
  colorChanger.value = color = "#000000";
  createNewGrid(16);
});

eraseBtn.addEventListener("click", () => {
  createNewGrid(numberOfGrids)
});

colorChanger.addEventListener("input", () => color = colorChanger.value);

// Calling functions
createGrid(numberOfGrids);