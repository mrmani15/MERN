import React, { Component } from 'react';
import { login } from '../redux/action';
import { connect } from 'react-redux';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.email === '' || this.state.password === '') {
			alert('Fill the form properly');
		} else {
			const {sendLoginDetail} = this.props
			sendLoginDetail(this.state)
		}
		this.setState({
			email: '',
			password: '',
		});
	};

	render() {
		return (
			<div>
				<h2>Login</h2>
				<input
					type='email'
					onChange={this.handleChange}
					value={this.state.email}
					name='email'
					placeholder='Email'
					className='form-control mt-5'
				/>
				<input
					type='password'
					onChange={this.handleChange}
					value={this.state.password}
					name='password'
					className='form-control mt-5'
					placeholder='Password'
				/>
				<div className='d-flex justify-content-between mt-5'>
					<span>Forgot Password?</span>
					<button className='btn primary' onClick={this.handleSubmit}>
						Login
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	sendLoginDetail: payload => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
