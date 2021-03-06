import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import $ from 'jquery';
var config = require('../../config');       //let's us use our config file, which connects us to mongo user database



class Register extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			firstname: "",
			lastname: "",
			username: "",
			email: "",
			password: ""
		};
	}

	firstnameChanged(event) {
		this.setState( {firstname: event.target.value} )
	}
	
	lastnameChanged(event) {
		this.setState( {lastname: event.target.value})
	}

	usernameChanged(event) {
		this.setState( {username: event.target.value} )
	}
	
	emailChanged(event) {
		this.setState( {email: event.target.value} )
	}

	passwordChanged(event) {
		this.setState({ password: event.target.value})
	}
	
	registerEvent() {
		$.ajax({
			method: 'POST', 
			url: config.apiServer + '/api/register',
			data: {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				username: this.state.username,
				email: this.state.email,
				password: this.state.password
			}
		})
		.done(function(result){
			console.log(result)
		})
	}
	
	render() {
		return (
			<div>
					<h2>Register Your Life</h2>
					<input value={this.state.firstname} onChange={this.firstnameChanged.bind(this)} placeholder="First Name" /><br/>
					<input value={this.state.lastname} onChange={this.lastnameChanged.bind(this)} placeholder="Last Name" /><br/>
					<input value={this.state.username} onChange={this.usernameChanged.bind(this)} placeholder="Username" /><br/>
					<input value={this.state.email} onChange={this.emailChanged.bind(this)} placeholder="Email Address" /><br/>
					<input value={this.state.password} onChange={this.passwordChanged.bind(this)} type="password" placeholder="Enter Password" /><br/>
					<button className="registerButton" value="Let's Get To It Sparky!"
						onClick={this.registerEvent.bind(this)}>Register Me On Down!</button>
			</div>
			);
	}
}


export default Register;