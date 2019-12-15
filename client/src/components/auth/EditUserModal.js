import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editUser } from '../../actions/authActions';

class EditUserModal extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			modal: false,
			main: '',
			secondary: '',
			friendCode: ''
		};
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		user: PropTypes.object
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

		const { main, secondary, friendCode } = this.state;

		const user = {
			main,
			secondary,
			friendCode
		};

		// this.props.editUser(user);
	};

	render() {
		const { isAuthenticated } = this.props;
		return (
			<div>
				<Button 
					outline
					color="warning"
					className="mb-3"
					onClick={this.toggle}
				>
					<b>Add or Change Details</b>
				</Button>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Player Details</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="main">Main Character</Label>
								<Input
									type="text"
									name="main"
									id="main"
									placeholder="Your favorite fighter"
									className="mb-3"
									onChange={this.onChange}
								/>

								<Label for="secondary">Secondary Character</Label>
								<Input
									type="text"
									name="secondary"
									id="secondary"
									placeholder="Your tournament counter-pick (usually your 2nd-favorite)"
									className="mb-3"
									onChange={this.onChange}
								/>

								<Label for="friendCode">Friend Code</Label>
								<Input
									type="text"
									name="friendCode"
									id="friendCode"
									placeholder="12-digit Switch code: ####-####-####"
									className="mb-3"
									onChange={this.onChange}
								/>
							</FormGroup>

							<Button color="primary" style={{marginTop:'2rem'}} block>
								Update Profile
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
})

export default connect(mapStateToProps, null)(EditUserModal);