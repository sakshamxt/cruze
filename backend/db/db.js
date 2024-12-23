const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));
}

module.exports = connectDB;