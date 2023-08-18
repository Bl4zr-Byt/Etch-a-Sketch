// Variables
let numberOfGrids = 16; // start value for number of grids
let color = "#000";
let grids;

// Elements
const sizeBtn = document.querySelector(".change-size");
const container = document.querySelector(".container");
const defaultBtn = document.querySelector(".defaults");

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
    grid.style.cssText = `border: 1px solid black; height: ${Size}; width: ${Size}`;
    container.appendChild(grid);
  }
  grids = document.querySelectorAll(".grid");
  draw();
}

function draw() { 
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.style.backgroundColor = color
    });
  });
}


// Events
sizeBtn.addEventListener("click", () => {
  numberOfGrids = prompt("Enter no. of grids");
  grids.forEach((grid) => grid.remove());
  createGrid(numberOfGrids);
})

defaultBtn.addEventListener("click", () => {
  grids.forEach((grid) => grid.remove())
  color = "#000";
  createGrid(16);
});

// Calling functions
createGrid(numberOfGrids);