function reset() {
  activePlayer = 0;
  currentRound = 1;
  playing = true;
  playingTurnHiding.style.display = "block";
  gameOverEl.firstElementChild.innerHTML = `You won, <span id='winner-name'>Player Name </span> !`;
  gameOverEl.style.display = "none";
  let gameBoardIndex = 0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      gameData[i][j] = 0;

      const gameBoardItemEl = gameBoardElement.children[gameBoardIndex];

      gameBoardItemEl.textContent = "";

      gameBoardItemEl.classList.remove("disabled");

      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert(`Please set the custom names for both player`);
    return;
  }
  reset();
  gameArea.style.display = "block";
  activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  // code for alternate method
  // if (event.target.tagName !== 'LI'){
  //     return
  // }

  if (playing) {
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
      alert(`Please select the blank Filed.`);
      return;
    }
    selectedField.textContent = players[activePlayer].symbol;

    selectedField.classList.add("disabled");
    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
      endGame(winnerId);
    }
    currentRound++;
    switchPlayer();
  }
}
function checkForGameOver() {
  // Check the rows for equality
  for (i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // Check the cloumns for equality

  for (i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // Diagonal: Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  // Diagonal: bottom left to top right

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameOverEl.style.display = "block";
  playing = false;
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;

    gameOverEl.firstElementChild.firstElementChild.textContent = winnerName;
    playingTurnHiding.style.display = "none";
  } else {
    gameOverEl.firstElementChild.textContent = `it's a Draw`;
  }
}
