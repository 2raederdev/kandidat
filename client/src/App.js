import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Service from './service/Auth.service'

import './App.css'


/* ---------  PAGE COMPONENTS --------- */

import Index from './components/pages/Index'
import Dashboard from './components/dashboard/Dashboard'
import Company from './components/company/Company'
import Mail from './components/mails/Mails'
import Agenda from './components/agenda/Agenda'
import ApplicationDetails from './components/applications/Application-details'
import InterviewForm from './components/agenda/Interview-form'



/* ---------  UI COMPONENTS --------- */

import Navbar from './components/ui/Navbar'



/* ---------  AUTH COMPONENTS --------- */

import Signup from './components/auth/Signup'
import Login from './components/auth/Login'


import './App.css'


class App extends Component {

  constructor() {
    super()
    this._service = new Service()
    this.state = { 
      loggedInUser: null,
    }

  }

  componentDidMount = () => console.log(this.state.loggedInUser)


  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log("El método 'setTheUser' de App.js se ha invocado, pasando al estado 'loggedInUser:", this.state.loggedInUser)
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this._service.loggedin()
        .then(theLoggedInUserFromTheServer => {
          console.log(`holaaaaaaaaaaaaaaa ${theLoggedInUserFromTheServer.data} ` )
         this.setState({ loggedInUser: theLoggedInUserFromTheServer.data })})
        
         .catch(err => {
          this.setState({ loggedInUser: false })
          console.log({ err })
        })
    }
  }

  render() {

    this.fetchUser()

    let acceptButton = {
      background: "#CACAEA",
      cursor: "pointer",
      }
 
    return (
      <>
        <Navbar loggedInUser={this.state.loggedInUser} setUser={this.setTheUser} /*idUser={this.state.loggedInUser.data._id}*/ />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/company" render={match => 
          this.state.loggedInUser || this.state.loggedInUser === null ? <Company loggedInUser={this.state.loggedInUser || {}} setUser={this.setTheUser} {...match}/> : <Redirect to="/"/>}
            />
          <Route path="/mail" render={match => 
          this.state.loggedInUser || this.state.loggedInUser === null ? <Mail loggedInUser={this.state.loggedInUser || {}} setUser={this.setTheUser} {...match}/> : <Redirect to="/"/>}
            />

          <Route exact path="/agenda" render={match => 
            this.state.loggedInUser == null ? 
            <Redirect to="/agenda"/> 
            : this.state.loggedInUser ?
               <Agenda loggedInUser={this.state.loggedInUser || {}} setUser={this.setTheUser} {...match}/> 
               : <Redirect to="/"/>}
            />


          <Route path="/application/:id" render={match => 
          this.state.loggedInUser || this.state.loggedInUser === null ? <ApplicationDetails loggedInUser={this.state.loggedInUser || {}} setUser={this.setTheUser} {...match}/> : <Redirect to="/"/>}
            />

          <Route exact path="/newInterview" render={match => 
          this.state.loggedInUser || this.state.loggedInUser === null ? <InterviewForm loggedInUser={this.state.loggedInUser || {}} setUser={this.setTheUser} {...match}/> : <Redirect to="/"/>}
            />

          <Route exact path="/dashboard" render={match => 
            this.state.loggedInUser == null ? 
            <Redirect to="/dashboard"/> 
            : this.state.loggedInUser ?
               <Dashboard loggedInUser={this.state.loggedInUser || {}} setUser={this.setTheUser} {...match}/> 
               : <Redirect to="/"/>}
            />

          <Route path="/signup" render={match => <Signup setUser={this.setTheUser} {...match} />} />
          <Route path="/login" render={match => <Login setUser={this.setTheUser} {...match} />} />


          </Switch>

          {/* <footer className="footer">
                <h3>Kandidat</h3>
          </footer> */}

      </>

    )
  }
}

export default App;
