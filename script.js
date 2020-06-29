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

console.log("Wylosowana liczba to: " + computerMove);
console.log("Gracz wpisał: " + playerMove);

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
