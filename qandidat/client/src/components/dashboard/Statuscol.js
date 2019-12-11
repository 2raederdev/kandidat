import React from 'react'

import Service from '../../service/Dashboard.service'

import ApplicationCard from '../applications/Application-card'

import { Row } from 'react-bootstrap'


import './Dashboard.css';

class StatusCol extends React.Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            applications: [],
        }
    }

    componentDidMount = () => this.updateApplicationsList()

    updateApplicationsList = () => {

        if (this.props.className === "CV Sent") {
            this._service.getAllApplicationsCVSent()
                .then(allApplicationsFromDB => { 
                    // console.log(allApplicationsFromDB)
                    this.setState({ applications: allApplicationsFromDB.data })
                })
                .catch(err => console.log("Error", err))
        } else if (this.props.className === "Interview") {
            this._service.getAllApplicationsInterview()
                .then(allApplicationsFromDB => this.setState({ applications: allApplicationsFromDB.data }))
                .catch(err => console.log("Error", err))
        } 
        // else if (this.props.className === "Offer") {
        //     this._service.getAllApplicationsOffer()
        //         .then(allApplicationsFromDB => this.setState({ applications: allApplicationsFromDB.data }))
        //         .catch(err => console.log("Error", err))
        // } else if (this.props.className === "Hired") {
        //     this._service.getAllApplicationsHired()
        //         .then(allApplicationsFromDB => this.setState({ applications: allApplicationsFromDB.data }))
        //         .catch(err => console.log("Error", err))
        // } else if (this.props.className === "Rejected") {
        //     this._service.getAllApplicationsRejected()
        //         .then(allApplicationsFromDB => this.setState({ applications: allApplicationsFromDB.data }))
        //         .catch(err => console.log("Error", err))
        // } else if (this.props.className === "Not interested") {
        //     this._service.getAllApplicationsNotInterested()
        //         .then(allApplicationsFromDB => this.setState({ applications: allApplicationsFromDB.data }))
        //         .catch(err => console.log("Error", err))
        // } 
    }

    render() {
        return (
            <>
            <p>{this.props.title}</p>
            <Row className={this.props.className}>
            {this.state.applications.map(application => <ApplicationCard key={application._id} {...application} />)}
            </Row>  
            </>          
        )
    }
}
    
export default StatusCol

