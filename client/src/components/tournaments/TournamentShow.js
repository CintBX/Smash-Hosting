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
		this.onShuffleParticipants = this.onShuffleParticipants.bind(this);
		this.onSetPlayersIntoPairs = this.onSetPlayersIntoPairs.bind(this);
		this.onSetWinner = this.onSetWinner.bind(this);
		this.state = {
			round: 1,
			winners: []
		};

		// Start Tournament functions for various bracket sizes
		this.onStartTournamentStandard = this.onStartTournamentStandard.bind(this); // 8, 16, 32
		this.onStartTournament9and17 = this.onStartTournament9and17.bind(this);
		this.onStartTournament10 = this.onStartTournament10.bind(this);
		this.onStartTournament11 = this.onStartTournament11.bind(this);
		this.onStartTournament12 = this.onStartTournament12.bind(this);
		this.onStartTournament13 = this.onStartTournament13.bind(this);
		this.onStartTournament14 = this.onStartTournament14.bind(this);
		this.onStartTournament15 = this.onStartTournament15.bind(this);

		// Next Round functions for various bracket sizes
		this.onSetNextRoundStandard = this.onSetNextRoundStandard.bind(this); // 8, 16, 32
		this.onSetNextRound9and17 = this.onSetNextRound9and17.bind(this);
		this.onSetNextRound10 = this.onSetNextRound10.bind(this);
		this.onSetNextRound11 = this.onSetNextRound11.bind(this);
		this.onSetNextRound12 = this.onSetNextRound12.bind(this);
		this.onSetNextRound13 = this.onSetNextRound13.bind(this);
		this.onSetNextRound14 = this.onSetNextRound14.bind(this);
		this.onSetNextRound15 = this.onSetNextRound15.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.showTournament(id);
	};

	componentDidUpdate() {
		console.log(`Winners array: ${this.state.winners}`)
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

	onSetPlayersIntoPairs(players) {
    let pairs = [];
    for(var i = 0; i < players.length; i += 2) {
      if(players[i+1] !== undefined) {
        pairs.push([players[i], players[i+1]]);
      } else {
        pairs.push([players[i]]);
      }
    };
    return pairs;
	};
	
	onStartTournamentStandard(tourneyId) { // 8/16/32 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);
		// Create first round
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = reorderedParticipants;
		round["finals"] = false;
		this.props.addRound(tourneyId, round);
		// Status === Closed
		this.props.closeTournament(tourneyId);
	};

	onStartTournament9and17(tourneyId) { // 9/17 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);
		// Create first round
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = [
			reorderedParticipants[0],
			reorderedParticipants[1]
		];
		round["finals"] = false;
		this.props.addRound(tourneyId, round);
		// Status === Closed
		this.props.closeTournament(tourneyId);
	};

	onStartTournament10(tourneyId) { // 10 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);
		// Create first round
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = [
			reorderedParticipants[0],
			reorderedParticipants[1],
			reorderedParticipants[2],
			reorderedParticipants[3]
		];
		round["finals"] = false;
		this.props.addRound(tourneyId, round);
		// Status === Closed
		this.props.closeTournament(tourneyId);
	};

	onStartTournament11(tourneyId) { // 11 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);
		// Create first round
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = [
			reorderedParticipants[0],
			reorderedParticipants[1],
			reorderedParticipants[2],
			reorderedParticipants[3],
			reorderedParticipants[4],
			reorderedParticipants[5]
		];
		round["finals"] = false;
		this.props.addRound(tourneyId, round);
		// Status === Closed
		this.props.closeTournament(tourneyId);
	};

	onStartTournament12(tourneyId) { // 12 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);
		// Create first round
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = [
			reorderedParticipants[0],
			reorderedParticipants[1],
			reorderedParticipants[2],
			reorderedParticipants[3],
			reorderedParticipants[4],
			reorderedParticipants[5],
			reorderedParticipants[6],
			reorderedParticipants[7]
		];
		round["finals"] = false;
		this.props.addRound(tourneyId, round);
		// Status === Closed
		this.props.closeTournament(tourneyId);
	};

	onStartTournament13(tourneyId) { // 13 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);
		// Create first round
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = [
			reorderedParticipants[0],
			reorderedParticipants[1],
			reorderedParticipants[2],
			reorderedParticipants[3],
			reorderedParticipants[4],
			reorderedParticipants[5],
			reorderedParticipants[6],
			reorderedParticipants[7],
			reorderedParticipants[8],
			reorderedParticipants[9]
		];
		round["finals"] = false;
		this.props.addRound(tourneyId, round);
		// Status === Closed
		this.props.closeTournament(tourneyId);
	};

	onStartTournament14(tourneyId) { // 14 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);
		// Create first round
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = [
			reorderedParticipants[0],
			reorderedParticipants[1],
			reorderedParticipants[2],
			reorderedParticipants[3],
			reorderedParticipants[4],
			reorderedParticipants[5],
			reorderedParticipants[6],
			reorderedParticipants[7],
			reorderedParticipants[8],
			reorderedParticipants[9],
			reorderedParticipants[10],
			reorderedParticipants[11]
		];
		round["finals"] = false;
		this.props.addRound(tourneyId, round);
		// Status === Closed
		this.props.closeTournament(tourneyId);
	};

	onStartTournament15(tourneyId) { // 15 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Randomize participants && Send to bracket.players
		let reorderedParticipants = [];
		const shuffledParticipants = this.onShuffleParticipants(participants);
		shuffledParticipants.forEach(participant => {
			reorderedParticipants.push(participant);
		});
		this.props.shuffleParticipants(tourneyId, reorderedParticipants);
		// Create first round
		const round = {};
		round["round"] = this.state.round;
		round["matches"] = [
			reorderedParticipants[0],
			reorderedParticipants[1],
			reorderedParticipants[2],
			reorderedParticipants[3],
			reorderedParticipants[4],
			reorderedParticipants[5],
			reorderedParticipants[6],
			reorderedParticipants[7],
			reorderedParticipants[8],
			reorderedParticipants[9],
			reorderedParticipants[10],
			reorderedParticipants[11],
			reorderedParticipants[12],
			reorderedParticipants[13]
		];
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

	onSetNextRoundStandard() { // 8/16/32 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = currentRound.round + 1;
			round["matches"] = this.state.winners;
			round["finals"] = this.state.winners.length !== 2 ? false : true;
			this.props.addRound(showTournament._id, round);
		};
		// Clear state winners
		this.setState({
			winners: []
		});
	};

	onSetNextRound9and17() { // 9/17 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = currentRound.round + 1;

			if(currentRound.round === 1) {
				let round2Matches = [];
				showTournament.bracket.players && showTournament.bracket.players.forEach(player => {
					round2Matches.push(player);
				});
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.splice(1, 0, this.state.winners[0]);
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			round["finals"] = this.state.winners.length !== 2 ? false : true;
			this.props.addRound(showTournament._id, round);
		};
		// Clear state winners
		this.setState({
			winners: []
		});
	};

	onSetNextRound10() { // 10 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = currentRound.round + 1;

			if(currentRound.round === 1) {
				let round2Matches = [];
				showTournament.bracket.players && showTournament.bracket.players.forEach(player => {
					round2Matches.push(player);
				});
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.splice(1, 0, this.state.winners[0]);
				round2Matches.splice(5, 0, this.state.winners[1]);
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			round["finals"] = currentRound.round === 3 ? true : false;
			this.props.addRound(showTournament._id, round);
		};
		// Clear state winners
		this.setState({
			winners: []
		});
	};

	onSetNextRound11() { // 11 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = currentRound.round + 1;

			if(currentRound.round === 1) {
				let round2Matches = [];
				showTournament.bracket.players && showTournament.bracket.players.forEach(player => {
					round2Matches.push(player);
				});
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.splice(1, 0, this.state.winners[0]);
				round2Matches.splice(5, 0, this.state.winners[1]);
				round2Matches.splice(7, 0, this.state.winners[2]);
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			round["finals"] = currentRound.round === 3 ? true : false;
			this.props.addRound(showTournament._id, round);
		};
		// Clear state winners
		this.setState({
			winners: []
		});
	};

	onSetNextRound12() { // 12 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = currentRound.round + 1;

			if(currentRound.round === 1) {
				let round2Matches = [];
				showTournament.bracket.players && showTournament.bracket.players.forEach(player => {
					round2Matches.push(player);
				});
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.splice(1, 0, this.state.winners[0]);
				round2Matches.splice(3, 0, this.state.winners[1]);
				round2Matches.splice(5, 0, this.state.winners[2]);
				round2Matches.splice(7, 0, this.state.winners[3]);
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			round["finals"] = currentRound.round === 3 ? true : false;
			this.props.addRound(showTournament._id, round);
		};
		// Clear state winners
		this.setState({
			winners: []
		});
	};

	onSetNextRound13() { // 13 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = currentRound.round + 1;

			if(currentRound.round === 1) {
				let round2Matches = [];
				showTournament.bracket.players && showTournament.bracket.players.forEach(player => {
					round2Matches.push(player);
				});
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.splice(1, 0, this.state.winners[0]);
				round2Matches.splice(2, 0, this.state.winners[1]);
				round2Matches.splice(3, 0, this.state.winners[2]);
				round2Matches.splice(5, 0, this.state.winners[3]);
				round2Matches.splice(7, 0, this.state.winners[4]);
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			round["finals"] = currentRound.round === 3 ? true : false;
			this.props.addRound(showTournament._id, round);
		};
		// Clear state winners
		this.setState({
			winners: []
		});
	};

	onSetNextRound14() { // 14 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = currentRound.round + 1;

			if(currentRound.round === 1) {
				let round2Matches = [];
				showTournament.bracket.players && showTournament.bracket.players.forEach(player => {
					round2Matches.push(player);
				});
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.splice(1, 0, this.state.winners[0]);
				round2Matches.splice(2, 0, this.state.winners[1]);
				round2Matches.splice(3, 0, this.state.winners[2]);
				round2Matches.splice(5, 0, this.state.winners[3]);
				round2Matches.splice(6, 0, this.state.winners[4]);
				round2Matches.splice(7, 0, this.state.winners[5]);
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			round["finals"] = currentRound.round === 3 ? true : false;
			this.props.addRound(showTournament._id, round);
		};
		// Clear state winners
		this.setState({
			winners: []
		});
	};

	onSetNextRound15() { // 15 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			this.props.setChampion(this.props.tournament.showTournament._id, tournamentChampion);
			this.props.completeTournament(this.props.tournament.showTournament._id);
		} else {
			// Create new round object and push to tournament.bracket.rounds
			const round = {};
			round["round"] = currentRound.round + 1;

			if(currentRound.round === 1) {
				let round2Matches = [];
				showTournament.bracket.players && showTournament.bracket.players.forEach(player => {
					round2Matches.push(player);
				});
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.shift();
				round2Matches.splice(1, 0, this.state.winners[0]);
				round2Matches.splice(2, 0, this.state.winners[1]);
				round2Matches.splice(3, 0, this.state.winners[2]);
				round2Matches.splice(4, 0, this.state.winners[3]);
				round2Matches.splice(5, 0, this.state.winners[4]);
				round2Matches.splice(6, 0, this.state.winners[5]);
				round2Matches.splice(7, 0, this.state.winners[6]);
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			round["finals"] = currentRound.round === 3 ? true : false;
			this.props.addRound(showTournament._id, round);
		};
		// Clear state winners
		this.setState({
			winners: []
		});
	};

	render() {
		const { participants } = this.props.tournament.showTournament;
		const loading = this.props.tournament.loading || !this.props.tournament.showTournament;

		if(loading) {
			return <Spinner color="light" /> 
		} else {
			if(this.props.tournament.showTournament.status === "Complete") {
				return (
					<Results 
						tournament={this.props.tournament.showTournament}
					/>
				);
			} else if(this.props.tournament.showTournament.status === "Closed") {
				switch(participants && participants.length) {
					case 15:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound15}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
								/>
							</div>
						);
					case 14:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound14}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
								/>
							</div>
						);
					case 13:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound13}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
								/>
							</div>
						);
					case 12:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound12}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
								/>
							</div>
						);					
					case 11:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound11}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
								/>
							</div>
						);
					case 10: 
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound10}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
								/>
							</div>
						);
					case 9:
					case 17:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound9and17}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
								/>
							</div>
						);
					default: // Standard
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRoundStandard}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
								/>
							</div>
						);
				}
			} else {
				switch(participants && participants.length) {
					case 15:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament15}
							/>
						);
					case 14:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament14}
							/>
						);
					case 13:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament13}
							/>
						);
					case 12:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament12}
							/>
						);
					case 11:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament11}
							/>
						);
					case 10:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament10}
							/>
						);
					case 9:
					case 17:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament9and17}
							/>
						);
					default: // Standard
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournamentStandard}
							/>
						);
				};
			};
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