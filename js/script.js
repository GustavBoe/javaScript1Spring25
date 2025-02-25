let productImage = [];
let productTitle = [];
let productPrice = [];

async function doFetch(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("API call is complete");
  }
}
async function getProducts() {
  const products = await doFetch("https://v2.api.noroff.dev/rainy-days");
  for (let i = 0; i < products.data.length; i++) {
    productTitle.push(products.data[i].title);
    productImage.push(products.data[i].image);
    productPrice.push(products.data[i].price);
  }
}

// Execute our code
getProducts();
