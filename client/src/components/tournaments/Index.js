import React, { Component, Fragment } from 'react';
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

	onDelete(id) {
		this.props.deleteItem(id);
	};

	render() {
		const { tournaments } = this.props.tournament

		return tournaments.map(tournament => {
			return (
				<Jumbotron>
					<h1 className="mb-5 text-center">
						{ tournament.title }
						<p style={{fontSize: '0.6em'}} className="text-muted">Hosted by: { tournament.hostedBy }</p>
					</h1>

					<h4>{ tournament.description }</h4>
					<hr className="my-2"/>

					{ tournament.status == "Open" ? <SignUp /> : null }
					{ tournament.status == "Closed" ? <InProgress /> : null }
					{ tournament.status == "Complete" ? <Results /> : null }
					
					<span className="float-right">
						<Button color="warning" className="mx-1 mt-3">
							Edit
						</Button>
						<Button 
							color="danger" 
							className="mx-1 mt-3"
						>
							Delete
						</Button>
					</span>
				</Jumbotron>	
			)
		})
	}
};

TournamentIndex.propTypes = {
	getTournaments: PropTypes.func.isRequired,
	tournament: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	tournament: state.tournament
})

export default connect(mapStateToProps, { getTournaments, deleteTournament })(TournamentIndex);