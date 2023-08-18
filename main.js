// Variables
let numberOfGrids = 16; // start value for number of grids
let color = "#000";
let grids;
let shouldDraw;

// Elements
const sizeBtn = document.querySelector(".change-size");
const container = document.querySelector(".container");
const defaultBtn = document.querySelector(".defaults");
const colorChanger = document.querySelector("#change-color");

// Functions
function createGrid(numberOfGrids) {
  if (numberOfGrids > 100) {
    numberOfGrids = 16;
    alert("You can't create grid greater than 100x100");
  }

  let Size = `${container.clientHeight / numberOfGrids - 2}px`;
  for (let _ = 0; _ < numberOfGrids * numberOfGrids; _++) {
    let grid = document.createElement("div");
    grid.classList = "grid";
    grid.style.cssText = `border: 1px solid #e3e3e3; height: ${Size}; width: ${Size}`;
    container.appendChild(grid);
  }
  container.style.cursor = "crosshair";
  grids = document.querySelectorAll(".grid");
  draw();
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

// Events
document.addEventListener("mousedown", () => {
  shouldDraw = true;
})
document.addEventListener("mouseup", () => {
  shouldDraw = false;
})

sizeBtn.addEventListener("click", () => {
  numberOfGrids = prompt("Enter no. of grids");
  grids.forEach((grid) => grid.remove());
  createGrid(numberOfGrids);
})

defaultBtn.addEventListener("click", () => {
  grids.forEach((grid) => grid.remove())
  colorChanger.value = color = "#000000";
  createGrid(16);
});

colorChanger.addEventListener("input", () => color = colorChanger.value)

// Calling functions
createGrid(numberOfGrids);