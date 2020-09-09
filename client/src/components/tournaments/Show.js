import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentDescription from './descriptions';
import { showTournament, addParticipant, updateTournamentStatus } from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TournamentSignUp, StartTournament } from './buttons';
import { Button } from 'reactstrap';
import TournamentStart from './Start';

class TournamentShow extends Component {
	constructor(props) {
		super(props);
		this.onSignUp = this.onSignUp.bind(this);
		this.onCloseTournament = this.onCloseTournament.bind(this);
	};

	static propTypes = {
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	onSignUp(tournamentId, user) {
		this.props.addParticipant(tournamentId, user);
	};

	onCloseTournament(tourneyId, tourneyStatus) {
		this.props.updateTournamentStatus(tourneyId, tourneyStatus);
	};

	render() {
		const { _id, title, hostedBy, status, participants } = this.props.tournament.showTournament;
		const { isAuthenticated, user } = this.props.auth;

		return (
			<div>
			{
				status === "Open" ?
				<div>
					<h1>{ title }</h1>
					<h3> <TournamentDescription key={_id} title={ title } /> </h3>
					<p>Hosted by: { hostedBy }</p>
					<p>status: { status }</p>
	
					<p>{participants.length} Registered Fighters</p>
					<ul>
						{
							participants && participants.map(participant => (
								<li key={participant._id}>{participant.username}</li>
							))
						}
					</ul>
	
					{
						isAuthenticated ?
						<div>
							<TournamentSignUp
								participants={participants}
								userId={user._id}
								onClick={() => this.onSignUp(_id, user)} 
							/>
						</div> :
						<Button block disabled>Log in to sign up for this tournament</Button>
					}

					{
						isAuthenticated && user.username === hostedBy ?
						<div>
							<StartTournament
								participants={participants}
								onClick={this.onCloseTournament(_id, status)}
							/>
						</div> :
						null
					}
	
					<br/><Link to="/">Back to Tournaments main page</Link>
				</div> :
				<TournamentStart />
			}
			</div>
		)
	}
};

const mapStateToProps = state => ({
	tournament: state.tournament,
	auth: state.auth
});

export default connect(mapStateToProps, { showTournament, addParticipant, updateTournamentStatus })(TournamentShow);