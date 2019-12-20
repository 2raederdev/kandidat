
import React, { Component } from 'react'

import Service from '../../service/Dashboard.service'
import InterviewService from '../../service/Interview.service'

import ScrollArea from 'react-scrollbar'

import "./../agenda/agenda.css"

import { Container, Col, Row, Button, Modal } from 'react-bootstrap'

import WrappedMap from "./Map";

import InterviewCard from './Interview-card'
// import Calendar from './Calendar'
import NewCalendar from './NewCalendar'
// import Calendar2 from 'react-calendar'

class Agenda extends React.Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this._interviewService = new InterviewService()
        this.state = {
            showModalWindow: false,
            interviews: [],
            initialized: false,
            loggedInUser: props.loggedInUser,
        }
    } 
    
    componentDidMount = () => {
        this.updateInterviewsList()
        this.setState({ initialized: true})
    }

    deleteInterview = id => {

        this._interviewService.deleteInterview(id)
        this.updateInterviewsList()
    }

    updateInterviewsList = () => {
            this._interviewService.getAllInterviews()
                .then(allInterviewsFromDB => { 
                    
                    
                     let withId = 
                    allInterviewsFromDB.data.filter(interview => interview.user  === this.state.loggedInUser._id
                        )
                        
                        this.setState({ interviews: withId}, console.log("SET STATE AGENDA" + this.state.interviews))
                })
                .catch(err => console.log("Error", err))     
    }

    handleShow = () => this.setState({ showModalWindow: true })

    handleClose = () => {
        this.setState({ showModalWindow: false }) 
    }

    render() {
     
        return (
            <>
            <Container className="agenda">

                <div>
                    <img className="theImage01" src="https://res.cloudinary.com/tworaederdev/image/upload/v1576837112/kandidat/flyingAlone03_zcxfya.png"/>
                </div>

                <div>
                    <img className="theImage02" src='https://res.cloudinary.com/tworaederdev/image/upload/v1576836788/kandidat/flyingAlone01_wf0mlk.png'/>
                </div>

                <div>
                    <img className="theImage03" src="https://res.cloudinary.com/tworaederdev/image/upload/v1576836788/kandidat/flyingAlone02_hoj9ly.png"/>
                </div>


                

                <Row className="showCalendar">    
                    <Col lg={12}>                
                        <Button onClick={this.handleShow}>Ver Calendario</Button>
                    </Col>
                </Row>           

                <Row>

                    <Col lg={5}>
                        <div style={{ width: "100%", height: "68vh" }} className="theMap">
                            {this.state.initialized && (
                            <WrappedMap
                            loggedInUser={this.state.loggedInUser}
                            interview={this.state.interviews}
                            googleMapURL=
                            {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                            loadingElement={<div style={{ height: "100%" }} />}
                            containerElement={<div style={{ height: "100%" }} />}
                            mapElement={<div style={{ height: "100%" }} />}
                            />)}
                        </div>
                    </Col>

                    <Col lg={7}>

                        <Row className="showCalendar">

                            <Col lg={12}>                
                                <h3>Tus entrevistas</h3>
                                <p>Es importante tener tus entrevistas bajo control. <br></br>Y, si puedes, llega 5 minutos antes. Los recruiters te lo agradecerá</p>
                            </Col>

                        </Row>
                   
                        <Row className="cardsList" >
                                {this.state.interviews.map(interview => <Col md={6}> <InterviewCard update={this.updateInterviewsList} delete={this.deleteInterview} key={interview._id} interview={interview} /></Col>)}                          
                        </Row>
                    </Col> 
                </Row>

            </Container>
            
            <Modal className="calendarModal" show={this.state.showModalWindow} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Calendario de entrevistas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewCalendar className="calendar" loggedInUser={this.state.loggedInUser} interview={this.state.interviews}/>
            </Modal.Body>
            <Modal.Footer>
                    <Button className="noButton" variant="link" onClick={this.handleClose}>.</Button>
            </Modal.Footer>
            </Modal> 

            </>
        )
    }
}

    
export default Agenda