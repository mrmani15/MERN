import React from 'react';
import { connect } from 'react-redux';

import Followers from './Followers';
import Following from './Following';
import HomeFeedList from './HomeFeedList';

function ProfileData(props) {
	if (props.data) {
		const data = props.data;
		return (
			<div className='tab-content'>
				<div className='tab-pane container active' id='post'>
					<HomeFeedList data={data} />
				</div>
				<div className='tab-pane container fade' id='followers'>
					<Followers data={data} />
				</div>
				<div className='tab-pane container fade' id='following'>
					<Following data={data} />
				</div>
			</div>
		);
	} else {
		return null;
	}
}

const mapStateToProps = state => ({
	data: state.profile,
});

export default connect(mapStateToProps, null)(ProfileData);
