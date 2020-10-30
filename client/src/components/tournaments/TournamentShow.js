import React, { Component } from 'react';
import { SignUpPage, StartBracket, Results } from './TournamentScreens';
import {
	showTournament,
	addParticipant,
	closeTournament,
	shuffleParticipants
} from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';


class TournamentShow extends Component {
	constructor(props) {
		super(props);
		this.onSignUp = this.onSignUp.bind(this);
		this.onStartTournament = this.onStartTournament.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.showTournament(id);
	};

	static propTypes = {
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	onSignUp(tournamentId, user) {
		this.props.addParticipant(tournamentId, user);
	};

	onStartTournament(tourneyId, tourneyParticipants) {
		this.props.shuffleParticipants(tourneyId, tourneyParticipants);
		this.props.closeTournament(tourneyId);
	};

	render() {
		console.log(this.props.tournament)
		const loading = this.props.tournament.loading || !this.props.tournament.showTournament;
		if(loading) {
			return <Spinner color="light" /> 
		} else {
			if(this.props.tournament.showTournament.status === "Complete") {
				return (
					<Results />
				);
			} else if(this.props.tournament.showTournament.status === "Closed") {
				return (
					<StartBracket
						tournament={this.props.tournament.showTournament}
					/>
				);
			} else {
				return (
					<SignUpPage
						tournament={this.props.tournament.showTournament}
						auth={this.props.auth}
						onSignUp={this.onSignUp}
						onStartTournament={this.onStartTournament}
					/>
				);
			}
		};
	};
};

const mapStateToProps = state => ({
	tournament: state.tournament,
	auth: state.auth
});

export default connect(mapStateToProps, 
	{ showTournament, addParticipant, closeTournament, shuffleParticipants }
)(TournamentShow);