const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logwins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winne r, round);
}

function playerChoice() {
    //get input from player
    let input = prompt('Type Rock Paper or Scissors');
    while (input == null) {
        input = prompt('Type Rock Paper or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type Rock Paper or Scissors. No metter caps or not but check the spelling.");
        while (input == null) {
            input = prompt('Type Rock Paper or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

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
    console.log('Results:');
    console.log('Player wins', playerWins);
    console.log('Computer wins', computerWins);
    console.log('Ties', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round ', round);

    console.log('Player choice: ', playerChoice);
    console.log('Computer choice: ', computerChoice);
    console.log(winner, ' Won the round');
    console.log('-----------------------------------');
}
game();





