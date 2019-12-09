const express = require('express')
const router = express.Router()
const Application = require('../models/Application.model')

router.get('/getAllApplications', (req, res) => {
    Application.find()
        .then(allApplications => res.json(allApplications))
        .catch(err => console.log('DB error', err))
})

module.exports = router