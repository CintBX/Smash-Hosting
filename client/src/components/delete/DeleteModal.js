import React, { Component, Fragment } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

export default class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <Fragment>
        <Button color={this.props.color} onClick={this.toggle}>
          Delete Modal
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>
            {this.props.object}
          </ModalHeader>

          <ModalBody>
            Are you sure?
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="primary" onClick={this.props.onClick}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  };
};