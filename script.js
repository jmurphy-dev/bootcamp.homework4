// Quiz Game

$(document).ready(function () {
  preGame();

  endGame();
});

// Pregame

function preGame() {
  console.log("preGame");

  var timeLeft = 60;
  // Draw clock
  var clock = $("#time-left").text(`Time left : ${timeLeft}`);
  // Draw Intro

  var title = $("<h1>Welcome to code quiz!<h1>").appendTo("#game-space");
  var rules = $(
    "<p>Rules: When you press the button the timer will start and you will be presented a series of multiple choice questions. If you answer incorrectly time will be deducted from the time remaining. The games with the most time remaing will be stored along with player initials.<p>"
  ).appendTo("#game-space");

  // Draw button

  var begin = $('<input type="button" value="Begin Game"/>');
  begin.appendTo("#game-space");

  begin.on("click", function () {
    game();
  });

  // When the use presses the button start the game loop
}

// Game loop

function game() {
    console.log("game");
  // Draw questions & start clock
    
  // Store number of questions left
  var questionRemaining = Object.keys(questions);
  // Event loop
  console.log(questionRemaining[6]);

  for(const key in questions) {
      var currentQuestion = questions[key];
      for (const key in currentQuestion) {
        console.log(`${key}: ${currentQuestion[key]}`);
      }
  }

  // On user choice

  // Check answer & draw new questions & calculate new time & decrement questions left

  // If there are no more questions

  // Stop the clock & save the value of time remaining

  // Start the end game loop
}

// End Game

function endGame() {
  console.log("endGame");
  // Draw game score & input field for player

  // Add play result to list of player result

  // Draw current high score && new game button

  // When the user presses the button start the pregame loop
}

function highScores() {
  console.log("highScores");
}

const questions = {
  1: {
    question: "an question",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "b",
  },

  2: {
    question: "an question",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "d",
  },

  3: {
    question: "an question",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "a",
  },

  4: {
    question: "an question",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "b",
  },

  5: {
    question: "an question",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "c",
  },

  6: {
    question: "an question", 
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "a",
  },
};
