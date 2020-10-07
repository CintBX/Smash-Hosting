import React, { Component, Fragment } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';
import logo from '../../logo.svg.png';
import RegisterModal from '../auth/Register';
import LoginModal from '../auth/Login';
import Logout from '../auth/Logout';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlayers, showPlayer } from '../../actions/playerActions';

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.onShowPlayer = this.onShowPlayer.bind(this);
		this.state = {
			isOpen: false,
		};
	};

	static propTypes = {
		auth: PropTypes.object.isRequired,
		getPlayers: PropTypes.func,
		showPlayer: PropTypes.func
	};

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	closeMenu() {
		this.setState({
			isOpen: false
		});
	};

	onShowPlayer(userId) {
		this.props.getPlayers();
		this.props.showPlayer(userId);
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<Fragment>
				<NavItem className="ml-1" onClick={this.closeMenu}>
					<Logout />
				</NavItem>
			</Fragment>
		);

		const guestLinks = (
			<Fragment>
				<NavItem className="ml-1" onClick={this.closeMenu}>
					<RegisterModal />
				</NavItem>
				<NavItem className="ml-1" onClick={this.closeMenu}>
					<LoginModal />
				</NavItem>
			</Fragment>
		);

		return (
			<div>
				<Navbar fixed="top" dark expand="sm" className="mb-5 nav-styles">
					<Container>
						{
							isAuthenticated ?
							<NavbarBrand onClick={this.onShowPlayer(user._id)} href={`/player/${user._id}`} style={{fontSize:'28px'}}>
								<img src={logo} width="80" height="80" alt="Smash Brothers Logo" />
								<span className="ml-3"><strong>{ user.username }</strong></span>
							</NavbarBrand> :
							<NavbarBrand href="/" style={{fontSize:'28px'}}>
								<img src={logo} width="80" height="80" alt="Smash Brothers Logo" />
								<span className="ml-3"><strong>Smash Hosting</strong></span>
							</NavbarBrand>
						}
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="mr-auto" navbar>
								<NavItem>
									<NavLink href="/" className="ml-1">
										Tournaments
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink href="/players" className="ml-1">
										Player Directory
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink href="/smash-news" className="ml-1">
										Smash News
									</NavLink>
								</NavItem>

								{ 
									isAuthenticated ? 
									authLinks : 
									guestLinks 
								}
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { getPlayers, showPlayer })(NavigationBar);