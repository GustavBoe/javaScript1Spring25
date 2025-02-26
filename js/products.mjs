export let allProducts = [];
export const apiURL = "https://v2.api.noroff.dev/rainy-days";

try {
  const response = await fetch(apiURL);
  const json = await response.json();
  allProducts = await json.data;
} catch (error) {
  console.log("Something went wrong");
} finally {
}
