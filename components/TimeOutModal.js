import React, { Component } from 'react';
import { Modal, Header, Button, Loader } from 'semantic-ui-react';
import {Link, Router} from '../routes';

class TimeOutModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Modal open={this.props.timeout} basic size='small'>
          <Header icon='ethereum' content='Account Timeout' />
          <Modal.Content>
            Your account has timed out after being idle for too long. Please re-login your account.
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' inverted attached='bottom' onClick={() => {
              Router.pushRoute('/')}
            }>
              Login Account
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default TimeOutModal;
