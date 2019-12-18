import React from 'react'

import Service from '../../service/Dashboard.service'
import InterviewService from '../../service/Interview.service'

import { Button, Modal } from 'react-bootstrap'


import WrappedMap from "./Map";

import InterviewCard from './Interview-card'
// import Calendar from './Calendar'
import NewCalendar from './NewCalendar'
// import Calendar2 from 'react-calendar'

import './calendar.css'



import { Col, Row } from 'react-bootstrap'

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

    handleClose = () => this.setState({ showModalWindow: false })



    render() {

        let theUser = this.state.interviews.user
      
        return (
            <>
        <section>

            {/* <Row>
                <Calendar />
                 <Calendar2/>
            </Row> */}

            <Row>
                <Col md={4}>
                {this.state.interviews.map(interview => <InterviewCard update={this.updateInterviewsList} delete={this.deleteInterview} key={interview._id} interview={interview} />)}
                </Col>  

                <Col md={4}>
                <div style={{ width: "100%", height: "85vh" }}>
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
                <Col md={4}>
                    <Button onClick={this.handleShow}>Ver Calendario</Button>
                </Col>  
            </Row>


        </section>
            
            <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Calendario de entrevistas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewCalendar className="calendar" loggedInUser={this.state.loggedInUser} interview={this.state.interviews}/>
            </Modal.Body>
            <Modal.Footer>
                    <Button onClick={this.handleEditShow}>Editar</Button>
                    <Button onClick={this.handleClose}>Cerrar</Button>
            </Modal.Footer>
            </Modal> 

            </>
        )
    }
}

    
export default Agenda