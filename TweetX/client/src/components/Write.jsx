import React, { Component } from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';

import { updatePost } from '../redux/action'

class Write extends Component {
	constructor(props) {
		super(props);

		this.state = {
			feed: '',
		};
	}

	handleChange = e => {
		this.setState({
			feed: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.post === '') {
			alert('Plese enter post');
		} else {
			const data = this.props.postData
			data.unshift(this.state.feed)
			const post = {
				post: data
			}
			const { posting } = this.props 
			console.log(post)
			posting(post)
		}
		this.setState({
			feed: '',
		});
	};

	render() {
		return (
			<div className='mt-4 mb-4'>
				<button
					type='button'
					className='btn primary text-white'
					data-toggle='modal'
					data-target='#staticBackdrop'
				>
					Write
				</button>
				<Modal
					handleChange={this.handleChange}
					feed={this.state.feed}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

const mapDispatchToProps =  dispatch => ({
	posting: payload => dispatch(updatePost(payload))
})

const mapStateToProps = state => ({
	postData: state.profile.post
})


export default connect(mapStateToProps, mapDispatchToProps) (Write);
