import React, { Component } from 'react'
import Service from '../../service/Dashboard.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class ApplicationDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            application: [] 
        }
        this._service = new Service()
    }


    componentDidMount = () => {
        const applicationId = this.props.match.params.id
        this._service.getOneApplication(applicationId)
            .then(theApplication => this.setState({ application: theApplication.data }))
            .catch(err => console.log(err))
    }

    // deleteThisTask() {
    //     Application.remove(this.props.application._id);
    //   }



    handleSubmit = e => {
        e.preventDefault()
        this._service.createApplication(this.state.application)
            .then(() => {
                this.props.closeModalWindow()
                this.props.updateTheApplications()
            })
            .catch(err => console.log(err))
    }


    // delete = () => {
    //     const applicationId = this.props.match.params.id
    //     this._service.getOneApplication(applicationId)
    //         .then(theApplication => this.setState({ application: theApplication.data }))
    //         .catch(err => console.log(err))
    // }



    render() {
        return (
            <Container>
                <section>
                    <p>Payaso</p>
                    <Row>
                        <Col md={6}>
                            <h1>Posición {this.state.application.position}</h1>
                            <p><strong>Empresa:</strong> {this.state.application.company}</p>
                            <hr></hr>
                            <p><small>Link a la oferta:</small> {this.state.application.link}</p>
                            <Link to="/dashboard" className="btn btn-dark">Volver</Link>
                        </Col>
                        {/* <Col md={{ span: 4, offset: 2 }}>
                            <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title}></img>
                        </Col> */}
                    </Row>
                </section>

                <Button variant="danger" type="submit">Borrar candidatura</Button>

            </Container>
        )
    }

}

export default ApplicationDetail