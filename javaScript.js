function getComputerChoice() {
    let randomNumber = Math.random();
    if(randomNumber<=1/3){
        return "rock";
    }
    else if(randomNumber<2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice() {
    let HumanChoice = prompt("Your choice?", "");
    HumanChoice = HumanChoice.toLowerCase();
    while(HumanChoice != "rock" && HumanChoice != "paper" && HumanChoice != "scissors") {
        HumanChoice = prompt("Enter either rock, paper or scissors", "");
        HumanChoice = HumanChoice.toLowerCase();
    }
    return HumanChoice;
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound(human, computer) {
        if(human === computer) {
            console.log(human, "ties", computer, ", no one wins");
            return -1; //-1 = tie, 1 = human win, 0 = computer win
        }
        if(human=="rock" && computer=="scissors") {
            console.log(human, "beats", computer, ", human wins");
            return 1;
        }
        else if(human=="rock" && computer=="paper") {
            console.log(computer, "beats", human, ", computer wins");
            return 0;
        }
        else if(human=="scissors" && computer=="paper") {
            console.log(human, "beats", computer, ", human wins");
            return 1;
        }
        else if(human=="scissors" && computer=="rock") {
            console.log(computer, "beats", human, ", computer wins");
            return 0;
        }
        else if(human=="paper" && computer=="scissors") {
            console.log(human, "beats", computer, ", human wins");
            return 1;
        }
        else {
            console.log(computer, "beats", human, ", computer wins");
            return 0;
        }
    }

    for (let i=0; i<5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice());
        if(result == 1) {
            humanScore++;
        }
        else if(result == 0) {
            computerScore++;
        }
    }
    console.log("final scores: rhuman:", humanScore, "computer:", computerScore);
}

playGame();