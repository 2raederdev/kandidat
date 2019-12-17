const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Interview = require('./Interview.model')

const applicationSchema = new Schema({
    user:{
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    company: String,
    position: String,
    link: String,
    start: Date,
    active: {
      type: Boolean,
      default: true
    },
    status: {
        type: String,
        enum: ["CV Sent", "Interview", "Offer", "Hired", "Rejected", "Not interested"],
        default: "CV Sent"
      },
    interviews: [{
        type: Schema.Types.ObjectId,
        ref: "Interview"
      }]
    }, 
    {
    timestamps: true
    }
)


const ApplicationModel = mongoose.model('Application', applicationSchema)
module.exports = ApplicationModel

