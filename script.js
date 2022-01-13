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
   let playerSelection =  playerChoice();

   if (playerSelection == "rock" && computerSelection == "paper"){
       return "Computer wins!";
   } else if (playerSelection == "rock" && computerSelection == "scissosrs"){
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


function game(){
    while (true){
    let winner = compare();

    if (winner == false){
        break
    } else if (winner == true){
        
        let again = prompt(winner + " Do you want to play again? (y/n)");
        if (again == "y"){
        } else if (again == "n") {
            return
        }
    }
    }
}