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
    console.log(computerNumChoice);
    let computerChoice = choiceConverter(computerNumChoice);
    console.log(computerChoice);
    return computerChoice;
}

function playerChoice(){
    let play = prompt("Rock, Paper, or Scissors?")
    play.toLowerCase();
    playerSelection = choiceConverter(play);
    console.log(playerSelection);
    return playerSelection;
}