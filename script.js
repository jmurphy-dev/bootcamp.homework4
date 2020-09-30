// Quiz Game
var timeLeft = 60;
var answerChosen = false;
var questionRemaining = 0;
var userChoice = "";
var clock = "";
var q = 0;

$(document).ready(function () {
  preGame();
});

// Pregame

function preGame() {
  console.log("preGame");

  // Draw clock
  clock = $("#time-left").text(`Time left : ${timeLeft}`);

  // Draw Intro
  $("<h1>Welcome to code quiz!<h1>").appendTo("#game-space");
  $(
    "<p>Rules: When you press the button the timer will start and you will be presented a series of multiple choice questions. If you answer incorrectly time will be deducted from the time remaining. The games with the most time remaing will be stored along with player initials.<p>"
  ).appendTo("#game-space");

  // Draw button
  var begin = $('<input type="button" value="Begin Game"/>');
  begin.appendTo("#game-space");
  // When the user presses the button start the game loop
  begin.on("click", function () {
    game(clock);
  });
}

// Game loop

function game() {
  console.log("game");
  $("#game-space").children().remove();
  // Draw questions & start clock
  console.log(`This is the amount of time left ${timeLeft}`);
  // Store number of questions left
  questionRemaining = Object.keys(questions);
  // Event loop
  console.log(Number(questionRemaining[5]));
  questionRemaining = questionRemaining[5];
  q = questionRemaining[0];
  // Access all of the questions answer objects
  for (questionRemaining in questions) {
    //console.log(`${key}: ${questions[key]}`);
    currentQuestion = questions[questionRemaining];
    
    // Access all of the questions and answers
    for (q in currentQuestion) {
      //console.log(`${key}: ${currentQuestion[key]}`);
      var currentObjVal = Object.values(currentQuestion);

      //console.log(currentObjVal);
      var questionStr = currentObjVal[0];
      var answerA = currentObjVal[1];
      var answerB = currentObjVal[2];
      var answerC = currentObjVal[3];
      var answerD = currentObjVal[4];
      var answerToCheck = currentObjVal[5];
    }
    //Question
    $(`<h2> ${questionStr} </h2>`).appendTo("#game-space");
    //Answer A
    $(`<button>${answerA}</button>`)
      .prop("checked", false)
      .appendTo("#game-space")
      .addClass("button-a")
      .val("a")
      .click(function () {
        questionRemaining--;
        userChoice = this.value;
        console.log(
          `This is the answer to check :: :: ${answerToCheck} :: :: according to the button`
        );
        onUserChoice(answerToCheck);
        q++;
      });
    //Answer B
    $(`<button>${answerB}</button>`)
      .prop("checked", false)
      .appendTo("#game-space")
      .addClass("button-b")
      .val("b")
      .click(function () {
        questionRemaining--;
        userChoice = this.value;
        console.log(
          `This is the answer to check :: :: ${answerToCheck} :: :: according to the button`
        );
        onUserChoice(answerToCheck);
      });
    //Answer C
    $(`<button>${answerC}</button>`)
      .prop("checked", false)
      .appendTo("#game-space")
      .addClass("button-c")
      .val("c")
      .click(function () {
        questionRemaining--;
        userChoice = this.value;
        console.log(
          `This is the answer to check :: :: ${answerToCheck} :: :: according to the button`
        );
        onUserChoice(answerToCheck);
      });
    //Answer D
    $(`<button>${answerD}</button>`)
      .prop("checked", false)
      .appendTo("#game-space")
      .addClass("button-d")
      .val("d")
      .click(function () {
        questionRemaining--;
        userChoice = this.value;
        console.log(
          `This is the answer to check :: :: ${answerToCheck} :: :: according to the button`
        );
        onUserChoice(answerToCheck);
      });
  }

  // Stop the clock & save the value of time remaining

  // Start the end game loop
}
// On user choice
function onUserChoice(answerToCheck) {
  console.log(`:: The answer to check is ${answerToCheck}`);
  console.log(`The user chose ${userChoice}`);
  // If there are no more questions
  if (questionRemaining === 0 || timeLeft === 0) {
    endGame();
  } else if (userChoice === answerToCheck) {
    // Check answer & draw new questions & calculate new time & decrement questions left
    console.log(`The correct answer was chosen!`);
  } else {
    console.log(`The incorrect answer was chosen!`);
    timeLeft = timeLeft - 5;
    console.log(`:: :: Time left ${timeLeft} :: ::`);
    clock = $("#time-left").text(`Time left : ${timeLeft}`);
  }
}

// End Game

function endGame() {
  console.log("endGame");
  // Draw game score & input field for player
  $("#game-space").children().remove();
  // Add play result to list of player result
  prompt(`Your score from this round was ${timeLeft}`)
  // Draw current high score && new game button
  highScores();
}

function highScores() {
  console.log("highScores");
  // When the user presses the button start the pregame loop
  console.log(`Final score is ${timeLeft}!`);
  preGame();
}

const questions = {
  1: {
    question: "question 1",
    a: "a1 answer",
    b: "b1 answer",
    c: "c1 answer",
    d: "d1 answer",
    answer: "b",
  },

  2: {
    question: "question 2",
    a: "a2 answer",
    b: "b2 answer",
    c: "c2 answer",
    d: "d2 answer",
    answer: "d",
  },

  3: {
    question: "question 3",
    a: "a3 answer",
    b: "b3 answer",
    c: "c3 answer",
    d: "d3 answer",
    answer: "a",
  },

  4: {
    question: "question 4",
    a: "a4 answer",
    b: "b4 answer",
    c: "c4 answer",
    d: "d4 answer",
    answer: "b",
  },

  5: {
    question: "question 5",
    a: "a5 answer",
    b: "b5 answer",
    c: "c5 answer",
    d: "d5 answer",
    answer: "c",
  },

  6: {
    question: "question 6",
    a: "a6 answer",
    b: "b6 answer",
    c: "c6 answer",
    d: "d6 answer",
    answer: "a",
  },
};
