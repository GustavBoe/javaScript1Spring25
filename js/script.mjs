import { allProducts, apiURL } from "./products.mjs";
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
    productPrice.textContent = "$" + " " + allProducts[product].price;
  } else {
    productPrice.textContent = "$" + " " + allProducts[product].discountedPrice;
  }

  const productLink = document.createElement("a");
  productLink.href = `product.html?id=${allProducts[product].id}`; /* Code borrowed from Tonje Schjefstad´s "bestsellers.js"*/
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
  for (let i = 0; i < data.length; i++) {
    const productHtml = await generateProductHtml(i);
    displayContainer.append(productHtml);
  }
}

async function main() {
  await displayProducts(allProducts);
}
main();
