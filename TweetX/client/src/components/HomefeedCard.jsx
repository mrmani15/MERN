import React, { Component } from 'react';

class HomefeedCard extends Component {
	render() {
		return (
			<div className='card-size shadow mt-3'>
				<div className='d-flex justify-content-between'>
					<div className='d-flex'>
						<img
							src={this.props.image}
							alt='Profile-pic'
							className='card-img'
						/>
						<h5 className='pl-3 pt-4'>{this.props.name} </h5>
					</div>
					<span className='pt-4 timing'>
						{this.props.user.timing}
					</span>
				</div>
				<p className='left-side'>{this.props.user}</p>
			</div>
		);
	}
}

export default HomefeedCard;
