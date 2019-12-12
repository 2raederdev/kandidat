const express = require('express')
const router = express.Router()
const Application = require('../models/Application.model')

// Todas candidaturas

router.get('/dashboard', (req, res) => {
    Application
        .then(allApplications => res.json(allApplications))
        .catch(err => console.log('DB error', err))
    })

// Las candidaturas filtradas por cada estado: 
// CV Sent, Interview, Offer, Hired, Rejected, Not Interested

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

// Crea una nueva candidatura  

router.post('/new', (req, res) => {
    const application = req.body
    Application.create(application)
        .then((theNewApplication) => res.json(theNewApplication))
        .catch(err => console.log('DB error', err))
})

// Detalles de la candidatura

router.get('/application/:id', (req, res) => {
    const applicationId = req.params.id
    Application.findById(applicationId)
        .then(theApplication => res.json(theApplication))
        .catch(err => console.log('DB error', err))
})

// Borra la candidatura

router.get('/delete/:id', (req, res) => {
    const applicationId = req.params.id
    Application.findByIdAndDelete(applicationId)
      .then(() => res.redirect('/dashboard'))
      .catch(err => console.log(err))
})

// Nun will ich die Bewerbungen bearbeiten

// router.get('/edit', (req, res) => {
 
//     const applicationId = req.query.id
//     Applicationer.findById(applicationId)
//         .then(theApplication => res.render('coasters/edit-coaster',{coaster: results[0], parks: results[1]}))
//      .catch(err => console.log(err))
//   })


router.post('/application/:id', (req, res) => {
    const { company, position, status, link } = req.body /*posile application*/
    const applicationId = req.params.id

    Application.findByIdAndUpdate(applicationId, { company, position, status, link }, {new: true})
        .then(application => res.json(application))
        .catch(err => console.log('error!!', err))
})  

module.exports = router