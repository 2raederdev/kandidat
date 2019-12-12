import React, { Component } from 'react'

import { Card } from 'react-bootstrap'

// const ApplicationCard = ({_id, position, company }) => {

class ApplicationCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            application: {
                id:props._id,
                company: props.company,
                position: props.position,
                link: props.link,
                status: props.status           }
        }
    }

    render(){

    return (
        <>
        <Card className="applicationCard" style={{ width: '11rem' }}>
            <Card.Body>

                <Card.Title>{this.state.application.position}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.state.application.company} </Card.Subtitle>

                <Card.Link href={`/application/${this.state.application.id}`}>Detalles</Card.Link>                
                <Card.Link  onClick={() => 
                    this.props.delete(this.state.application.id)
                    } >Borrar</Card.Link>                


            </Card.Body>
        </Card>
    
    </>
    )
}
}
    
export default ApplicationCard