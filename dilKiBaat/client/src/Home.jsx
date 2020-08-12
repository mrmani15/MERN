import React from 'react';
import TitleBar from './components/TitleBar';
import Write from './components/Write';
import Posts from './components/Posts';

function Home() {
	return (
		<div className='container'>
			<div className='sticky'>
				<TitleBar />
				<Write />
			</div>
    <div className='flexible'>
      <Posts />
    </div>
			
		</div>
	);
}

export default Home;
