import React, { Component } from 'react'
import { Button, Form, Container, Col, Toast } from 'react-bootstrap'

import Service from '../../service/Auth.service'

import './auth.css'

class SignupForm extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = { 
            showToast: false,
            toastText: '',
            username: '', 
            password: '',
            showPassword: false,
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this._service.signup(username, password)
            .then(theNewUser => {
                this.props.setUser(theNewUser.data)
                this.setState({ username: '', password: '' })
                this.props.history.push(`/dashboard`)            // REDIRECCIONAMIENTO
                // this.props.history.push(`/dashboard/${theNewUser.data._id}`)            // REDIRECCIONAMIENTO
            })
            .catch(err => this.handleToastOpen(err.response.data.message))
    }

    handleToastClose = () => this.setState({ showToast: false, toastText: '' })
    handleToastOpen = text => this.setState({ showToast: true, toastText: text })


    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleCheckboxChange = () => this.setState({ showPassword: !this.state.showPassword })


    render() {

        let seePassword = {fontSize: 0.8+'em'}

        let inputType

        if(this.state.showPassword) {
        
            inputType = 
            
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="text" name="password" onChange={this.handleInputChange} value={this.state.password} />
            </Form.Group>
        } else {

            inputType = 

            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
            </Form.Group>
        }


        return (
            <Container className="signup-form">

                <Col sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>


                <Form onSubmit={this.handleSubmit} className="text-center">

                <h1>Registro</h1>


                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control  type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />
                    </Form.Group>
                    
                    {inputType}

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check onChange={this.handleCheckboxChange} style={seePassword} type="checkbox" label="Ver contraseña" />
                    </Form.Group>


                    <Button variant="outline-warning" type="submit">Registrarme</Button>
                </Form>

                </Col>  

                <Toast
                    onClose={this.handleToastClose}
                    show={this.state.showToast}
                    delay={3000}
                    autohide
                    style={{
                        position: 'fixed',
                        textAlign: 'center',
                        right: '10px',
                        bottom: '10px',
                        minWidth: '250px'
                    }}>
                    <Toast.Header>
                        <strong className="mr-auto">Error en el registro</strong>
                    </Toast.Header>
                    <Toast.Body>{this.state.toastText}</Toast.Body>
                </Toast>

            </Container>
        )
    }
}


export default SignupForm