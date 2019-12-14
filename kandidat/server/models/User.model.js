const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    imgPath: {
        type: String,
        default: "https://res.cloudinary.com/tworaederdev/image/upload/v1575721733/qandidat/defaultPicture.png"
      },
    imgName: {
        type: String,
        default: "Imagen de perfil"
      },
    applications:[{
        type: Schema.Types.ObjectId,
        ref: "Application"
      }]
    }, 
    {
    timestamps: true
    }
)


const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel