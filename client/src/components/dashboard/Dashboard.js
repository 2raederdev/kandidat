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

<div>
                    <img className="theImage10" src="https://res.cloudinary.com/tworaederdev/image/upload/v1576782750/kandidat/Jobs_kb5txc.png"/>
                </div>

                <Container >

                    <Row className="dashboard">
                    <h1>Hola {this.state.loggedInUser.username}!!! Éste es tu dashboard!!!</h1>
                    </Row>
                    <Row>
                        <Col className="cols" style={{marginLeft:5}} lg={2} md={6} sm={12}>
                            <StatusCol className="cols" loggedInUser={this.state.loggedInUser} className="CV Sent" title="CV Sent"/>
                        </Col>
                        <Col className="cols" lg={2} md={6} sm={12}>
                            <StatusCol loggedInUser={this.state.loggedInUser} className="Interview" title="Interview"/>
                        </Col>
                        <Col className="cols" lg={2} md={6} sm={12}>
                            <StatusCol className="cols" loggedInUser={this.state.loggedInUser} className="Offer" title="Offer"/>
                        </Col>
                        <Col className="cols" lg={2} md={6} sm={12}>
                            <StatusCol loggedInUser={this.state.loggedInUser} className="Hired" title="Hired"/>
                        </Col>
                        <Col className="cols" lg={2} md={6} sm={12}>
                            <StatusCol className="cols" loggedInUser={this.state.loggedInUser} className="Rejected" title="Rejected" />
                        </Col>
                        <Col className="cols" lg={2} md={6} sm={12}>
                            <StatusCol className="cols" loggedInUser={this.state.loggedInUser} className="Not interested" title="No interest" />
                        </Col>
                        
                    </Row>

                </Container>
 

        </>

        )
    }
}

export default Dashboard