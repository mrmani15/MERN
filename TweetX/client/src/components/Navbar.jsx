import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { logout } from '../redux/action'


function Navbar(props) {
	const logout = e => {
		e.preventDefault();
		const {signout} = props
		signout()
	};
	return (
		<div className='d-flex justify-content-around nav-header shadow'>
			<div>
				<h3 className='primary-color'>TweetX</h3>
			</div>
			<div>
				<ul className='nav'>
					<li className='nav-item'>
						<Link className='nav-link' to='/feed'>
							Feed
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/users'>
							Users
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/profile'>
							Profile
						</Link>
					</li>
					<li className='nav-item'>
						<button className='btn text-primary' onClick={logout}>
							Logout
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	signout: () => dispatch(logout()),
});


export default connect(null,mapDispatchToProps) (Navbar);
