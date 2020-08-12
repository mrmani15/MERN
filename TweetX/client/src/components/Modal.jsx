import React from 'react';

function Modal(props) {
	return (
		<div
			className='modal fade'
			id='staticBackdrop'
			data-backdrop='static'
			data-keyboard='false'
			tabIndex='-1'
			role='dialog'
			aria-labelledby='staticBackdropLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='staticBackdropLabel'>
							Write Feed
						</h5>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						<input
							type='text'
							onChange={props.handleChange}
							value={props.feed}
							name='feed'
							className='form-control'
							placeholder='Create your new feed'
						/>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-dismiss='modal'
						>
							Close
						</button>
						<button
							type='button'
							className='btn btn-primary'
							onClick={props.handleSubmit}
							data-dismiss='modal'
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
