function playerPlay() {
    return prompt('Please enter your choice: Rock, Paper, Scissors').toLowerCase()
};


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
    // YIf player wins =+ 1, if computer wins -=1 and if tie then + 0
    if (computerSelection == pairs[playerSelection][1]) {
        return 1;
    } else if (computerSelection == pairs[playerSelection][0]) {
        return -1;
    } else {
        return 0;
    }

};





function game() {
    // The function return the winner of a 5-round game of RockPaper-Scissors
    // It tallies the score across rounds and compares after it has looped through all of them.
    tally = 0
    for (i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        tally = +playRound(computerSelection, playerSelection);
    }

    if (tally > 0) {
        return 'Player wins';
    } else if (tally < 0) {
        return 'Computer wins';
    } else {
        return 'It\'s a tie';
    }
};





console.log(game());