import React, { Component } from "react"

import InterviewService from "../../service/Interview.service"

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyC0Hl0lxEoQa6Oy0mdrsk5eu4LZjGX4szU");

class Map extends Component {
  constructor(props) {
    super(props);
    this._interviewService = new InterviewService();
    this.state = {
      interviews: [],
      address: "",
      addresses: [],
      isOpen: false,
      selectedInterview: null
    };
  }

  componentDidMount = () => this.updateInterviewsList()

  updateInterviewsList = () => {

  this._interviewService.getAllInterviews()
      .then(allInterviewsFromDB => {this.setState({ interviews: allInterviewsFromDB.data})
      console.log(this.state.interviews)
      const addressesCopy = [...this.state.addresses];
      
      this.state.interviews.forEach(elm => {
        console.log(elm.address)
        Geocode.fromAddress(elm.address)
          .then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              addressesCopy.push({ lat, lng });
              this.setState({
                address: { lat, lng },
                addresses: addressesCopy
              });
            },
            error => console.error(error)            
          )
          .catch(err => console.log(err));
      }); // esto me da todas las coordenadas
  })
    .catch(err => console.log("Error", err));
  }

  setInterview = interview => this.setState ({ selectedInterview: interview })

  handleToggleOpen = () => this.setState({ isOpen: true })

  handleToggleClose = () => this.setState({ isOpen: false })


  render() {

    return (


        <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 40.4165, lng: -3.70256 }}
      >

        {this.state.addresses.map((elm, idx) => (
          <>
            <Marker
              key={idx}
              position={elm}
              onClick={() => this.setInterview(elm)}
            ></Marker>
          </>
        ))}
        {this.state.selectedInterview && (
          <InfoWindow 
            position={this.state.selectedInterview}
            onCloseClick = {() => {this.setInterview(null)}}
          >
            <>
                        <h1 className="mb-2 text-muted">Empresa: {this.state.selectedInterview.company}</h1>            
                        <h2 className="mb-2 text-muted">Posición: {this.state.interviews.position} </h2>            
                        <p className="mb-2 text-muted">Tipo de entrevista:{this.state.interviews.type} </p>            
                        <p className="mb-2 text-muted">Dirección: {this.state.interviews.address}</p>            
                        <p className="mb-2 text-muted">Persona de contacto: {this.state.interviews.contactPerson} </p>            
                        <p className="mb-2 text-muted">Fecha:  </p>            
                        <p className="mb-2 text-muted">Hora: {this.state.interviews.time} </p>            
                        <p className="mb-2 text-muted">Información adicional: {this.state.interviews.additionalInfo} </p>            
          </>
          </InfoWindow>
        )}


      </GoogleMap>

    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default WrappedMap;