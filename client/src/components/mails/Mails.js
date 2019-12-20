
import React, { Component } from "react"

import { Container, Form, Button, Col, Row } from 'react-bootstrap'

import './mails.css'


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
            <Container className="sendMail-form text-center">
                <Row>

                    <Col sm={12} lg={5}>
                        <h2>Llega a las personas que quieres</h2>
                        <p className="p-text">Los recruiters siempre son importantes...</p> 
                        <p className="p-text">Pero no te olvides de los CTO's y los Tech Leaders!!!</p>
                        <p className="p-text">Escríbeles un correo y házselo saber!!!</p>
                        <img src="https://res.cloudinary.com/tworaederdev/image/upload/v1576783038/kandidat/Mail-sent_hy5mux.png" alt="Mailing"/>
                    </Col>

                    <Col sm={12} lg={{span:5, offset:1}}>

                        <Form className="text-center">

                        <h1 >Mails</h1>

                            <Form.Group>
                                <Form.Label><smail>Dirección</smail></Form.Label>
                                
                                    <Form.Control type="text" name="emailAddress" onChange={this.onChangeMail.bind(this)}/>
                                
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><smail>Asunto</smail></Form.Label>
                                
                                    <Form.Control type="text" name="emailSubject" onChange={this.onChangeMail.bind(this)}/>
                                
                            </Form.Group>
                            <Form.Group >
                                <Form.Label><smail>Mensaje</smail></Form.Label>
                                
                                <Form.Control as="textarea" rows="5" type="text" name="emailBody" onChange={this.onChangeMail.bind(this)}/>
                                
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="outline-warning" target="_blank" email={this.state.inputEmail} onClick={this.sendMail.bind(this)}>Enviar correo electrónico</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>

            </>

    
        )
    }
}

export default Mail