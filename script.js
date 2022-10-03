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
let wins = ["", "", "", "", "", "", "", "", ""];

function changePlayer() {
  currentPlayer = currentPlayer == "red" ? "blue" : "red";
  if (
    (wins[0] == wins[1] && wins[1] == wins[2] && wins[0] != "") ||
    (wins[3] == wins[4] && wins[4] == wins[5] && wins[3] != "") ||
    (wins[6] == wins[7] && wins[7] == wins[8] && wins[6] != "") ||
    (wins[0] == wins[3] && wins[6] == wins[6] && wins[0] != "") ||
    (wins[1] == wins[4] && wins[1] == wins[5] && wins[1] != "") ||
    (wins[2] == wins[5] && wins[2] == wins[8] && wins[2] != "") ||
    (wins[0] == wins[4] && wins[0] == wins[8] && wins[0] != "") ||
    (wins[2] == wins[4] && wins[2] == wins[6] && wins[2] != "")
  ) {
    statusText.textContent = `${wins[0]} wins`;
  } else if ((wins !== "", "", "", "", "", "", "", "", "")) {
    statusText.textContent = "It's a tie!";
  } else {
    statusText.textContent = `${currentPlayer}'s turn`;
  }
}

function gamePlay(e) {
  if (e.target.style.backgroundColor != "blue") {
    e.target.style.backgroundColor = currentPlayer;
  }
  // call alternate (for game logic)
  wins[e.target.dataset.cell] = currentPlayer;
  console.log(wins);
  changePlayer();
}

cells.forEach((cell) => {
  cell.addEventListener("click", gamePlay);
});

function restartGame() {
  cells.forEach((cell) => (cell.style.backgroundColor = ""));
  wins = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = "";
}
gameRestart.addEventListener("click", restartGame);

//store selection
//check for winner
//is a tie
