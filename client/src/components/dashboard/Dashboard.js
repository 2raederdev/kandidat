import React from 'react'
import Service from '../../service/Dashboard.service'

import { Container, Col, Row, Form } from 'react-bootstrap'

import StatusCol from './Statuscol'
import ApplicationForm from '../applications/Application-form'

import './Dashboard.css';



class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            applications: [],
            showModalWindow: false,
            loggedInUser: props.loggedInUser
        }
    }

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => {
        console.log("Entra la función hadleClose")
    this.setState({ showModalWindow: false })
    }
  
    render() {

    

        return (

            <>


            <section>
                {/* {false ? "es true" : <p>no es true"</p>} */}

                <Container style={{ marginLeft: 20, marginRight: 20 }}>

                    {/* <Button className="navBar" variant="danger" onClick={this.handleShow}>Nueva candidatura</Button> */}
                    <Row>
                    <h1>Hola {this.state.loggedInUser.username}!!! Éste es tu dashboard!!!</h1>
                    </Row>
                    <Row style={{ marginLeft: 20, marginRight: 20 }}>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol loggedInUser={this.state.loggedInUser} className="CV Sent" title="CV Sent"/>
                        </Col>
                        <Col style={{marginLeft:20}}lg={2} md={6} sm={12}>
                            <StatusCol loggedInUser={this.state.loggedInUser} className="Interview" title="Interview"/>
                        </Col>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol loggedInUser={this.state.loggedInUser} className="Offer" title="Offer"/>
                        </Col>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol loggedInUser={this.state.loggedInUser} className="Hired" title="Hired"/>
                        </Col>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol loggedInUser={this.state.loggedInUser} className="Rejected" title="Rejected" />
                        </Col>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol loggedInUser={this.state.loggedInUser} className="Not interested" title="No interest" />
                        </Col>
                        
                    </Row>
 
                </Container>

            </section>

            {/* <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva candidatura</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ApplicationForm closeModalWindow={this.handleClose} loggedInUser={this.state.loggedInUser} updateTheApplications={this.updateApplicationsList} />
            </Modal.Body>
            </Modal> */}

        </>

        )
    }
}

export default Dashboard