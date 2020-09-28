// Quiz Game
$(document).ready (function() {

    preGame();
    game();
    endGame();
    highScores();
});

// Pregame
    
function preGame() {

        // Draw pregame screen
        // A $( document ).ready() block.
            console.log("preGame");

        // Draw clock
        
        // Optional** Draw current high score

        // Draw button

            // When the use presses the button start the game loop
}

// Game loop

function game() {   
        console.log("game");
        // Draw questions & start clock

        // Store number of questions left

        // Event loop

            // On user choice

                // Check answer & draw new questions & calculate new time & decrement questions left

                    // If there are no more questions
                        
                        // Stop the clock & save the value of time remaining

                        // Start the end game loop
}

// End Game

function endGame () {  
        console.log("endGame")
        // Draw game score & input field for player 
        
        // Add play result to list of player result

        // Draw current high score && new game button

            // When the user presses the button start the pregame loop
}           


function highScores () {
        console.log("highScores")
}