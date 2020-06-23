import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InProgress, ResultsPopover } from './buttons';
import { getTournaments, showTournament, deleteTournament } from '../../actions/tournamentActions';
import TournamentDescription from './descriptions';

class TournamentIndex extends Component {
	componentDidMount() {
		this.props.getTournaments();
	};

	static propTypes = {
		getTournaments: PropTypes.func.isRequired,
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	onDelete(id) {
		this.props.deleteTournament(id);
		alert("Delete this tournament?");
	};

	onShowTournament(id) {
		this.props.showTournament(id);
	};

	render() {
		const { tournaments } = this.props.tournament;
		const { isAuthenticated, user } = this.props.auth;

		return tournaments.map(({ _id, title, hostedBy, status, participants }) => {
			return (
				<Jumbotron key={_id} className={title.toLowerCase().replace(/\s+/g, '')}>
					<h1 className="mb-5 text-center">
						{ title }
						<p style={{fontSize: '0.6em'}} className="text-muted">Hosted by: { hostedBy }</p>
					</h1>

					<h4>
						<TournamentDescription key={_id} title={title} />
					</h4>

					<hr className="my-4"/>

					{/* Status Buttons */}
					{ status === "Closed" ? <InProgress /> : null }
					{ status === "Complete" ? <ResultsPopover /> : null }
					
					<Link to={ `/tournaments/${_id}` }>
						<Button color="success" block className="mt-2" onClick={this.onShowTournament.bind(this, _id)}>Click to Enter</Button>
					</Link>

					{/* Edit/Delete */}
					{
						isAuthenticated && user.username === hostedBy ?
						<span className="float-right">
							<Button color="warning" className="mx-1 mt-3">
								Edit
							</Button>
							<Button 
								color="danger" 
								className="mx-1 mt-3"
								onClick={this.onDelete.bind(this, _id)}
							>
								Delete
							</Button>
						</span> :
						null
					}
				</Jumbotron>
			);
		});
	};
};

const mapStateToProps = state => ({
	tournament: state.tournament,
	auth: state.auth
});

export default connect(mapStateToProps, { getTournaments, showTournament, deleteTournament })(TournamentIndex);