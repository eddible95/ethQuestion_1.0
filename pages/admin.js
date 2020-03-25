import React, { Component } from 'react';
import { Container, Segment, Header, Divider, Button, Popup, Form, Input,
   Icon, Dropdown, Table, Modal, Loader, Message, Transition, Grid } from "semantic-ui-react";
import Layout from '../components/Layout';
import LoadingModal from '../components/LoadingModal';
import AccountIssueModal from '../components/AccountIssueModal';
import TimeOutModal from '../components/TimeOutModal';
import {Router} from '../routes';
import { logging, checkRewardField } from '../utils/functions';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import Profile from '../ethereum/profile';
import Question from '../ethereum/question';
import feedback from '../ethereum/feedback';
import EthQuestionToken from '../ethereum/token';
import EthQuestionTokenSale from '../ethereum/tokenSale'
import credentials from '../ethereum/credentials';
import { exportQuestion, exportComments } from '../utils/pdf';
import cookies from 'next-cookies';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
      error: false,
      loading: false,
      loadingResource: true,
      timeout: false,
      deployedQuestionsCount: null,
      deployedQuestions: [],
      ethWalletEmailAddressBinding: [],
      questionAddressTitleBinding: [],
      tokenPrice: null,
      tokenBalance: null,
      etherBalance: null,
      errorMessage: '',
      accountType: null,
      userVisible: false,
      questionOptions: [],
      questionNumber: null,
      questionVisible: false,
      newTokenPrice: '',
      topUpAmount: '',
      tokenManagementVisible: false
    };
  }

  static async getInitialProps(props) {
    return { isLogin: cookies(props).login || '', account: cookies(props).wallet || '' };
  }

  async componentDidUpdate(prevProps) {
    if(this.props != prevProps) {
      this.fetchData()
    }
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
      const account = this.props.account;
      let profileAddress = await factory.methods.getProfile(account).call();
      let profile = Profile(profileAddress);
      let accountType = await profile.methods.getAccountType().call();
      accountType == 0 ? accountType = "Admin" : accountType = "User"
      if(accountType != "Admin") {
        login = false;
      }

      await this.fetchData();
      // Get Question Deployed
      let questionOptions = [];
      for (let i = 0; i < this.state.deployedQuestionsCount; i++) {
          let question = Question(this.state.deployedQuestions[i])
          let summary = await question.methods.getSummary().call();
          questionOptions.push({
              key: i+1,
              text: summary[0],
              value: i+1
          });
      }
      this.setState( { questionOptions: questionOptions });
      this.setState( { account: account })
      this.setState( { login: login });
      this.setState( { accountType: accountType });
    }
    this.setState( { loadingResource: false });
  }

  async fetchData() {
    // Retrieve an array of addresses of questions deployed
    let deployedQuestions = await factory.methods.getDeployedQuestions().call();
    let deployedQuestionsCount = deployedQuestions.length;
    let questionAddressTitleBinding = []
    for(let i=0; i<deployedQuestionsCount; i++) {
      let question = Question(deployedQuestions[i]);
      let summary = await question.methods.getSummary().call();
      questionAddressTitleBinding.push({
        questionAddress: deployedQuestions[i],
        title: summary[0],
        flagged: summary[9]
      })
    }

    // Retrieve an array of EthWallets and Email Addresses
    let ethWallets = await factory.methods.getEthWallets().call();
    let ethWalletEmailAddressBinding = [];
    for (let i=0; i < ethWallets.length; i++) {
      let emailAddress = await credentials.methods.getBinding(ethWallets[i]).call();
      let status = await credentials.methods.emailNotBlackList(emailAddress).call();
      ethWalletEmailAddressBinding.push({
        ethWallet: ethWallets[i],
        emailAddress: emailAddress,
        status: status
      })
    }

    let tokenPrice = await EthQuestionTokenSale.methods.getTokenPrice().call();
    let tokenBalance = await EthQuestionToken.methods.balanceOf(EthQuestionTokenSale._address).call();
    let etherBalance = await EthQuestionTokenSale.methods.getEtherBalance().call();
    this.setState({
      deployedQuestionsCount: deployedQuestionsCount,
      deployedQuestions: deployedQuestions,
      ethWalletEmailAddressBinding: ethWalletEmailAddressBinding,
      questionAddressTitleBinding: questionAddressTitleBinding,
      tokenPrice: tokenPrice,
      tokenBalance: tokenBalance,
      etherBalance: etherBalance
    })
  }

  export = async () => {
    // Check that a question must be selected
    if (this.state.questionNumber != null) {
      // Retrieve all the data of selected question
      let questionNumber = Number(this.state.questionNumber) - 1;
      let question = Question(this.state.deployedQuestions[questionNumber])
      let summary = await question.methods.getSummary().call();
      let answerList = await question.methods.getAnswerList().call();
      await exportQuestion(summary, answerList);
    }
  }

  exportFeedback = async () => {
    // Retrieve all comments
    let comments = await feedback.methods.getComments().call();
    await exportComments(comments);
  }

  getUserTableData = () => {
    return this.state.ethWalletEmailAddressBinding.map((item, index) => {
      return <Table.Row key={index}>
        <Table.Cell>{item.ethWallet}</Table.Cell>
        <Table.Cell>{item.emailAddress}</Table.Cell>
        <Table.Cell>{item.status ? "Blacklisted" : "Active"}</Table.Cell>
        <Table.Cell>
        {
          item.status ? <Button onClick={() => this.unblacklist(item.emailAddress)} color="green" size="mini" icon>
            <Icon name="add user" />
          </Button> :
          <Button onClick={() => this.blacklist(item.emailAddress)} color="red" size="mini" icon>
            <Icon name="remove user" />
          </Button>
        }
        </Table.Cell>
        <Table.Cell>
          <Button onClick={() => this.dispense(item.ethWallet)} color="green" size="mini" icon>
            <Icon name="ethereum" />
          </Button>
        </Table.Cell>
      </Table.Row>;
    })
  }

  blacklist = async (emailAddress) => {
    this.setState({ loading: true, errorMessage: ''});
    try {
      const account = this.state.account;
      await credentials.methods
      .blacklistEmail(emailAddress)
      .send({
          from: account,
          gasPrice: '0'
      });
      Router.pushRoute('/admin'); // Automatic redirect the user.
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
      this.setState({ error: true})
    }
    this.setState({ loading: false})
  }

  unblacklist = async (emailAddress) => {
    this.setState({ loading: true, errorMessage: ''});
    try {
      const account = this.state.account;
      await credentials.methods
      .unBlacklistEmail(emailAddress)
      .send({
          from: account,
          gasPrice: '0'
      });
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
      this.setState({ error: true})
    }
    this.setState({ loading: false})
  }

  dispense = async (ethWallet) => {
    this.setState({ loading: true, errorMessage: ''});
    try {
      const account = this.state.account;
      await EthQuestionToken.methods
      .transfer(ethWallet, 10e4)
      .send({
          from: account,
          gasPrice: '0'
      });
      // Log transaction
      const profileAddress = await factory.methods.getProfile(ethWallet).call();
      const profile = Profile(profileAddress);
      let logTransaction = logging("Awarded 10 EQT(s) for first time user");
      await profile.methods.logTransaction(logTransaction)
      .send({
          from: account,
          gasPrice: '0'
      });
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
      this.setState({ error: true})
    }
    this.setState({ loading: false})
  }

  getQuestionTableData = () => {
    return this.state.questionAddressTitleBinding.map((item, index) => {
      return <Table.Row key={index}>
        <Table.Cell>{item.questionAddress}</Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.flagged ? "Flagged" : "Active"}</Table.Cell>
        <Table.Cell>
        {
          item.flagged ? <Button onClick={() => this.undoDeleteQuestion(item.questionAddress)} color="green" size="mini" icon>
            <Icon name="undo" />
          </Button> :
          <Button onClick={() => this.deleteQuestion(item.questionAddress)} color="red" size="mini" icon>
            <Icon name="flag" />
          </Button>
        }
        </Table.Cell>
      </Table.Row>;
    })
  }

  deleteQuestion = async (questionAddress, title) => {
    this.setState({ loading: true, errorMessage: ''});
    try {
      const account = this.state.account;
      let logTransaction = logging("Deleted Question Titled: " + title);
      await factory.methods
      .deleteQuestion(questionAddress, logTransaction)
      .send({
          from: account,
          gasPrice: '0'
      });
      Router.pushRoute('/admin'); // Automatic redirect the user.
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
      this.setState({ error: true})
    }
    this.setState({ loading: false})
  }

  undoDeleteQuestion = async (questionAddress, title) => {
    this.setState({ loading: true, errorMessage: ''});
    try {
      const account = this.state.account;
      let logTransaction = logging("Undo Deletion Of Question Titled: " + title);
      await factory.methods
      .undoDeleteQuestion(questionAddress, logTransaction)
      .send({
          from: account,
          gasPrice: '0'
      });
      Router.pushRoute('/admin'); // Automatic redirect the user.
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
      this.setState({ error: true})
    }
    this.setState({ loading: false})
  }

  topUp = async () => {
    this.setState({ loading: true, errorMessage: ''});
    if (checkRewardField(this.state.topUpAmount)) {
      try {
        const account = this.state.account;
        await web3.eth.personal.unlockAccount(account, "password", 600);
        await EthQuestionToken.methods
        .transfer(EthQuestionTokenSale._address, this.state.topUpAmount*1e4)
        .send({
            from: account,
            gasPrice: '0'
        });
        // Log transaction
        const profileAddress = await factory.methods.getProfile(account).call();
        const profile = Profile(profileAddress);
        let logTransaction = logging("Added " + this.state.topUpAmount + " EQT(s) for exchange");
        await profile.methods.logTransaction(logTransaction)
        .send({
            from: account,
            gasPrice: '0'
        });
        Router.pushRoute('/admin'); // Automatic redirect the user.
      } catch (err) {
        if (err.message == "Returned error: authentication needed: password or unlock") {
          this.setState({ timeout: true });
        }
        this.setState({ errorMessage: err.message });
        this.setState({ error: true})
        this.setState({ loading: false})
      }
    } else {
      this.setState({ errorMessage: "Required Field(s) Empty or Invalid Input" });
      this.setState({ error: true})
      this.setState({ loading: false });
    }
    this.setState({ loading: false})
  }

  collectEther = async () => {
    this.setState({ loading: true, errorMessage: ''});
    try {
      const account = this.state.account
      const profileAddress = await factory.methods.getProfile(account).call();
      let logTransaction = logging("Collect Ether from exchange of EQT(s)");
      await EthQuestionTokenSale.methods
      .endSale(EthQuestionToken._address, profileAddress, logTransaction)
      .send({
          from: account,
          gasPrice: '0'
      });
      Router.pushRoute('/admin'); // Automatic redirect the user.
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
      this.setState({ error: true})
      this.setState({ loading: false})
    }
    this.setState({ loading: false})
  }

  changeTokenPrice = async () => {
    this.setState({ loading: true, errorMessage: ''});
    if (checkRewardField(this.state.newTokenPrice)) {
      try {
        const account = this.state.account
        const profileAddress = await factory.methods.getProfile(account).call();
        let logTransaction = logging("Changed Token Price to " + this.state.newTokenPrice + " wei per EQT.");
        await EthQuestionTokenSale.methods
        .changeTokenPrice(this.state.newTokenPrice, profileAddress, logTransaction)
        .send({
            from: account,
            gasPrice: '0'
        });
        Router.pushRoute('/admin'); // Automatic redirect the user.
      } catch (err) {
        if (err.message == "Returned error: authentication needed: password or unlock") {
          this.setState({ timeout: true });
        }
        this.setState({ errorMessage: err.message });
        this.setState({ error: true})
        this.setState({ loading: false})
      }
    } else {
      this.setState({ errorMessage: "Required Field(s) Empty or Invalid Input" });
      this.setState({ error: true})
      this.setState({ loading: false });
    }
    this.setState({ loading: false})
  }

  toggleUserTableVisibility = () =>
    this.setState((prevState) => ({ userVisible: !prevState.userVisible }))

  toggleQuestionTableVisibility = () =>
    this.setState((prevState) => ({ questionVisible: !prevState.questionVisible }))

  toggleTokenManagementVisibility = () =>
      this.setState((prevState) => ({ tokenManagementVisible: !prevState.tokenManagementVisible }))

  renderExport() {
    return <React.Fragment>
      <Segment raised textAlign='left'>
        <Header as='h2' textAlign='center'>
          Exporting Questions & Answers As PDF
        </Header>
      </Segment>

      <Divider hidden/>

      <p style={{fontSize:'16px'}}>
        Select the question to export the question and it's corresponding answers
      </p>
      <Dropdown clearable
                options={this.state.questionOptions}
                selection
                placeholder='Select the question to export'
                value={this.state.questionNumber}
                onChange={ (e, { value }) => this.setState({ questionNumber: value })}/>
      <Button icon labelPosition='left' color="red" onClick={this.export} style={{left:"20px"}}>
        <Icon name='download'/>
        Export As PDF
      </Button>

      <Divider hidden/>

      <Segment raised textAlign='left'>
        <Header as='h2' textAlign='center'>
          Exporting Feedback
        </Header>
      </Segment>
      <Button icon labelPosition='left' color="red" onClick={this.exportFeedback} style={{left:"20px"}}>
        <Icon name='download'/>
        Export As PDF
      </Button>
    </React.Fragment>
  }

  renderEQTSettings() {
    return <React.Fragment>
      <Segment raised textAlign='center'>
        <b style={{fontSize:"20px"}}>EthQuestionTokens (EQT) Exchange Settings</b>
        <Popup
          trigger={
            <Button
              icon={this.state.tokenManagementVisible ? "minus" : "plus"}
              onClick={this.toggleTokenManagementVisibility}
              floated="right"
              size="mini"
            />
          }
          content={"Click to expand/close"}
          inverted/>
      </Segment>
      <Transition visible={this.state.tokenManagementVisible} animation='scale' duration={500}>
      <Grid container={true}>
        <Grid.Row>
          <p style={{fontSize:'16px'}}>
            Balance Available For Exchange: <b>{this.state.tokenBalance*1e-4} EQT(s)</b>
          </p>
        </Grid.Row>
        <Grid.Row>
          <Form error={!!this.state.errorMessage} style={{ marginTop: '10px' }}>
            <Form.Field required={true}>
                <label>Top Up Amount</label>
                <Input
                    label="EQT(s)"
                    labelPosition="right"
                    placeholder='Enter EQT Value'
                    value={this.state.topUpAmount}
                    onChange={event => this.setState({ topUpAmount: event.target.value })}
                />
            </Form.Field>
          </Form>
        </Grid.Row>
        <Grid.Row>
          <Button icon labelPosition='left' color="red" onClick={this.topUp}>
            <Icon name='dollar sign'/>
            Top Up Balance
          </Button>
        </Grid.Row>
        <Grid.Row>
          <p style={{fontSize:'16px'}}>
            Ether Collected From Exchange: <b>{this.state.etherBalance*1e-18} Ether(s)</b>
          </p>
        </Grid.Row>
        <Grid.Row>
          <Button icon labelPosition='left' color="red" onClick={this.collectEther}>
            <Icon name='ethereum'/>
            Collect Ether
          </Button>
        </Grid.Row>
        <Grid.Row>
          <p style={{fontSize:'16px'}}>
            Current Token Price: <b>{this.state.tokenPrice*1e-18} Ether(s)</b>
          </p>
        </Grid.Row>
        <Grid.Row>
          <Form error={!!this.state.errorMessage} style={{ marginTop: '10px' }}>
            <Form.Field required={true}>
                <label>Token Price</label>
                <Input
                    label="Wei"
                    labelPosition="right"
                    placeholder='New Token Price'
                    value={this.state.newTokenPrice}
                    onChange={event => this.setState({ newTokenPrice: event.target.value })}
                />
            </Form.Field>
          </Form>
        </Grid.Row>
        <Grid.Row>
          <Button icon labelPosition='left' color="red" onClick={this.changeTokenPrice}>
            <Icon name='ethereum'/>
            Change Token Price
          </Button>
        </Grid.Row>
      </Grid>
      </Transition>
      <Divider hidden/>
    </React.Fragment>
  }

  renderUserManagement() {
    return <React.Fragment>
      <Segment raised textAlign='center'>
        <b style={{fontSize:"20px"}}>Users Management</b>
        <Popup
          trigger={
            <Button
              icon={this.state.userVisible ? "minus" : "plus"}
              onClick={this.toggleUserTableVisibility}
              floated="right"
              size="mini"
            />
          }
          content={"Click to expand/close"}
          inverted/>
      </Segment>

      <Divider hidden/>

      <Transition visible={this.state.userVisible} animation='scale' duration={500}>
        <Segment>
          <Header><Icon name='user' circular/>Registered Users</Header>
            <Table compact celled stackable>
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell width={2}>Ethereum Wallet</Table.HeaderCell>
                  <Table.HeaderCell width={3}>Email</Table.HeaderCell>
                  <Table.HeaderCell width={2}>Status</Table.HeaderCell>
                  <Table.HeaderCell width={2}>Blacklist</Table.HeaderCell>
                  <Table.HeaderCell width={2}>Dispense Tokens</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.getUserTableData()}</Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan={5} />
                </Table.Row>
              </Table.Footer>
            </Table>
        </Segment>
      </Transition>

      <Divider hidden/>

      <Segment raised textAlign='center'>
        <b style={{fontSize:"20px"}}>Removing Question</b>
        <Popup
          trigger={
            <Button
              icon={this.state.questionVisible ? "minus" : "plus"}
              onClick={this.toggleQuestionTableVisibility}
              floated="right"
              size="mini"
            />
          }
          content={"Click to expand/close"}
          inverted/>
      </Segment>
    </React.Fragment>
  }

  renderQuestionSettings() {
    return <React.Fragment>
      <Transition visible={this.state.questionVisible} animation='scale' duration={500}>
        <Segment>
          <Header><Icon name='question circle' circular/>Questions Posted</Header>
            <Table compact celled stackable>
              <Table.Header fullWidth>
                <Table.Row>
                  <Table.HeaderCell width={2}>Question Address</Table.HeaderCell>
                  <Table.HeaderCell width={3}>Title</Table.HeaderCell>
                  <Table.HeaderCell width={2}>Status</Table.HeaderCell>
                  <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{this.getQuestionTableData()}</Table.Body>
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan={5} />
                </Table.Row>
              </Table.Footer>
            </Table>
        </Segment>
      </Transition>
    </React.Fragment>
  }

  render() {
    if (this.state.login) {
      return (
        <Layout accountType={this.state.accountType} page={"Admin"}>
          <Container>
            <Divider hidden/>
            {this.renderExport()}
            {this.renderEQTSettings()}
            <Message error header="Oops!" content={this.state.errorMessage} hidden={!this.state.error}/>
            {this.renderUserManagement()}
            <Divider hidden/>
            {this.renderQuestionSettings()}
            <Divider hidden/>
            <LoadingModal trigger={this.state.loading}
                          title={'Performing Admin Actions'}
                          content={"Please wait patiently as the system performs the action selected. This process might take awhile."}
                          loader={"Loading"}/>
            </Container>
            <TimeOutModal timeout={this.state.timeout} />
        </Layout>
      );
    } else {
      return (
        <Layout accountType={this.state.accountType}>
          <AccountIssueModal loading={this.state.loadingResource} login={this.state.login} />
        </Layout>
      );
    }
  }
}

export default AdminPage;
