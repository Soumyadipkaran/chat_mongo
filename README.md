# Basic Chat CRUD Operation

A simple chat application built using **Node.js, Express.js, MongoDB, and EJS** that allows users to create, update, and delete chat messages.

## Features
- View all chat messages
- Create new chat messages
- Edit existing messages
- Delete messages

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps to Run the Project

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Soumyadipkaran/chat_mongo.git
   cd chat_mongo
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run MongoDB** (if not running already)
   ```sh
   mongod
   ```

4. **Start the Server**
   ```sh
   node index.js
   ```
   The server will run at **http://localhost:8080**

## Project Structure
```
chat_mongo/
│-- models/
│   ├── chat.js  # Mongoose schema for chat messages
│-- views/
│   ├── index.ejs  # Displays all chats
│   ├── new.ejs  # Form to create a new chat
│   ├── edit.ejs  # Form to edit an existing chat
│-- public/  # Static assets (CSS, JS, etc.)
│-- index.js  # Main Express server
│-- package.json  # Project metadata and dependencies
```

## API Routes

### View All Chats
**GET** `/chats`

### Create a New Chat
**GET** `/chats/new` (Form Page)
**POST** `/chats`

### Edit a Chat
**GET** `/chats/:id/edit` (Form Page)
**PUT** `/chats/:id`

### Delete a Chat
**DELETE** `/chats/:id`

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Templating Engine**: EJS
- **Middleware**: Method-Override, Express.urlencoded

