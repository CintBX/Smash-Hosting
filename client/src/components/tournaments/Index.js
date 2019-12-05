import React, { Component } from 'react';
import uuid from 'uuid';
import {
	OpenTournament,
	ClosedTournament,
	CompleteTournament
} from './components/TournamentCategories';
import { connect } from 'react-redux';
import { getTournaments, deleteTournament } from '../../actions/tournamentActions';
import PropTypes from 'prop-types';

class TournamentIndex extends Component {
	constructor(props) {
		super(props);
		this.openTournaments = this.openTournaments.bind(this);
		this.closedTournaments = this.closedTournaments.bind(this);
		this.completeTournaments = this.completeTournaments.bind(this);
	}

	componentDidMount() {
		this.props.getTournaments();
	};

	openTournaments() {
		const { tournaments } = this.props.tournament;

		return tournaments.map(tournament => {
			if(tournament.status === "Open") {
				return <OpenTournament key={tournament.id} tournament={tournament} />
			};
		});
	};
	closedTournaments() {
		const { tournaments } = this.props.tournament;

		return tournaments.map(tournament => {
			if(tournament.status === "Closed") {
				return <ClosedTournament key={tournament.id} tournament={tournament} />
			};
		});
	};
	completeTournaments() {
		const { tournaments } = this.props.tournament;

		return tournaments.map(tournament => {
			if(tournament.status === "Complete") {
				return <CompleteTournament key={tournament.id} tournament={tournament} />
			}
		})
	}

	render() {
		return (
			<div>
				<h1 className="mb-5 display-4 text-center">Welcome to SmashHosting!</h1>
				<h2 className="mb-3">Open Tournaments</h2>
				{ this.openTournaments() }
				<h2 className="mb-3">Closed Tournaments</h2>
				{ this.closedTournaments() }
				<h2 className="mb-3">Finished Tournaments</h2>
				{ this.completeTournaments() }
			</div>
		)
	}
};

TournamentIndex.propTypes = {
	getTournaments: PropTypes.func.isRequired,
	tournament: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	tournament: state.tournament
})

export default connect(mapStateToProps, { getTournaments, deleteTournament })(TournamentIndex);