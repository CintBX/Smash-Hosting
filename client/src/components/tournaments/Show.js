import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TournamentDescription from './descriptions';
import { showTournament } from '../../actions/tournamentActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TournamentShow extends Component {
	// state = {
	// 	tournament: {
	// 		_id: '',
	// 		title: '',
	// 		hostedBy: '',
	// 		status: '',
	// 		participants: []
	// 	}
	// };

	// componentDidUpdate(prevProps) {
	// 	if(!shallowEqual(this.props.tournament, prevProps.tournament)) {
	// 		this.props.showTournament(this.state.tournament._id);

	// 		this.setState({
	// 			_id: this.props.tournament._id,
	// 			title: this.props.tournament.title,
	// 			hostedBy: this.props.tournament.hostedBy,
	// 			status: this.props.tournament.status,
	// 			participants: this.props.tournament.participants
	// 		});
	// 	}
	// };

	static propTypes = {
		// showTournament: PropTypes.func.isRequired,
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	render() {
		const { _id, title, hostedBy, status, participants } = this.props.tournament.selectTournament;

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