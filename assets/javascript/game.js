

$(document).ready(function() {

    var computerGuess = 0;
    var crystal1Total = 0;
    var crystal2Total = 0; 
    var crystal3Total = 0; 
    var crystal4Total = 0; 
    var wins = 0;
    var losses = 0;
    var playerSum = 0;

    var writeComputerGuess = $("#computer-number");
    var writeWins = $("#wins");
    var writeLosses = $("#losses");
    var writePlayerSum = $("#player-score-sum")

   

    // Gets a random number between 19-120 for the computer's guess
    function compNumber() {
        computerGuess = Math.floor(Math.random()*(120-19)) + 19;
    }
    
    // Gets a random number between 1-12 for each crystal
    function crystalNumber() {
        crystal1Total = Math.floor(Math.random()*(12-1)) + 1;
        crystal2Total = Math.floor(Math.random()*(12-1)) + 1;
        crystal3Total = Math.floor(Math.random()*(12-1)) + 1;
        crystal4Total = Math.floor(Math.random()*(12-1)) + 1;
    }

    // Starts the game and makes restarting the game without a refresh possible
    function startGame() {

    $(writePlayerSum).html(playerSum);

    compNumber();
    $(writeComputerGuess).html(computerGuess);
    

    crystalNumber();
    console.log(crystal1Total, crystal2Total, crystal3Total, crystal4Total);
    console.log("---");
    console.log(playerSum);
    console.log("---");


    // Click Functions

    // Crystal 1
    $("#crystal1").click(function() {
        playerSum += crystal1Total;
        $(writePlayerSum).html(playerSum);
        checkStatus();
      });

      // Crystal 2
      $("#crystal2").click(function() {
        playerSum += crystal2Total;
        $(writePlayerSum).html(playerSum);
        checkStatus();
      });

      // Chrystal 3
      $("#crystal3").click(function() {
        playerSum += crystal3Total;
        $(writePlayerSum).html(playerSum);
        checkStatus();
      });

      // Crystal 4
      $("#crystal4").click(function() {
        playerSum += crystal4Total;
        $(writePlayerSum).html(playerSum);
        checkStatus();
      });

      // If/Else statements
    
    function checkStatus() {

    if (playerSum === computerGuess) {
        alert("You Win!");
        wins++;
        restartGame();
    }

    else if (playerSum > computerGuess) {
        alert("You Lose!")
        losses++;
        restartGame();
    }
    }

    // Writes wins and losses to HTML
    $(writeWins).html("Wins: " + wins);
    $(writeLosses).html("Losses: " + losses);   
    }

    function restartGame() {

    computerGuess = 0;
    crystal1Total = 0;
    crystal2Total = 0; 
    crystal3Total = 0; 
    crystal4Total = 0; 
    playerSum = 0;
    startGame();
    }
    
    startGame();

});