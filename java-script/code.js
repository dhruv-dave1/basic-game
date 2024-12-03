const buttons = document.querySelectorAll(".bottons");

const result = document.querySelector(".result");
const myChoiceis = document.querySelector(".mychoice");
const compchoiceis = document.querySelector(".comchoice");

let compchoice = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let myChoice = button.innerText;
    myChoiceis.innerText = `My choice: ${myChoice}`
    compChoice();
    const winner = determineWinner(myChoice,compchoice)
    result.innerText = winner
  });
});

arr = ["Rock", "Paper", "Scissors"];

let compChoice = () => {
    compchoice = arr[Math.floor(Math.random() * 3)];
  compchoiceis.innerText = `computer choice: ${compchoice}`;
};


const determineWinner = (player,comp) => {
    if (player === comp) {
        return "It's a tie!";
    } else if (
        (player === "Rock" && comp === "Scissors") ||
        (player === "Paper" && comp === "Rock") ||
        (player === "Scissors" && comp === "Paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
};






// let compchoice = ""; // Declare compchoice globally

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const myChoice = button.innerText;
//     myChoiceis.innerText = `My choice: ${myChoice}`;
//     compChoice(); // Updates the global compchoice variable
//     const winner = determineWinner(myChoice, compchoice);
//     result.innerText = winner;
//   });
// });

// const arr = ["rock", "paper", "Scissor"];

// const compChoice = () => {
//   compchoice = arr[Math.floor(Math.random() * 3)]; // Update global compchoice
//   compchoiceis.innerText = `Computer choice: ${compchoice}`;
// };

// const determineWinner = (player, comp) => {
//   if (player.toLowerCase() === comp.toLowerCase()) {
//     return "It's a tie!";
//   } else if (
//     (player.toLowerCase() === "rock" && comp.toLowerCase() === "scissor") ||
//     (player.toLowerCase() === "paper" && comp.toLowerCase() === "rock") ||
//     (player.toLowerCase() === "scissor" && comp.toLowerCase() === "paper")
//   ) {
//     return "You win!";
//   } else {
//     return "Computer wins!";
//   }
// };
