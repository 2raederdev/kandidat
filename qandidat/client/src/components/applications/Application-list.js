import React from 'react'
import Service from '../../service/Application.service'

import { Container, Row, Col  } from 'react-bootstrap'

import StatusRow from '../dashboard/Statuscol'


class ApplicationList extends React.Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            applications: []
        }
    }

    componentDidMount = () => 
    {
        this.updateApplicationsList()
    }

    updateApplicationsList = () => {
        this._service.getAllApplications()
            .then(allApplicationsFromDB => this.setState({ applications: allApplicationsFromDB.data }))
            .catch(err => console.log("Error", err))
    }

    render() {
        return (


            <section>

                <Container>

                    <h1>Tus candidaturas</h1>

                    <Row>
                        <Col>
                            {this.state.applications.map(application => <StatusRow key={application._id} {...application} />)}
                        </Col>
                    </Row>
 
                </Container>

            </section>

        )
    }
}


export default ApplicationList