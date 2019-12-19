import React, { Component } from 'react'
import Service from '../../service/Dashboard.service'
import InterviewService from '../../service/Interview.service'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import EditApplication from '../applications/Application-edit'
import InterviewForm from '../agenda/Interview-form'



class ApplicationDetail extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this._interviewService = new InterviewService()
        this.state = { 
            application: [],
            showModalWindow: false,
            showModalInterviewForm: false,
            loggedInUser: props.loggedInUser
        }
    }

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })
    

    handleInterviewShow = () => this.setState({ showModalInterviewForm: true })
    handleInterviewClose = () =>  this.setState({ showModalInterviewForm: false })

    componentDidMount = () => {
        this.details()}

    
    details = () => {   
        const applicationId = this.props.match.params.id
        this._service.getOneApplication(applicationId)
        
            .then(theApplication => {
                this.setState({ application: theApplication.data })
                console.log(this.state.application.interviews)
                this.state.application.interviews.map(elm => console.log(elm))

            })
            .catch(err => console.log(err))
    }



    render() {

        let button
        let interview



    if(this.state.application.status === "Interview") {
        button = <Button variant="danger" onClick={this.handleInterviewShow} >Añade una entrevista</Button> 
    }

    if(this.state.application.interviews && this.state.application.interviews.length != 0) 
        interview = <p><strong>Entrevistas:</strong></p> 


        return (

            <>
            <Container>
                <section>
                    <Row>
                        <Col md={6}>
                            <h1>Posición: {this.state.application.position}</h1>
                            <p><strong>Empresa:</strong> {this.state.application.company}</p>
                            {interview}
                            {this.state.application.interviews && this.state.application.interviews.map(elm => <p key={elm._id}>Fecha: {elm.date.substr(0,10)} </p>)}

                            
                            
                            <hr></hr>        
                            
                            <p><small><a href={this.state.application.link} target="_blank">Link a la oferta</a></small></p> 


                            <Link to="/dashboard" className="btn btn-dark">Volver</Link>
                        </Col>
                      
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


            <Modal show={this.state.showModalInterviewForm} onHide={this.handleInterviewClose}>
            <Modal.Header closeButton>
                <Modal.Title>Añade una entrevista</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InterviewForm interviewAdd={this.state.application} closeModalInterviewWindow={this.handleInterviewClose} loggedInUser={this.state.loggedInUser} />
            </Modal.Body>
            </Modal>

            </>
        )
    }

}

export default ApplicationDetail