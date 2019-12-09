const mongoose = require('mongoose')
const Schema = mongoose.Schema

const applicationSchema = new Schema({
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
        enum: ["CV Sent", "Interview", "Offer", "Hired", "Rejected", "No interest"]
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

