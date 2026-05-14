# Backend Express Application

This directory contains the foundational code for an Express.js backend server, built as part of Week 2. It demonstrates how to initialize a Node.js project, set up a basic web server, use middleware, and route API requests.

## 🛠 Prerequisites
- **Node.js** and **npm** installed on your system.

## 📦 Setup & Installation

1. **Initialize the project** (already done):
   ```bash
   npm init -y
   ```
   *This command generates the `package.json` file which keeps track of your project's dependencies and scripts.*

2. **Install Express module**:
   ```bash
   npm install express
   ```
   *This adds Express to `node_modules` and updates `package.json` and `package-lock.json`.*

## 🚀 Running the Server

To start the server, run the following command in your terminal from inside the `backend` folder:
```bash
node server.js
```
The server will start listening on **port 3000** (e.g., `http://localhost:3000`).

## 📁 Application Structure

- **`server.js`**: The main entry point. It creates the HTTP server, applies custom middlewares, and forwards requests to specific API routers (`/user-api` and `/product-api`).
- **`API/userapi.js`**: Contains the REST API endpoints related to user operations.
- **`API/productapi.js`**: Contains the REST API endpoints related to product operations (e.g., GET, POST, PUT).
- **`req.http`**: A helpful file containing test requests. You can use the "REST Client" VS Code extension to easily trigger these API calls.

## 🧠 Key Concepts Covered
* **Express Setup**: Importing express and instantiating the app.
* **Middleware**: Intercepting requests using custom functions (`middleware1` and `middleware2`) and built-in middleware like `express.json()` for parsing request bodies.
* **Routing**: Delegating logic to specific route handlers based on the requested resource (e.g., separating user and product logic).
* **REST APIs**: Implementing standard GET, POST, PUT, and DELETE methods.