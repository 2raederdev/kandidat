import React from 'react'
import { Container, Carousel, Col, Row } from 'react-bootstrap'

import './index.css'

const Index = () => {

    let h1Style = {
        fontSize: 3+'em',
        marginBottom: 25+'px'
    }

    return (
        <>
        <section className="section1">
        <Container>
            
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100" width={400} height={400}
      src="https://res.cloudinary.com/tworaederdev/image/upload/v1576775839/kandidat/flying_jwbvmb.png"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>Kandidat</h3> */}
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" width={400} height={400}
      src="https://res.cloudinary.com/tworaederdev/image/upload/v1576782750/kandidat/Jobs_kb5txc.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Kandidat</h3> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" width={400} height={400}
      src="https://res.cloudinary.com/tworaederdev/image/upload/v1576770221/kandidat/Resume01_z5frsc.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Kandidat</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h2 style={h1Style}>Kandidat</h2>
            <p>Primera Ironhack-friendly APP
                <br></br>para gestionar todas tus candidatuas en un único lugar.</p>

</Container>
</section>
<section className="section2">
<Container>    
    <Row>
    <Col md={6}>
        <h3>Gestiona</h3>
        <p>Visualiza todas tus candidaturas<br></br>ten el control de tu futuro.</p>
    </Col>
    <Col md={6}>
    <img src="https://res.cloudinary.com/tworaederdev/image/upload/v1576785337/kandidat/desk_nvyj7j.png" alt="Mailing"/>
    </Col>
    </Row>
 </Container>
 </section>
 <section className="section5">
<Container>    
    <Row>
    <Col md={6}>
        <h3>Gestiona</h3>
        <p>Visualiza todas tus candidaturas<br></br>ten el control de tu futuro.</p>
    </Col>
    <Col md={6}>
    <img src="https://res.cloudinary.com/tworaederdev/image/upload/v1576789581/kandidat/cv_zxjako.png" alt="Mailing"/>
    </Col>
    </Row>
 </Container>
 </section>
 <section className="section3">

 <Container>    
    <Row>
    <Col md={6}>
    <img src="https://res.cloudinary.com/tworaederdev/image/upload/v1576787827/kandidat/Search-Cristina_ybdzhn.png" alt="desk"/>
    </Col>
    <Col md={6}>
        <h3>Empresa</h3>
        <p>¿Te gusta empresa pero no tienes mucha información?<br></br>Búscala.</p>      
    </Col>
    </Row>
 </Container>
 </section>
<section className="section4">
<Container>    
    <Row>
    <Col md={6}>
    <img src="https://res.cloudinary.com/tworaederdev/image/upload/v1576785693/kandidat/Mail-sent02_g47kv6.png" alt="Mailing"/>
    </Col>
    <Col md={6}>
        <h3>Mailing</h3>
        <p>Envía un correo directamente a la empresa<br></br>donde quieres trabajar.</p>
    </Col>
    </Row>
 </Container>
 </section>

 </>
    )
}

export default Index