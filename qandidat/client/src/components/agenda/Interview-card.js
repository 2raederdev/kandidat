
import React, { Component } from 'react'

import { Card,Button, Modal, Container, Row, Col } from 'react-bootstrap'

import InterviewDetails from './Interview-details'
import EditInterview from './Interview-edit'


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
            showEditModalWindow: false
        }
    }

    handleShow = () => this.setState({ showModalWindow: true })

    handleClose = () => this.setState({ showModalWindow: false })
    
    handleEditShow = () => this.setState({ showEditModalWindow: true, showModalWindow:false })

    handleEditClose = () => this.setState({ showEditModalWindow: false, showModalWindow:false })

    handleDelete = () => this.props.delete(this.state.interview.id)

    // updateCard = () => this.props.update


    render(){

    return (
        <>

        <Container>
            <Row>
                <Col md={6}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>

                            <Card.Title>Entrevista</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Empresa: {this.state.interview.company} </Card.Subtitle>            
                            <Card.Subtitle className="mb-2 text-muted">Posición: {this.state.interview.position} </Card.Subtitle>                     

                        </Card.Body>

                        <Button variant="danger" onClick={this.handleShow} >
                            Ver detalles
                        </Button>

                        <Button variant="light" onClick={this.handleDelete}>
                            Borrar entrevista
                        </Button>

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
                <InterviewDetails update={this.update} details={this.props.interview}  closeModalWindow={this.handleClose}/>
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
                <EditInterview updateCard={this.props.update} edit={this.state.interview} details={this.state.interview}  closeModalWindow={this.handleEditClose}/>
            </Modal.Body>
            {/* <Modal.Footer>
                    <Button onClick={this.handleEditClose}>Cerrar</Button>
            </Modal.Footer> */}
        </Modal>


    
    </>
    )
}
}
    
export default InterviewCard