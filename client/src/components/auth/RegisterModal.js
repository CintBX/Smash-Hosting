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
import NumberFormat from 'react-number-format';
import { fullRoster } from '../Characters';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
			passwordConfirmation: '',
			friendCode: '',
			main: '',
			secondary: '',
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
		const { username, password, passwordConfirmation, friendCode, main, secondary } = this.state;

		// Create a User object
		const newUser = {
			username,
			password,
			passwordConfirmation,
			friendCode,
			main,
			secondary
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
					<ModalHeader toggle={this.toggle}>Create Your Account</ModalHeader>
					<ModalBody>
						{ this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert> : null }
						<Form onSubmit={this.onSubmit}>
							<Label>Required Fields</Label>
							<FormGroup>
								<Input
									type="text"
									name="username"
									id="username"
									className="mb-3"
									placeholder="Username (case-sensitive)"
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
								
								<Input
									type="password"
									name="passwordConfirmation"
									id="passwordConfirmation"
									className="mb-3"
									placeholder="Password Confirmation"
									onChange={this.onChange}
								/><br />

								<Label>Optional</Label>

								<NumberFormat 
									type="text"
									name="friendCode"
									id="friendCode"
									className="mb-3 form-control"
									placeholder="Switch friend code"
									onChange={this.onChange}
									format="#### #### ####"
								/>

								<Autocomplete
									id="main"
									options={fullRoster}
									getOptionLabel={option => option.name}
									style={{ width: '100%' }}
									className="mb-3"
									renderInput={params => (
										<TextField 
											{...params} 
											id="main" 
											name="main" 
											label="Select Main Character" 
											variant="outlined" 
											fullWidth
											onSelect={this.onChange}
											value={this.state.main}
										/>
									)}
								/>

								<Autocomplete
									id="secondary"
									options={fullRoster}
									getOptionLabel={option => option.name}
									style={{ width: '100%' }}
									className="mb-3"
									autoComplete
									renderInput={params => (
										<TextField 
											{...params} 
											id="secondary" 
											name="secondary" 
											label="Select Secondary" 
											variant="outlined" 
											fullWidth
											onSelect={this.onChange}
											value={this.state.secondary}
										/>
									)}
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