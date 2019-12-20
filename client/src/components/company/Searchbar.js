
import React, { Component } from "react"

import InterviewService from "../../service/Interview.service"

import { Container, Form, Button, Col, Row } from 'react-bootstrap'

import './company.css'


class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nameCompany: '',
        }
    }

    onChangeName(event) {
        this.setState({
            nameCompany:event.target.value
        });

    }

    searchGoogle(){
      window.open("//" + "google.com/search?q=" + this.state.nameCompany, '_blank')

    }

    render() {

      return (

        <div >

          <Form >

            <Col >

            <Row>

                <Col sm={6} md={8} lg={10}>
                  <Form.Group>
                      <Form.Control placeholder="Nombre de la empresa" type="text" onChange={this.onChangeName.bind(this)}/>
                  </Form.Group>
                </Col>
                <Col sm={6} md={4} lg={2}>
                <Button column sm="3" variant="outline-warning" target="_blank" email={this.state.inputEmail} onClick={this.searchGoogle.bind(this)}>Buscar empresa</Button>
                </Col>

            </Row>
            
            </Col>

          </Form>

        </div>

  );
}
}

export default Searchbar;