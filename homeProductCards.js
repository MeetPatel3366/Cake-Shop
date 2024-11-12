import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  //if product is not exists
  if (!products) {
    return false;
  }

  //iterate over products api
  products.forEach((curProd) => {
    const {
      id,
      name,
      category,
      flavours,
      price,
      stock,
      description,
      rating,
      isVegetarian,
      image,
    } = curProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").innerText = name;
    productClone.querySelector(".category").innerText = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = flavours;
    productClone.querySelector(
      ".productRating"
    ).innerText = `Rating: ${rating}`;
    productClone.querySelector(
      ".isVegetarian"
    ).innerText = `isVegetarian: ${isVegetarian}`;
    productClone.querySelector(".productDescription").innerText = description;
    productClone.querySelector(".productPrice").innerText = `₹${price}`;
    productClone.querySelector(".productActualPrice").innerText = `₹${
      price * 4
    }`;
    productClone.querySelector(".productStock").innerText = stock;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
    });

        productClone
          .querySelector(".add-to-cart-button")
          .addEventListener("click", (event) => {
            addToCart(event, id, stock);
         
      });

    productContainer.append(productClone);
  });
};
