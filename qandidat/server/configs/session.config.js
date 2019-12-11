const passport = require('passport')
const session = require('express-session')
const mongoose = require('mongoose')
require('./passport.config')
const MongoStore = require('connect-mongo')(session)

//MONGOSTORE

module.exports = app => {
    // Configuración de sesión
    app.use(session({
        secret: 'Whatever',
        resave: true,
        saveUninitialized: true,
        store: new MongoStore ({mongooseConnection: mongoose.connection})
    }))
    app.use(passport.initialize())
    app.use(passport.session())
}