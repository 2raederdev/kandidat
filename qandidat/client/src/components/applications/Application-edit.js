import React, { Component } from 'react'
import Service from '../../service/Dashboard.service'
import { Button, Form } from 'react-bootstrap'

class EditApplication extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = { 
            application: {
                company: this.props.edit.company,
                position: this.props.edit.position,
                status: this.props.edit.status,
                link: this.props.edit.link,
                id: this.props.edit._id
            }
        }
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            application: { ...this.state.application, [name]: value },
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const id = this.state.application.id
        const application = this.state.application

        console.log(this.state.application)
        this._service.editApplication(id, application)
            .then( x=> {
                this.props.closeModalWindow()
                this.props.updateEdit(x.data)
            })
            .catch(err => console.log(err))
    }

   
    render() {
        return (

            <>

            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control type="text" name="company" onChange={this.handleInputChange} value={this.state.application.company} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Posición</Form.Label>
                    <Form.Control type="text" name="position" onChange={this.handleInputChange} value={this.state.application.position} />
                </Form.Group>
                <Form.Group>
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" type="text" name="status" onChange={this.handleInputChange} selected={this.state.status}>
                    <option value="CV Sent">CV Sent</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Not interested">Not interested</option>
                </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Link a la oferta</Form.Label>
                    <Form.Control type="text" name="link" onChange={this.handleInputChange} value={this.state.application.link} />
                </Form.Group>
               
                <Button variant="danger" type="submit">Guarda los cambios</Button>

            </Form>

            </>

        )
    }

}

export default EditApplication