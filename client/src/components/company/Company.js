import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Searchbar from './Searchbar'

import './company.css'


const Company = () => {

    return (
        <Container className="company-form text-center">

                <Row>

                    <Col sm={12} lg={6}>
                        <h2>El que busca encuentra</h2>
                        <p className="p-text">Seguramente lo hayas oído en alguna ocasión...</p> 
                        <p className="p-text">Una preparación adecuada, una buena actitud y 
                        una sencilla búsqueda son elementos imprescindibles para cualquier entrevista. 
                        Dedica unos minutos a buscar información relevante de las empresas que te interesan</p>
                    
                        </Col>

                    <Col sm={12} lg={6}>
                    
                        <img src="https://res.cloudinary.com/tworaederdev/image/upload/v1576787827/kandidat/Search-Cristina_ybdzhn.png" alt="Buscar empresa"/>

                    </Col>

                </Row>  

                <Row>

                    <Col lg={12}>

                        <Searchbar className />

                    </Col>

                </Row>                 

        </Container>
    )
}

export default Company