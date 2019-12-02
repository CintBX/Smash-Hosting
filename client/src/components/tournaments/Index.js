import React, { Component } from 'react';
import { 
	Jumbotron, 
	Button, 
	Spinner
} from 'reactstrap';
import ResultsPopover from './components/ResultsPopover';
import uuid from 'uuid';

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

				{/*Open Tournaments*/}
				<Jumbotron>
					<h1 className="mb-5 text-center">Open Tournaments</h1>

					<h3>{ tournaments.tournamentOne.title }</h3>
					<hr className="my-2"/>
					<p>{ tournaments.tournamentOne.description }</p>
					<p className="lead">
						<Button color="primary">Sign up</Button>
					</p><br/>

					<h3>{ tournaments.tournamentTwo.title }</h3>
					<hr className="my-2"/>
					<p>{ tournaments.tournamentTwo.description }</p>
					<p className="lead">
						<Button color="primary">Sign up</Button>
					</p>
				</Jumbotron>

				{/*Closed Tournaments*/}
				<Jumbotron>
					<h1 className="mb-5 text-center">Closed Tournaments</h1>

					<h3>{ tournaments.tournamentThree.title }</h3>
					<hr className="my-2"/>
					<p>{ tournaments.tournamentThree.description }</p>
					<p className="lead">
						<Spinner color="danger"/> In progress...
					</p>
				</Jumbotron>


				{/*Completed Tournaments*/}
				<Jumbotron>
					<h1 className="mb-5 text-center">Completed Tournaments</h1>

					<h3>{ tournaments.tournamentFour.title }</h3>
					<hr className="my-2"/>
					<p>{ tournaments.tournamentFour.description }</p>
					<p className="lead">
						<ResultsPopover/>	
					</p>
				</Jumbotron>
			</div>
		)
	}
};