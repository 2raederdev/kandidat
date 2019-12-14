const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interviewSchema = new Schema({
    user:{
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    company: String,
    position: String,
    type: {
      type: String,
      enum: ["Telefónica", "Vídeo", "Presencial", "Coding Challenge"],
    },
    address: String,
    application:{
        type: Schema.Types.ObjectId,
        ref: "Application"
    },
    contactPerson: String,
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