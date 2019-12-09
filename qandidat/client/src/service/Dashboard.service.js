import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/applications',
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getAllApplications = () => this._service.get('/dashboard')
    createApplication = application => this._service.post('/new', application)

    getAllStatus = () => this._service.get('/dashboard')


}
