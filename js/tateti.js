//tateti//
/*
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

function placeMarker(cellIndex) {
  if (!cells[cellIndex].textContent) {
    cells[cellIndex].textContent = currentPlayer;
    if (checkWinner()) {
      alert(`¡Felicitaciones ${currentPlayer} ganaste un 25% de descuento!`);
      resetBoard();
    } else if (isBoardFull()) {
      alert("¡Empate!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winConditions.some(combo => {
    return combo.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function isBoardFull() {
  return [...cells].every(cell => {
    return cell.textContent !== '';
  });
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}*/