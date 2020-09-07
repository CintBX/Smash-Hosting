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
import { StartTournament } from './buttons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StartTournamentModal extends Component {
  constructor(props) {
    super(props);
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
        <StartTournament 
          participants={participants} 
          onClick={this.toggle}
        />

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
          <ModalBody>
            Bracket goes here
          </ModalBody>
        </Modal>
      </div>
    );
  };
};

export default StartTournamentModal;