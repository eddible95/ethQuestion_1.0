import moment from 'moment';
import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { Context, Text } from 'react-mathjax2';
import { Table, Popup, Button, Container, Form, Header, Comment,
  Segment, Message, Divider, Icon, Label, Modal, Loader, Image, Grid } from 'semantic-ui-react';
import AccountIssueModal from '../components/AccountIssueModal';
import TimeOutModal from '../components/TimeOutModal';
import ErrorModal from '../components/ErrorModal';
import LoadingModal from '../components/LoadingModal';
import web3 from '../ethereum/web3';
import Question from '../ethereum/question';
import EthQuestionToken from '../ethereum/token';
import credentials from '../ethereum/credentials';
import Profile from '../ethereum/profile'
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Link, Router } from '../routes';
import { getIpfsHash } from '../utils/ipfs';
import { logging, checkFieldEmpty, sortingAnswers } from "../utils/functions";
import cookies from 'next-cookies';

class QuestionRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionAddress: '',
      questionState: '',
      summary: [],
      time: '',
      answerList: [],
      avatarListIcon: [],
      votingTime:'',
      voting: false,
      answer:'',
      errorMessage: '',
      loading: false,
      voteError: false,
      ownerError: false,
      voteMultipleError: false,
      changeToVoting: false,
      changeToRewarded: false,
      timeExtension: false,
      changeReward: false,
      fileLoading: false,
      buffer: null,
      files_array: [],
      fileHashes_array: [],
      fileNames_array: [],
      login: false,
      timeout: false,
      resourceLoading: true,
      accountType: null,
      balanceError: false,
      fixError: false,
      sorted: false
    };
  }

  static async getInitialProps(props) {
    // Retrieve question data
    let questionAddress = props.query.value;
    return { questionAddress, isLogin: cookies(props).login || '', account: cookies(props).wallet || '' };
  };

  async componentDidMount() {
    if (typeof web3 === 'undefined') {
      this.setState({ resourceLoading: false })
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
      await this.fetchQuestionData();
      this.setState({ login: login,
                      accountType: accountType });
    }
    this.setState({ resourceLoading: false })
  }

  async componentDidUpdate(prevProps) {
    if(this.props != prevProps) {
      this.fetchQuestionData()
    }
  }

  async fetchQuestionData() {
    let error = false;
    const questionAddress = this.props.questionAddress;
    const question = Question(questionAddress);
    // Fetch Question Information
    const summary = await question.methods.getSummary().call();
    const time = await question.methods.getTime().call();
    const answerList = await question.methods.getAnswerList().call();
    // Fetch Avatar Icons
    const iconList = ['alligator', 'anteater', 'armadillo', 'auroch', 'axolotl',
        'badger', 'bat', 'beaver', 'buffalo', 'camel', 'capybara',
        'chameleon', 'cheetah', 'chinchilla', 'chipmunk', 'chupacabra',
        'cormorant', 'coyote', 'crow', 'dingo', 'dinosaur', 'dolphin',
        'duck', 'elephant', 'ferret', 'fox', 'frog', 'giraffe', 'gopher',
        'grizzly', 'hedgehog', 'hippo', 'hyena', 'ibex', 'ifrit', 'iguana',
        'jackal', 'kangaroo', 'koala', 'kraken', 'lemur', 'leopard',
        'liger', 'llama', 'manatee', 'mink', 'monkey', 'moose', 'narwhal',
        'orangutan', 'otter', 'panda', 'penguin', 'platypus',
        'pumpkin', 'python', 'quagga', 'rabbit', 'raccoon', 'rhino',
        'sheep', 'shrew', 'skunk', 'squirrel', 'tiger', 'turtle', 'walrus',
        'wolf', 'wolverine', 'wombat'];
    const avatarListIcon = iconList.map((item)=>{
        return 'https://ssl.gstatic.com/docs/common/profile/' + item + '_lg.png';
    });
    // Check for balance error
    await EthQuestionToken.methods.balanceOf(questionAddress).call() != summary[2] ? error = true : error = false
    this.setState({
      questionAddress: questionAddress,
      questionState: summary[4],
      summary: summary,
      time: time,
      avatarListIcon: avatarListIcon,
      answerList: answerList.reverse(),
      votingTime: time[3],
      balanceError: error
    });
  }

  votePhase = async () => {
    try {
      if(this.state.questionState == 0) {
        const accounts = await web3.eth.getAccounts();
        const question = Question(this.state.questionAddress);
        // Ensure that only Creator of Question can access this function
        const account = this.props.account;
        if (account == await question.methods.getCreator().call()){
          this.setState({ changeToVoting: true});
          let logTransaction = logging("Change to Voting Phase for Question Titled: " + this.state.summary[0]);
          await factory.methods.changeQuestionPhase(this.state.questionAddress, logTransaction).send(
            { from: account,
              gasPrice: '0'
            });
          Router.pushRoute(`/questions/${this.state.questionAddress}`)
        } else {
          this.setState({ ownerError: true});
        }
      }
    } catch (err) {
        if (err.message == "Returned error: authentication needed: password or unlock") {
          this.setState({ timeout: true });
        }
        this.setState({ errorMessage: err.message });
    }
    this.setState({ changeToVoting: false});
  }

  rewardPhase = async () => {
    try {
      if(this.state.questionState == 1) {
        const accounts = await web3.eth.getAccounts();
        const question = Question(this.state.questionAddress);
        // Ensure that only Creator of Question can access this function
        const account = this.props.account;
        if (account == await question.methods.getCreator().call()){
          this.setState({ changeToRewarded: true});
          let logTransaction = logging("Awarded " + this.state.summary[2]*1e-4 + " EQT(s) as reward for Question Titled: " + this.state.summary[0]);
          let rewardMessage = logging("Rewarded " + this.state.summary[2]*1e-4 + " EQT(s) for most approved answer");
          let voteMessage = logging("Rewarded EQT(s) for approving the most approved answer");
          let refundMessage = logging("Refunded " + this.state.summary[2]*1e-4 + " EQT(s) as there are no answers or answers with approvals");
          await factory.methods
          .shareTokenAt(this.state.questionAddress, logTransaction, rewardMessage, voteMessage, refundMessage, EthQuestionToken._address)
          .send({
              from: account,
              gasPrice: '0'
          });
          Router.pushRoute(`/questions/${this.state.questionAddress}`)
        } else {
          this.setState({ ownerError: true});
        }
      }
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
    }
    this.setState({ changeToRewarded: false});
  };

  fixBalance = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const question = Question(this.state.questionAddress);
      // Ensure that only Creator of Question can access this function
      const account = this.props.account;
      if (account == await question.methods.getCreator().call()){
        this.setState({ fixError: true});
        let balance = this.state.summary[2] - await EthQuestionToken.methods.balanceOf(this.state.questionAddress).call()
        await EthQuestionToken.methods.transfer(this.state.questionAddress, balance)
        .send({
          from: account,
          gasPrice: '0'
        })
        Router.pushRoute(`/home`)
      } else {
        this.setState({ ownerError: true});
      }
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
    }
    this.setState({ fixError: false})
  }

  timeExtension = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const question = Question(this.state.questionAddress);
      // Ensure that only Creator of Question can access this function
      const account = this.props.account;
      if (account == await question.methods.getCreator().call()){
        this.setState({ timeExtension: true});
        let logTransaction = logging("Duration Extended for Question Titled: " + this.state.summary[0]);
        await factory.methods.timeExtension(this.state.questionAddress, logTransaction).send({
          from: account,
          gasPrice: '0'
        });
        Router.pushRoute(`/questions/${this.state.questionAddress}`)
      } else {
        this.setState({ ownerError: true});
      }
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeExtension: false });
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
    }
    this.setState({ timeExtension: false})
  }

  increaseReward = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const question = Question(this.state.questionAddress);
      // Ensure that only Creator of Question can access this function
      const account = this.props.account;
      if (account == await question.methods.getCreator().call()){
        this.setState({ changeReward: true});
        let logTransaction = logging("Increase Reward by 1 EQT(s) for Question Titled: " + this.state.summary[0]);
        await factory.methods.increaseReward(this.state.questionAddress, logTransaction, EthQuestionToken._address).send({
          from: account,
          gasPrice: '0'
        });
        await EthQuestionToken.methods.transfer(this.state.questionAddress, 10e3).send({
          from: account,
          gasPrice: '0'
        })
        Router.pushRoute(`/questions/${this.state.questionAddress}`)
      } else {
        this.setState({ ownerError: true});
      }
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
    }
    this.setState({ changeReward: false})
  }

  onSubmitAnswer = async () => {
    this.setState({ loading: true, errorMessage: '' });
    if (checkFieldEmpty(this.state.answer)){
      try {
          const question = Question(this.state.questionAddress);
          // Ensure that creator of question cannot provide answers
          const account = this.props.account;
          if (account != await question.methods.getCreator().call() && !await question.methods.checkIfAnswered(account).call()) {
            // Logs the transactions
            let logTransaction = logging("Submitted Answer for Question Titled: " + this.state.summary[0]);
            // Create new answer
            await factory.methods
            .createAnswer(this.state.questionAddress, this.state.answer, this.state.fileHashes_array, this.state.fileNames_array, logTransaction)
            .send({
                from: account,
                gasPrice: '0'
            });
            Router.pushRoute(`/questions/${this.state.questionAddress}`)
          } else {
            this.setState({ loading: false, errorMessage: "You cannot provide answer for your own question or already provided answer."})
          }
      } catch (err) {
          if (err.message == "Returned error: authentication needed: password or unlock") {
            this.setState({ timeout: true });
          }
          this.setState({ errorMessage: err.message });
      }
    } else {
      this.setState({loading: false, errorMessage: "Answer Field Empty"})
    }
    this.setState({ loading: false, answer:'' });
  };

  approveAnswer = async(answerer) => {
    this.setState({ voting: true })
    const account = this.props.account;
    const question = await Question(this.state.questionAddress);
    const profile = await factory.methods.getProfile(account).call();
    const answerList = await question.methods.getAnswerList().call();
    let index;
    for (let i=0; i<answerList.length; i++) {
      if (answerList[i][2] == answerer) {
        index = i;
      }
    }
    //Ensure that voter is not the answerer
    try {
      if (account != answerer){
        // Cannot vote twice
        if (! await question.methods.checkVoter(index, profile).call()) {
          //No cost for voting after the voting phase
          if (await question.methods.state().call() != 2) {
            await EthQuestionToken.methods.transfer(await this.state.questionAddress, 10e3)
            .send({
                from: account,
                gasPrice: '0'
            })
          }
          let logTransaction = logging("Approved An Answer for Question Titled: " + this.state.summary[0]);
          await factory.methods
          .approveAnswer(this.state.questionAddress, index, logTransaction)
          .send({
              from: account,
              gasPrice: '0'
          });
          Router.pushRoute(`/questions/${this.state.questionAddress}`)
        } else {
          this.setState({ voteMultipleError: true});
        }
      } else {
        this.setState({ voteError: true});
      }
    } catch (err) {
      if (err.message == "Returned error: authentication needed: password or unlock") {
        this.setState({ timeout: true });
      }
      this.setState({ errorMessage: err.message });
    }
    this.setState({ voting: false })
  };

  // Select a file to upload
  onFileSelected = async () => {
      // Access JavaScript FileReader() method for conversion to buffer
      const reader = new FileReader();
      const file = this.fileInput.files[0];
      this.setState({fileLoading: true});
      if (file instanceof Blob ) {
          let {files_array, fileNames_array, fileHashes_array} = this.state;
          files_array.push(file);
          fileNames_array.push(file.name);
          this.setState({
              files_array: files_array,
              fileNames_array: fileNames_array
          });
          console.log("fileNames_array: ", fileNames_array);
          reader.onloadend = async () => {
              await this.setState({
                  fileUrl: reader.result,
                  fileLoading: true,
                  buffer: Buffer.from(reader.result) // File is converted to a buffer for upload to IPFS
              });
              const fileHash = this.state.buffer ? (await getIpfsHash(file)) : '0';
              fileHashes_array.push(fileHash);
              this.setState({ fileHashes_array: fileHashes_array });
              console.log("fileHashes_array: ", fileHashes_array);
              this.setState({fileLoading: false});
          }
          reader.readAsDataURL(file);
      }
  }

  // Remove a previously selected file to upload
  onFileRemoved = (file) => {
      var i = 0;
      let {files_array, fileHashes_array, fileNames_array} = this.state;
      console.log('file: ', file);
      for (i = 0 ; i < files_array.length ; i++) {
          if (file === files_array[i]) {
              files_array.splice(i, 1);
              fileNames_array.splice(i, 1);
              fileHashes_array.splice(i, 1);
              break;
          }
      }
      this.setState({
          files_array: files_array,
          fileNames_array: fileNames_array,
          fileHashes_array: fileHashes_array
      });
      console.log('fileNames_array', fileNames_array);
      console.log("fileHashes_array: ", fileHashes_array);
  }

  // Render each tag individually for each question
  renderTag(tagList, tagSize) {
    const tagColours = ["red", "olive", "blue", "teal", "green"];
    return tagList.map((tag, index) => {
      let id = index % 5;
      return(
        <Label as='a' onClick={() => Router.pushRoute(`/${'search/'+encodeURIComponent(tag)}`)}
          tag size={tagSize} key={index} color={tagColours[id]}>
          {tag}
        </Label>
      )
    });
  }

  renderQuestion() {
      const summary = this.state.summary;
      const time = this.state.time;
      var currentTime = (new Date).getTime();
      var maxDuration =(parseFloat(summary[3]) / 60 / 60).toFixed(2).toString().toString();
      var publishTime = moment.unix(time[0]).format('dddd, Do MMMM YYYY, h:mm:ss a');
      var votingTime = moment.unix(this.state.votingTime).format('dddd, Do MMMM YYYY, h:mm:ss a');
      var publishTimeMs = moment.unix(time[0]).valueOf();
      var maxDurationMs = moment.unix(time[2]).valueOf();
      var votingTimeMs = moment.unix(this.state.votingTime).valueOf();

      let remainingTime = 0;
      if (this.state.questionState == 0) {
        remainingTime = publishTimeMs + maxDurationMs - currentTime;
        if (remainingTime < 0) {
            remainingTime = 0;
        }
      } else {
        remainingTime = votingTimeMs + maxDurationMs - currentTime;
        if (remainingTime < 0) {
            remainingTime = 0;
        }
      }

      return (
        <React.Fragment>
          <Table definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={2}>Question Title</Table.Cell>
                <Table.Cell style={{fontSize: 20, lineHeight: '1.5'}}>
                    {summary[0]}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={2}>Description</Table.Cell>
                <Table.Cell style={{fontSize: 20, lineHeight: '1.5'}}>
                    <Context
                        input='tex'
                        onLoad={ () => console.log("Loaded MathJax script!") }
                        onError={ (MathJax, error) => {
                            console.warn(error);
                            console.log("Encountered a MathJax error, re-attempting a typeset!");
                            MathJax.Hub.Queue(
                              MathJax.Hub.Typeset()
                            );
                        } }
                        options={{
                            asciimath2jax: {
                                 useMathMLspacing: true,
                                 delimiters: [["$$","$$"]],
                                 preview: "none",
                            }
                        }}>
                        <Text text={summary[1]}/>
                    </Context>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width={2}>Tags</Table.Cell>
                  <Table.Cell>
                    {this.renderTag(summary[8], "small")}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Reward (EQT)</Table.Cell>
                  <Table.Cell style={{fontSize: 20}}>{summary[2]*1e-4}
                  {this.state.questionState == 0
                      ?  <Popup
                          trigger={
                              <Button style={{float: 'right', verticalAlign: 'middle'}}
                                      icon='ethereum'
                                      color="black"
                                      onClick={this.increaseReward}
                                        />
                          }
                          content={"Increase Reward"}
                          position='bottom right'
                          inverted />
                      :  <Popup
                          trigger={
                              <Button style={{float: 'right', verticalAlign: 'middle'}}
                                      icon='ethereum'
                                      color="black"
                                      disabled
                              />
                          }
                          position='bottom right'
                          inverted />
                  }
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Publish Time</Table.Cell>
                  <Table.Cell style={{fontSize: 20}}>{publishTime}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Answering Duration (hours)</Table.Cell>
                  <Table.Cell style={{fontSize: 20}}>
                      <span style={{verticalAlign: 'middle', lineHeight: '33px'}}>
                          {maxDuration}
                      </span>
                      {this.state.questionState == 0 && remainingTime > 0
                          ? <Popup
                              trigger={
                                  <Button style={{float: 'right', verticalAlign: 'middle'}}
                                          icon='clock'
                                          color="violet"
                                  />}
                              content={
                                  <span>
                                  <span>Remaining time - </span>
                                  <Countdown date={Date.now() + remainingTime}>
                                  </Countdown>
                              </span>}
                              position='bottom right'
                              inverted />
                          : this.state.questionState == 0 && remainingTime == 0
                          ? <Popup trigger={<Button style={{float: 'right', verticalAlign: 'middle'}}
                                                    icon='clock'
                                                    color="red"/>}
                                  flowing hoverable>
                              <Grid centered divided columns={2}>
                                <Grid.Column textAlign='center'>
                                  <p>Extends the validity of question by 1 hour</p>
                                  <Button onClick={this.timeExtension}>Extend Deadline</Button>
                                </Grid.Column>
                                {this.state.balanceError == true ?
                                  <Grid.Column textAlign='center'>
                                    <p>Reward Balance Error</p>
                                    <Button onClick={this.fixBalance}>Fix Balance</Button>
                                  </Grid.Column> :
                                  <Grid.Column textAlign='center'>
                                    <p>Proceed to the voting phase</p>
                                    <Button onClick={this.votePhase}>Voting Phase</Button>
                                  </Grid.Column> }
                              </Grid>
                            </Popup>
                          : <Popup
                              trigger={
                                  <Button style={{float: 'right', verticalAlign: 'middle'}}
                                          icon='clock'
                                          color="red"
                                          disabled
                                  />
                              }
                              position='bottom right'
                              inverted />
                        }
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Voting Duration (hours)</Table.Cell>
                    <Table.Cell style={{fontSize: 20}}>
                      <span style={{verticalAlign: 'middle', lineHeight: '33px'}}>
                          {maxDuration}
                      </span>
                      {this.state.questionState == 1 && remainingTime > 0
                          ? <Popup
                              trigger={
                                  <Button style={{float: 'right', verticalAlign: 'middle'}}
                                          icon='clock'
                                          color="violet"
                                  />}
                              content={
                                  <span>
                                  <span>Remaining time - </span>
                                  <Countdown date={Date.now() + remainingTime}>
                                  </Countdown>
                              </span>}
                              position='bottom right'
                              inverted />
                          : this.state.questionState == 1 && remainingTime == 0
                          ? <Popup
                              trigger={
                                  <Button style={{float: 'right', verticalAlign: 'middle'}}
                                          icon='clock'
                                          color="red"
                                          onClick={this.rewardPhase}
                                            />
                              }
                              content={"Reward"}
                              position='bottom right'
                              inverted />
                          : this.state.questionState == 0
                          ? <Popup
                              trigger={
                                  <Button style={{float: 'right', verticalAlign: 'middle'}}
                                          icon='clock'
                                          color="red"
                                          disabled
                                  />
                              }
                              position='bottom right'
                              inverted />
                          : <Popup
                              trigger={
                                  <Button style={{float: 'right', verticalAlign: 'middle'}}
                                          icon='clock'
                                          color="red"
                                          disabled
                                            />
                              }
                              position='bottom right'
                              inverted />
                      }
                    </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        </React.Fragment>
      );
  }

  renderAnswers() {
    let answers = this.state.answerList
    answers = sortingAnswers(answers, this.state.sorted);
    // Answering Phase no answers are shown
    if (this.state.questionState != 0){
      return answers.map((answer, index) => {
          var answeredTime = moment.unix(answer[5]).format('Do MMMM YYYY, h:mm a');
          var id = index % 70;
          return <Comment key={index}>
              <Comment.Avatar src={this.state.avatarListIcon[id]} style={{backgroundColor: '#8D8741'}}/>
              <Comment.Content>
                <Comment.Author as='a'>{answer[2]}</Comment.Author>
                <Comment.Metadata>
                  <div>{answeredTime}</div>
                </Comment.Metadata>
                <br/>
                {answer[1] ? <b><font color='red'><Icon name='certificate'/>Rewarded</font></b> : null}
                {this.state.questionState == 2
                  ? <Comment.Metadata>
                    <div><Icon name='thumbs up' />{answer[4]}</div>
                    </Comment.Metadata>
                  : <Comment.Metadata>
                    <div><Icon name='thumbs up' />0</div>
                    </Comment.Metadata>
                }
                <Comment.Text>
                  <Context
                      input='tex'
                      onLoad={ () => console.log("Loaded MathJax script!") }
                      onError={ (MathJax, error) => {
                          console.warn(error);
                          console.log("Encountered a MathJax error, re-attempting a typeset!");
                          MathJax.Hub.Queue(
                            MathJax.Hub.Typeset()
                          );
                      } }
                      options={{
                          asciimath2jax: {
                               useMathMLspacing: true,
                               delimiters: [["$$","$$"]],
                               preview: "none",
                          }
                      }}>
                      <Text text={answer[0]}/>
                  </Context>
                  {answer[7].map((imageName, index) =>
                      <div style={{marginBottom: '10px'}} key={index}>
                          <Image src={"https://ipfs.io/ipfs/"+answer[8][index]} centered={true}/>
                      </div>
                  )}
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>
                    <Button style={{float: 'right', verticalAlign: 'middle'}}
                            icon='thumbs up'
                            onClick={() => this.approveAnswer(answer[2])}
                            size='tiny'
                            content='Approve Answer'
                            color='green'
                    />
                      </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
      });
    }
  }

  renderFiles () {
    let fileHashes = this.state.summary[5];
    let fileNames = this.state.summary[6];

    if (fileHashes.length != 0) {
        return(
            <Segment placeholder>
                <center>
                    <p>Image(s) Uploaded</p>
                    {fileNames.map((fileName, index) =>
                        <div style={{marginBottom: '10px'}} key={index}>
                            <Image src={"https://ipfs.io/ipfs/"+fileHashes[index]} size='massive'/>
                            <Divider hidden/>
                            <p> To download: </p>
                            <Label as='a' size='big' href={"https://ipfs.io/ipfs/"+fileHashes[index]}>
                                <Icon name='download' />
                                {fileName}
                            </Label>
                        </div>
                    )}
                </center>
            </Segment>
        );
    }
  }

  renderAnswersForm() {
    let {files_array} = this.state;
    let elmFiles = null;

    if (files_array !== null) {
        elmFiles = files_array.map((item, index) =>
            <Label as='a' key={index} size='big'>
                {item.name}
                <Icon name='delete'
                      onClick={() => this.onFileRemoved(item)} />
            </Label>
        );
    }
    return(
      <Form error={!!this.state.errorMessage}>
        <Form.TextArea
          placeholder="Enter Answers"
          value={this.state.answer}
          onChange={event => this.setState({ answer: event.target.value })}
        />
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Form.Field>
          {this.renderFilesUpload(elmFiles)}
        </Form.Field>
        <Modal open={this.state.loading}
               trigger={ <Button content='Submit Answers' onClick={this.onSubmitAnswer} loading={this.state.loading} labelPosition='left' icon='edit' primary />}
               basic size='small'>
          <Header content='Posting New Answers' />
          <Modal.Content>
            <p>
              Please wait patiently as the system is submitting your answer to the blockchain.
            </p>
            <Loader active inline="centered">
              Loading
            </Loader>
          </Modal.Content>
        </Modal>
      </Form>
    );
  }

  renderFilesUpload(files) {
    let {files_array} = this.state;
    if(this.state.files_array.length == 0){
      return (
        <Container>
          <input
              style={{ display: 'none' }}
              type='file'
              onChange={() => this.onFileSelected()}
              ref={fileInput => this.fileInput = fileInput}/>
          <Button primary onClick={() => this.fileInput.click()} loading={this.state.fileLoading}>Upload Image</Button>
        </Container>
      )
    } else {
      return (
        <Segment placeholder>
          <center>
              <div style={{marginBottom: '20px'}}>
                  {files}
              </div>
              <input
                  style={{ display: 'none' }}
                  type='file'
                  onChange={() => this.onFileSelected()}
                  ref={fileInput => this.fileInput = fileInput}/>
              <Button primary onClick={() => this.fileInput.click()} loading={this.state.fileLoading}>Upload Files</Button>
          </center>
        </Segment>
      )
    }
  };

  render() {
    if (this.state.login) {
      return (
        <Layout accountType={this.state.accountType}>
          <Container>
            <Divider hidden/>
            {this.renderQuestion()}
            <Divider hidden/>
            {this.renderFiles()}
            {this.state.questionState == 1 ?
              <Container>
                <Header as='h2' textAlign='center'>
                  Voting In Progress
                </Header>
                <p style={{textAlign:'center', fontSize: 20}}>No answers can be submitted</p>
                <Divider/>
              </Container>
               :
              <Header as='h2' textAlign='center'>
                  Submit Your Answers Here
              </Header>
            }
            {this.state.questionState == 1 ? null :
              <Container>
                <p><b>Note:</b> To include math equations, delimit the latex format with $$.</p>
                <a style={{display: "table-cell"}} href="https://www.codecogs.com/latex/eqneditor.php" target="_blank">Link to Supported Latex Editor</a>
              </Container>
            }
            {this.state.questionState == 1 ? null : this.renderAnswersForm()}
            <Button
              icon={this.state.sorted ? "sort numeric down" : "sort numeric up"}
              onClick={ () => { this.setState({ sorted: !this.state.sorted }) }}
              floated="right"
              size="mini"
            />
            <Header as='h2' textAlign='center'>
              Answer(s) Submitted: {this.state.answerList.length}
            </Header>
            <Divider />
            <Comment.Group size='large'>
            {this.renderAnswers()}
            </Comment.Group>
            <ErrorModal error={this.state.voteError}
                        title={'Cannot Approve Own Answers'}
                        content={"You have selected to approve the answer you have provided. Please only approve answers provided by others."}
                        questionAddress={this.state.questionAddress}
                        stateChange={() => {this.setState({ voteError: false })}} />

            <ErrorModal error={this.state.ownerError}
                        title={'Only Available For Owner Of Question'}
                        content={"You cannot change the state of the question as you are not the owner."}
                        questionAddress={this.state.questionAddress}
                        stateChange={() => {this.setState({ ownerError: false })}} />

            <ErrorModal error={this.state.voteMultipleError}
                        title={'Answer Already Approved'}
                        content={"You cannot approve the same answer more than once. Please approve another answer."}
                        questionAddress={this.state.questionAddress}
                        stateChange={() => {this.setState({ voteMultipleError: false })}} />

            <ErrorModal error={this.state.voteMultipleError}
                        title={'Answer Already Approved'}
                        content={"You cannot approve the same answer more than once. Please approve another answer."}
                        questionAddress={this.state.questionAddress}
                        stateChange={() => {this.setState({ voteMultipleError: false })}} />

            <LoadingModal trigger={this.state.changeToVoting}
                          title={'Changing Question State to Voting Phase'}
                          content={"Please wait patiently as the system changes your question state."}
                          loader={"Changing Question State"}/>

            <LoadingModal trigger={this.state.changeToRewarded}
                          title={'Changing Question State to Rewarded Phase'}
                          content={"Please wait patiently as the system changes your question state."}
                          loader={"Changing Question State"}/>

            <LoadingModal trigger={this.state.timeExtension}
                          title={'Extending Question Deadline'}
                          content={"Please wait patiently as the system extends the duration of your question."}
                          loader={"Extending Deadline"}/>

            <LoadingModal trigger={this.state.changeReward}
                          title={'Increasing Reward'}
                          content={"Please wait patiently as the system increases the reward of your question."}
                          loader={"Increasing Reward"}/>

            <LoadingModal trigger={this.state.voting}
                          title={'Approving Answer'}
                          content={"Please wait patiently as the system submits your approval."}
                          loader={"Approving"}/>

            <LoadingModal trigger={this.state.fixError}
                          title={'Fixing Balance Error'}
                          content={"Please wait as the system fixes the balance error of your question."}
                          loader={"Fixing Balance"}/>
            <TimeOutModal timeout={this.state.timeout} />
          </Container>
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

export default QuestionRow;
