import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPlayer } from '../../actions/playerActions';
import moment from 'moment';
import { Jumbotron, Button } from 'reactstrap';

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
		const { isAuthenticated, user } = this.props.auth;

		return (
			<Jumbotron className="profile">
				<h1 className="text-center">{username}</h1><hr />

				<h5>
					Plays: { main && secondary ? main + ", " + secondary : main || secondary || "Unselected" }
				</h5>
				<h5>Code: {friendCode}</h5>
				<h5>Joined: {moment(date).format("dddd, MMMM Do YYYY")}</h5>
				
				<br/>

				<h4 className="mt-3">Tounaments Participated in: {tournamentsPlayed}</h4>
				<h5>Tournaments won: {tournamentWins}</h5>
				<h5>Matches won: {matchWins}</h5>

				{
					isAuthenticated && user.username === username ?
					<div><br/><Button color="warning">Edit Details</Button></div> :
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

export default connect(mapStateToProps, { showPlayer })(PlayerProfile);