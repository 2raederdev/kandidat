import React from 'react'
import { Container } from 'react-bootstrap'

import './index.css'

const Index = () => {

    let h1Style = {
        fontSize: 5+'em'
    }

    return (
        <Container>
            <section>
                <h1 style={h1Style}>Kandidat</h1>
                <p>Todas tus candidaturas en un único lugar.</p>
            </section>
        </Container>
    )
}

export default Index