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
  const size = window.prompt('What size grid do you want? (Max: 100)', 16);
  initializeGrid(size);
}

function shadeSquare(){
  this.style.backgroundColor = "red";
}