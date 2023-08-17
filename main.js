// Variables

let numberOfGrids = 16 // default value of grids
let grids;

// Elements

const sizeBtn = document.querySelector(".change-size");
const container = document.querySelector(".container");

// Logic

sizeBtn.addEventListener("click", () => {
  numberOfGrids = prompt("Enter no. of grids");
  grids.forEach((grid) => grid.remove())
  createGrid(numberOfGrids)
})

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
  draw(grids);
}

function draw(grids) {
  grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.style.backgroundColor = "#000"
    });
  });
}

createGrid(numberOfGrids);
