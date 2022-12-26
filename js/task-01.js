const categories = document.querySelector("#categories");
const categoriesArrLength = [...categories.children].length;

console.log(`Number of categories:`, categoriesArrLength);

const liItemArr = [...document.querySelectorAll(".item")];

liItemArr.forEach((elem) => {
  const numberCategories = elem.querySelectorAll("ul>li").length;
  const title = elem.querySelector("h2").textContent;

  console.log(`Category:`, title);
  console.log(`Elements:`, numberCategories);
});
