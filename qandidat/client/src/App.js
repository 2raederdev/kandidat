import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Service from './service/Auth.service'


/* ---------  PAGE COMPONENTS --------- */

import Index from './components/pages/Index'
import Dashboard from './components/dashboard/Dashboard'
import Company from './components/company/Company'
import Mail from './components/mails/Mails'
import Agenda from './components/agenda/Agenda'
import ApplicationDetails from './components/applications/Application-details'

/* ---------  APPLICATION COMPONENTS --------- */

// import ApplicationList from "./components/applications/Application-list"

/* ---------  UI COMPONENTS --------- */

import Navbar from './components/ui/Navbar'


/* ---------  AUTH COMPONENTS --------- */

import Signup from './components/auth/Signup'
import Login from './components/auth/Login'



class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this._service = new Service()
  }

  componentDidMount = () => console.log(this.state.loggedInUser)


  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log("El método 'setTheUser' de App.js se ha invocado, pasando al estado 'loggedInUser:", this.state.loggedInUser)
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this._service.loggedin()
        .then(theLoggedInUserFromTheServer => this.setState({ loggedInUser: theLoggedInUserFromTheServer.data }))
        .catch(err => {
          this.setState({ loggedInUser: false })
          console.log({ err })
        })
    }
  }

  render() {

    this.fetchUser()

    return (
      <>
        <Navbar loggedInUser={this.state.loggedInUser} setUser={this.setTheUser} /*idUser={this.state.loggedInUser.data._id}*/ />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/company" render={() => <Company loggedInUser={this.state.loggedInUser}/>} />
          <Route exact path="/mail" render={() => <Mail loggedInUser={this.state.loggedInUser}/>} />
          <Route exact path="/agenda" render={() => this.state.loggedInUser ? <Dashboard loggedInUser={this.state.loggedInUser}/> : <Redirect to="/"/>}
            />
          <Route path="/application/:id" component={ApplicationDetails} />


          <Route exact path="/dashboard" render={match => 
          this.state.loggedInUser ? <Dashboard loggedInUser={this.state.loggedInUser} setUser={this.setTheUser} {...match}/> : <Redirect to="/"/>}
            />

          <Route path="/signup" render={match => <Signup setUser={this.setTheUser} {...match} />} />
          <Route path="/login" render={match => <Login setUser={this.setTheUser} {...match} />} />


        </Switch>

      </>

    )
  }
}

export default App;
