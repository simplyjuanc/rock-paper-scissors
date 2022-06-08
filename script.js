// computerPlay function returns one of the three Rock, Paper, Scissor options
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    const rand_choice = Math.floor(Math.random() * 3);
    return options[rand_choice];
};



function playRound(computerSelection) {
    // Defines how each of the pairs in the game beats the other
    let pairs = {
        'rock': ['Paper', 'Scissors'],
        'paper': ['Scissors', 'Rock'],
        'scissors': ['Rock', 'Paper']
    };


    let playerSelection = prompt('Please enter your choice: Rock, Paper, Scissors').toLowerCase()
    console.log(playerSelection)


    // Compares the hand of the first player to that of the second determines which hand is superior
    if (computerSelection == pairs[playerSelection][0]) {
        const winner = 'Player';
    } else if (computerSelection == pairs[playerSelection][1]) {
        const winner = 'Computer'
    } else {
        const winner = 'Tie'
    }



    // console.log(winner)
    // return winner
}