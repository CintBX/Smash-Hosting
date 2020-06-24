import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCharacter } from '../../actions/authActions';
import { fullRoster } from '../Characters';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


class CharacterModal extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			modal: false,
			id: this.props.user._id,
			main: '',
			secondary: '',
		};
	};

	static propTypes = {
		user: PropTypes.object.isRequired,
		addCharacter: PropTypes.func.isRequired
	};

	toggle() {
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

		const { user } = this.props;
		
		user.main = this.state.main;
		user.secondary = this.state.secondary;

		this.props.addCharacter(user);
		this.toggle();
	};

	render() {
		return (
			<div>
				<Button 
					outline
					color="primary"
					className="mb-3"
					onClick={this.toggle}
				>
					<b>Characters</b>
				</Button>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Player Details</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
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
											label="Main Character" 
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
											label="Secondary Character" 
											variant="outlined" 
											fullWidth
											onSelect={this.onChange}
											value={this.state.secondary}
										/>
									)}
								/>
							</FormGroup>

							<Button color="primary" style={{marginTop:'2rem'}} block>
								Update Characters
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	user: state.auth.user
});

export default connect(mapStateToProps, { addCharacter })(CharacterModal);