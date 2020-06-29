function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

let computerMove = Math.floor(Math.random() * 3 + 1);
let playerMove = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let wining;
console.log("Wylosowana liczba to: " + computerMove);
console.log("Gracz wpisał: " + playerMove);

if (computerMove == playerMove) {
  winning = "remis";
} else if (computerMove == 1 && computerMove < playerMove) {
  wining = "przegrywasz";
  if (playerMove == 3) {
    wining = "wygrywasz";
  }
} else if (computerMove == 2 && computerMove < playerMove) {
  wining = "przegrywasz";
  if (playerMove == 1) {
    wining = "wygrywasz";
  }
} else if (computerMove == 3 && computerMove > playerMove) {
  wining = "przegrywasz";
  if (playerMove == 1) {
    wining = "wygrywasz";
  }
}

if (computerMove == 1) {
  computerMove = "kamień";
} else if (computerMove == 2) {
  computerMove = "papier";
} else if (computerMove == 3) {
  computerMove = "nożyczki";
}
if (playerMove == 1) {
  playerMove = "kamień";
} else if (playerMove == 2) {
  playerMove = "papier";
} else if (playerMove == 3) {
  playerMove = "nożyczki";
}

printMessage("Mój ruch to: " + computerMove);
printMessage("Twój ruch to: " + playerMove);
printMessage("Twój ruch to: " + wining);
