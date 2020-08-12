import React, { Component } from 'react'
import FollowersCard from './FollowersCard'

class Followers extends Component {
	render() {
		const data = this.props.data.follower;
		return data.map(user => (
			<FollowersCard
				name={user}
				key={Math.random()}
				follow='Follow'
				image={this.props.data.user.avatar}
			/>
		));
	}
}

export default Followers
