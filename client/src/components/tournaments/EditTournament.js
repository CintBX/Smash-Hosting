import React, { Component } from 'react';
import {
  Col,
  Form,
	FormGroup,
	Button,
	Label,
	Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTournament, editTournament, getTournaments } from '../../actions/tournamentActions';
import { Link, Redirect } from 'react-router-dom';

class EditTournament extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			modal: false,
			title: '',
			description: '',
			type: '',
      schedule: '',
      redirectToHome: false
		};
  };
  
  componentDidMount() {
		const id = this.props.match.params.id;
    this.props.showTournament(id);
    if(this.state.redirectToHome) {
      this.setState({ redirectToHome: false });
    };
  };

	static propTypes = {
    showTournament: PropTypes.func.isRequired,
    editTournament: PropTypes.func.isRequired,
    getTournaments: PropTypes.func.isRequired
	};

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit(e) {
    e.preventDefault();
    const { showTournament } = this.props.tournament;

    showTournament.title = this.state.title;
    showTournament.description = this.state.description;
    showTournament.type = this.state.type;
    showTournament.schedule = this.state.schedule;

		this.props.editTournament(showTournament);

		this.setState({
			title: '',
			description: '',
			type: '',
      schedule: '',
      redirectToHome: true
    });
	};

	render() {
    const redirectToHome = this.state.redirectToHome;
		return (
			<div>
        { redirectToHome ? <Redirect to="/" /> : null }
        <Form onSubmit={this.onSubmit} style={{color:"lightgrey"}} className="text-center">
          <h1>Edit Tournament</h1>

          <h3>Fill in any field you wish to change</h3>

          <br />

          <FormGroup row>
            <Label for="title" sm={2}>Title</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                id="title"
                className="mb-4"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="type" sm={2}>Ruleset</Label>
            <Col sm={10}>
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
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={2}>Optional Description</Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="description"
                id="description"
                className="mb-4"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="schedule" sm={2}>Schedule</Label>
            <Col sm={10}>
              <Input
                type="datetime-local"
                name="schedule"
                id="schedule"
                className="mb-4"
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          
          <Button block color="primary">Update Tournament</Button>
        </Form>
        <br /><Link to="/">Back to Tournaments main page</Link>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	tournament: state.tournament
});

export default connect(mapStateToProps, { showTournament, editTournament, getTournaments })(EditTournament);