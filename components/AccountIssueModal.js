import React, { Component } from 'react';
import { Modal, Header, Button, Loader } from 'semantic-ui-react';
import {Link, Router} from '../routes';

class AccountIssueModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Modal open={this.props.loading} basic size='small'>
          <Header icon='ethereum' content='Loading Resources' />
          <Modal.Content>
            <Loader active inline="centered">
              Fetching Data From Blockchain
            </Loader>
          </Modal.Content>
        </Modal>
        <Modal open={!this.props.login && !this.props.loading} basic size='small'>
          <Header icon='ethereum' content='Account Issue' />
          <Modal.Content>
            <p>
              You are facing one of the following issues:
            </p>
            <p>
              (1) Banned from accessing the platform.
            </p>
            <p>
              (2) Currently not registered to access the platform. Please have your account registered.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' inverted attached='bottom' onClick={() => {
              Router.pushRoute('/')}
            }>
              Register For Account
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AccountIssueModal;
