import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

export default class TournamentShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tournament: {
				id: uuid(),
				status: "Open",
				title: "Single Elimination", 
				description: "Single Elim tournament rules go in this space.", 
				entrants: ["Cin", "Vagalume", "Sille", "GucciRob", "Apollo", "Ian"],
				hostedBy: "Apollo",
			}
		}
	}

	render() {
		const { id, status, title, description, entrants, hostedBy } = this.state.tournament;
		return(
			<div>
				<h1>{ title }</h1>
				<h3>{ description }</h3>
				<p>status: { status }</p>
				<p>Registered Fighters:
					<ul>
						<li>{ entrants[0] }</li>
						<li>{ entrants[1] }</li>
						<li>{ entrants[2] }</li>
						<li>{ entrants[3] }</li>
						<li>{ entrants[4] }</li>
						<li>{ entrants[5] }</li>
						<li>{ entrants[6] }</li>
						<li>{ entrants[7] }</li>
					</ul>
				</p>
				<p>Hosted by: { hostedBy }</p>

				<Link to="/">Back to Tournaments main page</Link>
			</div>
		)
	}
};