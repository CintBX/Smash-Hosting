import React, { Component } from 'react';
import {
	Card, 
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button
} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class ProfileSidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		}
	}

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
					</CardBody>
				</Card>
			</div>
		)
	}
};