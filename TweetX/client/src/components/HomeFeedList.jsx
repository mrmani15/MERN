import React, { Component } from 'react';
import HomefeedCard from './HomefeedCard';

class HomeFeedList extends Component {
	render() {
		if (this.props.data.post) {
			const data = this.props.data.post;
			return data.map(user => (
				<HomefeedCard
					user={user}
					key={Math.random()}
					image={this.props.data.user.avatar}
					name={this.props.data.user.name}
				/>
			));
		} else {
			return null;
		}
	}
}

export default HomeFeedList;
