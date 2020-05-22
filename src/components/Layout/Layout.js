import React from 'react';
import Aux from '../../HOC/AUX';
import Navbar from './navigationBar/navigationBar';

const layout = (props) => {
	return (
		<Aux>
			<div>
				<Navbar />
			</div>
			<div style={{ marginTop: '50px' }}>{props.children}</div>
		</Aux>
	);
};
export default layout;
