import React, { Component } from 'react';
import {
	Card, 
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
	FormGroup,
	Collapse,
	CardDeck,
	CardHeader
} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class ProfileSidebar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			user: [],
			isOpen: false
		};
	};

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<div>
				<Card className="mb-4" style={{border:'none'}}>
					<CardImg top width="100%" src="https://via.placeholder.com/300x250" alt="Character" />
					<CardBody>
						<CardTitle style={{fontSize: '1.5rem'}}>Username</CardTitle>
						<CardText>Main / Secondary</CardText>
						<CardText>Friend Code</CardText>
						<Link to="/tournament-new">
							<Button outline color="danger">
								Host a Tourney
							</Button>
						</Link>

						<FormGroup>
							<Button 
								outline
								color="info"
								onClick={this.toggle} 
								style={{ marginBottom:'1rem', marginTop:'1rem' }}
							>
								View Rulesets
							</Button>
							<Collapse isOpen={this.state.isOpen}>
								<CardDeck>
									<Card>
										<CardHeader>Single Elimination</CardHeader>
										<CardBody>Single Elim rules here please</CardBody>
									</Card>

									<Card>
										<CardHeader>Double Elimination</CardHeader>
										<CardBody>Dub Elim rules here please</CardBody>
									</Card>

									<Card>
										<CardHeader>Round Robin</CardHeader>
										<CardBody>Round Robin rules here please</CardBody>
									</Card>

									<Card>
										<CardHeader>Standard Rules</CardHeader>
										<CardBody>Single Elim rules here please</CardBody>
									</Card>
								</CardDeck>
							</Collapse>
						</FormGroup>
					</CardBody>
				</Card>
			</div>
		);
	};
};