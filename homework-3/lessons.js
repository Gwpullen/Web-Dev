const instruments = [
  "Piano",
  "Guitar",
  "Violin",
  "Drums",
  "Saxophone",
  "Flute",
];
const instrumentList = document.getElementById("instrumentList");

for (let i = 0; i < instruments.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = instruments[i];
  instrumentList.appendChild(listItem);
}
