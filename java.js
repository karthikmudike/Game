"use strict";
let score = 20;
let HighScore = 0;
let k = 0;
let z = Math.round(Math.random() * 20);
document.querySelector(".button").addEventListener("click", GameLogic);
document.querySelector(".again").addEventListener("click", TryAgain);
document.querySelector(".item_2").textContent = z;

function GameLogic() {
  const x = Number(document.querySelector(".input_1").value);
  if (x == 0 && score > 0) {
    interFace("No Input", 0);
    score--;
  } else if (x >= 1 && x <= 20 && score != 0 && k != 1) {
    if (x == z) {
      interFace("Congrats, You Win", 1);
      if (score > HighScore) {
        HighScore = score;
        document.querySelector(".highscorevalue").textContent = HighScore;
      }
      k = 1;
    } else if (x < z) {
      interFace("Input is low");
      score--;
    } else if (x > z) {
      interFace("Input is High");
      score--;
    }
  } else if (score == 0) {
    interFace("GameOver", 0);
  } else if (k == 1) {
    interFace("GameOver, Try Again", 1);
  } else {
    interFace("Input is not between 1 to 20");
    score--;
  }
  document.querySelector(".scorevalue").textContent = score;
}

function interFace(ValueOfAnswer, color) {
  document.querySelector(".guess").textContent = ValueOfAnswer;
  document.querySelector(".guess").style.fontSize = "xxx-large";
  if (color == 1) {
    document.querySelector(".backgorundColor").style.backgroundColor =
      "#15c805";
    document.querySelector(".input_1").style.backgroundColor = "#15c805";
  } else if (color == 0) {
    document.querySelector(".backgorundColor").style.backgroundColor =
      "#ff0000";
    document.querySelector(".input_1").style.backgroundColor = "#ff0000";
  } else if (color == -1) {
    document.querySelector(".backgorundColor").style.backgroundColor =
      "#6d8083";
    document.querySelector(".input_1").style.backgroundColor = "#6d8083";
  }
}

function TryAgain() {
  console.log("Try Again");
  document.querySelector(".input_1").value = null;
  score = 20;
  interFace("Guess The Number between 1 to 20", -1);
  document.querySelector(".scorevalue").textContent = score;
  z = Math.round(Math.random() * 20);
  document.querySelector(".item_2").textContent = z;
  k = 0;
}
