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

