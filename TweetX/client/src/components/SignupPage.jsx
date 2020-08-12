import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignUp from './SignUp';

class SignupPage extends Component {
	render() {
		return (
			<div className='container-fluid pl-5 pt-3'>
				<div className='row mt-4'>
					<div className='col-4'>
						<h3 className='primary-color'>TweetX</h3>
						<Link to='/login' className='btn border round mt-3 mb-4'>
							Login
						</Link>
						<SignUp />
					</div>
					<div className='col-8 pt-4'>
						<img
							src='illustration.png'
							alt='illustration'
							className='img-fluid'
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default SignupPage;
