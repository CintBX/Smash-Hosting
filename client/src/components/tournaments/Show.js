import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentDescription from './descriptions';
import { showTournament, addParticipant, updateTournamentStatus } from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TournamentSignUp, StartTournament } from './buttons';
import { Button } from 'reactstrap';

class TournamentShow extends Component {
	constructor(props) {
		super(props);
		this.onSignUp = this.onSignUp.bind(this);
		this.onStartTournament = this.onStartTournament.bind(this);
	};

	static propTypes = {
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	onSignUp(tournamentId, user) {
		this.props.addParticipant(tournamentId, user);
	};

	onStartTournament(tourneyId, tourneyParticipants) {
		this.props.updateTournamentStatus(tourneyId, tourneyParticipants);
	};

	render() {
		const { _id, title, hostedBy, status, participants } = this.props.tournament.showTournament;
		const { isAuthenticated, user } = this.props.auth;

		return (
			<div>
			{
				status === "Open" ?
				<div style={{color: "lightgrey"}}>
					<h1 className="text-center">{ title } <span style={{fontSize: "0.5em"}}>by { hostedBy }</span></h1>
					<h3> <TournamentDescription key={_id} title={ title } /> </h3><br />

					<p className="text-center" style={{color: "#56A8CBFF", fontSize: "2em"}}>~ { status } for registration ~</p>
	
					<h4 className="text-left mt-5">
						{participants.length === 1 ? `${participants.length} Registered Fighter` : `${participants.length} Registered Fighters`}
					</h4>
					<ul>
						{
							participants && participants.map(participant => (
								<li key={participant._id} className="text-left" style={{fontSize: "1.1em"}}>{participant.username}</li>
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
								onClick={() => this.onStartTournament(_id, participants)}
							/>
						</div> :
						null
					}
				</div> :
				null
			}
			<br /><Link to="/">Back to Tournaments main page</Link>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	tournament: state.tournament,
	auth: state.auth
});

export default connect(mapStateToProps, { showTournament, addParticipant, updateTournamentStatus })(TournamentShow);