const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')

const app = express();
connectDB()
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server is running under PORT ${PORT} successfully`)
})
