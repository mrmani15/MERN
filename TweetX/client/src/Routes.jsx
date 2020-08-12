import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Users from './components/Users';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

function Routes(props) {
	const token = props.token;
	if (token) {
		return (
			<BrowserRouter>
				<Navbar />
				<Redirect to= '/'/>
				<Switch>
					<Route exact path='/' component={Feed} />
					<Route exact path='/users' component={Users} />
					<Route path='/profile' component={Profile} />
				</Switch>
			</BrowserRouter>
		);
	} else {
		return (
			<BrowserRouter>
				<Redirect to='/' />
				<Switch>
					<Route exact path='/' component={SignupPage} />
					<Route exact path='/login' component={LoginPage} />
					
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = state => ({
	token: state.token,
});

export default connect(mapStateToProps, null)(Routes);
