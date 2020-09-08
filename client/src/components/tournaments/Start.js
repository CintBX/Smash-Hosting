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
import playerBracket from '../../img/playerBracket.png';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class StartTournamentModal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false,
    };
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        {
          this.props.participants.length >= 8 ? 
          <Button
            color="danger"
            block
            onClick={this.toggle}
            style={{ marginBottom: '1rem' }}
          >
            Start Tournament
          </Button>
          :
          <Button 
            className="confirm-btn"
            color="dark" 
            block 
            disabled 
            style={{ marginBottom: '1rem' }}
          >
            You need at least 8 fighters to start
          </Button>
        }

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Single Elim Bracket</ModalHeader>
          <ModalBody className="bracket">
            <img width="100%" src={ playerBracket } alt="default" />
            <div className="bracket-entry">
              <p>Player One</p>
              <p>Player Two</p>
              <p>Player Three</p>
              <p>Player Four</p>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  };
};

export default StartTournamentModal;