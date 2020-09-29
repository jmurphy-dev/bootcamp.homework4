// Quiz Game
var timeLeft = 60;
$(document).ready(function () {
  preGame();
});

// Pregame

function preGame() {
  console.log("preGame");

  // Draw clock
  var clock = $("#time-left").text(`Time left : ${timeLeft}`);

  // Draw Intro
  $("<h1>Welcome to code quiz!<h1>").appendTo("#game-space");
  $(
    "<p>Rules: When you press the button the timer will start and you will be presented a series of multiple choice questions. If you answer incorrectly time will be deducted from the time remaining. The games with the most time remaing will be stored along with player initials.<p>"
  ).appendTo("#game-space");

  // Draw button
  var begin = $('<input type="button" value="Begin Game"/>');
  begin.appendTo("#game-space");

  begin.on("click", function () {
    game(clock);
  });

  // When the user presses the button start the game loop
}

// Game loop

function game() {
  console.log("game");
  $("#game-space").children().remove();
  // Draw questions & start clock

  // Store number of questions left
  var questionRemaining = Object.keys(questions);
  // Event loop
  console.log(Number(questionRemaining[5]));
  questionRemaining = questionRemaining[5];

  if (questionRemaining > 0 && timeLeft > 0) {
    // Access all of the questions answer objects

    for (const key in questions) {
      //console.log(`${key}: ${questions[key]}`);
      currentQuestion = questions[key];
      // Access all of the questions and answers
      for (const key in currentQuestion) {
        //console.log(`${key}: ${currentQuestion[key]}`);
        var currentObjVal = Object.values(currentQuestion);

        console.log(currentObjVal);        
        var questionStr = currentObjVal[0];
        $(
            `<h2> ${questionStr} </h2>`
          ).appendTo("#game-space");
        var questionA = currentObjVal[1];
        var questionB = currentObjVal[2];
        var questionC = currentObjVal[3];
        var questionD = currentObjVal[4];
        var answerToCheck = currentObjVal[5];
        $(`<h2> ${questionStr} </h2>`).appendTo("#game-space");
        var buttonA = $(`<button>${questionA}</button>]`).prop("checked", true);
        var buttonB = $(`<button>${questionB}</button>]`).prop("checked", true);
        var buttonC = $(`<button>${questionC}</button>]`).prop("checked", true);
        var buttonD = $(`<button>${questionD}</button>]`).prop("checked", true);
        $(buttonA).appendTo("#game-space");
        buttonB.appendTo("#game-space");
        buttonC.appendTo("#game-space");
        buttonD.appendTo("#game-space");
        

        


        // Clear the game space after a question is answered.

        console.log(timeLeft);
      }
      questionRemaining--;
      console.log(questionRemaining);
    }
  } else {
    endGame();
    console.log("!! Calling endGame from game!!");
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
    question: "question 1",
    a: "a answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "b",
  },

  2: {
    question: "question 2",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "d",
  },

  3: {
    question: "question 3",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "a",
  },

  4: {
    question: "question 4",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "b",
  },

  5: {
    question: "question 5",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "c",
  },

  6: {
    question: "question 6",
    a: "an answer",
    b: "an answer",
    c: "an answer",
    d: "an answer",
    answer: "a",
  },
};
