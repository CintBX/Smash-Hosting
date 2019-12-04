import React, { Component } from 'react';
import {
	Form,
	FormGroup,
	Button,
	Label,
	Input,
	Collapse,
	Card,
	CardHeader,
	CardBody,
	CardDeck
} from 'reactstrap';

export default class NewTournament extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
			<div>
				<h1 className="mb-5">Create a New Tournament</h1>
				<Form>
					<FormGroup>
						<Label for="title">Tournament</Label>
						<Input type="select" name="select" id="title">
							<option>Choose From Below</option>
							<option>Single Elim</option>
							<option>Double Elim</option>
							<option>Round Robin</option>
							<option>Standard Rules</option>
						</Input>
					</FormGroup>

					<FormGroup>
						<Label for="fee">Entrance Fee</Label>
						<Input type="text" name="text" id="fee" placeholder="This feature will be added later" />
					</FormGroup>

					<FormGroup>
						<Button 
							outline
							color="info"
							onClick={this.toggle} 
							style={{ marginBottom:'1rem' }}
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

					<Button block color="dark">Create Tournament</Button>
				</Form>
			</div>
		)
	}
};