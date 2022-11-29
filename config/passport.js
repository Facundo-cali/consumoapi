const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const {exportaBaseDatos} = require('../models/model');

passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password'
}, async (user, password, done) => {

    // Encontrando usuario
    const user = await exportaBaseDatos.findOne({user})
    if (!user){
        return done(null, false, { message: 'Not User Found'})
    }else{
        // encuentro contraseña
        const match = async function(password){
            return await bcrypt.compare(password,user.password)
        }
        const encontro = match(password);
        if (encontro) {
            return done(null,user);
        }else{
            return done(null,false,{message: 'incorrect password'});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    exportaBaseDatos.findById(id, (err,user) => {
        done(err,user)
    })
})