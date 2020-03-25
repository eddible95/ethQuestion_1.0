import React, { Component } from 'react';
import MobileDetect from 'mobile-detect';
import _ from 'lodash';
import { Button, Header, Table, Statistic, Rating, Grid, Loader, List, Popup,
   Divider, Container, Icon, Label, Progress, Segment, Modal, Responsive, Checkbox, Dropdown } from 'semantic-ui-react';
import AccountIssueModal from '../components/AccountIssueModal';
import { getWidthFactory } from '../utils/device';
import factory from '../ethereum/factory';
import credentials from '../ethereum/credentials';
import Question from '../ethereum/question';
import Profile from '../ethereum/profile';
import Layout from '../components/Layout';
import {Link, Router} from '../routes';
import web3 from '../ethereum/web3';
import { search, sortingQuestions } from '../utils/functions';
import cookies from 'next-cookies';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      accountType: null,
      tags: [],
      topTags: [],
      loading: true,
      sortBy:null,
      data: [],
      summaries: [],
      questionLimit: 30,
      questionLimitChoice: [],
      isSSR: false,
      isMining: false
    };
  }

  static async getInitialProps(props) {
    let isMobileFromSSR = false;
    let queryValue = props.query.value;
    if(props.req) {
      const device = props.req.headers["user-agent"];
      const md = new MobileDetect(device);
      isMobileFromSSR = !!md.mobile();
    }
    return { isMobileFromSSR, queryValue, isLogin: cookies(props).login || '' , account: cookies(props).wallet || ''};
  }

  async componentDidUpdate(prevProps) {
    if(this.props != prevProps) {
      this.fetchQuestionData()
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
      let profileAddress = await factory.methods.getProfile(this.props.account).call();
      let profile = Profile(profileAddress);
      let accountType = await profile.methods.getAccountType().call();
      accountType == 0 ? accountType = "Admin" : accountType = "User"
      await this.fetchQuestionData();
      this.setState( { login: login });
      this.setState( { accountType: accountType });
    }
    this.setState( { loading: false });
  }

  async fetchQuestionData() {
    // Retrieve an array of addresses of questions deployed
    let deployedQuestions = await factory.methods.getDeployedQuestions().call();
    let deployedQuestionsCount = deployedQuestions.length;
    this.setState({ deployedQuestionsCount: deployedQuestionsCount });

    // Retrieve the summaries of all deployed questions
    let summaries = [];
    let searchItem;
    //filter the questions based on search value
    if (this.props.queryValue != undefined && this.props.queryValue != 'favicon.ico') {
        searchItem = decodeURIComponent(this.props.queryValue);
        deployedQuestions = await search(searchItem,deployedQuestions);
        deployedQuestionsCount = deployedQuestions.length;
    }

    for(let i=0; i<deployedQuestionsCount; i++) {
      let question = Question(deployedQuestions[i]);
      let summary = await question.methods.getSummary().call();
      // Filter out flagged questions
      if (!summary[9]) {
        summaries[i] = summary;
        let answerList = await question.methods.getAnswerList().call();
        summaries[i][10] = answerList.length;
        summaries[i][11] = deployedQuestions[i];
      }
    }
    summaries = summaries.reverse()
    // Displays questions in interval of 30
    let questionLimitChoice = [30]
    let choice = Math.floor(summaries.length/30)
    for (let i=1; i<=choice; i++) {
      questionLimitChoice.push(30*(i+1))
    }

    // Get the top 10 used tags
    let tags = {};
    summaries = summaries.slice(0, this.state.questionLimit)
    summaries.forEach(summary =>{
      summary[8].forEach(tag => {
        if (tags[tag] == undefined) {
          tags[tag] = 1;
        } else {
          tags[tag] = tags[tag] + 1;
        }
      })
    })
    let sortedTags = Object.keys(tags).map(function(key) {
      return [key, tags[key]];
    });

    // Sort the array based on the second element
    sortedTags.sort(function(first, second) {
      return second[1] - first[1];
    });

    // Array of all tags
    let tagList = [];
    sortedTags.forEach(tag=> {
      tagList.push(tag[0])
    })

    // Array with only the first 10 items
    tags = [];
    sortedTags.slice(0, 10).forEach(tag => {
      tags.push(tag[0])
    })
    let isMining = await web3.eth.isMining();
    let blockNumber = await web3.eth.getBlockNumber();
    let users = await factory.methods.getEthWallets().call();
    this.setState({ isMining: isMining, blockNumber: blockNumber, users: users.length });
    this.setState({ topTags: tags });
    this.setState({ tags: tagList });
    this.setState({ summaries: summaries });
    this.setState({ questionLimitChoice: questionLimitChoice });
  }

  renderQuestionHeader() {
    return(
      <Table.Row>
        <Table.HeaderCell textAlign='center' width={2}><span style={{fontSize: 15, color: '#6A737C'}}>Current Phase</span></Table.HeaderCell>
        <Table.HeaderCell textAlign='center' width={2}><span style={{fontSize: 15, color: '#6A737C'}}>Answers Submitted</span></Table.HeaderCell>
        <Table.HeaderCell textAlign='center' width={2}><span style={{fontSize: 15, color: '#6A737C'}}>Reward</span></Table.HeaderCell>
        <Table.HeaderCell textAlign='center'><span style={{fontSize: 15, color: '#6A737C'}}>Question Title</span></Table.HeaderCell>
      </Table.Row>
    );
  }

  // Renders out the list of question
  renderQuestionList() {
    let summaries = this.state.summaries
    summaries = sortingQuestions(summaries, this.state.sortBy);
    return summaries.map((summary, index) => {
      const questionState = summary[4];
      const tagList = summary[8];
      return <Table.Row key={index}>
        <Table.Cell textAlign='center' width={2}>
            {
              questionState == 0 ? <Statistic size='mini' color='red'>
                              <Statistic.Value><span
                                  style={{fontSize: 15, color: 'red'}}> Answering
                                              </span></Statistic.Value>
                              <Statistic.Label><span style={{fontSize: 15, color: '#6A737C'}}>Phase</span></Statistic.Label>
                          </Statistic>
                        : questionState == 1 ?
                        <Statistic size='mini' color='red'>
                              <Statistic.Value><span
                                  style={{fontSize: 15, color: '#C9C633'}}> Voting
                                              </span></Statistic.Value>
                              <Statistic.Label><span style={{fontSize: 15, color: '#6A737C'}}>Phase</span></Statistic.Label>
                          </Statistic>
                        :<Statistic size='mini' color='red'>
                              <Statistic.Value><span
                                  style={{fontSize: 15, color: '#10EE44'}}> Rewarded
                                              </span></Statistic.Value>
                              <Statistic.Label><span style={{fontSize: 15, color: '#6A737C'}}>Phase</span></Statistic.Label>
                          </Statistic>
            }
          </Table.Cell>
          <Table.Cell textAlign='center' width={2}>
              <Statistic size='mini' color='red'>
                  <Statistic.Value><span style={{fontSize: 15, color: '#6A737C'}}>{summary[10]}</span></Statistic.Value>
                  <Statistic.Label><span style={{fontSize: 15, color: '#6A737C'}}>answer(s)</span></Statistic.Label>
              </Statistic>
          </Table.Cell>
          <Table.Cell textAlign='center' width={2}>
              <Statistic size='mini' color='red'>
                  <Statistic.Value><span style={{fontSize: 15, color: '#6A737C'}}>{summary[2]*1e-4}</span></Statistic.Value>
                  <Statistic.Label><span style={{fontSize: 15, color: '#6A737C'}}>EQT(s)</span></Statistic.Label>
              </Statistic>
          </Table.Cell>
          <Table.Cell textAlign='left'>
              <Grid.Row textAlign='left'>
                  <span style={{fontSize: 18, color: '#6A737C', cursor: 'pointer'}} onClick={() => Router.pushRoute(`/questions/${summary[11]}`)}><a>{summary[0]}</a></span>
              </Grid.Row>
              {this.renderTag(tagList, "mini")}
          </Table.Cell>
      </Table.Row>
    });
  }

  renderMobileQuestionList() {
    let summaries = this.state.summaries
    summaries = sortingQuestions(summaries, this.state.sortBy);
    return summaries.map((summary, index) => {
      const tags = summary[8];
      const questionState = summary[4];
      const tagList = summary[8];
      return <List.Item key={index}>
              <List.Icon name='question circle' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a' onClick={() => Router.pushRoute(`/questions/${summary[11]}`)}>{summary[0]}</List.Header>
                <Grid>
                <Grid.Column width={10}>
                  <List.Description>{"Number of Answer(s): " + summary[10]}</List.Description>
                  <List.Description>{"Reward: " + summary[2]*1e-4 + " EQT(s)" }</List.Description>
                  {this.renderTag(tags, "mini")}
                </Grid.Column>
                <Grid.Column width={4}>
                  {questionState == 0 ? <List.Description><b><font color='red'>{"ANSWERING PHASE"}</font></b></List.Description> : questionState == 1
                  ? <List.Description><b><font color='#C9C633'>{"VOTING PHASE"}</font></b></List.Description>
                  : <List.Description><b><font color='#10EE44'>{"REWARDED PHASE"}</font></b></List.Description> }
                </Grid.Column>
                </Grid>
              </List.Content>
              <Divider hidden/>
            </List.Item>
    });
  }

  // Render each tag individually for each question
  renderTag(tagList, tagSize) {
    const tagColours = ["red", "olive", "blue", "teal", "green"];
    return tagList.map((tag, index) => {
      return(
        <Label as='a' onClick={() => Router.pushRoute(`/${'search/'+encodeURIComponent(tag)}`)}
          tag size={tagSize} key={index} color={tagColours[index%5]}>
          {tag}
        </Label>
      )
    });
  }

  renderTopTags() {
    return (
      <Segment>
        <Header as='h3' textAlign="center">
          <Icon name="tags"/>Top 10 Tags
        </Header>
        {this.renderTag(this.state.topTags, "medium")}
      </Segment>
    );
  }

  renderAbout() {
    return (
      <Segment>
        <Header as='h3' textAlign="center">
          <Icon name="question"/>What Are Question Phases
        </Header>
        <span style={{fontSize: 18, color: 'red'}}>ANSWERING</span>
        <p style={{fontSize: 15}}>You can submit answers but answers will not be shown</p>
        <span style={{fontSize: 18, color: '#C9C633'}}>VOTING</span>
        <p style={{fontSize: 15}}>You can only approve answers submitted</p>
        <span style={{fontSize: 18, color: '#10EE44'}}>REWARDED</span>
        <p style={{fontSize: 15}}>Someone has already earned the reward for the question</p>
      </Segment>
    );
  }

  renderQuestionStatistics() {
    return (
      <Segment>
        <Statistic.Group horizontal color='red'>
          <Statistic>
            <Statistic.Value>{this.state.deployedQuestionsCount}</Statistic.Value>
            <Statistic.Label>Questions Asked</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Statistic.Group horizontal color='yellow'>
          <Statistic>
            <Statistic.Value>{this.state.users}</Statistic.Value>
            <Statistic.Label>Active Users</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    );
  }

  renderBlockChainStatistics() {
    return (
      <Segment>
        <Header as='h3' textAlign="center">
          <Icon name="ethereum"/>Block-Chain Status
        </Header>
        {this.state.isMining ? <Statistic.Value><span
            style={{fontSize: 18, color: 'green'}}>Currently Mining
                        </span></Statistic.Value> : <Statistic.Value><span
            style={{fontSize: 18, color: 'red'}}>Currently Not Mining
                        </span></Statistic.Value>
        }
        <Statistic.Group horizontal color='green'>
          <Statistic>
            <Statistic.Value>{this.state.blockNumber}</Statistic.Value>
            <Statistic.Label>Blocks Mined</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        *When blockchain is not mining, do not create any transaction
      </Segment>
    );
  }

  renderSortSettings() {
    const options = ['Ascending Phase', 'Descending Phase', 'Ascending Answers',
                     'Descending Answers', 'Ascending Rewards', 'Descending Rewards'];
    return (
      <span>
        <Dropdown text='Sorting Questions' multiple>
          <Dropdown.Menu>
            <Dropdown.Header icon='filter' content='Sorting Options' />
            <Dropdown.Menu scrolling>
              {options.map((tag, index) => (
                <Dropdown.Item key={index}
                               text={tag}
                               onClick={() => this.setState({ sortBy : index })}/>
              ))}
            </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
      </span>
    );
  }

  renderFilterSettings() {
    const tagColours = ["red", "olive", "blue", "teal", "green"];
    return (
      <span>
        <Dropdown text='Filter Questions' multiple>
          <Dropdown.Menu>
            <Dropdown.Header icon='tags' content='Tag Label' />
            <Dropdown.Menu scrolling>
              {this.state.tags.map((tag, index) => (
                <Dropdown.Item key={index}
                               text={tag}
                               label={{color: tagColours[index%6], empty: true, circular: true}}
                               onClick={() => Router.pushRoute(`/${'search/'+encodeURIComponent(tag)}`)} />
              ))}
            </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
      </span>
    );
  }

  renderQuestionLimitSettings() {
    return(
      <Dropdown text='Viewing Limit' multiple>
        <Dropdown.Menu>
          <Dropdown.Header icon='list' content='Question Limit' />
          <Dropdown.Menu scrolling>
            {this.state.questionLimitChoice.map((choice, index) => (
              <Dropdown.Item key={index}
                             text={choice}
                             onClick={async () => {
                               await this.setState({ questionLimit : choice});
                               this.fetchQuestionData()
                             }} />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  render() {
    if (this.state.login) {
      return (
        <Layout accountType={this.state.accountType} page={"Home"}>
          <Responsive fireOnMount getWidth={getWidthFactory(this.props.isMobileFromSSR)} minWidth={Responsive.onlyTablet.minWidth}>
            <Divider hidden/>
            <Grid centered>
              <Grid.Column width={10}>
                <Header as='h2' textAlign='center'>
                    Questions Asked
                </Header>
                <Segment textAlign='center'>
                  {this.renderSortSettings()}
                  {this.renderFilterSettings()}
                  {this.renderQuestionLimitSettings()}
                  <Button onClick={ () => {
                      this.setState({ sortBy: ''});
                      Router.pushRoute(`/home`);
                  }}>Clear Fliter/Sort</Button>
                </Segment>
                <Table>
                  <Table.Header>
                    {this.renderQuestionHeader()}
                  </Table.Header>
                  <Table.Body>
                    {this.renderQuestionList()}
                  </Table.Body>
                </Table>
                <Divider hidden/>
                <div style={{ marginTop: 20 }}>Found {this.state.summaries.length} Item(s).</div>
              </Grid.Column>
              <Grid.Column width={3}>
                {this.renderAbout()}
                {this.renderQuestionStatistics()}
                {this.renderTopTags()}
                {this.renderBlockChainStatistics()}
              </Grid.Column>
            </Grid>
          </Responsive>

          <Responsive fireOnMount getWidth={getWidthFactory(this.props.isMobileFromSSR)} maxWidth={Responsive.onlyMobile.maxWidth}>
            <Divider hidden/>
            <Grid centered>
              <Grid.Column>
                <Header as='h2' textAlign='center'>
                    Questions Asked
                </Header>
                <Segment textAlign='center'>
                  {this.renderSortSettings()}
                  {this.renderFilterSettings()}
                  {this.renderQuestionLimitSettings()}
                </Segment>
                <Button onClick={ () => {
                    this.setState({ sortBy: ''});
                    Router.pushRoute(`/home`);
                }}>Clear Fliter/Sort</Button>
                <Divider hidden/>
                <List divided relaxed>
                  {this.renderMobileQuestionList()}
                </List>
                <Divider hidden/>
                <div style={{ marginTop: 20 }}>Found {this.state.summaries.length} Item(s).</div>
              </Grid.Column>
            </Grid>
          </Responsive>
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

export default HomePage;
