const gridBox = document.querySelector('.container');
const buttonBox = document.querySelector('.button');

function createGrid(rows, cols) {
    gridBox.style.setProperty('--columns-row', cols);
    for (let i = 0; i < (rows*cols); i++){
        let grid = document.createElement('div');
        gridBox.appendChild(grid).className = 'grids';
    }
}
createGrid(5,5)

const cells = document.querySelectorAll('.grids');
cells.forEach((grids) => {
    grids.addEventListener('mouseover', () => {
        grids.style.backgroundColor = 'black';
    })
})
console.log(cells);
