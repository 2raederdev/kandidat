import React, { Component } from 'react'
import Service from '../../service/Dashboard.service'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'



import EditApplication from '../applications/Application-edit'



class ApplicationDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            application: [],
            showModalWindow: false,
        }
        this._service = new Service()
    }

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => {
        console.log("Entra la función hadleClose")
    this.setState({ showModalWindow: false })
    }


    componentDidMount = () => {
        this.details()
    }
    
    details = () => {   
        const applicationId = this.props.match.params.id
        this._service.getOneApplication(applicationId)
            .then(theApplication => this.setState({ application: theApplication.data }))
            .catch(err => console.log(err))
    }

    render() {

        let button

    if(this.state.application.status === "Interview") {
        button = <Button variant="danger" onClick={this.handleShow} >Añade una entrevista</Button> 
    }



        return (

            <>
            <Container>
                <section>
                    <p>Payaso</p>
                    <Row>
                        <Col md={6}>
                            <h1>Posición {this.state.application.position}</h1>
                            <p><strong>Empresa:</strong> {this.state.application.company}</p>
                            <hr></hr>
                            <p><small>Link a la oferta:</small> {this.state.application.link}</p>
                            <Link to="/dashboard" className="btn btn-dark">Volver</Link>
                        </Col>
                        {/* <Col md={{ span: 4, offset: 2 }}>
                            <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title}></img>
                        </Col> */}
                    </Row>
                </section>

                <Button variant="light" onClick={this.handleShow} >Edita candidatura</Button>
                {button}




            </Container>

            <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edita la candidatura</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditApplication updateEdit={this.details} edit={this.state.application} closeModalWindow={this.handleClose} loggedInUser={this.state.loggedInUser} updateTheApplications={this.updateApplicationsList} />
            </Modal.Body>
            </Modal>

            </>
        )
    }

}

export default ApplicationDetail