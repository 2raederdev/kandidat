import React from 'react'
import { Container } from 'react-bootstrap'

import Searchbar from './Searchbar'


const Company = () => {

    return (
        <Container>
            <section>
                <h1>Empresa</h1>
                <p>Busca toda la info de una empresa</p>

                <Searchbar />

            </section>
        </Container>
    )
}

export default Company