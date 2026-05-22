// Define a Book class to represent library books
class Book {
  // Constructor to initialize book properties
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  // Method to borrow a book
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been borrowed.`);
    } else {
      console.log(`${this.title} is already borrowed.`);
    }
  }

  // Method to return a borrowed book
  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} has been returned.`);
  }

  // Method to get basic book info
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  // Method to check if book is long (> 300 pages)
  isLongBook() {
    return this.pages > 300;
  }
}

// Create instances of the Book class
const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book4 = new Book("The Alchemist", "Paulo Coelho", 208);
const book5 = new Book("Atomic Habits", "James Clear", 320);

// Store books in an array
const library = [book1, book2, book3, book4, book5];

// Display all books
console.log("All Books:");
library.forEach(book => {
  console.log(book.getInfo());
});

// Test borrowing functionality
book1.borrow();
book3.borrow();

console.log("Availability After Borrowing:");
console.log(book1.title, "Available:", book1.isAvailable);
console.log(book3.title, "Available:", book3.isAvailable);

// Test returning functionality
book1.returnBook();
console.log("After Returning One Book:");
console.log(book1.title, "Available:", book1.isAvailable);

// Use array methods to filter books
const longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("Number of Long Books:", longBooksCount);

const availableBooks = library.filter(book => book.isAvailable);
console.log("Available Books:");
availableBooks.forEach(book => {
  console.log(book.title);
});
