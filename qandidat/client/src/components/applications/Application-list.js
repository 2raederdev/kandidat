import React from 'react'
import Service from '../../service/Application.service'

import { Container } from 'react-bootstrap'

class ApplicationList extends React.Component {

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


            <section>

                <Container>

                    <h1>Tus candidaturas</h1>
{/* 
                    <Row>
                        {this.state.applications.map(application => <ApplicationCard key={application._id} {...application} />)}
                    </Row>
                    Al no haber todavía candidaturas, comento la row (además no tengo todavía el componente ApplicationCard y no sé ni el estilo que tendrá)
  */}
                </Container>

            </section>

        )
    }
}


export default ApplicationList