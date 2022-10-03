const cells = document.querySelectorAll(".game-cell");
const statusText = document.querySelector(".status-text");
const gameRestart = document.querySelector(".game-restart");
let currentPlayer = "red";
const winPossibilities = [
  //across
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //down
  [0, 3, 6],
  [1, 4, 5],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6],
];
let winningStorage = ["", "", "", "", "", "", "", "", ""];

function changePlayer() {
  currentPlayer = currentPlayer == "red" ? "blue" : "red";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function gamePlay(e) {
  e.target.style.backgroundColor = currentPlayer;
  // call alternate (for game logic)
  changePlayer();
}

cells.forEach((cell) => {
  cell.addEventListener("click", gamePlay);
});

function restartGame() {
  cells.forEach((cell) => (cell.style.backgroundColor = ""));
}
gameRestart.addEventListener("click", restartGame);

//store selection

//check for winner
//is a tie

//restart
