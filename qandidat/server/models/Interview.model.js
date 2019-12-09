const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interviewSchema = new Schema({
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
    address: String,
    applications:[{
        type: Schema.Types.ObjectId,
        ref: "Application"
    }],
    contact: {
      name: String,
      link: String
    },
    additionalInfo: String,
  }, 
  {
    timestamps: true
  }
)

const InterviewModel = mongoose.model('Interview', interviewSchema)
module.exports = InterviewModel