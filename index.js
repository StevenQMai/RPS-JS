// UPI

// Understand: 
    //Create a game that is to be played against the computer. Write a function that randomly returns "rock", "paper", or "scissors"


// getComputerChoice function
    // Plan
        // Create a new function named getComputerChoice
        // Make it so that getComputerChoice randomly returns one of the following string values between RPS 
        //     Math.random returns a random number greater than or equal to 0 and less than 1


    // Pseudocode 
    // Function getComputerChoice:
    //     Initialize 3 string values: r, p, s
        
    //     Math.random() * 3 => This scales the random number to the range 0 (inclusive) to 3 (exclusive).
    //         Example values:
    //         0.0 → 0.0
    //         0.5 → 1.5
    //         0.999 → 2.997

    //     Math.floor() => This rounds the number down to the nearest whole number, giving possible results of 0, 1, or 2. 
        
    //     + 1 => This shifts the range up by 1, so the final results are 1, 2, or 3.

    //     Use conditional blocks to return r, p, s based on value of computer choice

const getComputerChoice = () => {
    const r = "r";
    const p = "p";
    const s = "s";

    const computerChoice = Math.floor(Math.random() * 3) + 1; // returns a number from 1-3

    if (computerChoice === 1) {
        return r
    } else if (computerChoice === 2) {
        return p
    } else {
        return s
    }
    
};

// getHumanChoice function
    // Plan
        // Write code so that getHumanChoice returns one of the valid choices based on user input 
            // Use the prompt method to get user input

    // Pseudocode
        // Function getHumanChoice
        // Create a variable that takes user input as a String
        // Use conditional statements to return r,p,s based on user input; invalid inputs return an error message 

const getHumanChoice = () => {
    const r = "r";
    const p = "p";
    const s = "s";

    let humanChoice;
    while (true) {
        humanChoice = prompt("Please select Rock (r), Paper(p), or Scissors(s): ").toLowerCase();

        if (humanChoice === "r") {
            return r
        } else if (humanChoice === "p") {
            return p
        } else if (humanChoice === "s") {
            return s 
        } else {
            console.log("Invalid input. Please enter 'r', 'p', or 's'.") // Notifies user of invalid input
        }
    }
};



// playRound function
    // Plan
        // Write a function that takes the human and computer chocies as arguments, plays a single round, increments the round winner's score and logs a winner announcement

    // Pseudocode
        // 2 parameters: humanChoice and computerChoice
        // Make sure humanChoice is case insensitive 
        // Make playRound console.log a string value representing the round winner
        // Increment humanScore or computerScore variable based on the round winner

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase()

    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("Its a draw!")
    } else if (
        (humanChoice === "r" && computerChoice === "s") || 
        (humanChoice === "p" && computerChoice === "r") || 
        (humanChoice === "s" && computerChoice === "p")
    ) {
        console.log("Human wins this round!");
        return "human"; // returns human as the winner of the round
    } else {
        console.log("Computer wins this round!");
        return "computer"; // returns computer as the winner of the round
    }

    console.log(`Current scores - Human: ${humanScore}, Computer: ${computerScore}`);
}


// playGame function
    // Plan
        // playGame will call playRound to play 5 rounds, keeping track of the scores and declaring a winner at the end

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors! Best of 5 rounds!");

    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log(`Scores after ${round}: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! Better luck next time!");
    } else {
        console.log("It's a tie!");
    }
};

playGame();