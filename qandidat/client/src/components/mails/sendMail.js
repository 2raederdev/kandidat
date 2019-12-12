// import React, { Component } from ‘react’
// import Service from ‘../../service/Post.service’
// import { Button } from ‘react-bootstrap’

// class EmailButton extends Component {
//     constructor(props) {
//         super(props)
//         this._service = new Service()
//         this.onClick = this.onClick.bind(this)
//     }
//     onClick() {
//         if (this.props.value.user.creatorIdTeacher) {
//             window.open(`mailto:${this.props.value.user.creatorIdTeacher.email}`)
//         }
//         else {
//             window.open(`mailto:${this.props.value.user.creatorIdUser.email}`)
//         }
//     }
//     render() {
//         return <Button variant=“dark” target=“_blank” onClick={this.onClick}>Send Mail</Button>
//     }
// }
// export default EmailButton