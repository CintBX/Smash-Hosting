import React from 'react';
import moment from 'moment';
import { TournamentSignUp, StartTournament } from './resources/buttons';
import { TournamentRules } from './resources/rulesets';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

// Status === "Open"
export const SignUpPage = ({ tournament, auth, onSignUp, onStartTournament }) => {
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
						onClick={() => onStartTournament(_id)}
					/>
				</div> :
				null
			}
			<br /><Link to="/">Back to Tournaments main page</Link>
		</div>
	);
};


// Status === "Closed"
export const HostUI = ({ tournament }) => {
	const { players } = tournament.bracket;
	return (
		<div style={{color:"lightgrey"}}>
			<h1>Host UI</h1>
			{
				players && players.map(player => (
					<div>
						{player.username}
					</div>
				))
			}
		</div>
	);
};

export const StartBracket = ({ tournament }) => {
	const { title, hostedBy, participants } = tournament;
  return (
    <div className="text-center" style={{color:"lightgrey", backgroundColor: "#333333"}}>
      <h1>{ title }</h1>
      <h4>By { hostedBy }</h4>
      <h4>{participants && participants.length}-player bracket</h4>
      <br /><Link to="/">Back to Tournaments main page</Link>
    </div>
  );
};


// Status === "Complete"
export const Results = () => {
  return (
    <div style={{color:"lightgrey"}}>
      <h1>Tournament Results</h1>
			<br /><Link to="/">Back to Tournaments main page</Link>
    </div>
  );
};