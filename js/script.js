function createGrid(gridSize) {
    if (gridSize < 1) {
        gridSize = 1;
    } else if (gridSize > 100) {
        gridSize = 100;
    }

    let container = document.querySelector("#grid-container");
    let containerLength = container.offsetWidth;
    let squareSize = containerLength / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement("div");
        square.classList.toggle("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

function hoverOver(event) {
    let target = event.target;
    if (target.className === "square") {
        target.style.backgroundColor = "red";
    }
}

function initializeGrid() {
    let gridContainer = document.querySelector("#grid-container");
    gridContainer.addEventListener("mouseover", hoverOver);
    createGrid(16);
}

initializeGrid();