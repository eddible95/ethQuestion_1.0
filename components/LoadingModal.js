import React, { Component } from 'react';
import { Modal, Header, Button, Loader } from 'semantic-ui-react';
import {Link, Router} from '../routes';

class ErrorModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Modal open={this.props.trigger} basic size='small'>
          <Header content={this.props.title} />
          <Modal.Content>
            <p>
              {this.props.content}
            </p>
            <Loader active inline="centered">
              {this.props.loader}
            </Loader>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ErrorModal;
