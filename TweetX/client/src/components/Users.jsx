import React, { Component } from 'react';
import {connect} from 'react-redux'
import FollowersCard from './FollowersCard'
import { getAllUser } from '../redux/action';


class Users extends Component {
	componentDidMount = () => {
		const { getUser } = this.props;
		getUser();
	}
	render() {
		if (this.props.data) {
			const data = this.props.data;
				return data.map(user => (
					<div
						className='d-flex justify-content-center mt-4'
						key={Math.random()}
					>
						<div className='w-50'>
							<FollowersCard
								name={user.name}
								follow='Follow'
								image={user.avatar}
							/>
						</div>
					</div>
				));
			} else {
			return null;
		}
	}
}

const mapStateToProps = state => ({
	data: state.alluser,
});
const mapDispatchToProps = dispatch => ({
	getUser: () => dispatch(getAllUser()),
});

export default connect(mapStateToProps, mapDispatchToProps) (Users);
