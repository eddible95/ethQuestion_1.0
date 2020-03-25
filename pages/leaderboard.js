import React, { Component } from 'react';
import AccountIssueModal from '../components/AccountIssueModal';
import _ from 'lodash';
import { Segment, Container, Divider, Header, Modal,
  Button, Loader, Icon, Table } from 'semantic-ui-react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import Profile from '../ethereum/profile';
import cookies from 'next-cookies';

class LeaderboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      loading: true,
      accountType: null,
      column: null,
      direction: null,
      leaderboardData: []
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
      // Get Account Type
      let profileAddress = await factory.methods.getProfile(this.props.account).call();
      let profile = Profile(profileAddress);
      let accountType = await profile.methods.getAccountType().call();
      accountType == 0 ? accountType = "Admin" : accountType = "User"

      // Retireve an array of addresses of ethWallets registered
      let ethWallet = await factory.methods.getEthWallets().call();
      let accountPointMapping = [];

      for (let i=0; i<ethWallet.length; i++) {
        profileAddress = await factory.methods.getProfile(ethWallet[i]).call();
        profile = Profile(profileAddress);
        let points = await profile.methods.getPoints().call();
        accountPointMapping.push({
          account: ethWallet[i],
          points: parseInt(points)
        });
      }
      // Set the states required for the Leaderboard and ensure it is descending by default
      this.setState( { leaderboardData: _.sortBy(accountPointMapping, ['points']).reverse() });
      this.setState( { login: login });
      this.setState( { accountType: accountType });
    }
    this.setState( { loading: false });
  }

  // Function to handle the sorting of leaderboard
  handleSort = (clickedColumn) => () => {
    const { column, leaderboardData, direction } = this.state
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        leaderboardData: _.sortBy(leaderboardData, [clickedColumn]),
        direction: 'ascending',
      })
      return
    }
    this.setState({
      leaderboardData: leaderboardData.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  renderLeaderBoard() {
    const { column, data, direction } = this.state
    return (
      <Container>
        <Table basic='very' celled sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>Account</Table.HeaderCell>
              <Table.HeaderCell
                textAlign='center'
                sorted={column === 'points' ? direction : null}
                onClick={this.handleSort('points')}>
              Point(s)
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderUserList()}
          </Table.Body>
        </Table>
      </Container>
    );
  }

  renderUserList() {
    return this.state.leaderboardData.map((item, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell textAlign='center'>
            {item.account}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {item.points}
          </Table.Cell>
        </Table.Row>
      );
    });
  }

  render() {
    if (this.state.login) {
      return (
        <Layout accountType={this.state.accountType} page={'Leaderboard'}>
          <Container>
            <Divider hidden/>
            <Segment raised textAlign='left'>
              <Header as='h2' textAlign='center'>
                <Icon name="chess king"/>Current Leaderboard Standings
              </Header>
            </Segment>
            {this.renderLeaderBoard()}
            <Divider />
            <p style={{fontSize:'20px'}}>
              <Icon name="question"/>How are points awarded?
            </p>
            <Divider />
            <p style={{fontSize:'16px'}}><b>When you ask a question:</b> 5 Points</p>
            <p style={{fontSize:'16px'}}><b>When you are rewarded for your answer:</b> 4 Points</p>
            <p style={{fontSize:'16px'}}><b>When you submit an answer:</b> 2 Points</p>
            <p style={{fontSize:'16px'}}><b>When the answer you approved gets awarded:</b> 2 Points</p>
            <p style={{fontSize:'16px'}}><b>When you approve an answer:</b> 1 Point</p>
            <Divider />
            <p style={{fontSize:'20px'}}>
              <Icon name="question"/>What can I do with my points?
            </p>
            <Divider />
            <p style={{fontSize:'16px'}}>Upon reaching <b>100 points</b>, you can exchange for <b>5 EQTs</b></p>
            <Divider />
            <p style={{fontSize:'20px'}}>
              <Icon name="question"/>What is EthQuestionToken (EQT)
            </p>
            <Divider />
            <p style={{fontSize:'16px'}}>
              Cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s).
              Each user is given <b>10 EQTs</b> upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals
              for each question.
            </p>
          </Container>
        </Layout>
      )
    } else {
      return (
        <Layout accountType={this.state.accountType}>
          <AccountIssueModal loading={this.state.loading} login={this.state.login} />
        </Layout>
      );
    }
  }
}

export default LeaderboardPage;
