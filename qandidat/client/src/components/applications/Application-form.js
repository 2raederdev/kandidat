import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


import Service from '../../service/Dashboard.service'
import AuthService from '../../service/Auth.service'

class ApplicationForm extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this._authservice = new AuthService()
        this.state = {
            application: {
                user: props.loggedInUser,
                company: "",
                position: "",
                link: "",
                active: "",
                status: props.theStatus           }
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
               
                <Button variant="danger" type="submit">Crear candidatura</Button>

            </Form>
        )
    }
}

export default ApplicationForm