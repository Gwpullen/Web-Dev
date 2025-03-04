const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];
const scoreList = document.getElementById("scoreList");
const averageScoreParagraph = document.getElementById("averageScore");

let total = 0;
for (let i = 0; i < scores.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = scores[i];
  scoreList.appendChild(listItem);
  total += scores[i];
}

const average = total / scores.length;
averageScoreParagraph.textContent = average.toFixed(2);
