import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPlayer } from '../../actions/playerActions';
import moment from 'moment';

class PlayerProfile extends Component {
	static propTypes = {
		player: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired
	};

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
		const { isAuthenticated } = this.props.auth;

		return (
			<div>
				<h2>Player Details</h2><br/>
				<h4>Username: {username}</h4>
				<h4>Main: {main}</h4>
				<h4>Secondary: {secondary}</h4>
				<h4>Friend Code: {friendCode}</h4>
				<h4>Member since: {moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</h4>
				<h5>Edit Details</h5>
				<br/>

				<h2>Tournament History</h2><br/>
				<h4>Tounaments Participated in: {tournamentsPlayed}</h4>
				<h4>Tournaments won: {tournamentWins}</h4>
				<h4>Matches won: {matchWins}</h4>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	auth: state.auth,
	player: state.player
});

export default connect(mapStateToProps, { showPlayer })(PlayerProfile);