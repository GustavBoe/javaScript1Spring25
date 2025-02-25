import { allProducts } from "./products.mjs";
const displayContainer = document.getElementById("display-container");

function generateProductHtml(product) {
  const productContainer = document.createElement("div");
  productContainer.classList.add("product-container");

  const productTitle = document.createElement("h2");

  productTitle.textContent = allProducts[product].title;

  const productImage = document.createElement("img");
  productImage.src = allProducts[product].image.url;
  productImage.alt = allProducts[product].image.alt;

  const productPrice = document.createElement("h2");
  if (!allProducts[product].onSale) {
    productPrice.textContent = "$" + allProducts[product].price;
  } else {
    productPrice.textContent = "$" + allProducts[product].discountedPrice;
  }
  const productViewButton = document.createElement("button");
  productViewButton.textContent = "View product";

  productContainer.append(
    productTitle,
    productImage,
    productPrice,
    productViewButton
  );

  return productContainer;
}

function displayProducts(data) {
  for (let i = 0; i < data.length; i++) {
    const productHtml = generateProductHtml(i);
    displayContainer.append(productHtml);
  }
}

function main() {
  displayProducts(allProducts);
}
main();
