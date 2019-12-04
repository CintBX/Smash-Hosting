import React, { Component } from 'react';
import {
	Card, 
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button
} from 'reactstrap';


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
						<Button outline color="danger">Host a Tourney!</Button>
					</CardBody>
				</Card>
			</div>
		)
	}
};

{/*
<div>
	<img src="https://via.placeholder.com/300x250" className="mb-3" alt="Character" />
	<p>username</p>
	<p>main / secondary</p>
	<p>friendCode</p>
	<p>Host a Tourney!</p>
</div>
*/}


{/*
<div>
	<Card>
		<CardImg top width="100%" src="https://via.placeholder.com/300x250" alt="Character" />
		<CardBody>
			<CardTitle>Username</CardTitle>
			<CardSubtitle>Main / Secondary</CardSubtitle>
			<CardText>Friend Code</CardText>
			<Button>Host a Tourney!</Button>
		</CardBody>
	</Card>
</div>
*/}