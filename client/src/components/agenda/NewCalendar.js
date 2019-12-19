import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { Button } from 'react-bootstrap'



import "react-big-calendar/lib/css/react-big-calendar.css";
  
const localizer = momentLocalizer(moment);

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myInterviewsList: [{
                title: 'Today',
                start: new Date(`${today} 10:22:00`),
                end: new Date(`${today} 10:42:00`)
              }],
            interviews: this.props.interview,
            loggedInUser: this.props.loggedInUser,
            showInterview: false
        }
    }

  updateMyInterviewsList = () => {

    let listCopy = [...this.state.myInterviewsList]

    let a, b, c

    console.log(`Cuando estoy en línea sí   ${this.state}`)
    console.log(this.props)

    this.props.interview.map(elm => {

      console.log(`super textos largos ${elm}`, ` mira mira mira   ${listCopy}`)

      if(elm.date) a = elm.date.substr(0, 10) 

      b = elm.company

      c = elm.time

      let aux = { title: `${b}`,
      start: new Date(`${a} ${c}:00`),
      end: new Date(`${a} 22:00:00`) }
  
      listCopy.push(aux)

      
      
    })

    this.setState({myInterviewsList: listCopy})
        
  }

    componentDidMount = () => this.updateMyInterviewsList()
 
  render() {
  
    console.log("RENDER NEW CALENDAR ", this.props.interview)

    return (

      <>
      <div
      style={{ height: "50vh" }}
      className="calendar-container">

                    <Calendar
                    localizer={localizer}
                    events={this.state.myInterviewsList}
                    startAccessor="start"
                    endAccessor="end"
                    />
                  
                </div>
                </>

    )
  }
}

export default MyCalendar;
