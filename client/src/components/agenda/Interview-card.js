
import React, { Component } from 'react'

import { Card,Button, Modal, Container, Row, Col } from 'react-bootstrap'

import InterviewDetails from './Interview-details'
import EditInterview from './Interview-edit'

import './agenda.css'


class InterviewCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            interview: {
                id:props.interview._id,
                company: props.interview.company,
                position: props.interview.position,
                type: props.interview.type,
                address: props.interview.address,
                contactPerson: props.interview.contactPerson,
                date: props.interview.date,
                time: props.interview.time,
                additionalInfo: props.interview.additionalInfo  
          }, 
            showModalWindow: false,
            showEditModalWindow: false,
            showConfirmModalWindow: false
        }
    }

    handleShow = () => this.setState({ showModalWindow: true })

    handleClose = () => this.setState({ showModalWindow: false })
    
    handleEditShow = () => this.setState({ showEditModalWindow: true, showModalWindow:false })

    handleEditClose = () => this.setState({ showEditModalWindow: false, showModalWindow:false })

    handleDelete = () => this.props.delete(this.state.interview.id)

    handleConfirmShow = () => this.setState({ showConfirmModalWindow: true })

    handleConfirmCloseAndDelete = () => {
        this.setState({ showModalConfirmWindow: false })
        this.handleDelete()
    }

    handleConfirmCloseWithoutDelete = () => this.setState({ showConfirmModalWindow: false })

    updateAgenda = () => this.props.update()


    render(){

    return (
        <>

        <Container>
            <Row>
                <Col md={6}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body style={{ paddingBottom: '0' }}>

                            <Card.Subtitle className="mb-2 text-muted cardText"><p>{this.state.interview.company}</p></Card.Subtitle>            
                            <Card.Subtitle className="mb-2 text-muted cardText"><p>{this.state.interview.position}</p></Card.Subtitle>                     

                        </Card.Body>

                        <div className="interviewDetails">

                        <Button  onClick={this.handleShow} >
                            Detalles
                        </Button>


                        <Button variant="light" onClick={this.handleConfirmShow}>
                            Borrar
                        </Button>

                        </div>

                    </Card>
                </Col>
                <Col md={{ span: 4, offset: 2 }}>
                    {/* Aquí irá el mapa */}
                        </Col>
            </Row>
        </Container>

       
        <Modal show={this.state.showModalWindow} onHide={this.handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Detalles</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InterviewDetails update={this.props.update} details={this.props.interview}  closeModalWindow={this.handleClose}/>
            </Modal.Body>
            <Modal.Footer>
                    <Button onClick={this.handleEditShow}>Editar</Button>
                    <Button onClick={this.handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>

        <Modal show={this.state.showEditModalWindow} onHide={this.handleEditClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Editar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditInterview details={this.props.interview} updateAgenda={this.updateAgenda} handler = {this.handleConfirmCloseAndDelete} edit={this.state.interview}  closeModalWindow={this.handleEditClose}/>
            </Modal.Body>
        </Modal>

        <Modal show={this.state.showConfirmModalWindow} onHide={this.handleConfirmCloseWithoutDelete}>
            <Modal.Header closeButton>
                <Modal.Title>¿Estás seguro de querer eliminar esta entrevista?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button onClick={this.handleConfirmCloseAndDelete}>Sí</Button>
                <Button onClick={this.handleConfirmCloseWithoutDelete}>No</Button>
            </Modal.Body>
        </Modal>


    
    </>
    )
}
}
    
export default InterviewCard