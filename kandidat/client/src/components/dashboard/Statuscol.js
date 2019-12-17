import React from 'react'

import Service from '../../service/Dashboard.service'

import ApplicationCard from '../applications/Application-card'
import ApplicationForm from '../applications/Application-form'


import { Row, Modal, Button } from 'react-bootstrap'


import './Dashboard.css';

class StatusCol extends React.Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            showModalWindow: false,
            applications: [],
            loggedInUser: props.loggedInUser._id

        }
    }


    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => {
        console.log("Entra la función hadleClose")
    this.setState({ showModalWindow: false })
    }


    componentDidMount = () => {
        this.updateApplicationsList()
    }

    deleteApplication = id => {

        this._service.deleteApplication(id)
        this.updateApplicationsList()
    }

    updateApplicationsList = () => {

        if (this.props.className === "CV Sent") {
            this._service.getAllApplicationsCVSent()
                .then(allApplicationsFromDB => { 
                    
                    let withId = 
                    allApplicationsFromDB.data.filter(application => application.user  === this.state.loggedInUser
                    )

                    this.setState({ applications: withId})
                })
                .catch(err => console.log("Error", err))
        } else if (this.props.className === "Interview") {
            this._service.getAllApplicationsInterview()
                .then(allApplicationsFromDB => { 
                    
                    let withId = 
                    allApplicationsFromDB.data.filter(application => application.user  === this.state.loggedInUser
                    )

                    this.setState({ applications: withId})
                })
                .catch(err => console.log("Error", err))
        }   else if (this.props.className === "Offer") {
            this._service.getAllApplicationsOffer()
                .then(allApplicationsFromDB => { 

                    let withId = 
                    allApplicationsFromDB.data.filter(application => application.user  === this.state.loggedInUser
                    )

                    this.setState({ applications: withId})
                })
                .catch(err => console.log("Error", err))
        } else if (this.props.className === "Hired") {
            this._service.getAllApplicationsHired()
                .then(allApplicationsFromDB => { 
                    
                    let withId = 
                    allApplicationsFromDB.data.filter(application => application.user  === this.state.loggedInUser
                    )

                    this.setState({ applications: withId})
                })
                .catch(err => console.log("Error", err))
        } else if (this.props.className === "Rejected") {
            this._service.getAllApplicationsRejected()
                .then(allApplicationsFromDB => { 
                    
                    let withId = 
                    allApplicationsFromDB.data.filter(application => application.user  === this.state.loggedInUser
                    )

                    this.setState({ applications: withId})
                })
                .catch(err => console.log("Error", err))
        } else if (this.props.className === "Not interested") {
            this._service.getAllApplicationsNotInterested()
                .then(allApplicationsFromDB => { 
                    
                    let withId = 
                    allApplicationsFromDB.data.filter(application => application.user  === this.state.loggedInUser
                    )

                    this.setState({ applications: withId})
                })
                .catch(err => console.log("Error", err))
        } 
    }


    render() {
        return (
            <>
        <section>

            <p>{this.props.title}</p>
            <Button variant="danger" onClick={this.handleShow}>Nueva candidatura</Button>
            <Row className={this.props.className}>
            {this.state.applications.map(application => <ApplicationCard delete={this.deleteApplication} key={application._id} {...application} />)}
            </Row>  





            </section>
            
            <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva candidatura</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ApplicationForm loggedInUser={this.state.loggedInUser} theStatus={this.props.className} closeModalWindow={this.handleClose} updateTheApplications={this.updateApplicationsList} />
            </Modal.Body>
            </Modal>

            </>
        )
    }
}
    
export default StatusCol

