import React, { Component } from 'react';
// import { getDetail } from '../redux/action';
import { connect } from 'react-redux';

class ProfileDetail extends Component {

	render() {
		if (this.props.data) {
      const data = this.props.data;
			return (
				<div className='d-flex ml-5'>
					<div>
						<img
							src={data.user.avatar}
							alt='Profile-pic'
							className='card-img-big'
						/>
					</div>
					<div className='pl-5 pt-4'>
						<h3>{data.user.name} </h3>
						<div>
							<span>Post : {data.post.length} </span>
							<span className='ml-3'>
								Followers : {data.follower.length}
							</span>
							<span className='ml-3'>
								Following : {data.following.length}
							</span>
						</div>
					</div>
				</div>
			);
		} else {
      return (
        null
      )
    }
	}
}

const mapStateToProps = state => ({
	data: state.profile,
});
// const mapDispatchToProps = dispatch => ({
// 	getData: () => dispatch(getDetail()),
// });

export default connect(mapStateToProps)(ProfileDetail);
