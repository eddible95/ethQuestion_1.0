import React, { Component } from 'react';
import { Button, Form, Container, Divider, Input,
   Segment, Message, Icon, Modal, Header, Loader } from 'semantic-ui-react'
import LoginLayout from '../components/LoginLayout';
import web3 from '../ethereum/web3';
import Profile from '../ethereum/profile';
import factory from '../ethereum/factory';
import EthQuestionToken from '../ethereum/token';
import EthQuestionTokenSale from '../ethereum/tokenSale';
import credentials from '../ethereum/credentials';
import { Router } from '../routes';
import { validate, logging } from '../utils/functions';
var passwordHash = require('password-hash');

class RegisterPage extends Component {

  state = {
    emailAddress:'',
    password:'',
    loading: false,
    showKeys: false,
    errorMessage:''
  };

  async componentDidMount() {
    // Delete any existing Cookies
    document.cookie = `login=${false}; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    document.cookie = `wallet=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  };

  onSubmit = async () => {
    this.setState({ loading: true, errorMessage: '' });
    // Check for valid NTU Student Email Address, Existence of Email Address and EthWallet
    try {
      let validEmail = validate(this.state.emailAddress);
      let emailNotExist = await credentials.methods.emailNotExist(this.state.emailAddress).call();
      if (validEmail && !emailNotExist) {
        if(this.state.emailAddress === "admin") {
          const accounts = await web3.eth.getAccounts();
          let hashedPassword = passwordHash.generate(this.state.password);
          await factory.methods
          // Create Admin
          .createAdmin(credentials._address, this.state.emailAddress, hashedPassword)
          .send({
              from: accounts[0],
              gasPrice: "0"
          });
          document.cookie = `wallet=${accounts[0]}; path=/`;
        } else {
          // Create a new Profile
          let wallet = await web3.eth.accounts.create();
          let hashedPassword = passwordHash.generate(this.state.password);
          await web3.eth.personal.importRawKey(wallet['privateKey'].slice(2), this.state.password);
          await web3.eth.personal.unlockAccount(wallet['address'], this.state.password, 3600);
          let logTransaction = logging("Credited 10 EQT(s) for first time User");
          await EthQuestionTokenSale.methods
          await factory.methods
          .createProfile(credentials._address, this.state.emailAddress, hashedPassword,
            EthQuestionToken._address, EthQuestionTokenSale._address, logTransaction)
          .send({
              from: wallet['address'],
              gasPrice: "0"
          });
          document.cookie = `wallet=${wallet['address']}; path=/`;
          this.setState({ publicKey: wallet['address'], privateKey: wallet['privateKey'] })
        }
        document.cookie = `login=${true}; path=/`;
        this.setState({ loading: false, showKeys: true });
      } else {
        this.setState({ errorMessage: "Invalid Email Address or Email Address Already In Used" });
        this.setState({ loading: false });
      }
    } catch (err) {
      this.setState({ errorMessage: err.message });
      this.setState({ loading: false });
    }
  }

  renderForm() {
    return(
      <Form error={!!this.state.errorMessage}>
        <Segment raised textAlign={"center"}>
          This will create a password-protected account using your NTU email address and have it linked to cryptocurrency wallet created
          by the system.
        </Segment>
        <Form.Field>
          <label>NTU Student Email Address</label>
          <Input
              placeholder='example@e.ntu.edu.sg'
              value={this.state.emailAddress}
              onChange={event => this.setState({ emailAddress: event.target.value})}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={event => this.setState({ password: event.target.value})}
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Modal open={this.state.loading} trigger={<Button primary onClick={this.onSubmit}>Register</Button>} basic size='small'>
          <Header content='Registering Your Email Address' />
          <Modal.Content>
            <p>
              Creating of password-protected account. Please wait...
            </p>
            <Loader active inline="centered">
              Registering Your Email
            </Loader>
          </Modal.Content>
        </Modal>
        <Modal open={this.state.showKeys} basic size='small'>
          <Header content='Wallet Information' />
          <Modal.Content>
            WARNING: Never reveal your private key to anyone. These keys will be required for future access to
            your wallet, please have it recorded down.
            <p>Public Key: {this.state.publicKey}</p>
            <p>Private Key: {this.state.privateKey}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={ () => Router.pushRoute(`/home`) }>
              <Icon name='checkmark' /> Okay
            </Button>
          </Modal.Actions>
        </Modal>
        <Button primary onClick={() => Router.pushRoute(`/`)}>Go Back</Button>
      </Form>
    );
  }

  render() {
    return(
      <LoginLayout>
          <Container style={{height:"100vh"}}>
              {this.renderForm()}
          </Container>
      </LoginLayout>
    );
  }
}

export default RegisterPage;
