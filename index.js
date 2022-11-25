const { count } = require('console');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

app.set('view engine', 'ejs');
require('dotenv').config();

// const mongoString = process.env.MONGO_URL

mongoose.connect("mongodb://mongo:igztmMDj17XU3kvGjadx@containers-us-west-108.railway.app:8040")
.then((result) => console.log('conectado'))
.catch((err) => console.log(err))

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors())
app.use(express.json());
app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})