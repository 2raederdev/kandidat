const express = require('express')
const router = express.Router()
const Application = require('../models/Application.model')

// router.get('/applications', (req, res) => {
//     Application.find()
//         .then(allApplications => res.json(allApplications))
//         .catch(err => console.log('DB error', err))
//     })

router.get('/dashboard', (req, res) => {
    Application.find()
        .then(allApplications => res.json(allApplications))
        .catch(err => console.log('DB error', err))
    })

router.post('/new', (req, res) => {
    const application = req.body
    Application.create(application)
        .then(theNewApplication => res.json(theNewApplication))
        .catch(err => console.log('DB error', err))
})

module.exports = router