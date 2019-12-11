const express = require('express')
const router = express.Router()
const Application = require('../models/Application.model')
const User = require('../models/User.model')

const passport = require('passport');
const bcrypt = require('bcryptjs');


// router.get('/dashboardHired', (req, res) => {
//     Application.find({status: "Hired"})
//         .then(allApplications => res.json(allApplications))
//         .catch(err => console.log('DB error', err))
//     })



// router.get('/:id/dashboardcvsent', (req, res) => { 
    router.get('/dashboardcvsent', (req, res) => {

        Application.find({ status: "CV Sent" })
        .then(allApplications => {
            console.log(`Lo que yo quiero ver es el valor de: ${req.body.User}`)
             res.json( allApplications )
            })
        .catch(err => console.log('Error', err))
    })

    router.get('/dashboardinterview', (req, res) => {

        Application.find({ status: "Interview" })
        .then(allApplications => res.json( allApplications ))
        .catch(err => console.log('Error', err))
    })

router.get('/:id/dashboardoffer', (req, res) => { 
    User.findById(req.params.id)
        .then(theUser => {
            Application.find({ status: "Offer" }).then(AllApplications => 
                res.json( {theUser, AllApplications} )
            )
        })
        .catch(err => console.log('Error', err))
})

router.get('/:id/dashboardhired', (req, res) => { 
    User.findById(req.params.id)
        .then(theUser => {
            Application.find({ status: "Hired" }).then(AllApplications => 
                res.json( {theUser, AllApplications} )
            )
        })
        .catch(err => console.log('Error', err))
})



router.get('/:id/dashboardrejected', (req, res) => { 
    User.findById(req.params.id)
        .then(theUser => {
            Application.find({ status: "Rejected" }).then(AllApplications => 
                res.json( {theUser, AllApplications} )
            )
        })
        .catch(err => console.log('Error', err))
})

router.get('/:id/dashboardnotinterested', (req, res) => { 
    User.findById(req.params.id)
        .then(theUser => {
            Application.find({ status: "Not itnerested" }).then(AllApplications => 
                res.json( {theUser, AllApplications} )
            )
        })
        .catch(err => console.log('Error', err))
})

  

router.post('/new', (req, res) => {
    const application = req.body
    const user = req.user
    Application.create(application, user)
        .then((theNewApplication) => res.json(theNewApplication))
        .catch(err => console.log('DB error', err))
})

module.exports = router