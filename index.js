
const { count } = require('console');
const cors = require('cors');
var path = require('path');
var express = require('express')
const mongoose = require('mongoose');
const app = express();
const auth = require('./middleware/auth')

const session = require('express-session');

app.use(session({
    secret: 'cotizador',
    resave: true,
    saveUninitialized: true
}));

require('dotenv').config();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

const routes = require('./routes/routes');

//mongodb  
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Conectada'))
.catch(err => console.log(err)
);
//mis middlewares
app.use(auth);

app.use(cors())
app.use(express.json());
app.use('/api', routes)

app.listen(process.env.PORT, () => console.log('Server on port:'+process.env.PORT)); 