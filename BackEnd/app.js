
// Importing the express framework for building the server
const express = require('express')

// Importing CORS middleware to eable the cross-origin resource sharing 
const cors = require('cors')

// Importing the Database connection function
const { db } = require('./db/db')

// Importing redirSync to read the directories content
const { readdirSync } = require('fs')

// Importing the path module to handle and transform file paths
const path = require('path')

// Creating an express application 
const app = express()

// Defining the port to listen on, from environmental varibales or default
const PORT = process.env.PORT || 5000

// Loading the environmental variables form .env
require('dotenv').config()

// Middlewares to pass JSON bodies in request 
app.use(express.json())

// Middlewares to enable CORS for cross origin requests
app.use(cors({
    origin: [
        "http://localhost:3000", // Frontend during local development
        "https://your-vercel-project.vercel.app" // Frontend deployed on Vercel
    ],
    methods: ["POST", "GET"], // Allow only POST and GET requests
    credentials: true // Allow cookies to be sent with requests
}));
);


// Resolve the absolute path of the Current Directory 
const _dirname = path.resolve()

// Dynamically load and use all routes in the routes directory 
try {
    const routesPath = path.join(__dirname, 'routes')
    readdirSync(routesPath).forEach((file) => {
        app.use('/api/v1', require(path.join(routesPath, file)))
    })
} catch (error) {
    console.error('Error loading routes:', error.message)
}


// Define the server function 
const server = () => {
    db() // Database to connect 
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })
}

// Starting the server 
server()
