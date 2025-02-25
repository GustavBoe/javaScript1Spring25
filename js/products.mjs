export let allProducts = [];
const apiURL = "https://v2.api.noroff.dev/rainy-days";

try {
  const response = await fetch(apiURL);
  const json = await response.json();
  allProducts = json.data;
} catch (error) {
  console.log("Something went *worng*");
} finally {
  console.log("API call is complete");
}
