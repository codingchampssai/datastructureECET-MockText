let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

let html="";

leaderboard.forEach(player=>{

html += `
<tr>
<td>${player.name}</td>
<td>${player.correct}</td>
<td>${player.incorrect}</td>
</tr>
`;

});

document.getElementById("board").innerHTML = html;