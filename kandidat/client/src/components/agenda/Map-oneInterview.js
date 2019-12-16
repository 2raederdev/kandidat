/*global google*/

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
      interview: props.interview,
      address: "",
      isOpen: false,
    };
  }

  componentDidMount = () => this.updateInterviewsList()

  updateInterviewsList = () => {

        Geocode.fromAddress(this.state.interview.address)
          .then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              this.setState({
                address: { lat, lng },
              });
            },
            error => console.error(error)            
          )
          .catch(err => console.log(err));
  }


  handleToggleOpen = () => this.setState({ isOpen: true })

  handleToggleClose = () => this.setState({ isOpen: false })


  render() {

    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.4165, lng: -3.70256 }}>
        <Marker 
            position={this.state.address}
            icon={{
                url: "https://res.cloudinary.com/tworaederdev/image/upload/v1576434174/qandidat/kandidatmarker_rvply5.png",
                scaledSize: new google.maps.Size(31, 43)
            }}
        ></Marker>
        </GoogleMap>
    )
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;