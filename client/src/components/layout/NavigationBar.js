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
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../auth/LoginModal';
import Logout from '../auth/Logout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	};

	static propTypes = {
		auth: PropTypes.object.isRequired
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<Fragment>
				<NavItem>
					<Logout />
				</NavItem>
			</Fragment>
		);

		const guestLinks = (
			<Fragment>
				<NavItem>
					<RegisterModal />
				</NavItem>
				<NavItem>
					<LoginModal />
				</NavItem>
			</Fragment>
		);

		return (
			<div>
				<Navbar color="primary" dark expand="sm" className="mb-5">
					<Container>
						{
							isAuthenticated ?
							<NavbarBrand href="/profile" style={{fontSize:'28px'}}>
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
									<NavLink href="/roster" className="ml-1">
										Fighters
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink href="/smash-news" className="ml-1">
										Smash News
									</NavLink>
								</NavItem>

								{ isAuthenticated ? authLinks : guestLinks }
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, null)(NavigationBar);