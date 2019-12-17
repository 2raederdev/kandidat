import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/api/dashboard`,
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

    getOneApplication = id => this._service.get(`/application/${id}`)

    // deleteOneApplication = id => this._service.get(`/application/${id}`)

    deleteApplication = id => this._service.get(`/delete/${id}`)

    editApplication = ( id, { company, position, status, link } ) => this._service.post(`/application/${id}`, {company, position, status, link})

}
