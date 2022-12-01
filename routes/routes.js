const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const auth = require('../middleware/auth')

module.exports = router;

//POST BASE
router.post('/post/base', controllers.postBase);
//METODO GET de shablon 
router.get('/get/:id', controllers.getBase);
//UPDATE BASE
router.patch('/updateBase/:id', controllers.updateBase)


//LOGIN
router.get('/login', controllers.login);
// Get content endpoint
app.get('/content/', auth, controllers.getContent);
//logout
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});

// router.post('/login',urlencodedParser, controllers.authenticate)






