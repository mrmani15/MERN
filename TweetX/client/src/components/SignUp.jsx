import React, { Component } from 'react';
import {register} from '../redux/action'
import { connect } from 'react-redux';

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
			cnfpassword: '',
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSignup = e => {
		e.preventDefault();
		if (
			this.state.name === '' ||
			this.state.email === '' ||
			this.state.password === '' ||
			this.state.cnfpassword === ''
		) {
			alert('Fill the form properly');
		} else if (this.state.password === this.state.cnfpassword) {
			const { sendRegisterDetail } = this.props
			sendRegisterDetail(this.state)
		} else {
			alert('Please Check Your Password');
		}
		this.setState({
			name: '',
			email: '',
			password: '',
			cnfpassword: '',
		});
	};

	render() {
		return (
			<div>
				<h2>Create Account</h2>
				<input
					type='text'
					onChange={this.handleChange}
					value={this.state.name}
					name='name'
					placeholder='Name'
					className='form-control mt-5'
				/>
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
				<input
					type='password'
					onChange={this.handleChange}
					value={this.state.cnfpassword}
					name='cnfpassword'
					className='form-control mt-5'
					placeholder='Confirm Password'
				/>
				<div className='d-flex justify-content-end mt-5'>
					<button className='btn primary' onClick={this.handleSignup}>
						Sign up
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	sendRegisterDetail: payload => dispatch(register(payload))
})


export default connect(null,mapDispatchToProps) (SignUp);
