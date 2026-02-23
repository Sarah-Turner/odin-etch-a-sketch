function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement("div");
        square.classList.toggle("square");
        let container = document.querySelector("#grid-container");
        let containerLength = container.style.width;
        let squareSize = containerLength / gridSize;
        square.style.width = `${squareSize} px`;
        square.style.height = `${squareSize} px`;
        container.appendChild(square);
    }
}

createGrid(16);