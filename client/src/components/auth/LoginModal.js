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
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class LoginModal extends Component {
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
		login: PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired
	};

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props;
		if(error !== prevProps.error) {
			// Check for login error
			if(error.id === 'LOGIN_FAIL') {
				this.setState({ msg: error.msg.msg });
			} else {
				this.setState({ msg: null });
			};
		};

		// Upon Login, close modal
		if(this.state.modal) {
			if(isAuthenticated) {
				this.toggle();
			};
		};
	};

	toggle() {
		// Clear errors before Open/close modal
		this.props.clearErrors();

		// Open/close modal
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit(e) {
		e.preventDefault();

		const { username, password } = this.state;

		const user = {
			username,
			password
		};

		this.props.login(user);
	}

	render() {
		return (
			<div>
				<NavLink onClick={this.toggle} href="#">
					Login
				</NavLink>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle} className="text-center">Login</ModalHeader>

					<ModalBody>
						{ this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert> : null }

						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Input
									type="text"
									name="username"
									id="username"
									className="mb-3"
									placeholder="Username"
									autofocus="autofocus"
									onChange={this.onChange}
								/>

								<Input
									type="password"
									name="password"
									id="password"
									className="mb-3"
									placeholder="Password"
									onChange={this.onChange}
								/>

								<Button color="primary" style={{marginTop:'2rem'}} block>
									Login
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

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);