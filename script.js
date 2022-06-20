// computerPlay function returns one of the three Rock, Paper, Scissor options
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    const rand_choice = Math.floor(Math.random() * 3);
    return options[rand_choice];
}


function playRound(computerSelection, playerSelection) {
    // Defines how each of the pairs in the game beats the other (is beaten by 0 and beats 1)
    let pairs = {
        'rock': ['Paper', 'Scissors'],
        'paper': ['Scissors', 'Rock'],
        'scissors': ['Rock', 'Paper']
    };


    // Compares the hand of the first player to that of the second determines which hand is superior
    // YIf player wins =+ 1, if computer wins -=1 and if tie then + 0
    console.log(`Computer: ${computerSelection}`);
    console.log(`Player: ${playerSelection}`);
    if (computerSelection == pairs[playerSelection][1]) {
        ++playerTally;
    } else if (computerSelection == pairs[playerSelection][0]) {
        ++computerTally;
    }
    console.log(`PC tally: ${computerTally}`);
    console.log(`Player tally: ${playerTally}`);

    const p = document.createElement('p');
    p.textContent = `Current score: ${computerTally} (Computer) vs ${playerTally} (Player)`;
    results.appendChild(p);
};


function playerPlay(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    // console.log(`Player Selection: ${e.target.id}`);
    // console.log(`Computer Selection: ${computerSelection}`);
    playRound(computerSelection, playerSelection);
}


function declareWinner() {
    const finalOutcome = document.createElement('h2');
    if (playerTally > computerTally) {
        finalOutcome.textContent = 'Player won!';
    } else {
        finalOutcome.textContent = 'Computer won!';
    }
    results.appendChild(finalOutcome);
}


let computerTally = 0;
let playerTally = 0;
let playOptions = document.querySelectorAll('button');
let results = document.querySelector('.result');
const p = document.createElement('p')

const finalOutcome = document.createElement('h2');
playOptions.forEach(button => button.addEventListener('click', playerPlay));
playOptions.forEach(button => button.addEventListener('click', function() {
    if (playerTally == 5 || computerTally == 5) declareWinner();
}));



// if () {

// }


// Initilaise tallies for both players  
// Add the reult of the round to the div in the HTML as text
// Add to the tally of either player based on round results