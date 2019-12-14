import React, { Component } from 'react'

import { Container } from 'react-bootstrap'


import Service from '../../service/Dashboard.service'

class InterviewDetails extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = {
            interview: props.details
        }
    }

    componentDidMount = () => console.log(this.state.interview)


    handleSubmit = e => {
        e.preventDefault()
        this.props.closeModalWindow()
    }

    render() {

        let dateShowed 
        
        dateShowed = this.state.interview.date ? this.state.interview.date.substr(0,10) : null
        
        return (     
            
            <Container onSubmit={this.handleSubmit}>

                <h1 className="mb-2 text-muted">Empresa: {this.state.interview.company}</h1>            
                <h2 className="mb-2 text-muted">Posición: {this.state.interview.position} </h2>            
                <p className="mb-2 text-muted">Tipo de entrevista:{this.state.interview.type} </p>            
                <p className="mb-2 text-muted">Dirección: {this.state.interview.address} </p>            
                <p className="mb-2 text-muted">Persona de contacto: {this.state.interview.contactPerson} </p>            
                <p className="mb-2 text-muted">Fecha: {dateShowed} </p>            
                <p className="mb-2 text-muted">Hora: {this.state.interview.time} </p>            
                <p className="mb-2 text-muted">Información adicional: {this.state.interview.additionalInfo} </p>            


            </Container>

        )
        }
}

export default InterviewDetails