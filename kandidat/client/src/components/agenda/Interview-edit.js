import React, { Component } from 'react'
import InterviewService from '../../service/Interview.service'
import { Button, Form } from 'react-bootstrap'

class EditInterview extends Component {

    constructor(props) {
        super(props)
        this._interviewService = new InterviewService()
        this.state = { 
            interview: {
                id: this.props.edit.id,
                company: this.props.edit.company,
                position: this.props.edit.position,
                type: this.props.edit.type,
                address: this.props.edit.address,
                contactPerson: this.props.edit.contactPerson,
                date: this.props.edit.date,
                time: this.props.edit.time,
                additionalInfo: this.props.edit.additionalInfo
            }
        }
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            interview: { ...this.state.interview, [name]: value },
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const id = this.state.interview.id
        const interview = this.state.interview
        this._interviewService.editInterview(id, interview)
            .then( x=> {
                console.log(this.props.updateCard)
                this.props.updateCard()
                this.props.closeModalWindow()
            })
            .catch(err => console.log(err))
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

            <>

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

                <Button variant="danger" type="submit" onClick={this.handleSubmit}>Guarda los cambios</Button>
                <Button onClick={this.props.closeModalWindow}>Cerrar</Button>


                </Form>
               
            </>

        )
    
    }
}

export default EditInterview