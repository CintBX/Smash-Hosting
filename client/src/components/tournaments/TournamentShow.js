import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentRules from './rulesets';
import {
	showTournament,
	addParticipant,
	closeTournament,
	shuffleParticipants
} from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TournamentSignUp, StartTournament } from './buttons';
import { Button, Spinner } from 'reactstrap';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

const RenderTournament = ({ tournament, auth, onSignUp, onStartTournament }) => {
	const { _id, title, type, schedule, hostedBy, status, participants } = tournament;
	const { isAuthenticated, user } = auth;

	return (
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
						<li key={participant._id} className="text-left" style={{fontSize: "1.1em"}}>
							{participant.username}
						</li>
					))
				}
			</ul>

			{
				isAuthenticated ?
				<div>
					<TournamentSignUp
						participants={participants}
						userId={user._id}
						onClick={() => onSignUp(_id, user)}
					/>
				</div> :
				<Button block disabled>
					Log in to sign up for this tournament
				</Button>
			}

			{
				isAuthenticated && user.username === hostedBy ?
				<div>
					<StartTournament
						participants={participants}
						onClick={() => onStartTournament(_id, participants)}
					/>
				</div> :
				null
			}
		</div>
	)
}

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
		this.props.shuffleParticipants(tourneyId, tourneyParticipants);
		this.props.closeTournament(tourneyId);
		this.setState({
			redirectToStart: true
		});
	};

	render() {
		const redirectToStart = this.state.redirectToStart;
		if(redirectToStart) {
			return <Redirect to={`/tournaments/${this.props.tournament.showTournament._id}/start`} />
		}

		const loading = this.props.tournament.loading || !this.props.tournament.showTournament;
		if(loading) {
			return <Spinner color="light" /> 
		} else {
			return (
				<RenderTournament
					tournament={this.props.tournament.showTournament}
					auth={this.props.auth}
					onSignUp={this.onSignUp}
					onStartTournament={this.onStartTournament}
				/>
			);
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