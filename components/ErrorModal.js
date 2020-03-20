import React, { Component } from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';
import {Link, Router} from '../routes';

class ErrorModal extends Component {
  constructor(props) {
    super(props);
  }

  changeState = () => {
    this.props.stateChange();
  }

  render() {
    return (
      <React.Fragment>
      <Modal open={this.props.error} basic size='small'>
        <Header icon='ethereum' content={this.props.title} />
        <Modal.Content>
          <p>
            {this.props.content}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted attached='bottom' onClick={() => {
            Router.pushRoute(`/questions/${this.props.questionAddress}`)
            this.changeState();}
          }>
            Go Back
          </Button>
        </Modal.Actions>
      </Modal>
      </React.Fragment>
    );
  }
}

export default ErrorModal;
