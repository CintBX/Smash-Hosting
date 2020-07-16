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
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTournament } from '../../actions/tournamentActions';


class UpdateTournamentModal extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
      modal: false,
      title: ''
		};
	};

	static propTypes = {
    updateTournament: PropTypes.func.isRequired
	};

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	};

	onChange(e) {
		this.setState({
			title: e.target.value
		});
	};

	onSubmit(e) {    
    e.preventDefault();

    const tournamentId = this.props.id;
    const tournamentTitle = this.state.title;

    this.props.updateTournament(tournamentId, tournamentTitle);

		this.toggle();
		this.setState({ title: "" })
	};

	render() {
		return (
			<div>
				<Button
          outline
          color="info"
          className="mb-3 mr-2 edit-delete float-right"
          onClick={this.toggle}
        >
          Change Ruleset
        </Button>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Change Ruleset</ModalHeader>
					<ModalBody>
						<Form onSubmit={ this.state.title !== "" ? this.onSubmit : null}>
							<FormGroup>
								<Label for="title">Select the new ruleset</Label>
								<Input
									type="select"
									name="title"
									id="title"
									className="mb-4"
									onChange={this.onChange}
									autofocus="autofocus"
								>
									<option value=""></option>
									<option>Single Elimination</option>
									<option>Double Elimination</option>
									<option>Round Robin</option>
									<option>Pools</option>
								</Input>
							</FormGroup>
							
							{ 
								this.state.title === "" ? 
								<Button block color="dark" disabled>Continue</Button> :
								<Button block color="primary">Continue</Button>
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
  auth: state.auth
});

export default connect(mapStateToProps, { updateTournament })(UpdateTournamentModal);