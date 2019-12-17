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
              },{
              title: 'Tomorrow',
              start: new Date(`2019-12-23 10:22:00`),
              end: new Date(`2019-12-23 10:42:00`)}],
            interviews: this.props.interview,
            loggedInUser: this.props.loggedInUser,

        }
    }

  updateMyInterviewsList = () => {

    let a, b

    let newList = this.props.interview.map(elm => {

      a =elm.date
      b = elm.company
    })
    
    console.log(`ppupupupupuu   ${a}, ${b}`)
  }

render() {

    return (
      <div
      // style={{ height: "75vh", marginTop: "25px" }}
      style={{ height: "700px", marginTop: "25px" }}
      className="calendar-container"
      >
                  <Calendar
                    localizer={localizer}
                    events={this.state.myInterviewsList}
                    startAccessor="start"
                    endAccessor="end"
                    />

           <Button onclick={this.updateMyInterviewsList}></Button>         
    {this.props.interview.map(elm => `${elm.date}`)}
                </div>
    )
  }
}

export default MyCalendar;
