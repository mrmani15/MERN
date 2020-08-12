import React, { Component } from 'react';
import ProfileDetail from './ProfileDetail';
import ProfileScroll from './ProfileScroll';
import ProfileData from './ProfileData';
import { connect } from 'react-redux';
import { getDetail } from '../redux/action';

import { firstProfileWithPost } from '../redux/action';

import Modal from './Modal';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: '',
			follower: '',
			following: '',
		};
	}

	handleChange = e => {
		this.setState({
			post: e.target.value,
		});
	};

	componentDidMount = () => {
		const { getData } = this.props;
		getData();
	};

	handleSubmit = e => {
		e.preventDefault();

		const { firstPost } = this.props;
		firstPost(this.state);

		this.setState({
			post: '',
		});
	};

	render() {
		if (this.props.isProfile === false) {
			return (
				<center className='mt-5'>
					<h4 className='text-info'>
						You have not setup your profile
					</h4>
					<button
						type='button'
						className='btn primary text-white'
						data-toggle='modal'
						data-target='#staticBackdrop'
					>
						Add Post
					</button>
					<Modal
						handleChange={this.handleChange}
						feed={this.state.post}
						handleSubmit={this.handleSubmit}
					/>
				</center>
			);
		} else {
			return (
				<div className='d-flex justify-content-center'>
					<div className='mt-4'>
						<ProfileDetail />
						<ProfileScroll />
						<ProfileData />
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	isProfile: state.isUser,
});

const mapDispatchToProps = dispatch => ({
	firstPost: payload => dispatch(firstProfileWithPost(payload)),
	getData: () => dispatch(getDetail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
