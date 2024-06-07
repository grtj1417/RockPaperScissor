import "./style.css";

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g|gif|svg)$/));

var HUMAN_SCORE = 0;
var COMPUTER_SCORE = 0;
const scoreH = document.querySelector(".scoreH");
const scoreC = document.querySelector(".scoreC");
const dialog = document.querySelector("dialog");
const ComputerCoiceImg = document.querySelector("#ComputerCoiceImg");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    var computerChoice = getRandomInt(3);
    return computerChoice;
}

function playRound(humanChoice) {
    var computerChoice = getComputerChoice();
    if(computerChoice === 0){
        ComputerCoiceImg.src = "./img/rock.png";
    }else if(computerChoice === 1){
        ComputerCoiceImg.src = "./img/paper.png";
    }else if(computerChoice === 2){
        ComputerCoiceImg.src = "./img/scissor.png";
    }

    if(humanChoice == computerChoice){
        return 0;
    }

    if(humanChoice === 0 && computerChoice === 1){
        return -1;
    }else if(humanChoice === 0 && computerChoice === 2){
        return 1;
    }

    if(humanChoice === 1 && computerChoice === 2){
        return -1;
    }else if(humanChoice === 1 && computerChoice === 0){
        return 1;
    }

    if(humanChoice === 2 && computerChoice === 0){
        return -1;
    }else if(humanChoice === 2 && computerChoice === 1){
        return 1;
    }
}

function updateScore(choices) {
    if (choices === "computer") {
        scoreC.textContent = COMPUTER_SCORE;
    } else {
        scoreH.textContent = HUMAN_SCORE;
    }
}

function reset() {
    scoreH.textContent = "0";
    scoreC.textContent = "0";
    ComputerCoiceImg.src = "./img/computerDefault.jpg";
    HUMAN_SCORE = 0;
    COMPUTER_SCORE = 0;
}

function check_is_gameover() {
    if(HUMAN_SCORE === 5){
        scoreH.textContent = "5";
        const tieMessage = document.querySelector("h3");
        tieMessage.textContent = "you win";
        dialog.showModal();
        reset();
    }else if(COMPUTER_SCORE === 5){
        scoreC.textContent = "5";
        const tieMessage = document.querySelector("h3");
        tieMessage.textContent = "you lose";
        dialog.showModal(); 
        reset();
    }
}

function playGame(humanChoice) {
    var res = playRound(humanChoice);

    if(res === 1){
        HUMAN_SCORE++;
    }else if(res === -1){
        COMPUTER_SCORE++;
    }else{
        const tieMessage = document.querySelector("h3");
        tieMessage.textContent = "tie";
        dialog.showModal();
    }

    updateScore("computer");
    updateScore("human");

    check_is_gameover();
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

dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
        dialog.close();
    }
});