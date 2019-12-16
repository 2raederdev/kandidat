
import React, { Component } from "react"

import InterviewService from "../../service/Interview.service"

import { Container, Form, Button } from 'react-bootstrap'

// import Button from './sendMail'


class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailAddress: '',
        emailSubject: '',
        emailBody: ''
        }
    }

    onChangeMail(e) {
        let { name, value } = e.target
        this.setState({
            [name]: value
        });
    }

    sendMail(){
        window.open(`mailto:${this.state.emailAddress}?subject=${this.state.emailSubject}&body=${this.state.emailBody}`)
    }

    render() {

        return (

            <>
            <Container>
                <section>
                    <h1>Mails</h1>
                    <p>Comprueba si un email existe</p>

                    <Form>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Introduce la dirección de correo electrónico" type="text" name="emailAddress" onChange={this.onChangeMail.bind(this)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Asunto</Form.Label>
                            <Form.Control placeholder="Introduce el asunto de tu correo" type="text" name="emailSubject" onChange={this.onChangeMail.bind(this)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Texto del mensaje</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Escribe tu correo" type="text" name="emailBody" onChange={this.onChangeMail.bind(this)}/>
                        </Form.Group>


                        <Button target="_blank" email={this.state.inputEmail} onClick={this.sendMail.bind(this)}>Enviar mail</Button>
                    </Form>
                </section>
            </Container>

            </>

    
        )
    }
}

export default Mail