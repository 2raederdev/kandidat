import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'


// import Service from '../../service/Dashboard.service'
import InterviewService from '../../service/Interview.service'

class InterviewForm extends Component {

    constructor(props) {
        super(props)
        // this._service = new Service()
        this._interviewService = new InterviewService()
        this.state = {
            interview: {
                user: props.interviewAdd.user,
                company: props.interviewAdd.company,
                position: props.interviewAdd.position,
                application: props.interviewAdd._id,
                type: "Telefónica",
                address: "",
                contactPerson: "",
                date: "",
                time: "",
                additionalInfo: ""           
            }

        }
    }


    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.interview)
        this._interviewService.createInterview(this.state.interview)
            .then(() => { 
                console.log("soy la respuesta del back")
                this.props.closeModalInterviewWindow()
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            interview: { ...this.state.interview, [name]: value },
        })
    }

    render() {

        let interviewAddress

        if(this.state.interview.type === "Presencial") {
            
            interviewAddress = 
            <Form.Group>
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" name="address" onChange={this.handleInputChange} value={this.state.interview.address} />
            </Form.Group>
        }


        return (

            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Empresa: {this.state.interview.company}</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Posición: {this.state.interview.position}</Form.Label>
               </Form.Group>
                <Form.Group>
                <Form.Label>Tipo de entrevista</Form.Label>
                <Form.Control as="select" type="text" name="type" onChange={this.handleInputChange} selected={this.state.interview.type}>
                    <option value="Telefónica" >Selecciona una opción</option>
                    <option value="Telefónica">Telefónica</option>
                    <option value="Vídeo">Vídeo</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Coding Challenge">Coding Challenge</option>
                </Form.Control>
                </Form.Group>
                {interviewAddress}
                <Form.Group>
                    <Form.Label>Persona de contacto</Form.Label>
                    <Form.Control type="text" name="contactPerson" onChange={this.handleInputChange} value={this.state.interview.contactPerson} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" name="date" onChange={this.handleInputChange} value={this.state.interview.date} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" name="time" onChange={this.handleInputChange} value={this.state.interview.time} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Información adicional</Form.Label>
                    <Form.Control type="text" name="additionalInfo" onChange={this.handleInputChange} value={this.state.interview.additionalInfo} />
                </Form.Group>
               
                <Button variant="danger" type="submit">Añadir entrevista</Button>

            </Form>
        )
    }
}

export default InterviewForm