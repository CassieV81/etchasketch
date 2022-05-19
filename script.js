const gridBox = document.querySelector('.container');
const buttonBox = document.querySelector('.button');

function createGrid(rows, cols) {
    gridBox.style.setProperty('--grid-size', cols);
    for (let i = 0; i < (rows*cols); i++){
        let grid = document.createElement('div');
        gridBox.appendChild(grid).className = 'grids';
        // grid.innerText = i + 1;
        let cells = document.querySelectorAll('.grids');
        cells.forEach((grids) => {
         grids.addEventListener('mouseover', () => {
        grids.style.backgroundColor = 'black';
    })
})
    }
}

function removeGrid() {
    gridBox.innerHTML = '';
}

const gridButton = document.createElement('button');
gridButton.textContent = 'GRID';
buttonBox.appendChild(gridButton).className = 'buttons';

gridButton.addEventListener('click', function inputValue(input) {
    removeGrid();
    input = prompt('Number of grids?', '');
    if (input < 2 || input > 100) {
        createGrid(10, 10);
    } else {
    createGrid(input, input);
    }
  
});
