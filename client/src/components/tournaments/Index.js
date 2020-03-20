import React, { Component, Fragment } from 'react';
import { Jumbotron, 
	Button, 
	Spinner,
	UncontrolledPopover, 
	PopoverHeader, 
	PopoverBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTournaments, deleteTournament } from '../../actions/tournamentActions';
import TournamentDescription from './descriptions';

// Buttons
function SignUp() {
	return (
		<Fragment>
			<Link to="#">
				<Button className="mt-4" color="primary" block onClick={() => console.log("Hello there")}>Sign up</Button>
			</Link>
		</Fragment>
	);
};

function InProgress() {
	return (
		<Fragment>
			<Spinner className="mt-3 mr-2" color="danger" />In progress...
		</Fragment>
	);
};

function ResultsPopover() {
	return (
		<Fragment>
			<Button 
				id="results" 
				type="button" 
				color="success"
				className="mt-3"
			>
				Results
			</Button>
			<UncontrolledPopover trigger="focus" placement="bottom" target="results">
				<PopoverBody><b>Finals: </b> Cin <i>(Samus)</i> vs Vagalume <i>(Pit)</i></PopoverBody>
				<PopoverHeader><b>WINNER: </b> Cin</PopoverHeader>
			</UncontrolledPopover>
		</Fragment>
	);
};

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

	render() {
		const { tournaments } = this.props.tournament;
		const { isAuthenticated, user } = this.props.auth;

		return tournaments.map(({ _id, title, hostedBy, description, status, participants }) => {
			return (
				<Jumbotron>
					<h1 className="mb-5 text-center">
						{ title }
						<p style={{fontSize: '0.6em'}} className="text-muted">Hosted by: { hostedBy }</p>
					</h1>

					<h4>
						<TournamentDescription key={_id} title={title} />
					</h4>

					<hr className="my-2"/>

					{ status === "Open" ? <SignUp /> : null }
					{ status === "Closed" ? <InProgress /> : null }
					{ status === "Complete" ? <ResultsPopover /> : null }
					
					{/*Link To Tournament Show Page*/}
					<Button color="success" block className="mt-2">View Bracket</Button>

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