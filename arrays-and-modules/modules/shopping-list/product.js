const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 10, category: "electronics" },
  { id: 3, name: "Mouse", price: 500, stock: 20, category: "accessories" }
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getAllProducts() {
  return products;
}

export function checkStock(id, qty) {
  let p = getProductById(id);
  return p && p.stock >= qty;
}

export function reduceStock(id, qty) {
  let p = getProductById(id);
  if (p) p.stock -= qty;
}
