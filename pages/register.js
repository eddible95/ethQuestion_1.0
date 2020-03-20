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
    resetting: false,
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
          let account = await web3.eth.accounts.create();
          let hashedPassword = passwordHash.generate(this.state.password);
          account = await web3.eth.personal.importRawKey(account['privateKey'].slice(2), this.state.password)
          await web3.eth.personal.unlockAccount(account, this.state.password, 3600);
          let logTransaction = logging("Credited 10 EQT(s) for first time User");
          await EthQuestionTokenSale.methods
          await factory.methods
          .createProfile(credentials._address, this.state.emailAddress, hashedPassword,
            EthQuestionToken._address, EthQuestionTokenSale._address, logTransaction)
          .send({
              from: account,
              gasPrice: "0"
          });
          document.cookie = `wallet=${account}; path=/`;
        }
        document.cookie = `login=${true}; path=/`;
        Router.pushRoute(`/home`); // Automatic redirect the user.
      } else {
        this.setState({ errorMessage: "Invalid Email Address or Email Address Already In Used" });
        this.setState({ loading: false });
      }
    } catch (err) {
      this.setState({ errorMessage: err.message + " If you have rejected second transaction, please click on reset account. Thereafter, redo the registration." });
      this.setState({ loading: false });
    }
  }

  onReset = async () => {
    this.setState({ resetting: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      let validEmail = validate(this.state.emailAddress);
      let emailNotExist = await credentials.methods.emailNotExist(this.state.emailAddress).call();
      let ethWalletNotRegistered = await credentials.methods.ethWalletNotRegistered(accounts[0]).call();
      if (validEmail && emailNotExist && ethWalletNotRegistered) {
        // Delete Existing Mapping
        await factory.methods
        .deleteProfile(credentials._address, this.state.emailAddress)
        .send({
            from: accounts[0]
        });
        this.setState({ resetting: false });
      }
    } catch (err) {
      this.setState({ errorMessage: err.message + " Please redo the resetting of account." });
      this.setState({ resetting: false });
    }
  }

  renderForm() {
    return(
      <Form error={!!this.state.errorMessage}>
        <Segment raised textAlign={"center"}>
          A wallet will be created and linked to the NTU Email provided. The password will be used for unlocking of your
          wallet for transactions and accessing of the system.
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
              Please confirm the MetaMask transaction for creation of Profile and Registering of Email Address.
              Upon confirming the requests, please hold on while the system completes the registration process...
            </p>
            <Loader active inline="centered">
              Registering Your Email
            </Loader>
          </Modal.Content>
        </Modal>
        <Modal open={this.state.resetting} trigger={<Button primary onClick={this.onReset}>Reset</Button>} basic size='small'>
          <Header content='Resetting Account' />
          <Modal.Content>
            <p>
              Please confirm the MetaMask transaction for resetting of account registration.
              Upon confirming the requests, please hold on while the system completes the resetting process...
            </p>
            <Loader active inline="centered">
              Resetting Account Registration
            </Loader>
          </Modal.Content>
        </Modal>
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
