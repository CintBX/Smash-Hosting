import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentRules from './rulesets';
import { showTournament, addParticipant, closeTournament, addRound } from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TournamentSignUp, StartTournament } from './buttons';
import { Button, Spinner } from 'reactstrap';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

class TournamentShow extends Component {
	constructor(props) {
		super(props);
		this.onSignUp = this.onSignUp.bind(this);
		this.onStartTournament = this.onStartTournament.bind(this);
		this.state = {
			redirectToStart: false
		};
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
		this.props.addRound(tourneyId, tourneyParticipants);
		this.props.closeTournament(tourneyId);
		this.setState({
			redirectToStart: true
		});
	};

	render() {
		const { _id, title, type, hostedBy, schedule, status, participants } = this.props.tournament.showTournament;
		const { isAuthenticated, user } = this.props.auth;
		const redirectToStart = this.state.redirectToStart;

		return (
			<div>
				{ redirectToStart ? <Redirect to={`/tournaments/${_id}/start`} /> : null }
				{ this.props.tournament.loading ?
					<Spinner color="light" /> :
					<div style={{color: "lightgrey"}}>
						<h1 className="text-center">
							{ title }
						</h1>

						<h1 className="text-center" style={{fontSize:'1.2em'}}>Hosted by { hostedBy }</h1>

						<hr style={{backgroundColor:"lightgrey"}} />

						<h4>
							Ruleset: { type }
						</h4>

						<h4>
							<TournamentRules key={_id} type={ type } />
						</h4>

						<br/>

						<h4>
							Begins { moment(schedule).format("dddd, MMMM Do YYYY") }
							<p>{ moment(schedule).format("h:mm a") }</p>
						</h4>
						
						<br />

						<p className="text-center" style={{color: "#56A8CBFF", fontSize: "2em"}}>
							~ { status } for registration ~
						</p>

						<h4 className="text-left mt-5">
							{
								participants && participants.length === 1 ? 
								`${participants && participants.length} Registered Fighter` : 
								`${participants && participants.length} Registered Fighters`
							}
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
					</div>
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

export default connect(mapStateToProps, { showTournament, addParticipant, closeTournament, addRound })(TournamentShow);