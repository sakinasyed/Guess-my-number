"use strict";

// JQuery
let secretNumber = Math.floor(Math.random() * 21);
let score = 20;
let highscore = 0;

// creating function for repeated codes
const displayMessage = function (message) {
  $(".message").text(message);
};

// Again click
$(".again").on("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 21);
  displayMessage("Start guessing...");
  $(".score").text(score);
  $(".number").text("?");
  $(".guess").val("");

  $("body").css("background-color", "#222");
  $(".number").css("width", "15rem");
});

$(".check").on("click", function () {
  const guess = Number($(".guess").val());
  console.log(guess);
  // no input
  if (!guess) {
    displayMessage("⛔ No Number!");
  }
  //   when player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    $(".number").text(secretNumber);

    $("body").css("background-color", "#60b347");
    $(".number").css("width", "30rem");

    if (score > highscore) {
      highscore = score;
      $(".highscore").text(highscore);
    }
  }

  // Refractoring our code
  //  when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      $(".score").text(score);
    } else {
      displayMessage("💥 You lost the game!");
    }
  }
});

//   //   when guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       $(".message").text("📈 Too High!");
//       score--;
//       $(".score").text(score);
//     } else {
//       $(".message").text("💥 You lost the game!");
//     }
//   }
//   //   when guess is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       $(".message").text("📉 Too Low!");
//       score--;
//       $(".score").text(score);
//     } else {
//       $(".message").text("💥 You lost the game!");
//     }
//   }
// });
