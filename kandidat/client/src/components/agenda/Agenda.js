import React from 'react'

import Service from '../../service/Dashboard.service'
import InterviewService from '../../service/Interview.service'

import WrappedMap from "./Map";

import InterviewCard from './Interview-card'


import { Col, Row } from 'react-bootstrap'

class Agenda extends React.Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this._interviewService = new InterviewService()
        this.state = {
            showModalWindow: false,
            interviews: [],
            loggedInUser: props.loggedInUser

        }
    }



    componentDidMount = () => {
        this.updateInterviewsList()
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
                        
                        this.setState({ interviews: withId})
                })
                .catch(err => console.log("Error", err))     
    }


    render() {

        return (
            <>
        <section>

            <Row>
                <Col md={6}>
                {this.state.interviews.map(interview => <InterviewCard update={this.updateInterviewsList} delete={this.deleteInterview} key={interview._id} interview={interview} />)}
                </Col>  

                <Col md={6}>
                <div style={{ width: "100%", height: "85vh" }}>
                    <WrappedMap
                    googleMapURL=
                    {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC0Hl0lxEoQa6Oy0mdrsk5eu4LZjGX4szU`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    />
                </div>
                </Col>
            </Row>

        </section>

            </>
        )
    }
}

    
export default Agenda