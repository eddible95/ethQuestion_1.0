import React, { Component } from 'react';
import { Segment, Container, Divider, Header, Modal, Button, Loader, Embed, Icon } from 'semantic-ui-react';
import AccountIssueModal from '../components/AccountIssueModal';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import Profile from '../ethereum/profile';
import credentials from '../ethereum/credentials';
import cookies from 'next-cookies';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      loading: true,
      accountType: null
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
      this.setState( { login: login });
      this.setState( { accountType: accountType });
    }
    this.setState( { loading: false });
  }

  render() {
    if (this.state.login) {
      return (
        <Layout accountType={this.state.accountType} page={'About'}>
          <Container>
            <Divider hidden/>
            <Segment raised>
              <Header as='h2'textAlign='center'>
                <Icon name='question'/>What Can I Do Here?
              </Header>
            </Segment>
            <Header as='h3' textAlign='left'>
              <Icon name='pencil alternate'/>Ask New Question
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              You need to have at least <b> 1 EQT</b> as the reward for the question. If your question has no answers provided within the duration specified,
              the reward will be returned to you. Do note that you cannot ask <b>Assignments </b> or <b>Tutorial Questions</b>.
              Fraudulent accounts will be <b>removed from the system and banned from future use</b>.
            </p>
            <Header as='h3' textAlign='left'>
              <Icon name='add'/>Answer Questions
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              You can provide answers to questions asked by others on the Home page. Do note that you do not need to use any EQT
              to provide an answer.
            </p>
            <Header as='h3' textAlign='left'>
              <Icon name='thumbs up'/>Approving Answers
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              You can approve answers provided for each question druing <b>Voting Phase</b> depending on its relevance and usefulness.
              A deposit of <b>1 EQT</b> will be deducted for each answer you approve. The deposit will be returned to you only if
              the answer you approved of is eventually awarded the reward. All forefited deposits will be distributed among other
              users who approved the answer that is awarded.
            </p>
            <Divider hidden/>
            <Segment raised>
              <Header as='h2'textAlign='center'>
                <Icon name='ethereum'/>What is EthQuestionToken (EQT)?
              </Header>
            </Segment>
            <p style={{fontSize:'16px'}}>
              Cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s).
              Each user is given <b>10 EQTs</b> upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals
              for each question. Exchange for EQTs <a href="/userProfile">here</a>.
            </p>
            <Divider hidden/>
            <Segment raised>
              <Header as='h2' textAlign='center'>
                <Icon name='video'/>Watch For More
              </Header>
            </Segment>
            <Embed
              id='pdRTt2QabOg'
              source='youtube'
            />
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

export default AboutPage;
