import React, { Component } from 'react';
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

export default class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="primary" dark expand="sm" className="mb-5">
					<Container>
						<NavbarBrand href="/profile" style={{fontSize:'28px'}}>
							<img src={logo} width="80" height="80" alt="Smash Brothers Logo" />
							<span className="ml-3">UserName</span>
						</NavbarBrand>
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
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}