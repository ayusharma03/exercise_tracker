# Basic MERN App

## Dependencies:

- MongoDB Atlas as the database
- Express.js as the server
- React.js as the client
- Node.js as the runtime environment (to set up models, routes
  and controllers)
- Mongoose for better json connectivity
- cors for cross-origin resource sharing that is required for the client and server to communicate
- dotenv for environment variables

## Steps of a basic MERN App

### BACK-END

1. **Setup MongoDB Atlas**

- Create a new cluster
- Create a new user
- Get the connection string to be used in server.js (express)

2. **Setup Express.js Server**

- Create a new express app using npx create-react-app
- create a backend folder
- Create a .env file to store environment variables (URI for atlas)
- Install nodemon to automatically restart the server when changes are made
- Install required packages (express, mongoose, cors, dotenv)
- A package.json file gets created to set up scripts for the server
- Create a server.js file to set up the server
- Set up the server to connect to MongoDB Atlas
- Create Models (db objects) for objects (user, exercises in this case)
- Create routes for the server (for get and post requests)
- Create controllers for the server (to handle the logic of the routes)
😊😊😊
