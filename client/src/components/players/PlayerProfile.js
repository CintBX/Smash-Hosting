import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPlayer } from '../../actions/playerActions';

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
				<h1 className="text-center">User Profile Page</h1>
					
				<h2>Username: {username}</h2>
				<h3>Main: {main}</h3>
				<h3>Secondary: {secondary}</h3>
				<h4>Friend Code: {friendCode}</h4>
				<h4>Member since: {date}</h4>
				<h5>Edit Details</h5>
				<br/>

				<h2>Tournament History</h2>
				<p>Tounaments Participated in: {tournamentsPlayed}</p>
				<p>Tournaments won: {tournamentWins}</p>
				<p>Matches won: {matchWins}</p>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	auth: state.auth,
	player: state.player
});

export default connect(mapStateToProps, { showPlayer })(PlayerProfile);