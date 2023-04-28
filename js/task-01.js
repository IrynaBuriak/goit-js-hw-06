const categories = document.querySelector("#categories");
const categoriesArrLength = [...categories.children].length;

console.log(`Number of categories:`, categoriesArrLength);

const totalItem = document.querySelectorAll(".item");

totalItem.forEach((element) => {
  const headerLi = element.firstElementChild;
  const itemList = element.children[1];
  const itemNodes = itemList.children;

  console.log(`Category: ${headerLi.textContent}`);
  console.log(`Elements: ${itemNodes.length}`);
});
