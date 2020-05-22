import React from 'react';
import Error from './../Error/Error.module.css';
const Page404 = (props) => (
	<div className={Error.Error}>
		<h1>
			404 Error : No match found for <code>{props.location.pathname}</code>
		</h1>
	</div>
);
export default Page404;
