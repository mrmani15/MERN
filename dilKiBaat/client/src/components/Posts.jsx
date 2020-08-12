import React, { Component, Fragment } from 'react';
import axios from 'axios';

import PostModal from './PostModal';

class Posts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
      showPost: '',
      showModal: false
		};
	}
	componentDidMount = () => {
		axios
			.get('http://localhost:5000/api/posts')
			.then(res => {
				console.log(res.data);
				this.setState({
					posts: res.data,
				});
			})
			.catch(err => err.message);
	};

	showPost = (e) => {
		this.setState({
      showPost: e.target.getAttribute('value'),
      showModal:true
		});
	};
	render() {
    console.log(this.state)
		if (this.state.posts.length) {
			return (
				<Fragment>
					<ul className='list-group mb-2'>
						{this.state.posts.map(post => (
							<li
								key={post._id}
								className='list-group-item mt-3 bg-dark text-white'
								onClick={this.showPost}
								data-target='#postModal'
								data-toggle='modal'
								value={post.text}
							>
								{post.text.length > 80
									? post.text.slice(0, 80)
									: post.text}
							</li>
						))}
					</ul>
					{this.state.showModal && this.state.showPost ? (
            <PostModal post={this.state.showPost} />
					) : null}
				</Fragment>
			);
		} else {
			return <h3>Data Fetching....</h3>;
		}
	}
}

export default Posts;
