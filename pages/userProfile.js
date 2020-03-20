import React, { Component } from 'react';
import { Button, Card, Segment, Container, List, Transition, Popup, Modal,
         Header, Icon, Divider, Form, Input, Message } from "semantic-ui-react";
import AccountIssueModal from '../components/AccountIssueModal';
import web3 from '../ethereum/web3'
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import credentials from '../ethereum/credentials';
import EthQuestionToken from '../ethereum/token';
import EthQuestionTokenSale from '../ethereum/tokenSale'
import Profile from '../ethereum/profile';
import { Router } from '../routes';
import { checkRewardField, logging } from '../utils/functions'
import cookies from 'next-cookies';

class userProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      login: false,
      loading: true,
      accountType: null,
      account: null,
      token: null,
      emailAddress: null,
      points: null,
      transactions: [],
      topUpModalOpen: false,
      topUp: false,
      topUpAmount: '',
      error: false,
      errorMessage: '',
      tokenPrice: '',
      exchanging: false
    };
  }

  static async getInitialProps(props) {
    return { isLogin: cookies(props).login || '' , account: cookies(props).wallet || '' };
  }

  async componentDidMount() {
    if (typeof web3 === 'undefined') {
      this.setState({ loading: false })
      return
    }
    let login = false;
    if (this.props.isLogin) {
      login = true;
      // Get profile data
      const account = this.props.account;
      const profileAddress = await factory.methods.getProfile(account).call();
      const profile = Profile(profileAddress);
      const emailAddress = await credentials.methods.getBinding(account).call();
      const token = (await EthQuestionToken.methods.balanceOf(account).call()*1e-4).toFixed(4);
      const etherBalance = await web3.eth.getBalance(account);
      const points = await profile.methods.getPoints().call();
      const transactions = await profile.methods.getTransactions().call();
      const tokenPrice = await EthQuestionTokenSale.methods.getTokenPrice().call();

      // Get Account Type
      let accountType = await profile.methods.getAccountType().call();
      accountType == 0 ? accountType = "Admin" : accountType = "User"
      this.setState({ accountType: accountType,
                      account: account,
                      token: token,
                      etherBalance: etherBalance,
                      emailAddress: emailAddress,
                      points: points,
                      transactions: transactions,
                      login: true,
                      tokenPrice: tokenPrice });
    }
    this.setState( { loading: false });
  }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  topUp = async () => {
    this.setState({ toppingUp: true, errorMessage: ''});
    if(checkRewardField(this.state.topUpAmount)) {
      try {
          const account = this.state.account;
          const profileAddress = await factory.methods.getProfile(account).call();
          let logTransaction = logging("Top Up: " + this.state.topUpAmount + " EQT(s)");
          await EthQuestionTokenSale.methods
          .buyTokens(this.state.topUpAmount*1e4, EthQuestionToken._address, profileAddress, logTransaction)
          .send({
              from: account,
              value: this.state.topUpAmount*1e4 * this.state.tokenPrice,
              gasPrice: '0'

          });
          Router.pushRoute('/home'); // Automatic redirect the user.
      } catch (err) {
          this.setState({ errorMessage: err.message });
          this.setState({ error: true})
          this.setState({ toppingUp: false });
      }
    } else {
      this.setState({ errorMessage: "Required Field(s) Empty or Invalid Input" });
      this.setState({ error: true});
      this.setState({ toppingUp: false });
    }
  }

  exchange = async () => {
    this.setState({ exchanging: true, errorMessage: ''});
    try {
      const account = this.state.account;
      const profileAddress = await factory.methods.getProfile(account).call();
      let logTransaction = logging("Exchange: 100 Points for 5 EQT(s)");
      await EthQuestionTokenSale.methods
      .exchangeTokens(EthQuestionToken._address, profileAddress, logTransaction)
      .send({
          from: account,
          gasPrice: '0'
      });
      Router.pushRoute('/home'); // Automatic redirect the user.
    } catch (err) {
      this.setState({ errorMessage: err.message + " Insufficient Points"});
      this.setState({ error: true})
      this.setState({ exchanging: false });
    }
  }

  renderTransactions() {
    const transactions = this.state.transactions;
    return transactions.map((transaction, index) => {
      return(
        <List.Item key={index}>
          <List.Icon name="calendar outline" size='large' verticalAlign='middle'/>
          <List.Content>
            {transaction}
          </List.Content>
        </List.Item>
      );
    })
  }

  render() {
    if (this.state.login) {
      return(
        <Layout accountType={this.state.accountType} page={"Profile"}>
          <Divider hidden/>
          <Container>
            <Card color = "red" centered fluid>
              <Card.Content>
                <Header as='h1' textAlign='center'>
                  <Icon name='user' circular/>
                </Header>
                <Card.Header textAlign='center'>
                  Account Details:
                  <div style={{color: "red", fontSize: "small", wordWrap: "break-word" }}>{this.state.account}</div>
                </Card.Header>
                <Card.Meta textAlign='center'>
                  <b>{this.state.accountType}</b>
                </Card.Meta>
                <Card.Description textAlign='center'>
                  <b>EQT Balance:</b> {this.state.token}
                  <Popup
                    trigger={
                      <Button
                        icon="ethereum"
                        onClick={ () => {this.setState({ topUpModalOpen: true, topUpAmount: '', error: false, errorMessage: '' })} }
                        floated="right"
                        size="mini"
                        color="green"
                      />
                    }
                    content={"Top Up EQT(s)"}
                    inverted/>
                </Card.Description>
                <Card.Description textAlign='center'>
                  <b>Ether Balance:</b> {this.state.etherBalance}
                </Card.Description>
                <Card.Description textAlign='center'>
                  <b>Points Accumulated:</b> {this.state.points}
                </Card.Description>
                <Card.Description textAlign='center'>
                  <b>Valid Email Address:</b> {this.state.emailAddress}
                </Card.Description>
              </Card.Content>
            </Card>
          </Container>
          <Divider hidden/>
          <Container>
            <Segment textAlign="center">
              <b style={{fontSize:"20px"}}>Transaction History</b>
              <Popup
                trigger={
                  <Button
                    icon={this.state.visible ? "minus" : "plus"}
                    onClick={this.toggleVisibility}
                    floated="right"
                    size="mini"
                  />
                }
                content={"Click to expand/close"}
                inverted/>
            </Segment>
            <Transition visible={this.state.visible} animation='scale' duration={500}>
              <List divided size="huge">
                {this.renderTransactions()}
              </List>
            </Transition>

            <Modal open={this.state.topUpModalOpen} size='small'>
            <Header icon='ethereum' content='Topping Up EQT(s)' />
            <Modal.Content>
              <Form error={!!this.state.errorMessage} style={{ marginTop: '10px' }}>
                <Form.Field required={true}>
                    <label>Top Up Amount (1 EQT = {this.state.tokenPrice*1e-18} Ether)</label>
                    <Input
                        label="EQT(s)"
                        labelPosition="right"
                        placeholder='Enter EQT Value'
                        value={this.state.topUpAmount}
                        onChange={event => this.setState({ topUpAmount: event.target.value })}
                    />
                </Form.Field>
              </Form>
              <Message error header="Oops!" content={this.state.errorMessage} hidden={!this.state.error}/>
            </Modal.Content>
            <Modal.Actions>
              <Button color='red' onClick={ () => {this.setState({ topUpModalOpen: false })} }>
                <Icon name='remove' /> Cancel

              </Button>
              <Button color='green' onClick={this.topUp} loading={this.state.toppingUp}>
                <Icon name='checkmark' /> Top Up
              </Button>
              <Button color='green' onClick={this.exchange} loading={this.state.exchanging}>
                <Icon name='exchange' /> Exchange With Points
              </Button>
            </Modal.Actions>
          </Modal>
          </Container>
        </Layout>
      );
    } else {
      return (
        <Layout accountType={this.state.accountType}>
          <AccountIssueModal loading={this.state.loading} login={this.state.login} />
        </Layout>
      );
    }
  }
}

export default userProfile;
