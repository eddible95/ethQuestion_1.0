import React, { Component } from 'react';
import MobileDetect from 'mobile-detect';
import { Container, Segment, Header, Divider, Responsive,
   Button, Icon, TextArea, Modal, Loader, Message, Form, Grid, Label, Progress } from "semantic-ui-react";
import AccountIssueModal from '../components/AccountIssueModal';
import TimeOutModal from '../components/TimeOutModal';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import Profile from '../ethereum/profile';
import credentials from '../ethereum/credentials';
import feedback from '../ethereum/feedback';
import { getWidthFactory } from '../utils/device';
import { checkFieldEmpty } from '../utils/functions';
import {Router} from '../routes';
import cookies from 'next-cookies';

class FeedbackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: "",
      usefulness: "",
      easy: "",
      comments:"",
      loading: false,
      errorMessage: "",
      login: false,
      resourceLoading: true,
      timeout: false,
      accountType: null,
      statistics: []
    };
  }

  static async getInitialProps(props) {
    let isMobileFromSSR = false;
    if(props.req) {
      const device = props.req.headers["user-agent"];
      const md = new MobileDetect(device);
      isMobileFromSSR = !!md.mobile();
    }
    return { isMobileFromSSR, isLogin: cookies(props).login || '' , account: cookies(props).wallet || ''};
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
      let statistics = await feedback.methods.getSummaryStatistics().call();
      this.setState( { login: login });
      this.setState( { accountType: accountType });
      this.setState( { statistics: statistics });
    }
    this.setState( { resourceLoading: false });
  }

  // Submit the question to be stored on the Ethereum Blockchain
  onSubmit = async () => {
      this.setState({ loading: true, errorMessage: '' });
      // Ensures all fields are filled
      if (checkFieldEmpty(this.state.like) && checkFieldEmpty(this.state.usefulness) && checkFieldEmpty(this.state.easy)){
        try {
            const account = this.props.account;
            let emailAddress = await credentials.methods.getBinding(account).call();
            let comments = "Comments provided by " + emailAddress + ": " + this.state.comments;
            await feedback.methods
            .updateFeedback(this.state.like, this.state.usefulness, this.state.easy, comments)
            .send({
                from: account,
                gasPrice: '0'
            });
            Router.pushRoute('/home'); // Automatic redirect the user.
        } catch (err) {
            if (err.message == "Returned error: authentication needed: password or unlock") {
              this.setState({ timeout: true });
            }
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
      } else {
        this.setState({ errorMessage: "Required Field(s) Empty" });
        this.setState({ loading: false });
      }
  };

  renderStatistic() {
    const numOfLikes = this.state.statistics[0];
    const numOfDislikes = this.state.statistics[1];
    const numOfUseful = this.state.statistics[2];
    const numOfNotUseful = this.state.statistics[3];
    const numOfEasy = this.state.statistics[4];
    const numOfNotEasy = this.state.statistics[5];
    const totalRatings = Number(numOfLikes) + Number(numOfDislikes);
    return (
      <Segment>
        <Header as='h3' textAlign="center">
          <Icon name="chart bar outline"/>Summary Statistics of System
        </Header>
        <p style={{ textAlign:'center'}}>
          <b>Total Rating(s):</b> {totalRatings}
        </p>
        <Grid centered columns={2}>
          <Grid.Column style={{paddingLeft:"10px", paddingRight:"0", width:"30%"}}>
            <Label horizontal>
              Likes
            </Label>
          </Grid.Column>
          <Grid.Column style={{paddingLeft:"0", paddingRight:"10px", width:"70%"}}>
            <Progress color='green' value={numOfLikes} total={totalRatings} progress='percent' precision={2} style={{ margin:"0"}}/>
          </Grid.Column>
          <Grid.Column style={{paddingLeft:"10px", paddingRight:"0", width:"30%"}}>
            <Label horizontal>
              Useful
            </Label>
          </Grid.Column>
          <Grid.Column style={{paddingLeft:"0", paddingRight:"10px", width:"70%"}}>
            <Progress color='green' value={numOfUseful} total={totalRatings} progress='percent' precision={2} style={{ margin:"0"}}/>
          </Grid.Column>
          <Grid.Column style={{paddingLeft:"10px", paddingRight:"0", width:"30%"}}>
            <Label horizontal>
              Easy To Use
            </Label>
          </Grid.Column>
          <Grid.Column style={{paddingLeft:"0", paddingRight:"10px", width:"70%"}}>
            <Progress color='green' value={numOfEasy} total={totalRatings} progress='percent' precision={2} style={{ margin:"0"}}/>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }

  render() {
    if (this.state.login) {
      return(
        <Layout accountType={this.state.accountType} page={"Feedback"}>
          <Divider hidden/>
          <Container style={{width:"70vw"}}>
            <Segment raised>
              <Header as='h2' textAlign='center'>
                Collection of Feedback For System
              </Header>
            </Segment>
          </Container>
          <Divider hidden/>
          <Grid centered>
            <Grid.Column width={8}>
              <Header as='h3' textAlign='left'>
                Please provided feedback via the Google Form below:
              </Header>
              <a style={{display: "table-cell"}} href="https://forms.gle/g4MstrdxWFLtcC6V6" target="_blank">Link to Google Form</a>
              <Header as='h3' textAlign='left'>
                Do you like the system?
              </Header>
              <p>Selected Choice: <b>{this.state.like.toString()}</b>
              </p>
              <Button icon labelPosition='left' color="green" compact={true}
                onClick={() => {this.setState({ like: true })}}>
                <Icon name='thumbs up outline' />
                Yes
              </Button>
              <Button icon labelPosition='left' color="red" compact={true}
                onClick={() => {this.setState({ like: false })}}>
                <Icon name='thumbs down outline' />
                No
              </Button>
              <Header as='h3' textAlign='left'>
                Do you find the system useful?
              </Header>
              <p>
              Selected Choice: <b>{this.state.usefulness.toString()}</b>
              </p>
              <Button icon labelPosition='left' color="green" compact={true}
                onClick={() => {this.setState({ usefulness: true })}}>
                <Icon name='thumbs up outline' />
                Yes
              </Button>
              <Button icon labelPosition='left' color="red" compact={true}
                onClick={() => {this.setState({ usefulness: false })}}>
                <Icon name='thumbs down outline' />
                No
              </Button>
              <Header as='h3' textAlign='left'>
                Do you find the system easy to use?
              </Header>
              <p>
              Selected Choice: <b>{this.state.easy.toString()}</b>
              </p>
              <Button icon labelPosition='left' color="green" compact={true}
                onClick={() => {this.setState({ easy: true })}}>
                <Icon name='thumbs up outline' />
                Yes
              </Button>
              <Button icon labelPosition='left' color="red" compact={true}
                onClick={() => {this.setState({ easy: false })}}>
                <Icon name='thumbs down outline' />
                No
              </Button>
              <Header as='h3' textAlign='left'>
                Any suggestions for improvments or other comments?
              </Header>
              <Form error={!!this.state.errorMessage} style={{ marginTop: '10px' }}>
                <Form.Field>
                  <TextArea placeholder='Tell us more' style={{width:"100%", height:"20%"}}
                    value={this.state.comments}
                    onChange={event => this.setState({ comments: event.target.value })}/>
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage}/>
              </Form>
              <Divider hidden/>
              <Modal open={this.state.loading} trigger={<Button primary onClick={this.onSubmit}>Submit Feedback</Button>} basic size='small'>
                <Header content='Submitting Feedback' />
                <Modal.Content>
                  <p>
                    Please wait patiently as the system submits your feedback to the blockchain.
                    Upon successful submission, you will be redirected to the Home Page.
                  </p>
                  <Loader active inline="centered">
                    Loading
                  </Loader>
                </Modal.Content>
              </Modal>
              </Grid.Column>
              <Grid.Column width={4}>
                <Responsive fireOnMount getWidth={getWidthFactory(this.props.isMobileFromSSR)} minWidth={Responsive.onlyTablet.minWidth}>
                  {this.renderStatistic()}
                </Responsive>
            </Grid.Column>
          </Grid>
          <TimeOutModal timeout={this.state.timeout} />
        </Layout>
      );
    } else {
      return (
        <Layout accountType={this.state.accountType}>
          <AccountIssueModal loading={this.state.resourceLoading} login={this.state.login} />
        </Layout>
      );
    }
  }
}

export default FeedbackPage;
