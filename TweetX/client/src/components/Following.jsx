import React, { Component } from 'react';
import FollowersCard from './FollowersCard';

class Following extends Component {
	render() {
		const data = this.props.data.following;
		return data.map(user => (
			<FollowersCard
				name={user}
				key={Math.random()}
				follow='Following'
				image={this.props.data.user.avatar}
			/>
		));
	}
}

export default Following;
