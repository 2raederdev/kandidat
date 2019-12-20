import React, { Component } from 'react'

import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import './Application.css'

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
                status: props.status           
            },
            loggedInUser: props.loggedInUser,
        }
    }


    render(){



        let borrar = {
            color: "#CACAEA",
            cursor: "pointer"
        }
   

    return (
        <>
        <Card className="applicationCard" style={{ width: '10rem' }}>
            <Card.Body>

                <Card.Title>{this.state.application.position}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.state.application.company} </Card.Subtitle>
               
<div className="applicationCard">

                <Button className="button01 button" as={Link} to={`/application/${this.state.application.id}`} >Detalles</Button>               

                <Button onClick={() => 
                    this.props.delete(this.state.application.id)
                    } className="button01 button">Borrar</Button>
</div>

                {/* <Card.Link 
                    as="li"
                    loggedInUser={this.state.loggedInUser} 
                    className="detallesLink" 
                    href={`/application/${this.state.application.id}`}>
                    <Link                      
                        className="detallesLink" 
                        loggedInUser={this.state.loggedInUser} 
                        to={`/application/${this.state.application.id}`}>
                        Detalles
                    </Link>
                </Card.Link>        
                 
                <Card.Link style={borrar} className="borrar" onClick={() => 
                    this.props.delete(this.state.application.id)
                    } >Borrar</Card.Link>                 */}


            </Card.Body>
        </Card>
    
    </>
    )
}
}
    
export default ApplicationCard