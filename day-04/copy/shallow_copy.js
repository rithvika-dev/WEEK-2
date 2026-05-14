// Define a nested user object
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// Create a shallow copy using the spread operator
const copiedUser = { ...user };

// Modify a top-level property (only affects copied object)
copiedUser.name = "Kiran";                     
// Modify a nested property (affects BOTH original and copied object)
copiedUser.preferences.theme = "light";        

console.log("Original:", user);
console.log("Copied:", copiedUser);
