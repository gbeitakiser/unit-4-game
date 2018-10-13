# unit-4-game

Explanation:

This game gives the player a random number within a certain set range that they must try to match by adding to their total score. They add to their score by 
clicking one of four crystal icons on the screen, each one of which has it's own random value within a set range assigned to it, and see it added to their score. Good players will note the number their score increments by when clicking each crystal in order to add their score up to equal the computer's guess. If the player guesses correctly, an alert pops up telling them they won and adds one to the 'Wins' value. The player score value then resets to zero and the computer guess number and crystal values get assigned new random values. If their score surpasses the computer's guess, an alert comes up telling the player they lost and adds one to the 'Losses' value. The player score value then resets to zero and the computer guess number and crystal values get assigned new random values.




Psudeo Code

---HTML---

-Header that titles the game
-Static text box below header with the game instructions printed
-Dynamic text box with the number that the computer has guessed and that the player needs to reach
-Dynamc text box to the right of the box above that displays number of wins and losses
-Static box that holds the four crystal images next to each other. Crystals themselves are dynamic in the sense that they change output value upon game reset
-Static text box that reads, "Your Total Score Is."
-Dynamic text box that holds the sum of values of the clicked crystals


---jQuery---

-Variables-

-var with computer guess value inside-
-One var for each crystal output for the given game-
-var for number of wins-
-var for number of losses-
-var for total score-

-var to that plugs into HTML class/id to write value of computer guess-
-var to that plugs into HTML class/id to write value of wins-
-var to that plugs into HTML class/id to write value of losses-
-var to that plugs into HTML class/id to write value of sum of crystal clicks-

-Functions-

-Function that loads jQuery after HTML loads-
    -Function that starts the game. Sets everything to zero and initializes two below functions to get new random numbers.
        -Function that comes up with a random number between 19-120 and inputs that as the computer guess and runs upon game start-
        -Function that spits out four random and unique nubmers between 1-12 to use as a value for each of the four crystals and runs upon game start-
-Function that takes in clicks and initiates chain of activity. Can I use only one of these functions or should I make multiple versions so that I can assign to a certain crystal?-

-If/Else Statements-

-If Crystal clicked, add score corresponding to that crystal to player score.
-If player score === computer guess, alert ("You Win!"), add 1 to wins, initialize startGame function
-If player score > computer guess, alert ("You Lose!"), add 1 to losses, initialize startGame function