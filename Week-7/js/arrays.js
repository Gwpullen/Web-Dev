const favoriteReptiles = ["Gecko", "Komodo Dragon", "Bearded Dragon"];

console.log(favoriteReptiles);
console.table(favoriteReptiles);

console.log("First Things", favoriteReptiles[0]);

console.log("Idk:", favoriteReptiles[9]);

console.log("# of favorite reptiles:", favoriteReptiles.length);

for (let i = 0; i < favoriteReptiles.length; i++) {
  const reptile = favoriteReptiles[i];
  console.log(reptile);
}
