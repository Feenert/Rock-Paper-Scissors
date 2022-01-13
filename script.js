// 0 = rock|| 1= paper|| 2 = scissors

function choiceConverter(choice){
    if (choice == 0 || choice == "rock"){
        return "rock";
    } else if (choice == 1 || choice == "paper"){
        return "paper"
    } else if (choice == 2 || choice == "scissors"){
        return "scissors"
    } else {
        return "Incorret input";
    }
}

function computerPlay(){
    let computerNumChoice = Math.floor(Math.random()*3);
    let computerChoice = choiceConverter(computerNumChoice);
    return computerChoice;
}

function playerChoice(){
    let play = prompt("Rock, Paper, or Scissors?")
    play.toLowerCase();
    playerSelection = choiceConverter(play);
    return playerSelection;
}

function compare(){
   let computerSelection = computerPlay();
   console.log(computerSelection);
   let playerSelection =  playerChoice();
   console.log(playerSelection);

   if (playerSelection == "rock" && computerSelection == "paper"){
       return "Computer wins!";
   } else if (playerSelection == "rock" && computerSelection == "scissors"){
       return "Player wins!";
   } else if (playerSelection == "paper" && computerSelection == "scissors"){
       return "Computer wins!";
   } else if (playerSelection == "paper" && computerSelection == "rock"){
       return "Player wins!";
   } else if (playerSelection == "scissors" && computerSelection == "rock"){
       return "Computer wins!";
   } else if (playerSelection == "scissors" && computerSelection == "paper"){
       return "Player wins!";
   } else if(playerSelection == "Incorrect input"){
       return false
   } else {
        return "Draw.";
   }
}

let playerScore = 0;
let computerScore = 0;

function game(){
    let i = 0;

    while (i <= 4){
    let winnerRound = compare();

    if (winnerRound == false){
        break
    } else{
        if (winnerRound == "Computer wins!"){
            computerScore = computerScore + 1;
            console.log(computerScore);
            if (computerScore == 3){
                return alert("Computer wins!")
            }
        }

        if (winnerRound == "Player wins!"){
            playerScore = playerScore + 1;
            console.log(playerScore);
            if (playerScore == 3){
                return alert("Player wins!")
            }
        }

        if (winnerRound == "Draw."){
            alert("Draw");
        } else {
            let again = prompt(winnerRound + " Player Score: " + playerScore + " Computer Score: " + computerScore + " Next game (y/n)");
            if (again == "y"){
                i = i +1
                console.log(i);
        }   else if (again == "n") {
            return
        }
        }
    }
    }
}