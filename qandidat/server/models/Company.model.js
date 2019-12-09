const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
    name: String,
    url: String,
    activity: String,
    logoPath: {
        type: String,
        default: "https://res.cloudinary.com/tworaederdev/image/upload/v1575745166/qandidat/ironhack.jpg"
    },
    additionalInfo: String
})


const CompanyModel = mongoose.model('Company', companySchema)
module.exports = CompanyModel

