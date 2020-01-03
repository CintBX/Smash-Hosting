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
		tournament: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	onDelete(id) {
		this.props.deleteTournament(id);
	};

	render() {
		const { tournaments } = this.props.tournament;
		const { isAuthenticated, user } = this.props.auth;

		return tournaments.map(({ _id, title, hostedBy, description, status }) => {
			return (
				<Jumbotron>
					<h1 className="mb-5 text-center">
						{ title }
						<p style={{fontSize: '0.6em'}} className="text-muted">Hosted by: { hostedBy }</p>
					</h1>

					<h4>
						{ 
							title === 'Single Elimination' ?
							"Winners advance to the next round while losers are eliminated, until only one fighter remains." :
							null
						}
						{ 
							title === 'Double Elimination' ?
							"Winners remain and advance in the Winners Bracket. Losers are placed in the Losers Bracket and compete against anyone who loses a match in the Winners Bracket, at corresponding rounds." :
							null
						}
						{ 
							title === 'Round Robin' ?
							"Each player fights every other player until all possible matches are played. The player with the most wins is the Champion." :
							null
						}
						{ 
							title === 'Pools' ?
							"Players are placed into Pools, each Pool having its own Round Robin. Pool Winners form a Bracket with either Single or Double Elimination rules (determined by the Host)." :
							null
						}
				 	</h4>
					<hr className="my-2"/>

					{ status === "Open" ? <SignUp /> : null }
					{ status === "Closed" ? <InProgress /> : null }
					{ status === "Complete" ? <Results /> : null }
					
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

export default connect(mapStateToProps, { getTournaments, deleteTournament })(TournamentIndex);