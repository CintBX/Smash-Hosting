import React, { Fragment } from 'react';
import { Spinner } from 'reactstrap';

function InProgress() {
	return (
		<Fragment>
			<Spinner className="mt-3 mr-2" color="danger" />In progress...
		</Fragment>
	);
};

export default InProgress;