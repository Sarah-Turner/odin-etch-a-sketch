function createGrid(gridSize) {
    if (gridSize < 1) {
        gridSize = 1;
    } else if (gridSize > 100) {
        gridSize = 100;
    }
    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement("div");
        square.classList.toggle("square");
        let container = document.querySelector("#grid-container");
        let containerLength = container.offsetWidth;
        let squareSize = containerLength / gridSize;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

createGrid(1);