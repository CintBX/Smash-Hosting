import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPlayer } from '../../actions/playerActions';
import { deleteAccount } from '../../actions/authActions';
import moment from 'moment';
import DeleteModal from '../delete/DeleteModal';
import { Spinner } from 'reactstrap';

class PlayerProfile extends Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.showPlayer(id);
	};

	static propTypes = {
		player: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

	onDelete(id) {
		this.props.deleteAccount(id);
	}

	render() {
		const { 
			username, 
			main, 
			secondary, 
			friendCode, 
			date, 
			tournamentsPlayed, 
			tournamentWins, 
			matchWins 
		} = this.props.player.showPlayer;

		const { isAuthenticated, user } = this.props.auth;

		return (
			<div>
				{ this.props.player.loading ?
					<Spinner color="light" /> :
					<div className="text-center mb-5" style={{color: "#56A8CBFF"}}>
						<h1>{ username }</h1><hr />

						<h4>
							Plays: { main && secondary ? main + ", " + secondary : main || secondary || "No characters selected" }
						</h4>
						<h5>Code: {friendCode}</h5>
						<h5>Member since {moment(date).format("dddd, MMMM Do YYYY")}</h5>
						
						<br/><br/>
						<span>
							<h2>History</h2>
							<h5>Tounaments Participated in: {tournamentsPlayed}</h5>
							<h5>Tournaments won: {tournamentWins}</h5>
							<h5>Matches won: {matchWins}</h5><br />
						</span>

						{
							isAuthenticated && user.username === username ?
							<DeleteModal 
								page={"Player Profile"} 
								title={"Delete your account"} 
								onClick={() => this.onDelete(user._id)} 
							/> :
							null
						}
					</div>
				}
			</div>
		)
	}
};

const mapStateToProps = state => ({
	auth: state.auth,
	player: state.player
});

export default connect(mapStateToProps, { showPlayer, deleteAccount })(PlayerProfile);