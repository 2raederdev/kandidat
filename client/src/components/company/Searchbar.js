
import React, { Component } from "react"

import InterviewService from "../../service/Interview.service"

import { Container, Form, Button } from 'react-bootstrap'

// import Button from './sendMail'


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

        <Form>

        <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control placeholder="Por ejemplo: Ironhack" type="text" onChange={this.onChangeName.bind(this)}/>
        </Form.Group>

        <Button target="_blank" email={this.state.inputEmail} onClick={this.searchGoogle.bind(this)}>Buscar empresa</Button>
        
        </Form>


  );
}
}

export default Searchbar;