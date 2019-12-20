import React, { Component } from 'react'
import Service from '../../service/Dashboard.service'
import InterviewService from '../../service/Interview.service'
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import EditApplication from '../applications/Application-edit'
import InterviewForm from '../agenda/Interview-form'

import './Application.css'



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
    handleInterviewClose = () => { 
        this.setState({ showModalInterviewForm: false })
        this.details()
}

    componentDidMount = () => {
        this.details()}

    
    details = () => {   
        const applicationId = this.props.match.params.id
        this._service.getOneApplication(applicationId)
        
            .then(theApplication => {
                this.setState({ application: theApplication.data })
                // this.state.application.interviews.map(elm => console.log(elm))
            })
            .catch(err => console.log(err))
    }



    render() {

        let button
        let interview



    if(this.state.application.status === "Interview") {
        button = <Button className="button03 button" onClick={this.handleInterviewShow} >Añade una entrevista</Button> 
    }

    if(this.state.application.interviews && this.state.application.interviews.length != 0) 
        interview = <p className="entrevistas">Entrevistas:</p> 


        return (

            <>

            <Container className="applicationDetails">
                <section>
                    <h1>Te has inscrito en una oferta</h1>

                    <Row>
                        <Col md={6}>
                            <img src={this.state.application.imageUrl} alt={this.state.application.company}></img>
                        </Col>
                        <Col md={6}>

                        <Card style={{ width: '18rem', height: '25rem' }} className="cardText">
                            <Card.Body>
                                <Card.Title>{this.state.application.position}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{this.state.application.company}</Card.Subtitle>
                                <Card.Text>
                                    {interview}
                                        {this.state.application.interviews && this.state.application.interviews.map(elm => <p key={elm._id}>Fecha: <small>{elm.date.substr(0,10)}</small> - Hora: <small>{elm.time}</small>  </p>)}
                                                            
                                    <p><small><a className="theLink" href={this.state.application.link} target="_blank">Link a la oferta</a></small></p> 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                          
                        </Col>
                      
                    </Row>

                    <Row>

                        <Col lg={12}>

                        <Button className="button01 button" as={Link} to='/dashboard' >Volver</Button>               
                        <Button className="button02 button" onClick={this.handleShow} >Edita candidatura</Button>               
                        {button}

                        </Col>

                    </Row>

                </section>

                                



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