#  E-commerce Sales Chatbot - Project Report

##  Project Objective
The goal of this project is to design and implement a comprehensive chatbot system that facilitates product search and interaction for an e-commerce platform. The chatbot interacts with a mock inventory backend to provide product details and conversational functionality.

---

##  System Architecture

### 1. Frontend (Client)
- Built with **React**.
- Communicates with the backend using **Axios** for RESTful API calls.
- Provides an interactive chatbot interface with session tracking and a responsive layout.

### 2. Backend (Server)
- Developed using **FastAPI**.
- Exposes API endpoints for:
  - Fetching all products
  - Searching products via keyword
  - Storing chat messages
- Populated with **mock product data** using **Faker** and stored in **SQLite** via **SQLAlchemy ORM**.

### 3. Database
- A lightweight **SQLite** database containing over 100 fake e-commerce products.
- Uses SQLAlchemy to handle queries and object mapping.

---

##  Technology Stack

| Layer      | Technology                |
|------------|---------------------------|
| Frontend   | React, JavaScript, Bootstrap |
| Backend    | FastAPI, Python            |
| Database   | SQLite, SQLAlchemy         |
| Data Gen   | Faker                      |
| Deployment | Render (backend), Netlify (frontend) |

---

## Features Implemented

- Searchable product catalog via chatbot
- Chat interface with user input and timestamps
- RESTful API backend with mock product data
- Modular backend codebase following clean architecture
- Frontend UI with reusable components (Chatbot, ProductCard)

---

## Challenges & Solutions

### 1. **Challenge**: Ensuring real-time interaction between frontend and backend.
- **Solution**: Used `axios` for seamless HTTP requests; enabled CORS in FastAPI.

### 2. **Challenge**: Mocking realistic e-commerce data.
- **Solution**: Utilized `Faker` to generate rich, diverse product data including titles, prices, and descriptions.

### 3. **Challenge**: Cross-origin communication during local testing.
- **Solution**: Enabled CORS middleware in FastAPI to allow frontend requests.

### 4. **Challenge**: Simple yet effective chatbot interface.
- **Solution**: Built modular React components with timestamps, resets, and responsive design.

---

## Folder Structure Overview

```
ecommerce-sales-chatbot/
├── backend/
│   ├── main.py
│   ├── mock_data.py
│   ├── database.py
│   ├── models.py
│   └── life.db
├── frontend/
│   ├── index.html
│   ├── src/
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── Chatbot.js
│   │   │   └── ProductCard.js
```

---

## Conclusion

This project demonstrates a fully functional prototype for an e-commerce chatbot system using modern full-stack development tools. It simulates a complete customer journey from product inquiry to interaction logging.
