import React from 'react'

import Service from '../../service/Dashboard.service'
import InterviewService from '../../service/Interview.service'


import InterviewCard from './Interview-card'


import { Row, Modal, Button } from 'react-bootstrap'

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
        console.log(this.state.interviews)
    }

    deleteInterview = id => {

        this._interviewService.deleteInterview(id)
        this.updateInterviewsList()
    }


    updateInterviewsList = () => {
            console.log("entra el updatelist")
            this._interviewService.getAllInterviews()
                .then(allInterviewsFromDB => { 
                    
                    let withId = 
                    allInterviewsFromDB.data.filter(interview => interview.user  === this.state.loggedInUser._id
                    )

                    this.setState({ interviews: withId})
                })
                .catch(err => console.log("Error", err))     
    }

    // updateList = () => {
    //     console.log("esto es una llmada al update")
    //     this.updateInterviewsList()
    // }

    render() {

        return (
            <>
        <section>

            <p>Algo</p>

            <Row>
            {this.state.interviews.map(interview => <InterviewCard update={this.updateInterviewsList} delete={this.deleteInterview} key={interview._id} interview={interview} />)}
            </Row>  
        </section>

            </>
        )
    }
}
    
export default Agenda