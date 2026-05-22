// Define a deeply nested order object
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// Create a deep copy using structuredClone
const copiedOrder = structuredClone(order);

// Modifying nested properties ONLY affects the copied object
copiedOrder.customer.address.city = "Mumbai";
copiedOrder.items[0].price = 65000;

console.log("Original:", order);
console.log("Copied:", copiedOrder);
