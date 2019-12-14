import axios from 'axios'

export default class Services {

    constructor() {
        this._interviewService = axios.create({
            baseURL: `http://localhost:5000/api/interviews`,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    getAllInterviews = () => this._interviewService.get('/interviewslist')
   
    createInterview = interview => this._interviewService.post('/newInterview', interview)

    deleteInterview = id => this._interviewService.get(`/delete/${id}`)

    editInterview = ( id, { company, position, type, address, contactPerson, date, time, additionalInfo } ) => this._interviewService.post(`/edit/${id}`, {company, position, type, address, contactPerson, date, time, additionalInfo})


}