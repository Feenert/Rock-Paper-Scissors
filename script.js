
// rock = 0 || paper = 1 || scissors = 2 ||

let playerScore = 0;
let computerScore = 0;
let roundOver = playerScore + computerScore;
const images = [];
images[0] = "./images/rock.png";
images[1] = "./images/paper.png";
images[2] = "./images/scissors.png";

function roundImages(imageIndex){
    return `<img src="${images[imageIndex]}"></img>`
};

function game(playerChoice){
let computerChoice = Math.floor(Math.random()*3);

    if(playerChoice == computerChoice){
        console.log('draw')
    } else if( playerChoice == 0 && computerChoice == 1){
        console.log('bot wins');
        computerScore++;
        document.getElementById('computerScore').outerHTML = `<h1 id="computerScore">Computer: ${computerScore} </h1>`;
    } else if (playerChoice == 0 && computerChoice == 2){
        console.log('you win');
        playerScore++;
        document.getElementById('playerScore').outerHTML = `<h1 id="playerScore">Player: ${playerScore} </h1>`;
    } else if (playerChoice == 1 && computerChoice == 0){
        console.log('you win');
        playerScore++;
        document.getElementById('playerScore').outerHTML = `<h1 id="playerScore">Player: ${playerScore} </h1>`;
    } else if(playerChoice == 1 && computerChoice == 2) {
        console.log('you lose');
        computerScore++;
        document.getElementById('computerScore').outerHTML = `<h1 id="computerScore">Computer: ${computerScore} </h1>`;
    } else if(playerChoice == 2 && computerChoice == 0) {
        console.log('you lose');
        computerScore++;
        document.getElementById('computerScore').outerHTML = `<h1 id="computerScore">Computer: ${computerScore} </h1>`;
    } else if(playerChoice == 2 && computerChoice == 1){
        console.log('you win');
        playerScore++;
        document.getElementById('playerScore').outerHTML = `<h1 id="playerScore">Player: ${playerScore} </h1>`;
    }

    document.getElementById('playerImage').innerHTML = roundImages(playerChoice);
    document.getElementById('computerImage').innerHTML = roundImages(computerChoice);
    let roundOver = playerScore + computerScore;

    if(roundOver == 5 || playerScore == 3 || computerScore == 3){
        document.getElementById('gameOver').innerHTML = "Game Over";
        let playAgain = document.createElement('button');
        playAgain.innerHTML = "Play Again";
        document.body.appendChild(playAgain);
        playAgain.addEventListener("click",() =>{
            playerScore = 0;
            computerScore = 0;
            document.getElementById('computerScore').outerHTML = `<h1 id="computerScore">Computer: ${computerScore} </h1>`;
            document.getElementById('playerScore').outerHTML = `<h1 id="playerScore">Player: ${playerScore} </h1>`;
            document.getElementById('gameOver').innerHTML = "";
            playAgain.remove();
        });
       
    }
}

// document.getElementById('playerScore').outerHTML = `<h1 id="playerScore">Player: ${playerScore} </h1>`
// document.getElementById('computerScore').outerHTML = `<h1 id="computerScore">Computer: ${computerScore} </h1>`