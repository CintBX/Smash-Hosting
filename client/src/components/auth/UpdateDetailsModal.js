import React, { Component, Fragment } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
  FormGroup,
  Label
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserDetails } from '../../actions/authActions';
import { fullRoster } from '../Characters';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NumberFormat from 'react-number-format';


class UpdateDetailsModal extends Component {
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
      friendCode: ''
		};
	};

	static propTypes = {
		user: PropTypes.object.isRequired,
		updateUserDetails: PropTypes.func.isRequired
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
    user.friendCode = this.state.friendCode;

		this.props.updateUserDetails(user);
		this.toggle();
	};

	render() {
		return (
			<Fragment>
				<Button 
          outline
          block
					color="info"
					style={{marginBottom: '1rem'}}
					onClick={this.toggle}
				>
					<b>Update Details</b>
				</Button>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Player Details</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
                <Label>Fill in the fields you wish to update</Label>

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

                <NumberFormat 
									type="text"
									name="friendCode"
									id="friendCode"
									className="mb-3 form-control"
									placeholder="Switch friend code"
									onChange={this.onChange}
									format="#### #### ####"
								/>
							</FormGroup>

							<Button color="primary" style={{marginTop:'2rem'}} block>
								Update
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</Fragment>
		);
	};
};

const mapStateToProps = state => ({
	user: state.auth.user
});

export default connect(mapStateToProps, { updateUserDetails })(UpdateDetailsModal);