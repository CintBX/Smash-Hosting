import React from 'react';
import moment from 'moment';
import { TournamentSignUp, StartTournament } from './resources/buttons';
import { TournamentRules } from './resources/rulesets';
import { Link } from 'react-router-dom';
import MatchGenerator from './MatchGenerator';
import BracketGenerator from './BracketGenerator';
import {
	Media,
	Card,
	CardText,
	CardBody,
	CardTitle,
	Button
} from 'reactstrap';
import DirectoryImage from '../players/DirectoryImage';
import { fullRoster } from '../Characters';
import logo from '../../logo.svg.png';
import noCharSelected from '../../img/noCharWinnerImg.png';

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
				{ status } for registration
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
export const HostUI = ({
		bracket,
		onSetWinner,
		onSetScoreOne,
		onSetScoreTwo,
		winners,
		onSetNextRound,
		onSetPlayersIntoPairs,
		tournament,
		auth
	}) => {
	const players = bracket.players;
	const n = bracket.rounds && bracket.rounds.length
	const round = bracket.rounds[n - 1]; // renders latest round (latest === current)

	const { _id, title, type, schedule, hostedBy, status, participants } = tournament;
	const { isAuthenticated, user } = auth;

	return (
		<div style={{color:"lightgrey"}}>
			<h1 className="text-center">
				{ title }
			</h1>

			<h1 className="text-center" style={{fontSize:'1.2em'}}>Hosted by { hostedBy }</h1>

			<hr style={{backgroundColor:"lightgrey"}} />

			{
				isAuthenticated && user.username === hostedBy ?
				<MatchGenerator
					bracketSize={players && players.length}
					round={round.round}
					matches={round.matches}
					finals={round.finals}
					onSetWinner={onSetWinner}
					onSetScoreOne={onSetScoreOne}
					onSetScoreTwo={onSetScoreTwo}
					winners={winners}
					onSetNextRound={onSetNextRound}
					onSetPlayersIntoPairs={onSetPlayersIntoPairs}
				/>
				: 
				<div style={{color: "lightgrey"}}>
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
						Registration { status }
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
				</div>
			}
		</div>
	);
};

export const BracketWrapper = props => {
	if(props.bracketSize >= 17) {
		return (
			<div className="bracket-position-5">
				{props.children}
			</div>
		);
	} else if(props.bracketSize >= 9) {
		return (
			<div className="bracket-position-4">
				{props.children}
			</div>
		);
	} else {
		return (
			<div className="bracket-position-3">
				{props.children}
			</div>
		);
	};
};

export const StartBracket = ({ tournament, auth }) => {
	const { hostedBy, participants, bracket } = tournament;
	const { isAuthenticated, user } = auth;
	const n = bracket.rounds.length;
	const roundLength = bracket.rounds[n-1].matches.length;
	const bracketLength = participants && participants.length;
  return (
		<div className={
			roundLength === 2 && (isAuthenticated && user.username === hostedBy) ? 
			"bracket-margin"
			: null
		}>
			<BracketWrapper bracketSize={bracketLength}>
				<div className="text-right" style={{color:"lightgrey"}}>
				<h4>{participants && participants.length}-player bracket</h4>
				
				<BracketGenerator
					bracketSize={participants && participants.length}
					players={bracket.players}
					rounds={bracket.rounds}
					scores={bracket.scores}
				/>
				<br /><Link to="/">Back to Tournaments main page</Link>
				</div>
			</BracketWrapper>
		</div>
  );
};


// Status === "Complete"
const WinnerImage = props => {
	if(props.main){
		return fullRoster.map(({ src, name }) => {
			if(name === props.main) {			
				return <img width="100%" src={src} name={name} alt="main character" />
			}
		});
	} else {
		return (
			<div>
				<img width="100%" src={noCharSelected} alt="no character selected" />
				<h3>No Character selected!</h3>
			</div>
		)
	}
};

export const Results = ({ tournament }) => {
	const { _id, title, hostedBy, type, participants, bracket } = tournament;
	const n = bracket.rounds.length;
	let winner;
	let secondPlaceWinner;
	const thirdPlaceWinners = [];

	// 1st place winner
	winner = bracket.champion[0];

	// 2nd place winner
	bracket.rounds[n-1].matches.forEach(player => {
		if(player._id !== winner._id) {
			secondPlaceWinner = player;
		};
	});
	
	// 3rd place winners
	bracket.rounds[n-2].matches.forEach(player => {
		if(player._id !== winner._id && player._id !== secondPlaceWinner._id) {
			thirdPlaceWinners.push(player);
		};
	});

	// if(winner) {
		return (
			<div style={{color:"lightgrey"}}>
				<h1 className="text-center">
					{ title }
				</h1>
	
				<hr style={{backgroundColor:"lightgrey"}} />

				<h4>
					Hosted by { hostedBy }
				</h4>
	
				<h4>
					{ type }
				</h4>
	
				<h4>
					<TournamentRules key={_id} type={ type } />
				</h4>
	
				<br/>
	
				<div>
					<Card
						className="text-center"
						style={{ fontSize:"2.8em", color:"#DA291CFF", backgroundColor:"#56A8CBFF" }}
					>
						<CardBody>
							<CardTitle className="results-font">
								<img src={logo} width="50" height="50" alt="Smash Brothers Logo" />
									<span className="mx-5">1st Place</span>
								<img src={logo} width="50" height="50" alt="Smash Brothers Logo" />
							</CardTitle>
						</CardBody>
						<WinnerImage main={ winner.main } />
						<CardBody>
							<CardText>
								{ winner.username }
							</CardText>
							<Link to={`/player/${winner._id}`} className="remove-underline">
								<Button style={{fontSize:"0.5em"}} block outline color="danger">
									View Profile
								</Button>
							</Link>
						</CardBody>
					</Card>
				</div>
	
				<br/>
	
				<p className="text-center results-font" style={{color: "#56A8CBFF", fontSize: "1.9em"}}>
					2nd Place Winner
				</p>
				<p>
					<Link to={`/player/${secondPlaceWinner._id}`} className="remove-underline">
						<Media className="media-element media-hover">
							<Media left>
								<DirectoryImage key={secondPlaceWinner._id} main={secondPlaceWinner.main} />
							</Media>
							<Media body>
								<Media heading className="ml-3">
									<b>{ secondPlaceWinner.username }</b>
								</Media>
								<i style={{fontSize:"0.9rem"}}>
									{
										secondPlaceWinner.main && secondPlaceWinner.secondary ?
										<Media className="ml-3">{ secondPlaceWinner.main + ", " + secondPlaceWinner.secondary }</Media> :
										<Media className="ml-3">{ secondPlaceWinner.main || secondPlaceWinner.secondary || null }</Media>
									}
									<Media className="ml-3">{ secondPlaceWinner.friendCode }</Media>
								</i>
							</Media>
						</Media>
					</Link>
				</p>
	
	
				<p className="text-center results-font" style={{color: "#56A8CBFF", fontSize: "1.9em"}}>
					3rd Place Semi-Finalists
				</p>
				<p>
					<Link to={`/player/${thirdPlaceWinners[0]._id}`} className="remove-underline">
						<Media className="media-element media-hover">
							<Media left>
								<DirectoryImage key={thirdPlaceWinners[0]._id} main={thirdPlaceWinners[0].main} />
							</Media>
							<Media body>
								<Media heading className="ml-3">
									<b>{ thirdPlaceWinners[0].username }</b>
								</Media>
								<i style={{fontSize:"0.9rem"}}>
									{
										thirdPlaceWinners[0].main && thirdPlaceWinners[0].secondary ?
										<Media className="ml-3">{ thirdPlaceWinners[0].main + ", " + thirdPlaceWinners[0].secondary }</Media> :
										<Media className="ml-3">{ thirdPlaceWinners[0].main || thirdPlaceWinners[0].secondary || null }</Media>
									}
									<Media className="ml-3">{ thirdPlaceWinners[0].friendCode }</Media>
								</i>
							</Media>
						</Media>
					</Link>
				</p>
	
				<p>
					<Link to={`/player/${thirdPlaceWinners[1]._id}`} className="remove-underline">
						<Media className="media-element media-hover">
							<Media left>
								<DirectoryImage key={thirdPlaceWinners[1]._id} main={thirdPlaceWinners[1].main} />
							</Media>
							<Media body>
								<Media heading className="ml-3">
									<b>{ thirdPlaceWinners[1].username }</b>
								</Media>
								<i style={{fontSize:"0.9rem"}}>
									{
										thirdPlaceWinners[1].main && thirdPlaceWinners[1].secondary ?
										<Media className="ml-3">{ thirdPlaceWinners[1].main + ", " + thirdPlaceWinners[1].secondary }</Media> :
										<Media className="ml-3">{ thirdPlaceWinners[1].main || thirdPlaceWinners[1].secondary || null }</Media>
									}
									<Media className="ml-3">{ thirdPlaceWinners[1].friendCode }</Media>
								</i>
							</Media>
						</Media>
					</Link>
				</p>
	
				<br />

				<div
					className="text-right"
					style={{color:"lightgrey"}}
				>
					<BracketWrapper bracketSize={participants && participants.length}>
					<h2>{participants && participants.length}-player bracket</h2>
	
						<BracketGenerator
							bracketSize={participants && participants.length}
							rounds={bracket.rounds}
							players={bracket.players}
							scores={bracket.scores}
						/>
					</BracketWrapper>
					<br /><Link to="/">Back to Tournaments main page</Link>
				</div>
			</div>
		);
	// }
};