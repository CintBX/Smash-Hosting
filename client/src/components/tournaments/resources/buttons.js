import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
	Spinner,
	UncontrolledPopover, 
	PopoverHeader, 
	PopoverBody
} from 'reactstrap';

export const TournamentSignUp = props => {
	if (props.participants && props.participants.find(participant => participant._id === props.userId)) {
		return (
			<Button 
				className="confirm-btn" 
				color="primary" 
				block 
				disabled
				style={{marginBottom: '1rem'}}
			>
				Good luck!
			</Button>
		)
	} else {
		return (
		<Link to="#">
			<Button 
				color="primary" 
				block 
				onClick={props.onClick}
				style={{marginBottom: '1rem'}}
			>
				Sign up
			</Button>
		</Link>
		)
	};
};
 // Replace this
export const StartTournament = props => {
	if (props.participants.length >= 8) {
		return (
			<Button 
				color="danger" 
				block 
				onClick={props.onClick}
				style={{marginBottom: '1rem'}}
			>
				Start Tournament
			</Button>
		)
	} else {
		return (
			<Button 
				className="confirm-btn"
				color="dark" 
				block 
				disabled 
				style={{marginBottom: '1rem'}}
			>
				You need at least 8 fighters to start
			</Button>
		)
	}
}

export const InProgress = () => {
	return (
		<Fragment>
			<Spinner className="mt-3 mr-2" color="danger" />Sign-ups closed. Tournament in progress...
		</Fragment>
	);
};

export const ResultsPopover = ({ bracket }) => {
	const { rounds, champion } = bracket;
	const n = rounds && rounds.length;
	const finalRound = rounds[n-1].matches;

	return (
		<Fragment>
			<Button 
				id="results" 
				type="button" 
				color="dark"
				className="mt-3"
				block
			>
				View Results
			</Button>

			<UncontrolledPopover trigger="focus" placement="bottom" target="results">
				<PopoverBody className="text-center">
					<b>Finals: </b> 
					{finalRound[0].username} <i>({finalRound[0].main}) </i>
					vs 
					{" " + finalRound[1].username} <i>({finalRound[1].main})</i>
				</PopoverBody>
				<PopoverHeader className="text-center"><b>WINNER: </b> {champion[0].username}</PopoverHeader>
			</UncontrolledPopover>
		</Fragment>
	);
};