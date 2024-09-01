const gridContainer = document.querySelector("#container");

initializeGrid(16, 16);

function initializeGrid(width, height) {
  for(let i = 0; i < height; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < width; j++) {
      const square = document.createElement("div");
      square.className = "square";
      row.appendChild(square);
      square.addEventListener('mouseenter', shadeSquare);
    }
    gridContainer.appendChild(row);

  }
}

function shadeSquare(){
  this.style.backgroundColor = "red";
}