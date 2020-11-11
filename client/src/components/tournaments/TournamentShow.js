import React, { Component } from 'react';
import { SignUpPage, HostUI, StartBracket, Results } from './TournamentScreens';
import {
	showTournament,
	addParticipant,
	closeTournament,
	shuffleParticipants,
	addRound,
	updateMatchWins,
	setChampion,
	completeTournament
} from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';


class TournamentShow extends Component {
	constructor(props) {
		super(props);
		this.onSignUp = this.onSignUp.bind(this);
		this.onStartTournament = this.onStartTournament.bind(this);
		this.onShuffleParticipants = this.onShuffleParticipants.bind(this);
		this.onSetWinner = this.onSetWinner.bind(this);
		this.onSetNextRound = this.onSetNextRound.bind(this);
		this.state = {
			round: 1,
			winners: []
		};
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.showTournament(id);
	};

	componentDidUpdate() {
		console.log(this.state.winners)
	}

	static propTypes = {
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	onSignUp(tournamentId, user) {
		this.props.addParticipant(tournamentId, user);
	};

	onShuffleParticipants(array) {
		let currentIndex = array.length, temporaryValue, randomIndex;	
		while(0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;	
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}	
		return array;
	};
	
	onStartTournament(tourneyId) { // may just be for 8/16/32
		const { participants } = this.props.tournament.showTournament;

		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);

		// Create first round based on player count
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = reorderedParticipants;
		round["finals"] = false;
		this.props.addRound(tourneyId, round);

		// Status === Closed
		this.props.closeTournament(tourneyId);
	};

	onSetWinner(user) {
		// set user matchWins+1
		user.matchWins = 1;
		this.props.updateMatchWins(user);

		// push players into winners
		this.setState({
			winners: [...this.state.winners, user]
		});
	};

	onSetNextRound() {
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const previousRound = rounds[n-1];

		if(previousRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = previousRound.round + 1;
			round["matches"] = this.state.winners;
			round["finals"] = this.state.winners.length !== 2 ? false : true;
			this.props.addRound(this.props.tournament.showTournament._id, round);
		};

		// Clear state winners
		this.setState({
			winners: []
		});
	};

	render() {
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
					<div>
						<HostUI
							bracket={this.props.tournament.showTournament.bracket}
							onSetWinner={this.onSetWinner}
							winners={this.state.winners}
							onSetNextRound={this.onSetNextRound}
						/>
						<br/>
						<StartBracket
							tournament={this.props.tournament.showTournament}
						/>
					</div>
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
	{
		showTournament,
		addParticipant,
		closeTournament,
		shuffleParticipants,
		addRound,
		updateMatchWins,
		setChampion,
		completeTournament
	})(TournamentShow);