function createGrid(gridSize) {
    if (gridSize < 1) {
        gridSize = 1;
    } else if (gridSize > 100) {
        gridSize = 100;
    }

    const container = document.querySelector("#grid-container");
    const containerLength = container.offsetWidth;
    const squareSize = containerLength / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

function hoverOver(event) {
    const target = event.target;
    if (target.className === "square") {
        target.style.backgroundColor = "red";
    }
}

function pressBtn(event) {
    const target = event.target;
    if (target.id === "resize-button") {
        let newSize = prompt("Enter grid size (1-100): ");
        const grid = document.querySelector("#grid-container");
        while(grid.lastChild) {
            grid.removeChild(grid.lastChild);
        }
        createGrid(newSize);
    }
}

function initializeGrid() {
    document.addEventListener("mouseover", hoverOver);
    document.addEventListener("click", pressBtn);
    createGrid(16);
}

initializeGrid();