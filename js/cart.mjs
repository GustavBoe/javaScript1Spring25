import { cartList } from "./viewProduct.mjs";
let sumList = [];
const displayCartContainer = document.getElementById("display-cart-container");

function generateCartHtml(product) {
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
    sumList.push(cartList[product].price);
  } else {
    productPrice.textContent = "$" + " " + cartList[product].discountedPrice;
    sumList.push(cartList[product].discountedPrice);
  }
  productContainer.append(productTitle, productImage, productPrice);

  const sumContainer = document.createElement("div");
  sumContainer.classList.add("sum-container");

  const totalText = document.createElement("h3");
  totalText.textContent = "Your total:";

  const totalSum = document.createElement("h3");
  totalSum = sumList.concat;
  sumContainer.append(totalText, totalSum);

  const productLink = document.createElement("a");
  productLink.href = `product.html?id=${allProducts[product].id}`;
  productLink.classList.add("product-link-button");
  productLink.innerHTML = "<button>View</button>";

  productContainer.append(
    productTitle,
    productImage,
    productPrice,
    productLink
  );
  return productContainer;
}

async function displayProducts(data) {
  try {
    for (let i = 0; i < data.length; i++) {
      const productHtml = await generateCartHtml(i);
      displayCartContainer.append(productHtml);
    }
  } catch (error) {
    console.log("Something is off", error);
  } finally {
    console.log("");
  }
  {
  }
}
function main() {
  displayProducts(cartList);
}
main();
