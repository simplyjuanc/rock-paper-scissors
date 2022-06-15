function playerPlay() {
    return prompt('Please enter your choice: Rock, Paper, Scissors').toLowerCase()
}


// computerPlay function returns one of the three Rock, Paper, Scissor options
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    const rand_choice = Math.floor(Math.random() * 3);
    return options[rand_choice];
};



function playRound(computerSelection, playerSelection) {
    // Defines how each of the pairs in the game beats the other (is beaten by 0 and beats 1)
    let pairs = {
        'rock': ['Paper', 'Scissors'],
        'paper': ['Scissors', 'Rock'],
        'scissors': ['Rock', 'Paper']
    };

    // Compares the hand of the first player to that of the second determines which hand is superior
    if (computerSelection == pairs[playerSelection][1]) {
        return 'Player';
    } else if (computerSelection == pairs[playerSelection][0]) {
        return 'Computer';
    } else {
        return 'Tie';
    }

    // You can make it so that if player wins =+ 1, if computer wins -=1 and if tie then + 0
}



const computerSelection = computerPlay();
const playerSelection = playerPlay();


console.log(playRound(computerSelection, playerSelection));