import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { showPlayer } from '../../actions/playerActions';

class PlayerProfile extends Component {
	// componentDidMount() {
	// 	this.props.showPlayer(this.props.auth.user._id);
	// }
	
	// static propTypes = {
	// 	showPlayer: PropTypes.func.isRequired,
	// 	player: PropTypes.object.isRequired
	// };

	render() {
		// const { showPlayer } = this.props.player;

		return (
			<div>
				<h1 className="text-center">User Profile Page</h1>
					
				<h2>Username: </h2>
				<h3>Main: </h3>
				<h3>Secondary: </h3>
				<h4>Friend Code: </h4>
				<h5>Edit Details</h5>
				<p>Member Since: </p>
				<br/>

				<h2>Tournament History</h2>
				<p>Tounaments Won: </p>
				<p>Matches won: </p>
				<p>Matches lost: </p>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	auth: state.auth,
	// showPlayer: state.player.showPlayer
});

export default connect(mapStateToProps, null)(PlayerProfile);