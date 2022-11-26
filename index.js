const bodyParser = require('body-parser');
const { count } = require('console');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const controllers = require('./controllers/controllers');
const routes = require('./routes/routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
require('dotenv').config();

const mongoString = process.env.MONGO_URL

mongoose.connect("mongodb://mongo:8gbMzB5GZyogztCbz6Mr@containers-us-west-59.railway.app:7332")
.then((result) => console.log('conectado'))
.catch((err) => console.log(err))

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/api/:id', controllers.getBase);

app.use(cors())
app.use(express.json());
app.use('/api', routes)

app.listen(7332, () => {
    console.log(`Server Started at ${7332}`)
})