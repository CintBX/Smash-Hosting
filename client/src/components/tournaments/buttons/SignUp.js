import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function SignUp() {
	return (
		<Fragment>
			<Link to="#">
				<Button className="mt-4" color="primary" block>Sign up</Button>
			</Link>
		</Fragment>
	);
};

export default SignUp;