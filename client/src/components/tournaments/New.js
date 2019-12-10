import React, { Component } from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Button,
	Label,
	Input,
	InputGroup,
	InputGroupAddon
} from 'reactstrap';
import { connect } from 'react-redux';
import { addTournament } from '../../actions/tournamentActions';
import uuid from 'uuid';

class NewTournament extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			modal: false,
			title: '',
			// description: '',
			// hostedBy: '',
			// status: ''
		};
	};

	toggle() {
		this.setState({
			modal: !this.state.modal
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

		this.props.addTournament(newTournament);

		this.toggle();
	}

	render() {
		return (
			<div>
				<Button 
					outline
					color="danger"
					className="mb-3"
					onClick={this.toggle}
				>
					Host a Tourney
				</Button>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Create a New Tournament</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="title">Tournament</Label>
{/*								<Input 
									type="text"
									name="title" 
									id="tournament"
									onChange={this.onChange}
								/>*/}
								<Input
									type="select"
									name="select"
									id="tournament"
									onChange={this.onChange}
								>
									<option>Choose From Below</option>
									<option>Single Elim</option>
									<option>Double Elim</option>
									<option>Round Robin</option>
									<option>Standard Rules</option>
									<option></option>
								</Input>
							</FormGroup>

							<InputGroup>
								<InputGroupAddon addonType="prepend">$</InputGroupAddon>
								<Input type="text" name="text" id="fee" placeholder="Entrance fee" />
							</InputGroup>

							<br/>
							
							<Button block color="dark">Create Tournament</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	tournament: state.tournament
});

export default connect(mapStateToProps, { addTournament })(NewTournament)