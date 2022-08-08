//Build rock paper scissor game.

//A getComputerChoice function that generates a random 'rock paper or scissor' return 

function getComputerChoice () {//this sub-function is operational

    var computerChoices = ["Rock","Paper","Scissors"];//array of possible choces.
    var computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];//random selection from array.  
    
    return (computerChoice);

}

//A playRound Function that plays a single round of the game
//function takes two parameters: playerSelection and computerSelection
//returns a text result declaring a result of this round
//player input is case-insensitive 

function playRound (playerSelection, computerSelection){ //this sub function is operational

    let playerSelectionNoCase =  playerSelection.toLowerCase();

    //logic for player selecting 'rock'
    while (playerSelectionNoCase == 'rock'){
        if (computerSelection == 'Paper'){
            return ('Computer plays "Paper."  You lose this round.');
        }
        if (computerSelection == 'scissors'){
            return ('Computer plays "Scissors."  You win this round!');
        }
        else {
            return ('Computer plays "Rock."  This round is a draw.');
        }
    }

    //logic for player selecting 'scissors'
    while (playerSelectionNoCase == 'scissors'){
        if (computerSelection == 'Rock'){
            return ('Computer plays "Rock."  You lose this round.');
        }
        if (computerSelection == 'Paper'){
            return ('Computer plays "Paper."  You win this round!');
        }
        else {
            return ('Computer plays "Scissors."  This round is a draw.');
        }
    }
    //logic for player selecting 'paper'
    while (playerSelectionNoCase == 'paper'){
        if (computerSelection == 'Scissors'){
            return ('Computer plays "Scissors."  You lose this round.');
        }
        if (computerSelection == 'Rock'){
            return ('Computer plays "Rock."  You win this round!');
        }
        else {
            return ('Computer plays "Paper."  This round is a draw.');
        }
    }
}


console.log(playRound('rock' , getComputerChoice()));

//a function called game.
//calls playRound to play 5 rounds and keep score.
//reports overall winner at the end

/*function game(){

    for(let i = 0; i < 5; i++){



    }
}*/




