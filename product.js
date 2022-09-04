const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".brandname").textContent = product.brandname;
  document.querySelector(".productname").textContent =
    product.productdisplayname;
  document.querySelector(".productprice").textContent = `${product.price}kr`;
  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}
