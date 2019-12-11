require('dotenv').config()

const express      = require('express')
const path         = require('path');

const app = express()

require('./configs/mongoose.config')
require('./configs/debugger.config')
require('./configs/locals.config')(app)
require('./configs/middlewares.config')(app)
require('./configs/view-engine.config')(app)
require('./configs/session.config')(app)

app.use('/dashboard', require('./routes/application.routes'))
app.use('/auth', require('./routes/auth.routes'))

module.exports = app
