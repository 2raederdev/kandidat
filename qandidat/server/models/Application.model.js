const mongoose = require('mongoose')
const Schema = mongoose.Schema

const applicationSchema = new Schema({
    company: {
        name: String,
        url: String,
        activity: String,
        imgCompanyPath: {
            type: String,
            default: "https://res.cloudinary.com/tworaederdev/image/upload/v1575721733/qandidat/defaultPicture.png"
        }
    },
    position: String,
    start: Date,
    lastUpdate: Date,
    active: Boolean,
    status: {
        type: String,
        enum: ["Interest", "CV Sent", "Phone Interview", "F2F Interview", "Coding Challenge", "Offer", "Offer declined", "Hired", "Rejected"]
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

