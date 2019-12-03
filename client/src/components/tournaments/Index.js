import React, { Component } from 'react';
import { 
	Jumbotron, 
	Button, 
	Spinner
} from 'reactstrap';
import ResultsPopover from './components/ResultsPopover';
import { Link } from 'react-router-dom';
import TournamentShow from './Show';
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
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
					hostedBy: "Apollo",
				},
				tournamentTwo: { 
					id: uuid(),
					status: "Open",
					title: "Double Elimination", 
					description: "Double Elim tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
					hostedBy: "Sille",
				},
				tournamentThree: { 
					id: uuid(),
					status: "Closed",
					title: "Round Robin", 
					description: "Round Robin tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
					hostedBy: "Ian",
				},
				tournamentFour: { 
					id: uuid(),
					status: "Complete",
					title: "Standard", 
					description: "Standard tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
					hostedBy: "GucciRob",
				}
			}
		}
	}
	render() {
		const { tournamentOne, tournamentTwo, tournamentThree, tournamentFour } = this.state.tournaments;
		return (
			<div>
				<h1 className="mb-5 display-4 text-center">Welcome to SmashHosting!</h1>

				{/*Open Tournaments*/}
				<Jumbotron>
					<h1 className="mb-5 text-center">Open Tournaments</h1>

					<h3>{ tournamentOne.title }</h3>
					<p style={{fontSize: '0.9em'}} className="text-muted">hosted by: { tournamentOne.hostedBy }</p>
					<hr className="my-2"/>
					<p>{ tournamentOne.description }</p>
					<p className="lead">
						<Link to={`/tournament/${tournamentOne.id}`}>
							<Button color="primary">Sign up</Button>
						</Link>
					</p><br/>

					<h3>{ tournamentTwo.title }</h3>
					<p style={{fontSize: '0.9em'}} className="text-muted">hosted by: { tournamentTwo.hostedBy }</p>
					<hr className="my-2"/>
					<p>{ tournamentTwo.description }</p>
					<p className="lead">
						<Button color="primary">Sign up</Button>
					</p>
				</Jumbotron>

				{/*Closed Tournaments*/}
				<Jumbotron>
					<h1 className="mb-5 text-center">Closed Tournaments</h1>

					<h3>{ tournamentThree.title }</h3>
					<p style={{fontSize: '0.9em'}} className="text-muted">hosted by: { tournamentThree.hostedBy }</p>
					<hr className="my-2"/>
					<p>{ tournamentThree.description }</p>
					<p className="lead">
						<Spinner color="danger"/> In progress...
					</p>
				</Jumbotron>


				{/*Completed Tournaments*/}
				<Jumbotron>
					<h1 className="mb-5 text-center">Completed Tournaments</h1>

					<h3>{ tournamentFour.title }</h3>
					<p style={{fontSize: '0.9em'}} className="text-muted">hosted by: { tournamentFour.hostedBy }</p>
					<hr className="my-2"/>
					<p>{ tournamentFour.description }</p>
					<p className="lead">
						<ResultsPopover/>	
					</p>
				</Jumbotron>
			</div>
		)
	}
};