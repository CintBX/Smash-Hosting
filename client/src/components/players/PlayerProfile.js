import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPlayer } from '../../actions/playerActions';
import { deleteAccount } from '../../actions/authActions';
import moment from 'moment';
import { Jumbotron } from 'reactstrap';
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
			<div className="text-center" style={{color: "#56A8CBFF"}}>
				{/* <h1 className="mb-3">{username}</h1> */}

				{
					isAuthenticated && user.username === username ?
					<h1 className="mb-3">
						{ username } 
						<DeleteModal 
						page={"Player Profile"} 
						title={"Delete your account"} 
						onClick={this.onDelete.bind(this, user._id)} 
						/>
					</h1> :
					<h1 className="mb-3">{username}</h1>
				}

				<h4>
					Plays: { main && secondary ? main + ", " + secondary : main || secondary || "No characters selected" }
				</h4>
				<h5>Code: {friendCode}</h5>
				<h5>Member since {moment(date).format("dddd, MMMM Do YYYY")}</h5>
				
				<br/><hr/>

				<h5 className="mt-3">Tounaments Participated in: {tournamentsPlayed}</h5>
				<h5>Tournaments won: {tournamentWins}</h5>
				<h5>Matches won: {matchWins}</h5><br />
			</div>
		)
	}
};

const mapStateToProps = state => ({
	auth: state.auth,
	player: state.player
});

export default connect(mapStateToProps, { showPlayer, deleteAccount })(PlayerProfile);