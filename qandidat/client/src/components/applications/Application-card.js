import React from 'react'

import { Card } from 'react-bootstrap'

const ApplicationCard = ({ position, company }) => {

    return (
        <Card className="applicationCard" style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>{position}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{company} </Card.Subtitle>

                <Card.Link href="/:id">Detalles</Card.Link>
            </Card.Body>
        </Card>
    )
}


export default ApplicationCard