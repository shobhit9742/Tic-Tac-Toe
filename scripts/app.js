const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let playing = true;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

// buttons
const start = document.getElementById("startbtn");
const editplyr1 = document.getElementById("edit-player1-btn");
const editplyr2 = document.getElementById("edit-player2-btn");
const cancelConfig = document.getElementById("cancelBtn");
const startGameBtn = document.getElementById("startbtn");
const gameBoardElement = document.getElementById("game-board");

// player edit model

const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("config-overlay");
const formElement = document.querySelector("form");

//  Editing  Elements
const plyr1Name = document.getElementById("player1Name");
const plyr2Name = document.getElementById("player2Name");
const errorConfigu = document.getElementById("errorConfig");
const gameArea = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");
const gameOverEl = document.getElementById("game-over");

// Button Event Listners

editplyr1.addEventListener("click", openPlayerConfig);
editplyr2.addEventListener("click", openPlayerConfig);
cancelConfig.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startGameBtn.addEventListener("click", startNewGame);

for (const gameFieldEle of gameBoardElement.children) {
  gameFieldEle.addEventListener("click", selectGameField);
}
// Alternate to the above (for ... of) method.
// gameField.addEventListener('click', selectGameField);


const playingTurnHiding = document.getElementById('hiding');