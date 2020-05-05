import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentDescription from './descriptions';
import { showTournament } from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TournamentShow extends Component {
	static propTypes = {
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	render() {
		const { _id, title, hostedBy, status, participants } = this.props.tournament.showTournament;

		return (
			<div>
				<h1>{ title }</h1>
				<h3> <TournamentDescription key={_id} title={ title } /> </h3>
				<p>status: { status }</p>

				<p>Registered Fighters:
					{/* {
						participants.map((participant, index) => {
							return (
								<ul key={ index }>
									<li>{ participant }</li>
								</ul>
							)
						})
					} */}
				</p>

				<p>Hosted by: { hostedBy }</p>

				<Link to="#">Sign Up</Link><br/>
				<Link to="/">Back to Tournaments main page</Link>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	tournament: state.tournament,
	auth: state.auth
});

export default connect(mapStateToProps, { showTournament })(TournamentShow);