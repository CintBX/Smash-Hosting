import React, { Component } from 'react';
import { Jumbotron, Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import ResultsPopover from './ResultsPopover';

export const OpenTournament = props => (
	<div>
		<Jumbotron>
			<h1 className="mb-5 text-center">
				{ props.tournament.title }
				<p style={{fontSize: '0.6em'}} className="text-muted">Hosted by: { props.tournament.hostedBy }</p>
			</h1>
			<h3>Open for Registration</h3>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<p className="mt-5">
				<Link to={`/tournament/${props.tournament.id}`}>
					<Button color="primary" block>Sign up</Button>
				</Link>
			</p><br/>
		</Jumbotron>
	</div>
);


export const ClosedTournament = props => (
	<div>
		<Jumbotron>
			<h1 className="mb-5 text-center">
				{ props.tournament.title }
				<p style={{fontSize: '0.6em'}} className="text-muted">hosted by: { props.tournament.hostedBy }</p>
			</h1>

			<h3>Registration closed</h3>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<Spinner color="danger"/> In progress...
		</Jumbotron>
	</div>
);


export const CompleteTournament = props => (
	<div>
		<Jumbotron>
			<h1 className="mb-5 text-center">
				{ props.tournament.title }
				<p style={{fontSize: '0.6em'}} className="text-muted">hosted by: { props.tournament.hostedBy }</p>
			</h1>

			<h3>Tournament completed. View results below.</h3>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<ResultsPopover/>	
		</Jumbotron>
	</div>
);