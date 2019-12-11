const express = require('express')
const router = express.Router()
const Application = require('../models/Application.model')

router.get('/dashboard', (req, res) => {
    Application
        .then(allApplications => res.json(allApplications))
        .catch(err => console.log('DB error', err))
    })

router.get('/dashboardcvsent', (req, res) => {
    Application.find({ status: "CV Sent" })
    .then(allApplications => res.json( allApplications ))
    .catch(err => console.log('Error', err))
})

router.get('/dashboardinterview', (req, res) => {
    Application.find({ status: "Interview" })
    .then(allApplications => res.json( allApplications ))
    .catch(err => console.log('Error', err))
})

router.get('/dashboardoffer', (req, res) => {
    Application.find({ status: "Offer" })
    .then(allApplications => res.json( allApplications ))
    .catch(err => console.log('Error', err))
})

router.get('/dashboardhired', (req, res) => {
    Application.find({ status: "Hired" })
    .then(allApplications => res.json( allApplications ))
    .catch(err => console.log('Error', err))
})

router.get('/dashboardrejected', (req, res) => {
    Application.find({ status: "Rejected" })
    .then(allApplications => res.json( allApplications ))
    .catch(err => console.log('Error', err))
})

router.get('/dashboardnotinterested', (req, res) => {
    Application.find({ status: "Not interested" })
    .then(allApplications => res.json( allApplications ))
    .catch(err => console.log('Error', err))
})

  

router.post('/new', (req, res) => {
    const application = req.body
    Application.create(application)
        .then((theNewApplication) => res.json(theNewApplication))
        .catch(err => console.log('DB error', err))
})

router.get('/application/:id', (req, res) => {
    const applicationId = req.params.id
    Application.findById(applicationId)
        .then(theApplication => res.json(theApplication))
        .catch(err => console.log('DB error', err))
})

router.get('/delete/:id', (req, res) => {
    const applicationId = req.params.id
    Application.findByIdAndDelete(applicationId)
      .then(() => res.redirect('/dashboard'))
      .catch(err => console.log(err))
})

module.exports = router