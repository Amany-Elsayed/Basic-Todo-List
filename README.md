# Basic Todo List

A full-stack todo list application built with the MEAN stack (MongoDB, Express, Angular, and Node.js). This project demonstrates a simple CRUD application with a modern Angular frontend and RESTful API backend.

## Features

- View all todos
- Add new todos
- Persistent data storage with MongoDB
- Modern Angular 20 UI
- RESTful API backend

## Tech Stack

### Frontend
- **Angular** 20.3.0
- **TypeScript** 5.9.2
- **RxJS** 7.8.0
- **Angular Router**
- **Angular Forms**

### Backend
- **Node.js**
- **Express** 5.2.1
- **MongoDB** with Mongoose 9.0.2
- **CORS** enabled

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn**
- **MongoDB** (running locally on port 27017) or MongoDB Atlas account

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd basic-todo-list
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

## Configuration

### MongoDB Setup

The application expects MongoDB to be running on `localhost:27017` with a database named `basic_todo_list`.

**Option 1: Local MongoDB**
- Ensure MongoDB is installed and running locally
- The default connection string is already configured: `mongodb://127.0.0.1:27017/basic_todo_list`

**Option 2: MongoDB Atlas (Cloud)**
- Update the connection string in `server/config/connectionDb.js`
- Replace the connection string with your Atlas connection URI

### Environment Variables (Optional)

For production, consider using environment variables. Create a `.env` file in the `server` directory:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/basic_todo_list
PORT=3000
```

## Running the Application

### Start the Backend Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

   **For development with auto-reload:**
   ```bash
   npx nodemon server.js
   ```

### Start the Frontend Application

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```

2. Start the Angular development server:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:4200`

3. Open your browser and navigate to `http://localhost:4200`

## API Endpoints

The backend API is available at `http://localhost:3000/api/todos`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |

### Request/Response Examples

**GET /api/todos**
```json
Response: [
  {
    "_id": "60a5f8b9c1234567890abcde",
    "text": "Complete the project",
    "__v": 0
  }
]
```

**POST /api/todos**
```json
Request Body:
{
  "text": "New todo item"
}

Response:
{
  "_id": "60a5f8b9c1234567890abcdef",
  "text": "New todo item",
  "__v": 0
}
```

## Project Structure

```
basic-todo-list/
│
├── server/                 # Backend application
│   ├── config/            # Configuration files
│   │   └── connectionDb.js # MongoDB connection
│   ├── controller/        # Request handlers
│   │   └── todo-controller.js
│   ├── models/            # Mongoose models
│   │   └── todo.js
│   ├── routes/            # API routes
│   │   └── todoRoutes.js
│   ├── package.json
│   └── server.js          # Entry point
│
└── client/                # Frontend application
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   └── main-component/
    │   │   ├── models/
    │   │   │   └── todo-model.ts
    │   │   ├── services/
    │   │   │   └── todo-service.ts
    │   │   └── app.ts
    │   └── index.html
    └── package.json
```

## Development

### Building for Production

**Frontend:**
```bash
cd client
npm run build
```

The production build will be in the `client/dist/` directory.

### Running Tests

**Frontend:**
```bash
cd client
npm test
```

## Future Enhancements

Potential features to add:
- Update/Edit todos
- Delete todos
- Mark todos as complete/incomplete
- Filter and search functionality
- User authentication
- Categories/Tags for todos
- Due dates and reminders

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created as a learning project to demonstrate MEAN stack development.

---

**Note:** Make sure MongoDB is running before starting the server. If you encounter connection issues, verify that MongoDB is installed and running on your system.
