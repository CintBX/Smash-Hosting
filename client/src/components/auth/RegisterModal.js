import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	FormText,
	Label,
	Input,
	NavLink,
	Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { fullRoster } from '../Characters';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NumberFormat from 'react-number-format';

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
		const { username, password, friendCode, main, secondary } = this.state;

		// Create a User object
		const newUser = {
			username,
			password,
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
					<ModalHeader toggle={this.toggle} className="text-center">Create Your Account</ModalHeader>
					<ModalBody>
						{ this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert> : null }
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<FormText color="muted" className="mb-3">
									Required Fields
								</FormText>
								<Input
									type="text"
									name="username"
									id="username"
									className="mb-3"
									placeholder="Create Username"
									autofocus="autofocus"
									onChange={this.onChange}
								/>

								<Input
									type="password"
									name="password"
									id="password"
									className="mb-3"
									placeholder="Enter Password"
									onChange={this.onChange}
								/>

								<NumberFormat 
									type="text"
									name="friendCode"
									id="friendCode"
									className="mb-3 form-control"
									placeholder="12-digit Switch Friend code"
									onChange={this.onChange}
									format="#### #### ####"
								/>

								<hr/>

								<FormText color="muted" className="mb-3">
									Optional: Select your characters (You may do this later)
								</FormText>

								<Autocomplete
									id="main"
									name="main"
									options={fullRoster}
									getOptionLabel={option => option.name}
									style={{ width: '100%' }}
									className="mb-3"
									renderInput={params => (
										<TextField 
											{...params} 
											id="main" 
											name="main" 
											label="Main Character" 
											variant="outlined" 
											fullWidth
											onChange={this.onChange}
										/>
									)}
								/>

								<Autocomplete
									id="secondary"
									name="secondary"
									options={fullRoster}
									getOptionLabel={option => option.name}
									style={{ width: '100%' }}
									className="mb-3"
									renderInput={params => (
										<TextField 
											{...params} 
											id="secondary" 
											name="secondary" 
											label="Secondary Character" 
											variant="outlined" 
											fullWidth
											onChange={this.onChange}
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