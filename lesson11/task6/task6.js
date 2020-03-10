//Game of Life
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const resolution = 40;
const columns = 10;
const rows = 10;
canvas.width = 400;
canvas.height = 400;
//массив нулей и единиц
function createGrid() {
    return new Array(columns).fill(null)
        .map(() => new Array(rows).fill(null)
            .map(() => Math.round(Math.random())));

}

let grid = createGrid();

//новое поколение
function nextGeneration(grid) {
    const nextGen = grid.map(arr => [...arr]);
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];
            let neighCount = 0;
            for (let i = -1; i < 2; i++) { //координаты соседей
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) { //координата самой клетки
                        continue;
                    }
                    const xCell = col + i;
                    const yCell = row + j;

                    if (xCell >= 0 && yCell >= 0 && xCell < columns && yCell < rows) {
                        const currNeighbour = grid[col + i][row + j];
                        neighCount += currNeighbour;

                    }
                }
            }
            if (cell === 1 && neighCount < 2) {
                nextGen[col][row] = 0;
            }
            else if (cell === 1 && neighCount > 3) {
                nextGen[col][row] = 0;
            }
            else if (cell === 0 && neighCount === 3) {
                nextGen[col][row] = 1;
            }
        }
    }
    return nextGen;
}

//отрисовка поля
function render(grid) {
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];
            ctx.beginPath();
            ctx.rect(col * resolution, row * resolution, resolution, resolution);
            ctx.fillStyle = cell ? 'black' : 'white';
            ctx.lineWidth = "3";
            ctx.strokeStyle = "gray";
            ctx.fill();
            ctx.stroke();
        }
    }
}

//обновление поля
function update() {
    grid = nextGeneration(grid);
    render(grid);
    requestAnimationFrame(update);
}

requestAnimationFrame(update);




