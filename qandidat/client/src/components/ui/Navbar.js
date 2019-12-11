import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Service from '../../service/Auth.service'


import './Navbar.css';


class Navigation extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        
    }

    logoutUser = () => {
        this._service.logout()
            .then(x => {
                this.props.setUser(false)
            })
            .catch(err => console.log(err))
    }

    render() {

        // const saludo = this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'

        let buttonStyle = {
            color: "#1C1259",
            cursor: "pointer"
        }



        return (

            this.props.loggedInUser ?

                <Navbar className="color-nav" variant="dark" expand="md" >
                    <Navbar /*style={logoStyle}*/ className="logo" as="li"><Link className="pupu" to="/">kandidat</Link></Navbar>
                    <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ml-auto theLinks">
                        <Nav.Link as="li"><Link to="/">Inicio</Link></Nav.Link>
                            <Nav.Link as="li"><Link to='/dashboard' >Dashboard</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/company">Empresa</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/mail">Email</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/agenda">Agenda</Link></Nav.Link>
                            <Nav.Link style={buttonStyle} as="li" onClick={this.logoutUser}>Logout</Nav.Link>
                        </Nav>
                        {/* <Nav className="ml-auto bienvenido">
                            <Navbar.Text style={buttonStyle}>Bienvenid@ {saludo}</Navbar.Text>
                        </Nav> */}
                    </Navbar.Collapse>
                </Navbar>

            :

            <Navbar className="color-nav" variant="dark" expand="md">
                    <Navbar /*style={logoStyle}*/ className="logo" as="li"><Link className="pupu" to="/">kandidat</Link></Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ml-auto theLinks">
                    <Nav.Link as="li"><Link to="/">Inicio</Link></Nav.Link>
                    <Nav.Link as="li"><Link to="/signup">Registro</Link></Nav.Link>
                    <Nav.Link as="li"><Link to="/login">Login</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        )
    }
}

export default Navigation