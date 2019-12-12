const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interviewSchema = new Schema({
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
    address: String,
    application:[{
        type: Schema.Types.ObjectId,
        ref: "Application"
    }],
    contact: {
      name: String,
      link: String
    },
    date: Date,
    time: String, 

    additionalInfo: String,
  }, 
  {
    timestamps: true
  }
)

// Añadir fecha con DATE (valorar hora que es TIME)

const InterviewModel = mongoose.model('Interview', interviewSchema)
module.exports = InterviewModel