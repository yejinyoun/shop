const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
  .then((res) => res.json())
  .then((data) => brandList(data));

function brandList(list) {
  list.forEach(showBrand);
}

function showBrand(brand) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").textContent = brand.brandname;
  copy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${brand.brandname}`;

  const parent = document.querySelector(".container");
  parent.appendChild(copy);
}
