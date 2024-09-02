const gridContainer = document.querySelector("#container");
const button = document.querySelector("#newGrid");
button.addEventListener('click', resetGrid);

let mode = 'default';

const optionsMenu = document.querySelector('#options');
optionsMenu.addEventListener('click', (e) => { // Update the mode based on the option selected
  mode = e.target.value;
  console.log(`mode is now ${mode}`);
});

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
  switch(mode) {
    case 'default':
      this.style.backgroundColor = "red";
      break;
    case 'random-color':
      let newColor = getRandomColor();
      console.log(newColor);
      this.style.backgroundColor = newColor;
      break;
  }
}

function getRandomColor(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return(`rgb(${r}, ${g}, ${b})`);
  
}