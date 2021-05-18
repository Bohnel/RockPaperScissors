let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const menuBtn = document.querySelector(".menu-btn");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});

function getComputerChoice() {
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}, You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 200);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}, You Loose!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 200);
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
}

function draw(userChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = "Its a draw";
    userScore_span.innerHTML = userScore;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 200);
    computerScore_span.innerHTML = computerScore;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

// const sendBtn = document.querySelector("#sendBtn");
// const message = document.querySelector("#messageID");
// const messageOut = document.querySelector("#messageOut");

// sendBtn.addEventListener("click", () => {
//     let content = message.value;
//     if (content === "") {
//         messageOut.innerHTML = "Please enter valid text";
//     } else {
//         messageOut.innerHTML = content;
//         message.value = "";
//     }
// })

// message.addEventListener("keydown", (e) =>  {
//     let content = message.value;
//     if (e.keyCode === 13) {
//         if (content === "") {
//             messageOut.innerHTML = "Please enter valid text";
//         } else {
//             messageOut.innerHTML = content;
//             message.value = "";
//         }
//     }
//     })

main();