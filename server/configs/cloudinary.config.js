const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'qandidat',
    allowedFormats: ['jpg', 'png', 'pdf', 'doc', 'docx'],
    filename: function (req, res, cb) {
        cb(null, res.originalname)
    }
})

const uploader = multer({ storage })

module.exports = uploader