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
import { connect } from 'react-redux';
import { addTournament } from '../../actions/tournamentActions';
import PropTypes from 'prop-types';


class NewTournament extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			modal: false,
			title: '',
			hostedBy: ''
		};
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		user: PropTypes.object.isRequired
	};

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange(e) {
		this.setState({
			title: e.target.value
		});
	};

	onSubmit(e) {
		e.preventDefault();

		// title is set via state (form onChange)
		// hostedBy is set to the current auth state 'user' username
		const newTournament = {
			title: this.state.title,
			hostedBy: this.props.user.username
		};

		this.props.addTournament(newTournament);

		// close modal upon submission
		this.toggle();
	};

	render() {
		return (
			<div>
				{
					this.props.isAuthenticated ?
					<Button 
						outline
						color="danger"
						className="mb-3"
						onClick={this.toggle}
					>
						<b>Host a Tourney</b>
					</Button> :
					<Alert color="dark" className="text-center">Log in to host a Tournament</Alert>
				}

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Create a New Tournament</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="title">Tournament</Label>
								<Input
									type="select"
									name="title"
									id="title"
									onChange={this.onChange}
								>
									<option value="">Choose from below</option>
									<option>Single Elimination</option>
									<option>Double Elimination</option>
									<option>Round Robin</option>
									<option>Pools</option>
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
	tournament: state.tournament,
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
});

export default connect(mapStateToProps, { addTournament })(NewTournament);