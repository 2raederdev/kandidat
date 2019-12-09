import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import Service from '../../service/Dashboard.service'

class ApplicationForm extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            application: {
                company: "",
                position: "",
                link: "",
                active: "",
                status: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.application)
        this._service.createApplication(this.state.application)
            .then(x => {
                this.props.closeModalWindow()
                this.props.updateApplicationsList()
            })
            .catch(err => console.log(err))
    }


    handleInputChange = e => {
        let { name, value } = e.target
        this.state.application.active = true
        this.setState({
            application: { ...this.state.application, [name]: value }
        })
    }

    render() {
        return (
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
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" type="text" name="status" onChange={this.handleInputChange} value={this.state.status}>
                    <option>CV Sent</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                    <option>Not interested</option>
                </Form.Control>
                </Form.Group>
               
                <Button variant="danger" type="submit">Crear applicación</Button>
            </Form>
        )
    }
}

export default ApplicationForm