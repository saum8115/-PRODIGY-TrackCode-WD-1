let board = Array(9).fill(null);
let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.dataset.index;
    if (!board[index]) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWin(currentPlayer)) {
        statusText.textContent = `${currentPlayer} wins!`;
        endGame();
      } else if (board.every(cell => cell)) {
        statusText.textContent = "It's a draw!";
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWin(player) {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return wins.some(comb => comb.every(i => board[i] === player));
}

function endGame() {
  cells.forEach(cell => cell.style.pointerEvents = "none");
}

function resetGame() {
  board.fill(null);
  currentPlayer = "X";
  statusText.textContent = "";
  cells.forEach(cell => {
    cell.textContent = "";
    cell.style.pointerEvents = "auto";
  });
}