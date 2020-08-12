import React, { Component } from 'react';
import Modal from './Modal';
import axios from 'axios'


class Write extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
		};
	}

	handleChange = e => {
		this.setState({
			text: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.text === '') {
			alert('Plese enter post');
		} else {
      axios.post('http://localhost:5000/api/posts',this.state)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message))
		}
		this.setState({
			text: '',
		});
		window.location.reload()
	};

	render() {
		return (
			<div className='mt-3 mb-1'>
				<button
					type='button'
					className='btn btn-info text-white'
					data-toggle='modal'
					data-target='#staticBackdrop'
				>
					Write
				</button>
				<Modal
					handleChange={this.handleChange}
					feed={this.state.text}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}


export default Write;
