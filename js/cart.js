import { allProducts } from "./products.js";
let sumList = [];

const cartListString = localStorage.getItem("cartList");
const cartListObject = JSON.parse(cartListString);
console.log(cartListObject);
let cartList = cartListObject;
console.log(cartList);
console.log(cartList[0].title);

const displayCartContainer = document.getElementById("display-cart-container");

function generateProductHtml(product) {
  const cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-container");

  const productTitle = document.createElement("h3");

  productTitle.textContent = cartList[product].title;

  const productImage = document.createElement("img");
  productImage.src = cartList[product].image.url;
  productImage.alt = cartList[product].image.alt;

  const productPrice = document.createElement("h3");
  if (!cartList[product].onSale) {
    productPrice.textContent = "$" + " " + cartList[product].price;
  } else {
    productPrice.textContent = "$" + " " + cartList[product].discountedPrice;
  }

  async function addButtonClick() {
    try {
      await cartList.push(cartList[product]);
      console.log(cartList);
      localStorage.setItem("cartList", JSON.stringify(cartList));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  function removeButtonClick() {
    cartList.pop(cartList[product]);
  }
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const removeButton = document.createElement("button");
  removeButton.textContent = "-";
  removeButton.addEventListener("click", removeButtonClick);

  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.addEventListener("click", addButtonClick);

  buttonContainer.append(removeButton, addButton);
  cartContainer.append(
    productTitle,
    productImage,
    productPrice,
    buttonContainer
  );

  return cartContainer;
}

async function displayProducts(data) {
  for (let i = 0; i < data.length; i++) {
    const productHtml = await generateProductHtml(i);
    await displayCartContainer.append(productHtml);
  }
}

async function main() {
  await displayProducts(cartList);
}
main();
