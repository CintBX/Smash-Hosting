import React, { Component } from 'react';
import { Jumbotron, Spinner } from 'reactstrap';

const ClosedTournament = props => (
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

export default ClosedTournament;