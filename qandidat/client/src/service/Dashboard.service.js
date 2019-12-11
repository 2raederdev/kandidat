import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: `http://localhost:5000/dashboard`,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getAllApplicationsCVSent = () => this._service.get('/dashboardcvsent')

    getAllApplicationsInterview = () => this._service.get(`/dashboardinterview`)

    // getAllApplicationsOffer = () => this._service.get(`/:id/dashboardoffer`)

    // getAllApplicationsHired = () => this._service.get(`/:id/dashboardhired`)

    // getAllApplicationsRejected = () => this._service.get(`/:id/dashboardrejected`)

    // getAllApplicationsNotInterested = () => this._service.get(`/:id/dashboardnotinterested`)


    
    createApplication = application => this._service.post('/new', application)


}
