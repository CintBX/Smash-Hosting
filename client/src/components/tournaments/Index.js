import React, { Component } from 'react';
import { 
	Jumbotron, 
	Button, 
	Spinner
} from 'reactstrap';
import ResultsPopover from './components/ResultsPopover';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import OpenTournament from './components/OpenTournament';
import ClosedTournament from './components/ClosedTournament';
import CompleteTournament from './components/CompleteTournament';

export default class TournamentIndex extends Component {
	constructor(props) {
		super(props);
		this.openTournaments = this.openTournaments.bind(this);
		this.closedTournaments = this.closedTournaments.bind(this);
		this.completeTournaments = this.completeTournaments.bind(this);
		this.state = {
			tournaments: [
				{ 
					id: uuid(),
					status: "Open",
					title: "Single Elimination", 
					description: "Single Elim tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
					hostedBy: "Apollo",
				},
				{ 
					id: uuid(),
					status: "Open",
					title: "Double Elimination", 
					description: "Double Elim tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
					hostedBy: "Sille",
				},
				{ 
					id: uuid(),
					status: "Closed",
					title: "Round Robin", 
					description: "Round Robin tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
					hostedBy: "Ian",
				},
				{ 
					id: uuid(),
					status: "Complete",
					title: "Standard", 
					description: "Standard tournament rules go in this space.", 
					entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
					hostedBy: "GucciRob",
				}
			]
		}
	}

	openTournaments() {
		return this.state.tournaments.map(tournament => {
			if(tournament.status == "Open") {
				return <OpenTournament key={tournament.id} tournament={tournament} />
			};
		});
	};

	closedTournaments() {
		return this.state.tournaments.map(tournament => {
			if(tournament.status == "Closed") {
				return <ClosedTournament key={tournament.id} tournament={tournament} />
			};
		});
	};

	completeTournaments() {
		return this.state.tournaments.map(tournament => {
			if(tournament.status == "Complete") {
				return <CompleteTournament key={tournament.id} tournament={tournament} />
			}
		})
	}


	render() {
		return (
			<div>
				<h1 className="mb-5 display-4 text-center">Welcome to SmashHosting!</h1>
				{ this.openTournaments() }
				{ this.closedTournaments() }
				{ this.completeTournaments() }
			</div>
		)
	}
};