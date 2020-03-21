import React, { Component } from 'react';
import { Segment, Container, Divider, Header, Modal, Button, Loader, Embed } from 'semantic-ui-react';
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
            <Segment raised textAlign='left'>
              <Header as='h2' textAlign='center'>
                SCSE19-0299: Block-Chain Based Question Answering System
              </Header>
            </Segment>
            <Header as='h3' textAlign='left'>
              Project Details
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              This is an experimental system for School Of Computer Science & Engineereing (SCSE) Final Year Project
              titled SCSE19-0299.
            </p>
            <Header as='h3' textAlign='left'>
              System Rules & Guidelines
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              No posting of <b>Assignments </b> or <b>Tutorial Questions</b> is allowed.
              Fraudulent accounts will be <b>removed from the system and banned from future use</b>.
            </p>
            <Header as='h3' textAlign='left'>
              Getting EthQuestionToken (EQT)
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              EthQuestionToken (EQT) is a cryptocurrency that is used within the Question Answering System and can be exchanged using Ether(s).
              Each user is given <b>10 EQTs</b> upon signing up. User can be rewarded additional EQTs by providing answers with the highest approvals
              for each question. Additionally, user can exchange points earned through their participation on the system.
              <b> 5 EQTs</b> for every <b>100 points</b> earned.
            </p>
            <Divider hidden/>

            <Divider hidden/>
            <Segment raised textAlign='left'>
              <Header as='h2' textAlign='center'>
                Leaderboard
              </Header>
            </Segment>
            <Header as='h3' textAlign='left'>
              Accumulating Points
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              Points can be earned through the following ways:
            </p>
            <p style={{fontSize:'16px'}}><b>Asking Question With Reward Awarded:</b> 5 Points</p>
            <p style={{fontSize:'16px'}}><b>Answer Selected:</b> 4 Points</p>
            <p style={{fontSize:'16px'}}><b>Submit Answer:</b> 2 Points</p>
            <p style={{fontSize:'16px'}}><b>Approve Answer with Highest Approvals:</b> 2 Points</p>
            <p style={{fontSize:'16px'}}><b>Approving An Answer:</b> 1 Point</p>
            <Divider hidden/>

            <Segment raised>
              <Header as='h2'textAlign='center'>
                System Functionality
              </Header>
            </Segment>
            <Header as='h3' textAlign='left'>
              Ask New Question
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              Access using "<b>Ask Question</b>" tab above. Each creation of new question requires at least
              <b> 1 EQT</b> as the reward. In the event that there are no answers provided within the duration specified,
              the reward will be returned to the owner of the question.
            </p>
            <Header as='h3' textAlign='left'>
              Provide Answer To Question
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              All questions posted can be view from the Home Page access via <b>"Home"</b> tab above. Clicking on the question title
              will provide additional details on the question as well as providing the form to submit an answer for the question. No
              EQT are required for answering of question.
            </p>
            <Header as='h3' textAlign='left'>
              Approving Of Answers
            </Header>
            <Divider />
            <p style={{fontSize:'16px'}}>
              When the question is in the <b>"Voting Phase"</b>, all users can view all answers that are submitted and approve
              each answer depending on its relevance and helpfulness. Each approval requires <b>1 EQT</b>. Each user can only
              <b> approve each answer once</b>. After the "Voting Phase", users who approved the answer with the highest approvals
              will have their <b>1 EQT</b> returned. Additionally, EQT from users who approve other answers would be distributed among
              users who approved the answer with the highest approvals.
            </p>
            <Segment raised>
              <Header as='h2' textAlign='center'>
                User Guide
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
