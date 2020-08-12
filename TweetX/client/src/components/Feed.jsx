import React, { Component } from 'react';

import Write from './Write';
import HomeFeedList from './HomeFeedList';
import { getDetail } from '../redux/action';
import { connect } from 'react-redux';

class Feed extends Component {
	componentDidMount = () => {
		const { getData } = this.props;
		getData();
	};


	render() {
		if(this.props.data){
			const data = this.props.data
			console.log('jiii', data)
			return (
			<div className='d-flex justify-content-center'>
				<div>
					<Write />
					<HomeFeedList data={data}/>
				</div>
			</div>
		);
		} else {
			return null
		}
		
	}
}

const mapDispatchToProps = dispatch => ({
	getData: () => dispatch(getDetail()),
});

const mapStateToProps = state => ({
	data: state.profile,
});

export default connect(mapStateToProps, mapDispatchToProps) (Feed);
