import React, { Component, useState } from 'react';
import { 
	Jumbotron, 
	Button, 
	Spinner, 
	Popover, 
	PopoverHeader, 
	PopoverBody 
} from 'reactstrap';
import uuid from 'uuid';

const ResultsPopover = props => {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const toggle = () => setPopoverOpen(!popoverOpen);

	return (
		<div>
			<Button id="Popover1" type="button">
				Results
			</Button>

			<Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
				<PopoverBody><b>Finals: </b> Cin <i>(Samus)</i> vs Vagalume <i>(Pit)</i></PopoverBody>
				<PopoverHeader><b>WINNER: </b> Cin</PopoverHeader>
			</Popover>
		</div>
	)
}

export default class TournamentIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tournaments: {
				tournamentOne: { 
					id: uuid(),
					status: "Open",
					title: "Single Elimination", 
					description: "Single Elim tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"]
				},
				tournamentTwo: { 
					id: uuid(),
					status: "Open",
					title: "Double Elimination", 
					description: "Double Elim tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"]
				},
				tournamentThree: { 
					id: uuid(),
					status: "Closed",
					title: "Round Robin", 
					description: "Round Robin tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"]
				},
				tournamentFour: { 
					id: uuid(),
					status: "Complete",
					title: "Standard", 
					description: "Standard tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"]
				}
			}
		}
	}
	render() {
		const { tournaments } = this.state;
		return (
			<div>
				<h1 className="mb-5 display-4">Welcome to SmashHosting!</h1>

				<Jumbotron>
					<h1 className="mb-5 text-center">Open Tournaments</h1>

					<h3>{ tournaments.tournamentOne.title }</h3>
					<hr className="my-2"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p className="lead">
						<Button color="primary">Sign up!</Button>
					</p><br/>

					<h3>{ tournaments.tournamentTwo.title }</h3>
					<hr className="my-2"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p className="lead">
						<Button color="primary">Sign up!</Button>
					</p>
				</Jumbotron>

				<Jumbotron>
					<h1 className="mb-5 text-center">Closed</h1>

					<h3>{ tournaments.tournamentThree.title }</h3>
					<hr className="my-2"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p className="lead">
						<Spinner color="danger"/> In progress
					</p>
				</Jumbotron>

				<Jumbotron>
					<h1 className="mb-5 text-center">Completed</h1>

					<h3>{ tournaments.tournamentFour.title }</h3>
					<hr className="my-2"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p className="lead">
						<ResultsPopover/>	
					</p>
				</Jumbotron>
			</div>
		)
	}
};