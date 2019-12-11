import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: `http://localhost:5000/dashboard`,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getAllApplications = () => this._service.get('/dashboard')

    getAllApplicationsCVSent = () => this._service.get('/dashboardcvsent')

    getAllApplicationsInterview = () => this._service.get(`/dashboardinterview`)

    getAllApplicationsOffer = () => this._service.get(`/dashboardoffer`)

    getAllApplicationsHired = () => this._service.get(`/dashboardhired`)

    getAllApplicationsRejected = () => this._service.get(`/dashboardrejected`)

    getAllApplicationsNotInterested = () => this._service.get(`/dashboardnotinterested`)
    
    createApplication = application => this._service.post('/new', application)

}
