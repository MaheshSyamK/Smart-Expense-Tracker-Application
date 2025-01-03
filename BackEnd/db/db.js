
// Importing mongoose library 
const mongoose = require('mongoose');

// Function to connect with MongoDB by setting StrictQueryMode False
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DataBase Connected Succesfully.')
    } catch (error) {
        console.log('DB Connection Error: ', error.message);
    }
}

// exporting mongoose function
module.exports = {db}
