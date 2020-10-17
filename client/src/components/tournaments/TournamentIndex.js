import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InProgress, ResultsPopover } from './buttons';
import { getTournaments, deleteTournament } from '../../actions/tournamentActions';
import TournamentDescription from './descriptions';
import DeleteModal from '../delete/DeleteModal';

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

		return tournaments.map(({ _id, title, type, hostedBy, status }) => {
			return (
				<Jumbotron key={_id} className={type.toLowerCase().replace(/\s+/g, '')}>
					<h1 className="mb-5 text-center">
						{ title }
						<p style={{fontSize: '0.6em'}} className="text-muted">Hosted by: { hostedBy }</p>
					</h1>

					<h4>
						<TournamentDescription key={_id} type={type} />
					</h4>

					<hr className="my-4"/>

					{
						isAuthenticated && user.username === hostedBy ?
							<Fragment>
								<DeleteModal 
									page={"Tournament Index"} 
									title={"Delete Tournament"} 
									onClick={() => this.onDelete(_id)} 
								/>
							</Fragment> 
						:
						null
					}
					
					<Link 
						to={ status === "Open" ? `/tournaments/${_id}` : `/tournaments/${_id}/start` } 
						className="remove-underline"
					>
						<Button color="secondary" outline block className="mt-2">
							<b className="enter-btn">Enter</b>
						</Button>
					</Link>
					
					{ status === "Closed" ? <InProgress /> : null }
					{ status === "Complete" ? <ResultsPopover /> : null }
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