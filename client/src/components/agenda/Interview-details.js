import React, { Component } from 'react'

import { Container, Col, Row } from 'react-bootstrap'

import WrappedMap from "./Map-oneInterview";

import Service from '../../service/Dashboard.service'

class InterviewDetails extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            interview: props.details,
        }
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.closeModalWindow()
    }  
    
    componentDidMount = () => this.setState({ initialized: true})

    render() {

        let dateShowed, addressShowed 

        dateShowed = this.state.interview.date ? this.state.interview.date.substr(0,10) : null

        addressShowed = this.state.interview.type === "Presencial" ? 
        <p className="mb-2 text-muted">Dirección: <small>{this.state.interview.address}</small></p>            
        : null

        return (     
            
            <Container onSubmit={this.handleSubmit}>

                <Row>

                    <Col md={6}>
                        <p className="mb-2 text-muted">Empresa:<small>{this.state.interview.company}</small></p>
                        <p className="mb-2 text-muted">Posición: <small>{this.state.interview.position}</small></p>            
                        {addressShowed}
                        <p className="mb-2 text-muted">Persona de contacto: <small>{this.state.interview.contactPerson}</small></p>            
                        <p className="mb-2 text-muted">Fecha: <small>{dateShowed}</small></p>            
                        <p className="mb-2 text-muted">Hora: <small>{this.state.interview.time}</small> </p>            
                        <p className="mb-2 text-muted">Información adicional: <small>{this.state.interview.additionalInfo}</small></p>            
                    </Col>  

                    <Col md={6}>
                        <div style={{ width: "100%", height: "50vh" }}>
                            <WrappedMap
                            interview={this.state.interview}
                            
                            googleMapURL=
                            {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                            loadingElement={<div style={{ height: "120%" }} />}
                            containerElement={<div style={{ height: "100%" }} />}
                            mapElement={<div style={{ height: "100%" }} />}
                            />
                        </div>
                    </Col>

                </Row>

            </Container>

        )
        }
}



export default InterviewDetails