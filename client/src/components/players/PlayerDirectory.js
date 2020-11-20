import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Media } from 'reactstrap';
import { getPlayers, deleteThisPlayer } from '../../actions/playerActions';
import { Link } from 'react-router-dom';
import DirectoryImage from './DirectoryImage';
import ConfirmModal from '../ConfirmModal';

class PlayerDirectory extends Component {
	constructor(props) {
		super(props);
		this.onDeletePlayer = this.onDeletePlayer.bind(this);
	}
	componentDidMount() {
		this.props.getPlayers();
	};

	static propTypes = {
		getPlayers: PropTypes.func.isRequired,
		player: PropTypes.object.isRequired,
		deleteThisPlayer: PropTypes.func,
		auth: PropTypes.object.isRequired
	};

	onDeletePlayer(userId) {
		this.props.deleteThisPlayer(userId);
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const { players } = this.props.player;

		const alphabeticalOrder = (a, b) => {
			const userA = a.username.toLowerCase();
			const userB = b.username.toLowerCase();

			let comparison = 0;
			if (userA > userB) {
				comparison = 1;
			} else if (userA < userB) {
				comparison = -1;
			}

			return comparison;
		}

		players.sort(alphabeticalOrder);
		
		return (
			<div>
				<h1 style={{color: "lightgrey"}}>
					{ players.length === 1 ? `${players.length} Member` : `${players.length} Members` }
				</h1><br/>
				{
					players.map(({ _id, username, main, secondary, friendCode }) => {
						return (
							<div>
								{
									isAuthenticated && user.role === "admin" ?
									<ConfirmModal
										page={"Player Directory"} 
										title={`Delete ${username}'s account`}
										body={"Are you sure?"}
										onClick={() => this.onDeletePlayer(_id)} 
									/> :
									null
								}
								<Link to={`/player/${_id}`} className="remove-underline">
									<Media className="media-element media-hover">
										<Media left>
											<DirectoryImage key={_id} main={main} />
										</Media>
										<Media body>
											<Media heading className="ml-3">
												<b>{ username }</b>
											</Media>
											<i style={{fontSize:"0.9rem"}}>
												{
													main && secondary ?
													<Media className="ml-3">{ main + ", " + secondary }</Media> :
													<Media className="ml-3">{ main || secondary || null }</Media>
												}
												<Media className="ml-3">{ friendCode }</Media>
											</i>
										</Media>
									</Media>
								</Link>
								<br/>
							</div>
						)
					})
				}
			</div>
		)
	}
};

const mapStateToProps = state => ({
	player: state.player,
	auth: state.auth
});

export default connect(mapStateToProps, { getPlayers, deleteThisPlayer })(PlayerDirectory);