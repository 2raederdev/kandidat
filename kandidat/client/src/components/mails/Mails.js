
import React, { Component } from "react"

import InterviewService from "../../service/Interview.service"

import { Container, Form, Button } from 'react-bootstrap'

// import Button from './sendMail'


class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nameValue: '',
        }
    }

    onChangeName(event) {
        this.setState({
            nameValue:event.target.value
        });

    }

    sendMail(){
        window.open(`mailto:${this.state.nameValue}?subject=Subject&body=message%20goes%20here`)
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
                            <Form.Label>Dirección de correo</Form.Label>
                        <Form.Control type="text" onChange={this.onChangeName.bind(this)}/>
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