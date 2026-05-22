import { getProductById, checkStock } from "./product.js";

let cart = [];

export function addToCart(id, qty) {
  if (!checkStock(id, qty)) return "No stock";

  let item = cart.find(i => i.id === id);

  if (item) item.qty += qty;
  else cart.push({ id, qty });

  return "Added";
}

export function getCartItems() {
  return cart.map(c => {
    let p = getProductById(c.id);
    return { name: p.name, price: p.price, qty: c.qty };
  });
}

export function getCartTotal() {
  return getCartItems().reduce((t, i) => t + i.price * i.qty, 0);
}

export function clearCart() {
  cart = [];
}
