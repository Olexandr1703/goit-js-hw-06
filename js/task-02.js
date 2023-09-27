const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const itemsFruits = ingredients.map((ingredient) => {
  const item = document.createElements("li");
  item.textContent("ingridients");
  item.classList.add("item");
  return item;
});
list.append(itemsFruits);
console.log(item);
