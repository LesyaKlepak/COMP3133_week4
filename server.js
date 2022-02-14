const express = require('express')
const app = express()
const PORT = 3000

const mongoose = require('mongoose')
const userRoutes = require('./routes/user')

app.use('/user', userRoutes)

//mongoose.connect('mongodb://localhost/userdb', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://Lesya:October2021@comp3123.pe9rd.mongodb.net/usersdb?retryWrites=true&w=majority')
app.listen(PORT, ()=> console.log("Server is running"))