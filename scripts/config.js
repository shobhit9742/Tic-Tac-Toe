function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  // by adding + it will be changed to NUMBER eg +"1" ==> 1

  backdrop.style.display = "block";
  modal.style.display = "block";
}

function closePlayerConfig() {
  backdrop.style.display = "none";
  modal.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorConfigu.textContent = "";
  formElement.firstElementChild.lastElementChild.value = ""; // DOM Traversal
}

function savePlayerConfig(event) {
  event.preventDefault(); // using preventDefault will restrict the submit button to send the data to the server so that our current page wont get refreshed and the other data get lost.
  const formData = new FormData(event.target); // FormData() is an default form object which is used to extract the data given by the user.
  const enteredPlayerName = formData.get("username").trim(); // get()is used to target the particular field from which the userinput data is to be fetched."String as an ouput"
  // trim() is used to remove the excess wide spaces for eg. '    Shobhit    '  ==> 'Shobhit'
  if (enteredPlayerName == "") {
    event.target.firstElementChild.classList.add("error");

    errorConfigu.textContent = "Please enter a valid Name!";
    return;
  }
  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
