import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SignUp from './buttons/SignUp';
import InProgress from './buttons/InProgress';
import Results from './buttons/Results';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTournaments, deleteTournament } from '../../actions/tournamentActions';


class TournamentIndex extends Component {
	componentDidMount() {
		this.props.getTournaments();
	};

	static propTypes = {
		getTournaments: PropTypes.func.isRequired,
		tournament: PropTypes.object.isRequired
	};

	onDelete(id) {
		this.props.deleteTournament(id);
	};

	render() {
		const { tournaments } = this.props.tournament;

		return tournaments.map(({ _id, title, hostedBy, description, status }) => {
			return (
				<Jumbotron>
					<h1 className="mb-5 text-center">
						{ title }
						<p style={{fontSize: '0.6em'}} className="text-muted">Hosted by: { hostedBy }</p>
					</h1>

					<h4>{ description }</h4>
					<hr className="my-2"/>

					{ status === "Open" ? <SignUp /> : null }
					{ status === "Closed" ? <InProgress /> : null }
					{ status === "Complete" ? <Results /> : null }
					
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
					</span>
				</Jumbotron>
			);
		});
	};
};

const mapStateToProps = state => ({
	tournament: state.tournament
});

export default connect(mapStateToProps, { getTournaments, deleteTournament })(TournamentIndex);