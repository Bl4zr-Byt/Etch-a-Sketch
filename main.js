// VARIABLES
let numberOfGrids = 16; // start value for number of grids
let color = "#000000";
let grids;
let shouldDraw = false;
let enableRainbowPen = false;
let enableMagicPen = false;


// ELEMENTS
const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".change-size");
const defaultBtn = document.querySelector(".defaults");
const eraseBtn = document.querySelector(".erase");
const eraseAllBtn = document.querySelector(".erase-all")
const selectPenBtn = document.querySelector(".pen")
const colorChanger = document.querySelector("#color-changer");
const rainbowBtn = document.querySelector(".rainbow")
const magicBtn = document.querySelector(".magic")
colorChanger.value = "#000000";


// FUNCTIONS
function createGrid(numberOfGrids) {

  // if works
  if (numberOfGrids > 100 || numberOfGrids < 4) {
    numberOfGrids = 16;
    alert("You can't create grid greater than 100x100 & less than 4x4");
  }

  let Size = `${container.clientHeight / numberOfGrids - 2}px`;
  for (let _ = 0; _ < numberOfGrids * numberOfGrids; _++) {
    let grid = document.createElement("div");
    grid.classList = "grid";
    grid.style.cssText = `border: 1px solid #e2e2e2; height: ${Size}; width: ${Size}`;
    container.appendChild(grid);
  }
  
  grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", draw)
    grid.addEventListener("mousedown", draw)
  })
  borderColor = color;
}
createGrid(numberOfGrids);

function createNewGrid(numberOfGrids) {
  grids.forEach((grid) => grid.remove());
  createGrid(numberOfGrids)
}

function draw(e) {
  if (e.type == "mouseover" && !shouldDraw) return;


  if (enableRainbowPen) color = borderColor = getRandomRGBValue();
  if (enableMagicPen) e.target.style.opacity = +e.target.style.opacity + 0.1;
  else e.target.style.opacity = 1

  e.target.style.borderColor = borderColor; 
  e.target.style.backgroundColor = color;
}

function getRandomRGBValue() {
  let r = Math.round(Math.random(255) * 255)
  let g = Math.round(Math.random(255) * 255)
  let b = Math.round(Math.random(255) * 255)
  return `rgb(${r}, ${g}, ${b})`;
}

// EVENTS
container.addEventListener("mousedown", () => shouldDraw = true);
container.addEventListener("mouseup", () => shouldDraw = false);

sizeBtn.addEventListener("click", () => {
  numberOfGrids = prompt("Enter no. of grids");
  if (!isNaN(numberOfGrids) && numberOfGrids) createNewGrid(numberOfGrids); 
});

defaultBtn.addEventListener("click", () => {
  enableMagicPen = enableRainbowPen = false;
  colorChanger.value = color = "#000000";
  createNewGrid(16);
});

eraseBtn.addEventListener("click", () => {
  enableMagicPen = enableRainbowPen = false;
  borderColor = "#e2e2e2";
  color = "transparent";
});
eraseAllBtn.addEventListener("click", () => createNewGrid(numberOfGrids));

selectPenBtn.addEventListener("click", () => borderColor = color = colorChanger.value);
colorChanger.addEventListener("input", () => {
  enableRainbowPen = false;
  borderColor = color = colorChanger.value
});

rainbowBtn.addEventListener("click", () => enableRainbowPen = true);
magicBtn.addEventListener("click", () => enableMagicPen = true);