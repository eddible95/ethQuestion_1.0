import React, { Component } from 'react';
import { Button, Form, Container, Divider, Input, Embed,
   Segment, Message, Icon, Modal, Header, Loader, Grid } from 'semantic-ui-react'
import LoginLayout from '../components/LoginLayout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import credentials from '../ethereum/credentials';
import { Router } from '../routes';
import { validate } from '../utils/functions';
import cookies from 'next-cookies';
var passwordHash = require('password-hash');

class LoginPage extends Component {

  state = {
    emailAddress:'',
    password:'',
    loading: false,
    errorMessage:''
  };

  async componentDidMount() {
    // Delete any existing Cookies
    document.cookie = `login=${false}; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    document.cookie = `wallet=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  };

  onSubmit = async () => {
    this.setState({ loading: true, errorMessage: '' });
    // Check for valid NTU Student Email Address
    if (validate(this.state.emailAddress)){
      try {
        const _passwordHash = await credentials.methods.getPasswordHash(this.state.emailAddress).call();
        // Authenticate the Email Address and ensure Email Address is not blacklisted
        if (passwordHash.verify(this.state.password, _passwordHash) && !await credentials.methods.emailNotBlackList(this.state.emailAddress).call()){
          const _walletAddress = await credentials.methods.getBinding
          const account = await credentials.methods.getEthWallet(this.state.emailAddress).call();
          await web3.eth.personal.unlockAccount(account, this.state.password, 3600);
          document.cookie = `login=${true}; path=/`;
          document.cookie = `wallet=${account}; path=/`;
          Router.pushRoute(`/home`); // Automatic redirect the user.
        }
        else {
          this.setState({ errorMessage: "Wrong Email Address or Email Address Blacklisted" });
          this.setState({ loading: false });
        }
      } catch (err) {
        this.setState({ errorMessage: err.message });
        this.setState({ loading: false });
      }
    } else {
      this.setState({ errorMessage: "Invalid Email Address" });
      this.setState({ loading: false });
    }
  };

  renderForm() {
    return(
      <Grid textAlign='center' style={{ height: '40%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            <Icon name='ethereum' /> Login to your account
          </Header>
          <Form size='large' error={!!this.state.errorMessage}>
            <Segment stacked>
              <Form.Field>
                <label>NTU Student Email Address</label>
                <Input
                    icon='user'
                    iconPosition='left'
                    placeholder='example@e.ntu.edu.sg'
                    value={this.state.emailAddress}
                    onChange={event => this.setState({ emailAddress: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <Input
                    icon='key'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={this.state.password}
                    onChange={event => this.setState({ password: event.target.value})}
                />
              </Form.Field>
              <Modal open={this.state.loading} trigger={<Button color='blue' fluid size='large' onClick={this.onSubmit}>Login</Button>} basic size='small'>
                <Header icon='ethereum' content='Verifying Your Email Address' />
                <Modal.Content>
                  <Loader active inline="centered">
                    Authenticating Credentials
                  </Loader>
                </Modal.Content>
              </Modal>
              <Message error header="Oops!" content={this.state.errorMessage} />
            </Segment>
          </Form>
          <Message>
            Hi there, first time here? Click here to
            <Modal trigger={<a href="/register"> register</a>} basic size='small'>
              <Header icon='ethereum' content='Please Hang On While We Redirect You' />
              <Modal.Content>
                <Loader active inline="centered">
                  Redirecting to Registration
                </Loader>
              </Modal.Content>
            </Modal>
          </Message>
        </Grid.Column>
    </Grid>
    );
  }

  render() {
    return(
      <LoginLayout>
          <React.Fragment>
            {this.renderForm()}
            <Divider hidden/>
            <Container>
              <Header as='h2' textAlign='center'>
                <Icon name='video' /> Watch Video Guide
              </Header>
              <Embed
                id='pdRTt2QabOg'
                source='youtube'
                aspectRatio='16:9'
              />
            </Container>
          </React.Fragment>
      </LoginLayout>
    );
  }
}

export default LoginPage;
