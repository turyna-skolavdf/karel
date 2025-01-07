const board = document.getElementById("board");
const commandsInput = document.getElementById("commands");
const runBtn = document.getElementById("run-btn");

// Herní pole
const SIZE = 10;
let karel = { x: 0, y: 0, direction: 0 }; // 0 - right, 1 - down, 2 - left, 3 - up
let boardState = [];

function createBoard() {
    board.innerHTML = "";
    boardState = [];
    for (let i = 0; i < SIZE; i++) {
        let row = [];
        for (let j = 0; j < SIZE; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
            row.push("");
        }
        boardState.push(row);
    }
    updateBoard();
}

function updateBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        const x = index % SIZE;
        const y = Math.floor(index / SIZE);
        let item = boardState[y][x];

        if(item.length < 2) {
            cell.textContent = boardState[y][x];
        } else {
            cell.style.backgroundColor = item;
            cell.textContent = "";
        }
    });
    const karelCell = cells[karel.y * SIZE + karel.x];
    karelCell.textContent = "K";
}

function processCommands(commands) {
    const lines = commands.split("\n");
    lines.forEach(line => {
        const parts = line.trim().split(" ");
        const command = parts[0]?.toUpperCase();

        switch (command) {
            case "RESET":
                karel = { x: 0, y: 0, direction: 0 };
                boardState = boardState.map(row => row.map(() => ""));
                break;
            case "KROK":
                moveKarel(parts[1] ? parseInt(parts[1]) : 1);
                break;
            case "VLEVOBOK":
                rotateLeft(parts[1] ? parseInt(parts[1]) : 1);
                break;
            case "OTOC": // Otočení Karla o 180 stupňů
                rotateBack();
                break;
            case "POLOZ":
                placeItem(parts[1]);
                break;
            case "VYMAZ":
                eraseItem();
                break;
        }
    });
    updateBoard();
}

// Funkce pro otočení Karla o 180 stupňů (změna směru na opačný)
function rotateBack() {
    karel.direction = (karel.direction + 2) % 4;
}

// Funkce pro vymazání položky na aktuální pozici
function eraseItem() {
    boardState[karel.y][karel.x].backgroundColor = "transparent"
    boardState[karel.y][karel.x] = "";
}


function moveKarel(steps) {
    for (let i = 0; i < steps; i++) {
        if (karel.direction === 0 && karel.x < SIZE - 1) karel.x++;
        else if (karel.direction === 1 && karel.y < SIZE - 1) karel.y++;
        else if (karel.direction === 2 && karel.x > 0) karel.x--;
        else if (karel.direction === 3 && karel.y > 0) karel.y--;
    }
}

function rotateLeft(times) {
    karel.direction = (karel.direction + 4 - times) % 4;
}

function placeItem(item) {
    boardState[karel.y][karel.x] = item;
}

runBtn.addEventListener("click", () => {
    const commands = commandsInput.value;
    processCommands(commands);
});

createBoard();