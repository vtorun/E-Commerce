import { getFromLocalStorage, saveToLocalStorage } from "./utils.js";

let cart = getFromLocalStorage();

export const addToCart = (event, products) => {
  const productId = parseInt(event.target.dataset.id);
  const product = products.find((product) => product.id === productId);
  if (product) {
    const exitingItem = cart.find((item) => item.id === productId);
    if (exitingItem) {
      exitingItem.quantity++;
      
    } else {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
      cart.push(cartItem);
    }
    saveToLocalStorage(cart);
  }
};
