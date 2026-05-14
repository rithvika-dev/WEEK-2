const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
const inStockProducts = cart.filter(item => item.inStock);
console.log("In Stock Products:", inStockProducts);
const productTotals = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log("Product Totals:", productTotals);
const grandTotal = cart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);
console.log("Grand Total:", grandTotal);
const mouseDetails = cart.find(item => item.name === "Mouse");
console.log("Mouse Details:", mouseDetails);
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log("Keyboard Index:", keyboardIndex);

