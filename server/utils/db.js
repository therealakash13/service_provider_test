const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.connect(URI)

const connectDb = async() => {
    try {
        await mongoose.connect(URI);
        console.log("Connection to DataBase SUCCESSFUL!...");
    } catch (error) {
        console.error("Connection to DataBase FAILED!...");
        process.exit(0);
    }

}

module.exports = connectDb