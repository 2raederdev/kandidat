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
      interviews: [],
      address: "",
      addresses: [],
      isOpen: false,
      selectedInterview: null,
      loggedInUser: props.loggedInUser._id,
    };
  }

  componentDidMount = () => this.updateInterviewsList()

  updateInterviewsList = () => {

  this._interviewService.getAllInterviews()
      .then(allInterviewsFromDB => {
        
        let withId = 
                    allInterviewsFromDB.data.filter(interview => interview.user  === this.state.loggedInUser
                        )
        
        
        this.setState({ interviews: withId})
      const addressesCopy = [...this.state.addresses];
      console.log(this.state.loggedInUser._id)
      this.state.interviews.forEach(elm => {
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
      }); 
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
              onClick={() => {
                this.setInterview(elm)
                //  this.handleToggleOpen(elm)
                }}
                icon={{
                  url: "https://res.cloudinary.com/tworaederdev/image/upload/v1576434174/qandidat/kandidatmarker_rvply5.png",
                  scaledSize: new google.maps.Size(31, 43)
                }}
            ></Marker>
          </>
        ))}
        {this.state.selectedInterview && (
          <InfoWindow 
            position={this.state.selectedInterview}
            onCloseClick = {() => { 
              {this.setInterview(null)}
          
          }}
          >
            <>
              <h4>Aquí tienes una entrevista.</h4>
              <p>Busca en la lista para saber más</p>          
          </>
          </InfoWindow>
        )} 


      </GoogleMap>

    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default WrappedMap;