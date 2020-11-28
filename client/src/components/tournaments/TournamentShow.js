import React, { Component } from 'react';
import { SignUpPage, HostUI, StartBracket, Results } from './TournamentScreens';
import {
	showTournament,
	addParticipant,
	closeTournament,
	shuffleParticipants,
	addScore,
	addRound,
	updateMatchWins,
	updateTournamentsPlayed,
	updateTournamentWins,
	setChampion,
	completeTournament
} from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { Redirect } from 'react-router-dom';


class TournamentShow extends Component {
	constructor(props) {
		super(props);
		this.onSignUp = this.onSignUp.bind(this);
		this.onShuffleParticipants = this.onShuffleParticipants.bind(this);
		this.onSetPlayersIntoPairs = this.onSetPlayersIntoPairs.bind(this);
		this.onSetWinner = this.onSetWinner.bind(this);
		this.onSetScoreOne = this.onSetScoreOne.bind(this);
    this.onSetScoreTwo = this.onSetScoreTwo.bind(this);
		this.state = {
			round: 1,
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: false
		};

		// Start Tournament functions for various bracket sizes
		this.onStartTournamentStandard = this.onStartTournamentStandard.bind(this); // 8, 16, 32
		this.onStartTournament9and17 = this.onStartTournament9and17.bind(this);
		this.onStartTournament10and18 = this.onStartTournament10and18.bind(this);
		this.onStartTournament11and19 = this.onStartTournament11and19.bind(this);
		this.onStartTournament12and20 = this.onStartTournament12and20.bind(this);
		this.onStartTournament13 = this.onStartTournament13.bind(this);
		this.onStartTournament14 = this.onStartTournament14.bind(this);
		this.onStartTournament15 = this.onStartTournament15.bind(this);

		// Next Round functions for various bracket sizes
		this.onSetNextRoundStandard = this.onSetNextRoundStandard.bind(this); // 8, 16, 32
		this.onSetNextRound9and17 = this.onSetNextRound9and17.bind(this);
		this.onSetNextRound10and18 = this.onSetNextRound10and18.bind(this);
		this.onSetNextRound11and19 = this.onSetNextRound11and19.bind(this);
		this.onSetNextRound12and20 = this.onSetNextRound12and20.bind(this);
		this.onSetNextRound13 = this.onSetNextRound13.bind(this);
		this.onSetNextRound14 = this.onSetNextRound14.bind(this);
		this.onSetNextRound15 = this.onSetNextRound15.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.showTournament(id);
	};

	componentDidUpdate() {
		if(this.state.redirectBack) {
      this.setState({ redirectBack: false });
    };
	};

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
		// Update each participants `tournamentsPlayed` property
		participants.forEach(participant => {
			participant.tournamentsPlayed = 1
			this.props.updateTournamentsPlayed(participant);
		});
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
		// Update each participants `tournamentsPlayed` property
		participants.forEach(participant => {
			participant.tournamentsPlayed = 1
			this.props.updateTournamentsPlayed(participant);
		});
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

	onStartTournament10and18(tourneyId) { // 10/18 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Update each participants `tournamentsPlayed` property
		participants.forEach(participant => {
			participant.tournamentsPlayed = 1
			this.props.updateTournamentsPlayed(participant);
		});
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

	onStartTournament11and19(tourneyId) { // 11/19 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Update each participants `tournamentsPlayed` property
		participants.forEach(participant => {
			participant.tournamentsPlayed = 1
			this.props.updateTournamentsPlayed(participant);
		});
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

	onStartTournament12and20(tourneyId) { // 12/20 player bracket
		const { participants } = this.props.tournament.showTournament;
		// Update each participants `tournamentsPlayed` property
		participants.forEach(participant => {
			participant.tournamentsPlayed = 1
			this.props.updateTournamentsPlayed(participant);
		});
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
		// Update each participants `tournamentsPlayed` property
		participants.forEach(participant => {
			participant.tournamentsPlayed = 1
			this.props.updateTournamentsPlayed(participant);
		});
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
		// Update each participants `tournamentsPlayed` property
		participants.forEach(participant => {
			participant.tournamentsPlayed = 1
			this.props.updateTournamentsPlayed(participant);
		});
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
		// Update each participants `tournamentsPlayed` property
		participants.forEach(participant => {
			participant.tournamentsPlayed = 1
			this.props.updateTournamentsPlayed(participant);
		});
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

	onSetScoreOne(score) {
		this.setState({
			scoreOne: score
		});
	};

	onSetScoreTwo(score) {
		this.setState({
			scoreTwo: score
		});
	};

	onSetWinner(user) {
		const { scoreOne, scoreTwo } = this.state;

		// push players into winners
		this.setState({
			winners: [...this.state.winners, user],
			scores: [...this.state.scores, scoreOne, scoreTwo]
		});

		this.setState({
			scoreOne: 0,
			scoreTwo: 0
		});
	};

	onSetNextRoundStandard() { // 8/16/32 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		// Update matchWins for each player inside this.state.winners
		showTournament.bracket.players.map(player => {
			if(this.state.winners.some(winner => winner._id === player._id)) {
				player.matchWins = 1;
				this.props.updateMatchWins(player);
			};
		});

		// Create new scores object and push to tournament.bracket.scores
		const scores = {};
		scores["round"] = currentRound.round;
		scores["scores"] = this.state.scores;
		this.props.addScore(showTournament._id, scores);

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			tournamentChampion.tournamentWins = 1
			this.props.updateTournamentWins(tournamentChampion);
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
		// Clear state
		this.setState({
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: true
		});
	};

	onSetNextRound9and17() { // 9/17 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		// Update matchWins for each player inside this.state.winners
		showTournament.bracket.players.map(player => {
			if(this.state.winners.some(winner => winner._id === player._id)) {
				player.matchWins = 1;
				this.props.updateMatchWins(player);
			};
		});

		// Create new scores object and push to tournament.bracket.scores
		const scores = {};
		scores["round"] = currentRound.round;
		scores["scores"] = this.state.scores;
		this.props.addScore(showTournament._id, scores);

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			tournamentChampion.tournamentWins = 1
			this.props.updateTournamentWins(tournamentChampion);
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
		// Clear state
		this.setState({
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: true
		});
	};

	onSetNextRound10and18() { // 10/18 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		// Update matchWins for each player inside this.state.winners
		showTournament.bracket.players.map(player => {
			if(this.state.winners.some(winner => winner._id === player._id)) {
				player.matchWins = 1;
				this.props.updateMatchWins(player);
			};
		});

		// Create new scores object and push to tournament.bracket.scores
		const scores = {};
		scores["round"] = currentRound.round;
		scores["scores"] = this.state.scores;
		this.props.addScore(showTournament._id, scores);

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			tournamentChampion.tournamentWins = 1
			this.props.updateTournamentWins(tournamentChampion);
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
				if(showTournament.participants && showTournament.participants.length === 10) {
					round2Matches.splice(1, 0, this.state.winners[0]);
					round2Matches.splice(5, 0, this.state.winners[1]);
				} else if(showTournament.participants && showTournament.participants.length === 18) {
					round2Matches.splice(1, 0, this.state.winners[0]);
					round2Matches.splice(9, 0, this.state.winners[1]);
				}
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			if(showTournament.participants && showTournament.participants.length === 10) {
				round["finals"] = currentRound.round === 3 ? true : false;	
			} else if(showTournament.participants && showTournament.participants.length === 18) {
				round["finals"] = currentRound.round === 4 ? true : false;
			}
			this.props.addRound(showTournament._id, round);
		};
		// Clear state
		this.setState({
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: true
		});
	};

	onSetNextRound11and19() { // 11/19 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		// Update matchWins for each player inside this.state.winners
		showTournament.bracket.players.map(player => {
			if(this.state.winners.some(winner => winner._id === player._id)) {
				player.matchWins = 1;
				this.props.updateMatchWins(player);
			};
		});

		// Create new scores object and push to tournament.bracket.scores
		const scores = {};
		scores["round"] = currentRound.round;
		scores["scores"] = this.state.scores;
		this.props.addScore(showTournament._id, scores);

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			tournamentChampion.tournamentWins = 1
			this.props.updateTournamentWins(tournamentChampion);
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
				if(showTournament.participants && showTournament.participants.length === 11) {
					round2Matches.splice(1, 0, this.state.winners[0]);
					round2Matches.splice(5, 0, this.state.winners[1]);
					round2Matches.splice(7, 0, this.state.winners[2]);
				} else if(showTournament.participants && showTournament.participants.length === 19) {
					round2Matches.splice(1, 0, this.state.winners[0]);
					round2Matches.splice(5, 0, this.state.winners[1]);
					round2Matches.splice(9, 0, this.state.winners[2]);
				}
				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			if(showTournament.participants && showTournament.participants.length === 11) {
				round["finals"] = currentRound.round === 3 ? true : false;	
			} else if(showTournament.participants && showTournament.participants.length === 19) {
				round["finals"] = currentRound.round === 4 ? true : false;
			}

			this.props.addRound(showTournament._id, round);
		};
		// Clear state
		this.setState({
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: true
		});
	};

	onSetNextRound12and20() { // 12/20 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		// Update matchWins for each player inside this.state.winners
		showTournament.bracket.players.map(player => {
			if(this.state.winners.some(winner => winner._id === player._id)) {
				player.matchWins = 1;
				this.props.updateMatchWins(player);
			};
		});

		// Create new scores object and push to tournament.bracket.scores
		const scores = {};
		scores["round"] = currentRound.round;
		scores["scores"] = this.state.scores;
		this.props.addScore(showTournament._id, scores);

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			tournamentChampion.tournamentWins = 1
			this.props.updateTournamentWins(tournamentChampion);
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
				
				if(showTournament.participants && showTournament.participants.length === 12) {
					round2Matches.splice(1, 0, this.state.winners[0]);
					round2Matches.splice(3, 0, this.state.winners[1]);
					round2Matches.splice(5, 0, this.state.winners[2]);
					round2Matches.splice(7, 0, this.state.winners[3]);
				} else if(showTournament.participants && showTournament.participants.length === 20) {
					round2Matches.splice(1, 0, this.state.winners[0]);
					round2Matches.splice(5, 0, this.state.winners[1]);
					round2Matches.splice(9, 0, this.state.winners[2]);
					round2Matches.splice(13, 0, this.state.winners[3]);
				}

				round["matches"] = round2Matches;
			} else {
				round["matches"] = this.state.winners;
			};

			if(showTournament.participants && showTournament.participants.length === 12) {
				round["finals"] = currentRound.round === 3 ? true : false;	
			} else if(showTournament.participants && showTournament.participants.length === 20) {
				round["finals"] = currentRound.round === 4 ? true : false;
			}

			this.props.addRound(showTournament._id, round);
		};
		// Clear state
		this.setState({
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: true
		});
	};

	onSetNextRound13() { // 13 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		// Update matchWins for each player inside this.state.winners
		showTournament.bracket.players.map(player => {
			if(this.state.winners.some(winner => winner._id === player._id)) {
				player.matchWins = 1;
				this.props.updateMatchWins(player);
			};
		});

		// Create new scores object and push to tournament.bracket.scores
		const scores = {};
		scores["round"] = currentRound.round;
		scores["scores"] = this.state.scores;
		this.props.addScore(showTournament._id, scores);

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			tournamentChampion.tournamentWins = 1
			this.props.updateTournamentWins(tournamentChampion);
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
		// Clear state
		this.setState({
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: true
		});
	};

	onSetNextRound14() { // 14 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		// Update matchWins for each player inside this.state.winners
		showTournament.bracket.players.map(player => {
			if(this.state.winners.some(winner => winner._id === player._id)) {
				player.matchWins = 1;
				this.props.updateMatchWins(player);
			};
		});

		// Create new scores object and push to tournament.bracket.scores
		const scores = {};
		scores["round"] = currentRound.round;
		scores["scores"] = this.state.scores;
		this.props.addScore(showTournament._id, scores);

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			tournamentChampion.tournamentWins = 1
			this.props.updateTournamentWins(tournamentChampion);
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
		// Clear state
		this.setState({
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: true
		});
	};

	onSetNextRound15() { // 15 player bracket
		// Bindings and previous/current Round
		const { rounds } = this.props.tournament.showTournament.bracket;
		const n = rounds && rounds.length;
		const currentRound = rounds[n-1];
		const { showTournament } = this.props.tournament;

		// Update matchWins for each player inside this.state.winners
		showTournament.bracket.players.map(player => {
			if(this.state.winners.some(winner => winner._id === player._id)) {
				player.matchWins = 1;
				this.props.updateMatchWins(player);
			};
		});

		// Create new scores object and push to tournament.bracket.scores
		const scores = {};
		scores["round"] = currentRound.round;
		scores["scores"] = this.state.scores;
		this.props.addScore(showTournament._id, scores);

		if(currentRound.finals) {
			// Select final user from winners[], set as Champion and Complete tournament
			let tournamentChampion;
			this.state.winners.map(winner => tournamentChampion = winner);
			tournamentChampion.tournamentWins = 1
			this.props.updateTournamentWins(tournamentChampion);
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
		// Clear state
		this.setState({
			winners: [],
			scores: [],
			scoreOne: 0,
			scoreTwo: 0,
			redirectBack: true
		});
	};

	render() {
		const redirectBack = this.state.redirectBack;
		const { _id, participants } = this.props.tournament.showTournament;
		const loading = this.props.tournament.loading || !this.props.tournament.showTournament;

		if(redirectBack) return <Redirect to={ `/tournaments/show/${_id}` } />;

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
									onSetScoreOne={this.onSetScoreOne}
									onSetScoreTwo={this.onSetScoreTwo}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound15}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
							</div>
						);
					case 14:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									onSetScoreOne={this.onSetScoreOne}
									onSetScoreTwo={this.onSetScoreTwo}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound14}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
							</div>
						);
					case 13:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									onSetScoreOne={this.onSetScoreOne}
									onSetScoreTwo={this.onSetScoreTwo}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound13}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
							</div>
						);
					case 12:
					case 20:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									onSetScoreOne={this.onSetScoreOne}
									onSetScoreTwo={this.onSetScoreTwo}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound12and20}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
							</div>
						);					
					case 11:
					case 19:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									onSetScoreOne={this.onSetScoreOne}
									onSetScoreTwo={this.onSetScoreTwo}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound11and19}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
							</div>
						);
					case 10:
					case 18:
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									onSetScoreOne={this.onSetScoreOne}
									onSetScoreTwo={this.onSetScoreTwo}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound10and18}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
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
									onSetScoreOne={this.onSetScoreOne}
									onSetScoreTwo={this.onSetScoreTwo}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRound9and17}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
							</div>
						);
					default: // Standard
						return (
							<div>
								<HostUI
									bracket={this.props.tournament.showTournament.bracket}
									onSetWinner={this.onSetWinner}
									onSetScoreOne={this.onSetScoreOne}
									onSetScoreTwo={this.onSetScoreTwo}
									winners={this.state.winners}
									onSetNextRound={this.onSetNextRoundStandard}
									onSetPlayersIntoPairs={this.onSetPlayersIntoPairs}
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
								/>
								<br/>
								<StartBracket
									tournament={this.props.tournament.showTournament}
									auth={this.props.auth}
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
					case 20:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament12and20}
							/>
						);
					case 11:
					case 19:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament11and19}
							/>
						);
					case 10:
					case 18:
						return (
							<SignUpPage
								tournament={this.props.tournament.showTournament}
								auth={this.props.auth}
								onSignUp={this.onSignUp}
								onStartTournament={this.onStartTournament10and18}
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
		addScore,
		addRound,
		updateMatchWins,
		updateTournamentsPlayed,
		updateTournamentWins,
		setChampion,
		completeTournament
	})(TournamentShow);