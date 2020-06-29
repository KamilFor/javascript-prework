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

function displayResult(computerMove, playerMove, wining) {
  if (computerMove == playerMove) {
    wining = "remis";
  } else if (computerMove == 1) {
    if (computerMove < playerMove) {
      wining = "przegrywasz";
    }
    if (playerMove == 3) {
      wining = "wygrywasz";
    }
  } else if (computerMove == 2) {
    if (computerMove < playerMove) {
      wining = "przegrywasz";
    }
    if (playerMove == 1) {
      wining = "wygrywasz";
    }
  } else if (computerMove == 3) {
    if (computerMove > playerMove) {
      wining = "przegrywasz";
    }
    if (playerMove == 2) {
      wining = "wygrywasz";
    }
  }
  return wining;
}
function getMoveName(name) {
  if (name == 1) {
    name = "kamień";
    return name;
  } else if (name == 2) {
    name = "papier";
    return name;
  } else if (name == 3) {
    name = "nożyczki";
    return name;
  }
}
printMessage("Mój ruch to: " + getMoveName(computerMove));
printMessage("Twój ruch to: " + getMoveName(playerMove));
printMessage("Twój ruch to: " + displayResult(computerMove, playerMove, wining));
