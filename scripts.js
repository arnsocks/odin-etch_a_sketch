const gridContainer = document.querySelector("#container");
const button = document.querySelector("#newGrid");
button.addEventListener('click', resetGrid);

function initializeGrid(size) {
  for(let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.className = "square";
      row.appendChild(square);
      square.addEventListener('mouseenter', shadeSquare);
    }
    gridContainer.appendChild(row);
  }
}

function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  let size = 16;
  do {
    size = window.prompt('Please choose a number between 1 and 100', 16);
    size = parseInt(size);
    console.log(size);
    console.log(typeof size);
  } while ( size > 100 || size < 1 || isNaN(size));
  initializeGrid(size);
}

function shadeSquare(){
  this.style.backgroundColor = "red";
}