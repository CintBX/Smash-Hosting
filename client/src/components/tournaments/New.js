import React, { Component } from 'react';
import {
	Form,
	FormGroup,
	Button,
	Label,
	Input,
	InputGroup,
	InputGroupAddon,
	Collapse,
	Card,
	CardHeader,
	CardBody,
	CardDeck
} from 'reactstrap';
import { connect } from 'react-redux';
import { newTournament } from '../../actions/tournamentActions';
import uuid from 'uuid';

class NewTournament extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			isOpen: false,
			title: '',
			description: '',
			hostedBy: '',
			status: ''
		};
	};

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	onChange(e) {
		this.setState({
			title: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault();

		const newTournament = {
			id: uuid(),
			title: this.state.title,
			description: "Testing123 Testing123",
			hostedBy: "TESTUSER",
			status: "Open"
		};

		this.props.newTournament(newTournament);

	}

	render() {
		return (
			<div>
				<h1 className="mb-5">Create a New Tournament</h1>
				<Form onSubmit={this.onSubmit}>
					<FormGroup>
						<Label for="title">Tournament</Label>
						<Input 
							type="select" 
							name="select" 
							id="title" 
							onChange={this.onChange}
						>
							<option>Choose From Below</option>
							<option>Single Elim</option>
							<option>Double Elim</option>
							<option>Round Robin</option>
							<option>Standard Rules</option>
						</Input>
					</FormGroup>

					<InputGroup>
						<InputGroupAddon addonType="prepend">$</InputGroupAddon>
						<Input type="text" name="text" id="fee" placeholder="Entrance fee" />
					</InputGroup>

					<br/>
					
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

const mapStateToProps = state => ({
	tournament: state.tournament
});

export default connect(mapStateToProps, { newTournament })(NewTournament)