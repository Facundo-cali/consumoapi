
const { count } = require('console');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
// const passport = require('passport');
// require('./config/passport');


app.set('view engine', 'ejs');
require('dotenv').config();



//mongodb  
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Conectada'))
    .catch(err => console.log(err)
);
// app.use(passport.initialize());
// app.use(passport.session());


app.use(cors())
app.use(express.json());
app.use('/api', routes)

app.listen(process.env.PORT, () => console.log('Server on port:'+process.env.PORT)); 