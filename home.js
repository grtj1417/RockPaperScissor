var HUMAN_SCORE = 0;
var COMPUTER_SCORE = 0;
const scoreH = document.querySelector(".scoreH");
const scoreC = document.querySelector(".scoreC");
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
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


const ComputerCoiceImg = document.querySelector("#ComputerCoiceImg");

function playRound(humanChoice)
{
    var computerChoice = getComputerChoice();
    if(computerChoice === 0){
        ComputerCoiceImg.src = "./img/rock.png";
    }else if(computerChoice === 1){
        ComputerCoiceImg.src = "./img/paper.png";
    }else if(computerChoice === 2){
        ComputerCoiceImg.src = "./img/scissor.png";
    }

    if(humanChoice == computerChoice){
        console.log("tie");
        return 0;
    }

    if(humanChoice === 0 && computerChoice === 1){
        console.log("you lose");
        return -1;
    }else if(humanChoice === 0 && computerChoice === 2){
        console.log("you win");
        return 1;
    }

    if(humanChoice === 1 && computerChoice === 2){
        console.log("you lose");
        return -1;
    }else if(humanChoice === 1 && computerChoice === 0){
        console.log("you win");
        return 1;
    }

    if(humanChoice === 2 && computerChoice === 0){
        console.log("you lose");
        return -1;
    }else if(humanChoice === 2 && computerChoice === 1){
        console.log("you win");
        return 1;
    }
}

function updateScore(choices)
{
    if (choices === "computer") {
        console.log("computer's score:" + COMPUTER_SCORE);
        scoreC.textContent = COMPUTER_SCORE;
    } else {
        console.log("your score:" + HUMAN_SCORE);
        scoreH.textContent = HUMAN_SCORE;
    }
}
function playGame(humanChoice)
{
    var res = playRound(humanChoice);

    if(res === 1){
        HUMAN_SCORE++;
    }else if(res === -1){
        COMPUTER_SCORE++;
    }

    // human score
    updateScore("computer");
    // computer score
    updateScore("human");

    // game over & reset
    if(HUMAN_SCORE === 5){
        alert("You win")
        scoreH.textContent = "0";
        scoreC.textContent = "0";
        ComputerCoiceImg.src = "./img/computerDefault.jpg";
    }else if(COMPUTER_SCORE === 5){
        alert("You lose")
        scoreH.textContent = "0";
        scoreC.textContent = "0";
        ComputerCoiceImg.src = "./img/computerDefault.jpg";
    }

}

const btn0 = document.querySelector(".btn0");
btn0.addEventListener("click", () => {
    playGame(0);
});

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
    playGame(1);
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
    playGame(2);
});