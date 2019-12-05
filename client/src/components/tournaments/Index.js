import React, { Component } from 'react';
import { Jumbotron, Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import ResultsPopover from './components/ResultsPopover';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTournaments, deleteTournament } from '../../actions/tournamentActions';


// Tournament Jumbotrons
const OpenTournament = props => (
	<div>
		<Jumbotron>
			<h1 className="mb-5 text-center">
				{ props.tournament.title }
				<p style={{fontSize: '0.6em'}} className="text-muted">Hosted by: { props.tournament.hostedBy }</p>
			</h1>
			<h3>Open for Registration</h3>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<p className="mt-5">
				<Link to="#">
					<Button color="primary" block>Sign up</Button>
				</Link>
			</p><br/>
		</Jumbotron>
	</div>
);

const ClosedTournament = props => (
	<div>
		<Jumbotron>
			<h1 className="mb-5 text-center">
				{ props.tournament.title }
				<p style={{fontSize: '0.6em'}} className="text-muted">hosted by: { props.tournament.hostedBy }</p>
			</h1>

			<h3>Registration closed</h3>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<Spinner color="danger" /> In progress...
		</Jumbotron>
	</div>
);

const CompleteTournament = props => (
	<div>
		<Jumbotron>
			<h1 className="mb-5 text-center">
				{ props.tournament.title }
				<p style={{fontSize: '0.6em'}} className="text-muted">hosted by: { props.tournament.hostedBy }</p>
			</h1>

			<h3>Tournament completed. View results below.</h3>
			<hr className="my-2"/>
			<p>{ props.tournament.description }</p>
			<ResultsPopover />
		</Jumbotron>
	</div>
);



// Tournaments Class
class TournamentIndex extends Component {
	// Methods utilizing Jumbotron constants
	openTournaments() {
		const { tournaments } = this.props.tournament;

		return tournaments.map(tournament => {
			if(tournament.status === "Open") {
				return <OpenTournament key={tournament.id} tournament={tournament} />
			};
		});
	};
	closedTournaments() {
		const { tournaments } = this.props.tournament;

		return tournaments.map(tournament => {
			if(tournament.status === "Closed") {
				return <ClosedTournament key={tournament.id} tournament={tournament} />
			};
		});
	};
	completeTournaments() {
		const { tournaments } = this.props.tournament;

		return tournaments.map(tournament => {
			if(tournament.status === "Complete") {
				return <CompleteTournament key={tournament.id} tournament={tournament} />
			}
		})
	}

	// Class Methods
	componentDidMount() {
		this.props.getTournaments();
	};
	render() {
		return (
			<div>
				<h1 className="mb-5 display-4 text-center">Welcome to SmashHosting!</h1>
				<h2 className="mb-3">Open Tournaments</h2>
				{ this.openTournaments() }
				<h2 className="mb-3">Closed Tournaments</h2>
				{ this.closedTournaments() }
				<h2 className="mb-3">Finished Tournaments</h2>
				{ this.completeTournaments() }
			</div>
		)
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