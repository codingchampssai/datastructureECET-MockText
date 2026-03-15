let correct = Number(localStorage.getItem("correct"));
let incorrect = Number(localStorage.getItem("incorrect"));

document.getElementById("score").innerText =
"Correct: " + correct + " | Incorrect: " + incorrect;

function saveScore(){

let name = prompt("Enter your name");

if(!name) return;

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

leaderboard.push({
name:name,
correct:correct,
incorrect:incorrect
});

localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

window.location.href="leaderboard.html";

}