import React from 'react';

function FollowersCard(props) {
	return (
		<div className='d-flex justify-content-between shadow p-4'>
			<div className='d-flex'>
				<div>
					<img
						src={props.image}
						alt='Profile-pic'
						className='card-img'
					/>
				</div>
				<div className='pl-4 pt-4'>
					<h5>{props.name}</h5>
					{/* <div>Following {props.user}</div> */}
				</div>
			</div>
			<div>
				{props.follow === 'Follow' ? (
					<button className='btn primary text-white mt-4'>
						{props.follow}
					</button>
				) : (
					<button className='btn btn-secondary mt-4'>
						{props.follow}
					</button>
				)}
			</div>
		</div>
	);
}

export default FollowersCard;
