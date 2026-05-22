import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";

export function processPayment(method) {
  if (!["card", "upi", "cod"].includes(method))
    return "Invalid payment method";

  let items = getCartItems();
  let total = getCartTotal();

  items.forEach(i => {
    reduceStock(i.id, i.qty);
  });

  clearCart();

  return { items, total, method, status: "success" };
}
