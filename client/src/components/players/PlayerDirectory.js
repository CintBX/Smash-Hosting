import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Media } from 'reactstrap';
import { getPlayers, showPlayer } from '../../actions/playerActions';
import { Link } from 'react-router-dom';

class PlayerDirectory extends Component {
	componentDidMount() {
		this.props.getPlayers();
	};

	static propTypes = {
		getPlayers: PropTypes.func.isRequired,
		player: PropTypes.object.isRequired,
		showPlayer: PropTypes.func
	};

	onShowPlayer(userId) {
		this.props.showPlayer(userId);
	}

	render() {
		const { players } = this.props.player;

		return players.map(({ _id, username, main, secondary, friendCode }) => {
			return (
				<div>
					<Link to={`/player/${_id}`}>
						<Media className="media-element" onClick={this.onShowPlayer.bind(this, _id)}>
								<Media left href="#">
									<Media object src="https://via.placeholder.com/50x50" />
								</Media>
								<Media body>
									<Media heading className="ml-2">
										<b>{ username }</b>
									</Media>
									<i style={{fontSize:"0.9rem"}}>
										<Media className="ml-2">{ main } / { secondary } </Media>
										<Media className="ml-2">{ friendCode }</Media>
									</i>
								</Media>
						</Media><br/>
					</Link>
				</div>
			)
		})
	}
};

const mapStateToProps = state => ({
	player: state.player
});

export default connect(mapStateToProps, { getPlayers, showPlayer })(PlayerDirectory);