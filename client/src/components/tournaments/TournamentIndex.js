import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InProgress, ResultsPopover } from './resources/buttons';
import { getTournaments, deleteTournament } from '../../actions/tournamentActions';
import ConfirmModal from '../ConfirmModal';
import moment from 'moment';

class TournamentIndex extends Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
	};

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

		return tournaments.map(({ _id, title, description, type, hostedBy, schedule, status, bracket }) => {
			return (
				<Jumbotron key={_id} className={type.toLowerCase().replace(/\s+/g, '')}>
					<h1 className="mb-4 text-center">
						{ title }
					</h1>

					<h3>
						{ description }
					</h3>

					<hr className="my-4"/>

					<h5>
						Ruleset: { type }
					</h5>

					<h5>
						On { moment(schedule).format("dddd, MMMM Do YYYY") }
					</h5>

					<h5 className="mb-4">
						{ moment(schedule).format("h:mm a") }
					</h5>

					{
						isAuthenticated && user.username === hostedBy ?
							<Fragment>
								<ConfirmModal 
									page={"Tournament Index"}
									title={"Delete Tournament"}
									body={"Are you sure?"}
									onClick={() => this.onDelete(_id)}
								/>

								<Link to={`/tournaments/edit/${_id}`} className="remove-underline">
									<Button color="info" outline className="mb-3 mr-2 edit-delete float-right">
										Edit Details
									</Button>
								</Link>
							</Fragment>
						: null
					}
					
					<Link 
						to={ `/tournaments/${_id}` } 
						className="remove-underline"
					>
						<Button color="secondary" outline block className="mt-2">
							<b className="enter-btn">Enter</b>
						</Button>
					</Link>
					
					{ status === "Closed" ? <InProgress /> : null }
					{ status === "Complete" ? <ResultsPopover bracket={bracket} /> : null }
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