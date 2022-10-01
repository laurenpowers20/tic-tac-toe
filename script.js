const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".status-text");
const gameRestart = document.querySelector(".game-restart");
const winPossibilities = [
  //across
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  //down
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  //diagonal
  [1, 5, 9],
  [3, 5, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];

function startGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  gameRestart.addEventListener("click", restartGame);
}

function cellClicked() {
  cells.addEventListener("click", updateCell);
}

function updateCell() {
  cells.classlist.add.style = `red`;
}

function changePlayer() {}

function checkWinner() {}

function restartGame() {}
