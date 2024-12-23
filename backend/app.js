const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const connectDB = require('./db/db.js');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes.js');

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/user', userRoutes);

module.exports = app;