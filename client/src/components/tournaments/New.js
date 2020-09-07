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
	InputGroupAddon,
	Alert
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTournament } from '../../actions/tournamentActions';


class NewTournament extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			modal: false,
			title: ''
		};
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		user: PropTypes.object,
		addTournament: PropTypes.func.isRequired
	};

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	};

	onChange(e) {
		this.setState({
			title: e.target.value
		});
	};

	onSubmit(e) {
		e.preventDefault();

		const newTournament = {
			title: this.state.title,
			hostedBy: this.props.user.username
		};

		this.props.addTournament(newTournament);

		this.toggle();

		this.setState({
			title: ""
		});
	};

	render() {
		return (
			<div>
				{
					this.props.isAuthenticated ?
					<Button 
						outline
						block
						color="danger"
						style={{marginBottom: '1rem'}}
						onClick={this.toggle}
					>
						<b>Host a Tournament</b>
					</Button> :
					<Alert color="dark" className="text-center">Log in to host a Tournament</Alert>
				}

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Create a New Tournament</ModalHeader>
					<ModalBody>
						<Form onSubmit={ this.state.title !== "Choose from below" ? this.onSubmit : null}>
							<FormGroup>
								<Label for="title">Select a ruleset</Label>
								<Input
									type="select"
									name="title"
									id="title"
									className="mb-4"
									onChange={this.onChange}
								>
									<option value=""></option>
									<option>Single Elimination</option>
									<option>Double Elimination</option>
									<option>Round Robin</option>
									<option>Pools</option>
								</Input>
							</FormGroup>

							{/* <InputGroup>
								<InputGroupAddon addonType="prepend">$</InputGroupAddon>
								<Input type="text" name="text" id="fee" placeholder="Entrance fee" />
							</InputGroup> */}

							{/* <br/> */}
							
							{ 
								this.state.title === "" ? 
								<Button block color="dark" disabled>Create Tournament</Button> :
								<Button block color="primary">Create Tournament</Button>
							}
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	tournament: state.tournament,
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
});

export default connect(mapStateToProps, { addTournament })(NewTournament);