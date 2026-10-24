let Favfood = ["Pizza", "Spaghetti", "burger", "Ice cream", "Chocolate"];

console.log(Favfood)
for (let i = 1; i <= 5; i++) {
  console.log(Favfood[i - 1]);
}

Favfood[5] = "Potato";
console.log(Favfood);

Favfood.push("Cheese");
console.log(Favfood);

Favfood.pop();
console.log(Favfood);

Favfood.splice(1, 1);
console.log(Favfood);

for (let i = 1; i <= 5; i++) {
  console.log("Round" + i);
}

console.log(Favfood[1][4]);

console.log(Favfood.length);

console.log(Favfood.includes("Pizza"));

console.log(Favfood.indexOf("burger"));

console.log(Favfood.sort());