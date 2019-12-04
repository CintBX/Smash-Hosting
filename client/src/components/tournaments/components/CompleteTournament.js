import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import ResultsPopover from './ResultsPopover';

const CompleteTournament = props => (
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

export default CompleteTournament;