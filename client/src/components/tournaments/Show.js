import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentDescription from './descriptions';
import uuid from 'uuid';

// export const TournamentShow = props => {
// 	return (
// 		<div>
// 			<h1>{ props.title }</h1>
// 			<h3><TournamentDescription key={props._id} title={props.title} /></h3>
// 			<p>status: { props.status }</p>
// 			<p>Registered Fighters:
// 					{ 
// 						props.participants.forEach(participant => {
// 							return <p>{participant}</p>
// 						})
// 					}
// 			</p>
// 			<p>Hosted by: { props.hostedBy }</p>

// 			<Link to="/">Tournaments Main Page</Link>
// 		</div>
// 	)
// }

export default class TournamentShow extends Component {
	state = {
		tournament: {
			_id: "",
			title: "", 
			hostedBy: "",
			status: "",
			participants: [],
		}
	};

	componentDidMount() {
		this.setState({
			_id: this.props._id,
			title: this.props.title,
			hostedBy: this.props.hostedBy,
			status: this.props.status,
			participants: this.props.participants,
		})
	};

	render() {
		const { _id, title, hostedBy, status, participants } = this.state.tournament;

		return (
			<div>
				<h1>{ title }</h1>
				<h3> <TournamentDescription key={_id} title={ title } /> </h3>
				<p>status: { status }</p>

				<p>Registered Fighters:
					{
						participants.map((participant, index) => {
							return (
								<ul key={ index }>
									<li>{ participant }</li>
								</ul>
							)
						})
					}
				</p>

				<p>Hosted by: { hostedBy }</p>

				<Link to="/">Back to Tournaments main page</Link>
			</div>
		)
	}
};