import React, { Component } from 'react';
import uuid from 'uuid';
import {
	OpenTournament,
	ClosedTournament,
	CompleteTournament
} from './components/TournamentCategories';
import { connect } from 'react-redux';
import { getTournaments } from '../../actions/tournamentActions';


class TournamentIndex extends Component {
	constructor(props) {
		super(props);
		this.openTournaments = this.openTournaments.bind(this);
		this.closedTournaments = this.closedTournaments.bind(this);
		this.completeTournaments = this.completeTournaments.bind(this);
		this.state = {
			
		}
	}

	openTournaments() {
		return this.state.tournaments.map(tournament => {
			if(tournament.status === "Open") {
				return <OpenTournament key={tournament.id} tournament={tournament} />
			};
		});
	};

	closedTournaments() {
		return this.state.tournaments.map(tournament => {
			if(tournament.status === "Closed") {
				return <ClosedTournament key={tournament.id} tournament={tournament} />
			};
		});
	};

	completeTournaments() {
		return this.state.tournaments.map(tournament => {
			if(tournament.status === "Complete") {
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

const mapStateToProps = state => ({
	tournament: state.tournament
})

export default connect(mapStateToProps, { getTournaments })(TournamentIndex);