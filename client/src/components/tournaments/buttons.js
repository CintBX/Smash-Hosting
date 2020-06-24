import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
	Spinner,
	UncontrolledPopover, 
	PopoverHeader, 
	PopoverBody
} from 'reactstrap';

export const SignUp = (props) => {
	return (
		<Fragment>
			<Link to="#">
				<Button className={props.className} color="primary" block onClick={props.onClick}>Sign up</Button>
			</Link>
		</Fragment>
	);
};

export const InProgress = () => {
	return (
		<Fragment>
			<Spinner className="mt-3 mr-2" color="danger" />Sign-ups closed. Tournament in progress...
		</Fragment>
	);
};

export const ResultsPopover = () => {
	return (
		<Fragment>
			<Button 
				id="results" 
				type="button" 
				color="dark"
				className="mt-3"
				block
			>
				Tournament Complete. View Results.
			</Button>
			<UncontrolledPopover trigger="focus" placement="bottom" target="results">
				<PopoverBody><b>Finals: </b> Cin <i>(Samus)</i> vs Vagalume <i>(Pit)</i></PopoverBody>
				<PopoverHeader><b>WINNER: </b> Cin</PopoverHeader>
			</UncontrolledPopover>
		</Fragment>
	);
};