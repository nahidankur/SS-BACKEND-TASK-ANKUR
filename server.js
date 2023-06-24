const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')
const authRoutes =  require('./routes/authRoutes')

const app = express();
connectDB()
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server is running under PORT ${PORT} successfully`)
})
