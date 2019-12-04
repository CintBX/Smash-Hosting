import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const OpenTournament = props => (
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

export default OpenTournament;