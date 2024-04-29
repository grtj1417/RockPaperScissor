console.log("Hello World");

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
    }

function getHumanChoice()
{
    var humanChoice = prompt("rock, paper, scissor");
    humanChoice.toLowerCase();
    console.log("you:" + humanChoice);
    return humanChoice;
}

function getComputerChoice()
{
    var computerChoice = getRandomInt(3);
    if(computerChoice === 0){
        console.log("computer:rock");
    }else if(computerChoice === 1){
        console.log("computer:paper");
    }else{
        console.log("computer:scissor")
    }
    return computerChoice;
}


// var humanScore = 0;
// var computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    // if(humanChoice == computerChoice){
    //     console.log("tie");
    // }
    if(humanChoice === "rock" && computerChoice === 1){
        console.log("you lose");
        return -1;
    }else if(humanChoice === "rock" && computerChoice === 2){
        console.log("you win");
        return 1;
    }else if(humanChoice === "rock"){
        console.log("tie");
        return 0;
    }

    if(humanChoice === "paper" && computerChoice === 2){
        console.log("you lose");
        return -1;
    }else if(humanChoice === "paper" && computerChoice === 0){
        console.log("you win");
        return 1;
    }else if(humanChoice === "paper"){
        console.log("tie");
        return 0;
    }

    if(humanChoice === "scissor" && computerChoice === 0){
        console.log("you lose");
        return -1;
    }else if(humanChoice === "scissor" && computerChoice === 1){
        console.log("you win");
        return 1;
    }else if(humanChoice === "scissor"){
        console.log("tie");
        return 0;
    }
}

function playGame(humanScore, computerScore)
{
    humanScore = 0;
    computerScore = 0;
    for(var i = 0; i < 5; i++){
        var result = playRound();
        if(result === 1){
            humanScore++;
        }else if(result === -1){
            computerScore++;
        }
    }
    console.log("your score:" + humanScore);
    console.log("computer's score:" + computerScore);
}
playGame();




// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

