import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/auth`,
            withCredentials: true   // RUTAS PERSISTENTES
        })
    }

    signup = (username, password) => this._service.post('/signup', { username, password })
    login = (username, password) => this._service.post('/login', { username, password })
    logout = () => this._service.post('/logout')
    loggedin = () => this._service.get('/loggedin')
}