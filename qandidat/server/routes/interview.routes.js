const express = require('express')
const router = express.Router()
const Interview = require('../models/Interview.model')
const application = require('../models/Application.model')


// Nueva entrevista 

router.post('/newInterview', (req, res) => {
    const interview = req.body
    Interview.create(interview)
        .then((theNewInterview) => res.json(theNewInterview))
        .catch(err => console.log('DB error', err))
})

// Ver la lista de entrevistas

router.get('/interviewslist', (req, res) => {
    Interview.find()
        .then(allInterviews => res.json(allInterviews))
        .catch(err => console.log('DB error', err))
    })

    // Eliminar una entrevista

router.get('/delete/:id', (req, res) => {
    const interviewId = req.params.id
    Interview.findByIdAndDelete(interviewId)
        .then(() => res.redirect('/agenda'))
        .catch(err => console.log(err))
})

// Editar una entrevista

router.post('/edit/:id', (req, res) => {
    const { company, position, type, address, contactPerson, date, time, additionalInfo } = req.body
    const interviewId = req.params.id

    Interview.findByIdAndUpdate(interviewId, { company, position, type, address, contactPerson, date, time, additionalInfo }, {new: true})
        .then(interview => res.json(interview))
        .catch(err => console.log('error!!', err))
})  

module.exports = router