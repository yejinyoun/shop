const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");

const url = `https://kea-alt-del.dk/t7/api/products?limit=30&brandname=${brandname}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => productList(data));

function productList(list) {
  list.forEach(showProductList);
}

function showProductList(product) {
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onsale");
    copy.querySelector(".price").classList.add("dontshow");
    copy.querySelector(".discounted").textContent = `${
      product.price - product.price / product.discount
    }kr`;
  } else {
    copy.querySelector(".discounted").classList.add("dontshow");
  }

  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".itemname").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  copy.querySelector("img").alt = product.productdisplayname;

  copy.querySelector(".price").textContent = `${product.price}kr`;

  copy.querySelector(".link").href = `product.html?id=${product.id}`;

  const parent = document.querySelector(".container");

  parent.appendChild(copy);
}
