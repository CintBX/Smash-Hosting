import React, { Component, Fragment } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { BsFillTrashFill } from 'react-icons/bs';

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
        {
          this.props.type === "Profile" ?
          <Button color="warning" onClick={this.toggle}>
            Delete Account
          </Button> :
          <BsFillTrashFill className="delete-icon" color="black" size="1.2em" onClick={this.toggle} />
        }

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>
            {this.props.title}
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