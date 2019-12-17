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

        let dateShowed 

        dateShowed = this.state.interview.date ? this.state.interview.date.substr(0,10) : null


        return (     
            
            <Container onSubmit={this.handleSubmit}>

                <Row>

                    <Col md={6}>
                        <h1 className="mb-2 text-muted">Empresa: {this.state.interview.company}</h1>            
                        <h2 className="mb-2 text-muted">Posición: {this.state.interview.position} </h2>            
                        <p className="mb-2 text-muted">Tipo de entrevista:{this.state.interview.type} </p>            
                        <p className="mb-2 text-muted">Dirección: {this.state.interview.address} </p>            
                        <p className="mb-2 text-muted">Persona de contacto: {this.state.interview.contactPerson} </p>            
                        <p className="mb-2 text-muted">Fecha: {dateShowed} </p>            
                        <p className="mb-2 text-muted">Hora: {this.state.interview.time} </p>            
                        <p className="mb-2 text-muted">Información adicional: {this.state.interview.additionalInfo} </p>            
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