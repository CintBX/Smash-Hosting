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
			title: '',
			type: '',
			scheduledDay: '',
			scheduledTime: ''
		};
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		user: PropTypes.object,
		addTournament: PropTypes.func.isRequired,
	};

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	};

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit(e) {
		e.preventDefault();

		const newTournament = {
			title: this.state.title,
			type: this.state.type,
			scheduledDay: this.state.scheduledDay,
			scheduledTime: this.state.scheduledTime,
			hostedBy: this.props.user.username
		};

		this.props.addTournament(newTournament);

		this.toggle();

		this.setState({
			title: '',
			type: '',
			scheduledDay: '',
			scheduledTime: ''
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

				<Modal isOpen={this.state.modal} toggle={this.toggle} autoFocus={false}>
					<ModalHeader toggle={this.toggle}>Create a New Tournament</ModalHeader>
					<ModalBody>
						<Form onSubmit={ this.state.title !== "Choose from below" ? this.onSubmit : null}>
							<FormGroup>
								<Label for="title">Name your Tournament</Label>
								<Input
									type="text"
									name="title"
									id="title"
									className="mb-4"
									onChange={this.onChange}
									autoFocus
								/>
							</FormGroup>

							<FormGroup>
								<Label for="type">Select a ruleset</Label>
								<Input
									type="select"
									name="type"
									id="type"
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

							<FormGroup>
								<Label for="scheduledDay">Choose a date</Label>
								<Input
									type="date"
									name="scheduledDay"
									id="scheduledDay"
									className="mb-4"
									onChange={this.onChange}
								/>
							</FormGroup>

							<FormGroup>
							<Label for="scheduledTime">Choose a time</Label>
								<Input
									type="time"
									name="scheduledTime"
									id="scheduledTime"
									className="mb-4"
									onChange={this.onChange}
								/>
							</FormGroup>
							
							<br/>
							{
								this.state.title === "" ||
								this.state.type === "" ||
								this.state.scheduledDay === "" ||
								this.state.scheduledTime === ""
									?
								<Button className="text-center" block color="danger" disabled>All fields are required</Button>
									:
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
	user: state.auth.user,
});

export default connect(mapStateToProps, { addTournament })(NewTournament);