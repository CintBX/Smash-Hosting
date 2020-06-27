import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPlayer } from '../../actions/playerActions';
import { deleteAccount } from '../../actions/authActions';
import moment from 'moment';
import { Jumbotron, Button } from 'reactstrap';
import DeleteModal from '../delete/DeleteModal';

class PlayerProfile extends Component {
	static propTypes = {
		player: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired,
		deleteAccount: PropTypes.func.isRequired
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
			<Jumbotron className="profile">
				<h1 className="text-center">{username}</h1><hr />

				<h4>
					Plays: { main && secondary ? main + ", " + secondary : main || secondary || "No characters selected" }
				</h4>
				<h5>Code: {friendCode}</h5>
				<h5>Joined: {moment(date).format("dddd, MMMM Do YYYY")}</h5>
				
				<br/>

				<h5 className="mt-3">Tounaments Participated in: {tournamentsPlayed}</h5>
				<h5>Tournaments won: {tournamentWins}</h5>
				<h5>Matches won: {matchWins}</h5><br />

				{
					isAuthenticated && user.username === username ?
					<DeleteModal color={'warning'} object={"Delete your account"} onClick={this.onDelete.bind(this, user._id)} /> :
					null
				}
			</Jumbotron>
		)
	}
};

const mapStateToProps = state => ({
	auth: state.auth,
	player: state.player
});

export default connect(mapStateToProps, { showPlayer, deleteAccount })(PlayerProfile);