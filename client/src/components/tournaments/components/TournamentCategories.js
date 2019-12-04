import React, { Component } from 'react';
import { Jumbotron, Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import ResultsPopover from './ResultsPopover';

export const OpenTournament = props => (
	<div>
		<h1 className="mb-5 text-center">Open Tournaments</h1>
		<Jumbotron>
			<h3>{ props.tournament.title }</h3>
			<p style={{fontSize: '0.9em'}} className="text-muted">hosted by: { props.tournament.hostedBy }</p>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<p className="lead">
				<Link to={`/tournament/${props.tournament.id}`}>
					<Button color="primary">Sign up</Button>
				</Link>
			</p><br/>
		</Jumbotron>
	</div>
);


export const ClosedTournament = props => (
	<div>
		<Jumbotron>
			<h1 className="mb-5 text-center">Closed Tournaments</h1>

			<h3>{ props.tournament.title }</h3>
			<p style={{fontSize: '0.9em'}} className="text-muted">hosted by: { props.tournament.hostedBy }</p>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<p className="lead">
				<Spinner color="danger"/> In progress...
			</p>
		</Jumbotron>
	</div>
);


export const CompleteTournament = props => (
	<div>
		<Jumbotron>
			<h1 className="mb-5 text-center">Completed Tournaments</h1>

			<h3>{ props.tournament.title }</h3>
			<p style={{fontSize: '0.9em'}} className="text-muted">hosted by: { props.tournament.hostedBy }</p>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<p className="lead">
				<ResultsPopover/>	
			</p>
		</Jumbotron>
	</div>
);