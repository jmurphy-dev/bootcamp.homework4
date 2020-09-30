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
  // When the user presses the button start the game loop
  begin.on("click", function () {
    game(clock);
  });
}

// Game loop

function game() {
  var questionRemaining
  if (questionRemaining === 0 || timeLeft === 0) {
    // Access all of the questions answer objects
    endGame();
    console.log("!! Calling endGame from game!!");
  } 
  console.log("game");
  $("#game-space").children().remove();
  // Draw questions & start clock
  console.log(`This is the amount of time left ${timeLeft}`);
  // Store number of questions left
  questionRemaining = Object.keys(questions);
  // Event loop
  //console.log(Number(questionRemaining[5]));
  questionRemaining = questionRemaining[5];
  
  for (questionRemaining in questions) {
    //console.log(`${key}: ${questions[key]}`);
    currentQuestion = questions[questionRemaining];
    

    // Access all of the questions and answers
    for (let key in currentQuestion) {
      //console.log(`${key}: ${currentQuestion[key]}`);
      var currentObjVal = Object.values(currentQuestion);

      //console.log(currentObjVal);
      var questionStr = currentObjVal[0];
      var answerA = currentObjVal[1];
      var answerB = currentObjVal[2];
      var answerC = currentObjVal[3];
      var answerD = currentObjVal[4];
      var answerToCheck = currentObjVal[5];
      var answerChosen = false;
      break
    }

    $(`<h2> ${questionStr} </h2>`).appendTo("#game-space");
    var buttonA = $(`<button>${answerA}</button>`)
      .prop("checked", true)
      .appendTo("#game-space")
      .addClass("button-a")
      .val("a")
      .click(function () {
        questionRemaining--;
        console.log((`This is the number of questions remaining ${questionRemaining}`));
        answerChosen = true;
      });
    var buttonB = $(`<button>${answerB}</button>`)
      .prop("checked", true)
      .appendTo("#game-space")
      .addClass("button-b")
      .val("b")
      .click(function () {
        questionRemaining--;
        console.log((`This is the number of questions remaining ${questionRemaining}`));
      });
    var buttonC = $(`<button>${answerC}</button>`)
      .prop("checked", true)
      .appendTo("#game-space")
      .addClass("button-c")
      .val("c")
      .click(function () {
        questionRemaining--;
        console.log((`This is the number of questions remaining ${questionRemaining}`));
      });
    var buttonD = $(`<button>${answerD}</button>`)
      .prop("checked", true)
      .appendTo("#game-space")
      .addClass("button-d")
      .val("d")
      .click(function () {
        questionRemaining--;
        console.log((`This is the number of questions remaining ${questionRemaining}`));
      });
    
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
