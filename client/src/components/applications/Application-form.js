import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'


import Service from '../../service/Dashboard.service'
import AuthService from '../../service/Auth.service'
import FilesService from '../../service/Files.service'


class ApplicationForm extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this._authservice = new AuthService()
        this._filesService = new FilesService()
        this.state = {
            disabledButton: false,
            buttonText: 'Crear candidatura',
            application: {
                user: props.loggedInUser,
                company: "",
                position: "",
                link: "",
                active: "",
                status: props.theStatus,
                imageUrl: ""           }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this._service.createApplication(this.state.application)
            .then(() => {
                this.props.closeModalWindow()
                this.props.updateTheApplications()
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.state.application.active = true
        this.setState({
            application: { ...this.state.application, [name]: value },
        })
    }

    handleFileUpload = e => {
        this.setState({ disabledButton: true, buttonText: 'Subiendo imagen...' })

        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])
        this._filesService.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
                this.setState({
                    disabledButton: false,
                    buttonText: 'Crear candidatura',
                    application: { ...this.state.application, imageUrl: response.data.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        
        return (
            // this.props.closeModalWindow() ? <Redirect to="/dashboard"/> : null

            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control type="text" name="company" onChange={this.handleInputChange} value={this.state.company} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Posición</Form.Label>
                    <Form.Control type="text" name="position" onChange={this.handleInputChange} value={this.state.position} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Link a la oferta</Form.Label>
                    <Form.Control type="text" name="link" onChange={this.handleInputChange} value={this.state.link} />
                </Form.Group>
                <Form.Group>
                {/* <Form.Label>Estado</Form.Label>
                <Form.Control as="select" type="text" name="status" onChange={this.handleInputChange} selected={this.state.status}>
                    <option value="CV Sent">CV Sent</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Not interested">Not interested</option>
                </Form.Control> */}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen URL</Form.Label>
                    <Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} />
                </Form.Group>
               
                <Button variant="danger" type="submit">Crear candidatura</Button>

            </Form>
        )
    }
}

export default ApplicationForm