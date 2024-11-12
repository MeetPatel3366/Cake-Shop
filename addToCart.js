import { getCartProductFromLS } from "./getCartProductFromLS";

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  console.log(currentProdElem);

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;

  console.log(quantity, price);

  price = price.replace("₹", "");
  console.log(quantity, price);

  price = Number(price * quantity);
  quantity = Number(quantity);
  console.log(quantity, price);

  // let updateCart={id,quantity,price};

  arrLocalStorageProduct.push({ id, quantity, price });

  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
};
