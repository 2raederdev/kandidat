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
        this._service.getAllApplications()
            .then(allApplicationsFromDB => this.setState({ applications: allApplicationsFromDB.data }))
            .catch(err => console.log("Error", err))
    }

    render() {
        return (
            <>
            <p>{this.props.title}</p>
            <Row>
            {this.state.applications.map(application => <ApplicationCard key={application._id} {...application} />)}
            </Row>  
            </>          
        )
    }
}
    
export default StatusCol

