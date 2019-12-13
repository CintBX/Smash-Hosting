import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
	NavLink,
	Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			modal: false,
			username: '',
			password: '',
			msg: null
		};
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		register: PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired
	};

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props;

		if(error !== prevProps.error) {
			// Check for Register Error
			if(error.id === 'REGISTER_FAIL') {
				this.setState({ msg: error.msg.msg });
			} else {
				this.setState({ msg: null });
			};
		};

		// If Authenticated, close modal
		if(this.state.modal) {
			if(isAuthenticated) {
				this.toggle();
			};
		};
	};

	toggle() {
		// Clear errors before open/close modal
		this.props.clearErrors();

		// Open/close modal
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit(e) {
		e.preventDefault();
		const { username, password } = this.state;

		// Create a User object
		const newUser = {
			username,
			password
		};

		// Attempt to register
		this.props.register(newUser);
	}

	render() {
		return (
			<div>
				<NavLink onClick={this.toggle} href="#">
					Register
				</NavLink>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Register</ModalHeader>
					<ModalBody>
						{ this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert> : null }
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input
									type="text"
									name="username"
									id="username"
									placeholder="Your Smash Ultimate online username"
									className="mb-3"
									onChange={this.onChange}
								/>

								<Label for="username">Password</Label>
								<Input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									className="mb-3"
									onChange={this.onChange}
								/>

								<Button color="primary" style={{marginTop: '2rem'}} block>
									Register
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);