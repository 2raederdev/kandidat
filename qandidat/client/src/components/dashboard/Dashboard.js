import React from 'react'
import Service from '../../service/Dashboard.service'

import { Container, Col, Row, Button, Modal } from 'react-bootstrap'

import StatusCol from './Statuscol'
import ApplicationForm from '../applications/Application-form'

import './Dashboard.css';



class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            staten: [],
            applications: [],
            showModalWindow: false
        }
    }

    componentDidMount = () => 
    {
        this.dashboard()
        this.updateApplicationsList()
    }

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })

    // dashboard = () => {

    //     this._service.getAllStatus()
    //         .then(allStatusFromDB => {
    //             console.log(allStatusFromDB.data)
    //             // this.setState({ staten: allStatusFromDB.data })
    //         })
    //         .catch(err => console.log("Error", err))
    // }


    updateApplicationsList = () => {
        this._service.getAllApplications()
            .then(allApplicationsFromDB => this.setState({ applications: allApplicationsFromDB.data }))
            .catch(err => console.log("Error", err))
    }

    dashboard = () => {
        this._service.getAllStatus()
        .then(allApplicationsFromDB => this.setState({ staten: allApplicationsFromDB.data }))
        .catch(err => console.log("Error", err))
    }

    
    render() {

    

        return (

            <>


            <section>

                <Container style={{ marginLeft: 20, marginRight: 20 }}>

                    <Button className="navBar" variant="danger" onClick={this.handleShow}>Nueva candidatura</Button>


                    <h1>Tu dashboard   </h1>

                    <Row style={{ marginLeft: 20, marginRight: 20 }}>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol title="CV Sent"/>
                        </Col>
                        <Col style={{marginLeft:20}}lg={2} md={6} sm={12}>
                            <StatusCol title="Interview"/>
                        </Col>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol title="Offer"/>
                        </Col>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol title="Hired"/>
                        </Col>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol title="Rejected" />
                        </Col>
                        <Col style={{marginLeft:20}} lg={2} md={6} sm={12}>
                            <StatusCol title="No interest" />
                        </Col>
                        
                    </Row>
 
                </Container>

            </section>

            <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva candidatura</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ApplicationForm closeModalWindow={this.handleClose} updateApplicationsList={this.updateApplicationsList} />
            </Modal.Body>
            </Modal>

        </>

        )
    }
}

export default Dashboard