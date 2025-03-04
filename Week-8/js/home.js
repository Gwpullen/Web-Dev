// Reference Variables (referencing the DOM / html page)
const petsUlRef = document.querySelector("#pets");

// Data Variables
const pets = [
  "Cat",
  "Dog",
  "Goldfish",
  "Chicken",
  "Hamster",
  "Bunny",
  "Crayfish",
];

const images = ["link", "link"];

console.table(pets);

// Loop through our list
for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log(pet);

  const imageHtml = "<img src='" + image + "' alt='' />";

  petsUlRef.innerHTML += "<li>" + pet + "</li>";
}
