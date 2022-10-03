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

function changePlayer() {
  currentPlayer = currentPlayer == "red" ? "blue" : "red";
}

function alternate() {
  if (cells.target.style.backgroundColor == "red") {
    console.log("is red");
  } else if (cells.target.style.backgroundColor == "blue") {
    console.log("is blue");
  } else {
    console.log("seleceted");
  }
}

function gamePlay(e) {
  e.target.style.backgroundColor = currentPlayer;
  // call alternate (for game logic)
  changePlayer();
}

cells.forEach((cell) => {
  cell.addEventListener("click", gamePlay);
});

//select a cell
//alternate blue or red
//show who's turn it is in status-text

//store selection

//check for winner
//is a tie

//restart
