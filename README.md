# Week 2: Advanced JavaScript & Node.js Backend Basics

This repository contains the learning materials, code exercises, and backend API examples from Week 2 of the JavaScript training. 

## 📁 Project Structure

### 1. `backend/`
Contains a basic backend server built with Express.js to demonstrate RESTful API concepts.
* **`server.js`**: The main entry point for the Express application.
* **`API/productapi.js`**: Defines standard REST API endpoints (GET, POST, PUT) to manage a list of products.
* **`req.http`**: Contains sample API requests (likely used with the REST Client extension) to test the server endpoints.

### 2. `day-03/`
Focuses on advanced array methods and modular JavaScript concepts.
* **`simple-arrays/`**: Basic exercises demonstrating `filter`, `map`, `reduce`, `find`, and `findIndex` (e.g., temperature conversions, course name manipulations).
* **`advanced-arrays/`**: More complex, real-world examples of array methods such as processing shopping cart totals, filtering student grades, calculating employee salaries, and balancing bank transactions.
* **`modules/`**: Contains introductory examples for splitting JavaScript applications into separate modular files (a shopping list and a simple todo app).

### 3. `day-04/`
Covers modern JavaScript (ES6+) features, object manipulations, and asynchronous timers.
* **`collections/`**: Demonstrates Object-Oriented Programming (OOP) in JavaScript with a `Book` class and library management logic.
* **`copy/`**: Explains the difference between shallow copying (using the spread operator) and deep copying (using `structuredClone`).
* **`spread/`**: Practical applications of the `...` spread operator for arrays, objects, and as rest parameters in functions.
* **`timers/`**: Examples of asynchronous timer functions including delayed execution with `setTimeout` and intervals (like an OTP resend timer) with `setInterval`.

## 🚀 How to Run

**Frontend / Standard JS files:**
You can run any of the standalone JavaScript files from `day-03` and `day-04` using Node.js:
```bash
node day-03/simple-arrays/temperatures.js
```

**Backend API:**
1. Navigate to the backend folder: `cd backend`
2. Install the necessary dependencies (Express): `npm install`
3. Start the server: `node server.js`
4. Test the API endpoints using tools like Postman, Thunder Client, or the provided `req.http` file.
