import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentDescription from './descriptions';
import { showTournament } from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SignUp } from './buttons';
import { addParticipant } from '../../actions/participantActions';

class TournamentShow extends Component {
	static propTypes = {
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	onSignUp(tournamentId, user) {
		this.props.addParticipant(tournamentId, user);
	};

	render() {
		const { _id, title, hostedBy, status, participants } = this.props.tournament.showTournament;
		const { user } = this.props.auth;

		return (
			<div>
				<h1>{ title }</h1>
				<h3> <TournamentDescription key={_id} title={ title } /> </h3>
				<p>Hosted by: { hostedBy }</p>
				<p>status: { status }</p>

				<p>Registered Fighters:</p>
				<ul>
					{
						participants && participants.map(participant => (
							<li key={participant._id}>{participant.username}</li>
						))
					}
				</ul>


				<SignUp onClick={ this.onSignUp.bind(this, _id, user) } /><br/>


				<Link to="/">Back to Tournaments main page</Link>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	tournament: state.tournament,
	auth: state.auth
});

export default connect(mapStateToProps, { showTournament, addParticipant })(TournamentShow);