# todolist
This project is a simple Todo List application built with Vue.js 3 (Frontend), AdonisJS 5 (Backend), and PostgreSQL for the database. It allows users to add, delete, and mark tasks as completed. All actions interact with a RESTful API.

Features

Add Todo: Users can add new tasks.
Delete Todo: Users can delete tasks from the list.
Complete Todo: Users can mark tasks as completed.
Responsive Design: The app is fully responsive for both mobile and web.
Persistent Data: Data is stored in a PostgreSQL database, and remains even after page refresh.
Tech Stack

Frontend: Vue.js 3, TypeScript, TailwindCSS
Backend: AdonisJS 5, Node.js, PostgreSQL
Database: PostgreSQL
CSS Framework: TailwindCSS
Getting Started

Prerequisites
Node.js (v16+)
PostgreSQL
Vue.js 3
AdonisJS 5
Frontend Setup
Clone the repository:
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app/frontend
Install dependencies:
Make sure you have npm installed, then run:

npm install
Run the application:
Open the index.html file in your browser to view the Todo List app. The frontend communicates with the backend via the RESTful API.
Backend Setup (AdonisJS)
Clone the backend repository:
git clone https://github.com/yourusername/todo-list-api.git
cd todo-list-api
Install dependencies:
Run the following to install the necessary dependencies:

npm install
Setup the PostgreSQL Database:
Create a PostgreSQL database and update the config/database.ts with your database connection credentials.
Run Database Migrations:
Run the migrations to create the todos table:

node ace migration:run
Start the server:
Start the AdonisJS server:

node ace serve --watch
The backend will be running on http://localhost:3000. You can use this API to interact with the Todo data.
API Endpoints
GET /api/todos - Retrieve all Todo items.
POST /api/todos - Create a new Todo item.
PUT /api/todos/:id - Update the completion status of a Todo item.
DELETE /api/todos/:id - Delete a Todo item.
Postman Tests
You can test the API using Postman with the following requests:

GET http://localhost:3000/api/todos
POST http://localhost:3000/api/todos - Body: { "title": "New Todo" }
PUT http://localhost:3000/api/todos/:id - Body: { "completed": true }
DELETE http://localhost:3000/api/todos/:id
Deployment
To deploy the app:

For the frontend, you can upload it to any static hosting service like GitHub Pages, Vercel, or Netlify.
For the backend, you can deploy it on services like Heroku or DigitalOcean.
