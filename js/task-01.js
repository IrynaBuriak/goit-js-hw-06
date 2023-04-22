const categories = document.querySelector("#categories");
const categoriesArrLength = [...categories.children].length;

console.log(`Number of categories:`, categoriesArrLength);

const firstItem = categories.firstElementChild;
const firstItemHeader = firstItem.firstElementChild;
const firstItemList = firstItem.children[1];
const firstItemNodes = firstItemList.children;

const secondItem = categories.children[1];
const secondItemHeader = secondItem.firstElementChild;
const secondItemList = secondItem.children[1];
const secondItemNodes = secondItemList.children;

const thirdItem = categories.lastElementChild;
const thirdItemHeader = thirdItem.firstElementChild;
const thirdItemList = thirdItem.children[1];
const thirdItemNodes = thirdItemList.children;

console.log(`Category: ${firstItemHeader.textContent}`);
console.log(`Elements: ${firstItemNodes.length}`);
console.log(`Category: ${secondItemHeader.textContent}`);
console.log(`Elements: ${secondItemNodes.length}`);
console.log(`Category: ${thirdItemHeader.textContent}`);
console.log(`Elements: ${thirdItemNodes.length}`);
