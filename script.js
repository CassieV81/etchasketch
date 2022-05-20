const gridBox = document.querySelector('.container');
const buttonBox = document.querySelector('.button');

const gridButton = document.createElement('button');
gridButton.textContent = 'GRID';
buttonBox.appendChild(gridButton).className = 'buttons';

const blackButton = document.createElement('button');
blackButton.textContent = 'BLACK';
buttonBox.appendChild(blackButton).className = 'buttons';

const RGBButton = document.createElement('button');
RGBButton.textContent = 'RGB';
buttonBox.appendChild(RGBButton).className = 'buttons';

function randomColor() {
    let rgb = `rgb(0, 0, 0)`
    for (let i = 0; i < 256; i++){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        rgb = `rgb(${r}, ${g}, ${b})`;
    }
    return rgb;
}

function createGrid(rows, cols) {
    gridBox.style.setProperty('--grid-size', cols);
    for (let i = 0; i < (rows * cols); i++) {

    let grid = document.createElement('div');
    gridBox.appendChild(grid).className = 'grids';

    blackButton.addEventListener('click', () => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'black';
            grid.style.borderColor = 'black';
            }) 
        })
    RGBButton.addEventListener('click', () => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = randomColor();
            grid.style.borderColor = randomColor();
            })
        })
    }
}
createGrid(20, 20);

function removeGrid() {
    gridBox.innerHTML = '';
}

gridButton.addEventListener('click', function inputValue(input) {
    removeGrid();
    input = prompt('Number of grids?', '');
    if (input < 2 || input > 100) {
        createGrid(20, 20);
    } else {
        createGrid(input, input);
    }

});




