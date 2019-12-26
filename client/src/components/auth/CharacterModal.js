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
import { addCharacter } from '../../actions/authActions';

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
								<Label for="main">Main Character</Label>
								<Input
									type="text"
									name="main"
									id="main"
									placeholder="Your favorite fighter"
									className="mb-3"
									onChange={this.onChange}
									autofocus="autofocus"
								/>

								<Label for="secondary">Secondary Character</Label>
								<Input
									type="text"
									name="secondary"
									id="secondary"
									placeholder="Your counter-pick or 2nd-favorite"
									className="mb-3"
									onChange={this.onChange}
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