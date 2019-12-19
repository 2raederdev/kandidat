
import axios from 'axios'

export default class Services {

    constructor() {
        this._filesService = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/files`,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    handleUpload = theFile => this._filesService.post('/upload', theFile)
}
