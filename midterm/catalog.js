const products = [
  { name: "My First Fire", Image: "images/first fire.webp" },
  { name: "Handy Hand", Image: "images/handy.webp" },
  { name: "NapSack", Image: "images/napsack.webp" },
  { name: "Hot Tub Wildlife Feeder", Image: "images/squirrel.webp" },
  { name: "Toilet Meadow", Image: "images/toilet.webp" },
  { name: "Pudding Pouch", Image: "images/pudding.webp" },
];

const catalogContainer = document.getElementById("catalog-container");

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.innerHTML = `
     <img src="${product.image}" alt="${product.name}">
     <h3>${product.name}</h3>   `;
  catalogContainer.appendChild(productDiv);
});
