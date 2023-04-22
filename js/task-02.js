const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.getElementById("ingredients");

const pushIngredients = ingredients.map((li) => {
  const createLi = document.createElement("li");

  createLi.textContent = li;
  createLi.classList.add(`item`);
  return createLi;
});

list.append(...pushIngredients);

console.log(list);
