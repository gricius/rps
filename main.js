const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logwins();
}


function playRound(buttonResult) {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    console.log('Player ', playerWins);
    console.log('Computer ', computerWins);

    if (playerWins == 5 || computerWins == 5) {
        console.log('Game is over. Please refresh the page to play again.');
        document.querySelector('#results').textContent = 'Game is over. Please refresh the page to play again.';
        document.getElementsByClassName('button').disabled = true;
        logwins();
        return;
    }
    let round = winners.length + 1;
    const playerSelection = buttonResult;
    console.log('Button: ', playerSelection);
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    console.log('Winners: ', winners);
    logRound(playerSelection, computerSelection, winner, round);
}

// function playerChoice() {
//     //get input from player
//     let input = buttons.value;
//     console.log(input);
//     while (input == null) {
//         input = prompt('Type Rock Paper or Scissors');
//     }
//     input = input.toLowerCase();
//     let check = validateInput(input);
//     while (check == false) {
//         input = prompt("Type Rock Paper or Scissors. No metter caps or not but check the spelling.");
//         while (input == null) {
//             input = prompt('Type Rock Paper or Scissors');
//         }
//         input = input.toLowerCase();
//         check = validateInput(input);
//     }
//     return input;
// }

function computerChoice() {
    //get random input for computer
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if ((choiceP === 'rock' && choiceC == 'scissors') || (choiceP === 'paper' && choiceC == 'rock') || (choiceP === 'scissors' && choiceC == 'paper')) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logwins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    // log results to div id="results"
    const results = document.querySelector('#results');
    results.textContent += `\r Player wins ${playerWins} times, Computer wins ${computerWins} times, Ties ${ties} times.`;


    // log results to console
    console.log('Results:');
    console.log('Player wins', playerWins);
    console.log('Computer wins', computerWins);
    console.log('Ties', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    // log results to div id="results"
    const results = document.querySelector('#results');
    results.textContent = `Round ${round}: Player chose ${playerChoice}, Computer chose ${computerChoice}. ${winner} won the round.`;


    console.log('Round ', round);

    console.log('Player choice: ', playerChoice);
    console.log('Computer choice: ', computerChoice);
    console.log(winner, ' Won the round');
    console.log('-----------------------------------');
}

// TODO: Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});