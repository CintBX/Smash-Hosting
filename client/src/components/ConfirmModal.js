import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BsFillTrashFill } from 'react-icons/bs';

class ConfirmModal extends Component {
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
          this.props.page === "Player Profile" ? 
          // <BsFillTrashFill className="delete-icon" color="yellow" size="0.5em" onClick={this.toggle} /> :
          <Button
            outline
            color="warning"
            onClick={this.toggle}
          >
            Delete Account
          </Button> :
          null 
        }
        {
          this.props.page === "Player Directory" ?
          <BsFillTrashFill
            className="delete-icon"
            color="yellow"
            size="1.2em"
            onClick={this.toggle} 
          /> :
          null
        }
        {
          this.props.page === "Tournament Index" ?
          <Button
            outline
            color="warning"
            className="mb-3 mr-2 edit-delete float-right"
            onClick={this.toggle}
          >
            Delete Tournament
          </Button> :
          null
        }
        {
          this.props.page === "Match Card" ?
          <Button
            color="danger"
            onClick={this.toggle}
            disabled={this.props.disabled}
            // !this.props.disabled ? disabled : null
          >
            Set Winner
          </Button> :
          null
        }

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>
            {this.props.title}
          </ModalHeader>

          <ModalBody>
            {this.props.body}
          </ModalBody>

          <ModalFooter>
            <div className="float-center" onClick={this.toggle}>
              <Button className="ml-3" color="secondary">Cancel</Button>
              <Button className="ml-3" color="primary" onClick={this.props.onClick}>Confirm</Button>
            </div>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  };
};

export default ConfirmModal;