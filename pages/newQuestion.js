import React, { Component } from 'react';
import { Form, Button, Input, Message, Dropdown, Header,
  Icon, Segment, Container, TextArea, Divider, Label, Modal, Loader } from 'semantic-ui-react';
import AccountIssueModal from '../components/AccountIssueModal';
import TimeOutModal from '../components/TimeOutModal';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import Question from '../ethereum/question';
import Profile from '../ethereum/profile';
import web3 from '../ethereum/web3';
import EthQuestionToken from '../ethereum/token';
import credentials from '../ethereum/credentials';
import { Router } from '../routes';
import { getIpfsHash } from '../utils/ipfs';
import { logging, checkFieldEmpty, checkTimeField, checkRewardField, lowerCase } from '../utils/functions';
import cookies from 'next-cookies';

class NewQuestion extends Component {
    constructor(props) {
      super(props);
      this.state = {
          questionTitle: '',
          content:'',
          tag: [],
          tagOptions: [],
          reward:'',
          maxDuration:'',
          errorMessage: '',
          loading: false,
          fileLoading: false,
          buffer: null,
          files_array: [],
          fileHashes_array: [],
          fileNames_array: [],
          login: false,
          resourceLoading: true,
          timeout: false,
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

        // Retrieve previously used tags and ether balance
        let deployedQuestions = await factory.methods.getDeployedQuestions().call();
        let deployedQuestionsCount = deployedQuestions.length;
        let tags = [];
        let tagOptions = [];

        for (let i=0; i<deployedQuestionsCount; i++) {
          let question = Question(deployedQuestions[i])
          let summary = await question.methods.getSummary().call();
          tags = [...tags, ...summary[8]]
        }
        // Remove duplicated tags and select recently used tags
        tags = [...new Set(tags)]
        tags = tags.reverse().slice(0,30);

        for (let i = 0; i<tags.length; i++) {
            tagOptions.push({
                key: i,
                text: tags[i],
                value: tags[i]
            });
        }

        this.setState( { login: login,
                         accountType: accountType,
                         tagOptions: tagOptions });
      }
      this.setState( { resourceLoading: false });
    }

    // Submit the question to be stored on the Ethereum Blockchain
    onSubmit = async () => {
        this.setState({ loading: true, errorMessage: '' });
        // Ensures all fields are filled
        if (checkFieldEmpty(this.state.questionTitle) && checkFieldEmpty(this.state.content) && checkRewardField(this.state.reward) && checkTimeField(this.state.maxDuration)){
          try {
              const account = this.props.account;
              // Logs the transactions
              let logTransaction = logging("Created New Question: " + this.state.questionTitle + " [" + this.state.reward + " EQT(s) as reward]");
              // Create new question
              await factory.methods
              .createQuestion(this.state.questionTitle, this.state.content, lowerCase(this.state.tag), Number(this.state.reward)*10e3, parseFloat(this.state.maxDuration) * 60 * 60,
                this.state.fileHashes_array, this.state.fileNames_array, logTransaction, EthQuestionToken._address)
              .send({
                  from: account,
                  gasPrice: '0'
              });
              // Transfer EQT into question contract
              const address = await factory.methods.getLastDeployedQuestion().call();
              await EthQuestionToken.methods.transfer(address, Number(this.state.reward)*10e3)
              .send({
                  from: account,
                  gasPrice: '0'
              });
              Router.pushRoute('/home'); // Automatic redirect the user.
          } catch (err) {
              if (err.message == "Returned error: authentication needed: password or unlock") {
                this.setState({ loading: false });
                this.setState({ timeout: true });
              }
              this.setState({ errorMessage: err.message + " Or check if you have sufficient EQT(s)"});
          }
          this.setState({ loading: false });
        } else {
          this.setState({ errorMessage: "Required Field(s) Empty or Invalid Input" });
          this.setState({ loading: false });
        }
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

    handleAddition = (e, { value }) => {
      this.setState({ tagOptions: [{ text: value, value }, ...this.state.tagOptions] });
    }

    renderFilesUpload(files) {
      let {files_array} = this.state;
      if(this.state.files_array.length == 0){
        return (
          <Segment placeholder>
            <Header icon>
              <Icon name='images outline' />
              No images are uploaded for this question
            </Header>
            <input
                style={{ display: 'none' }}
                type='file'
                onChange={() => this.onFileSelected()}
                ref={fileInput => this.fileInput = fileInput}/>
            <Button primary onClick={() => this.fileInput.click()} loading={this.state.fileLoading}>Upload Image</Button>
          </Segment>
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
        return (
          <Layout accountType={this.state.accountType} page={"New"}>
              <Container>
                <Divider hidden/>
                <Segment textAlign='center' as='h3'>Creating Of New Question</Segment>
                <Form error={!!this.state.errorMessage} style={{ marginTop: '10px' }}>
                    <Form.Field required={true}>
                        <label>Question Title</label>
                        <Input
                            placeholder="Enter Title"
                            value={this.state.questionTitle}
                            onChange={event => this.setState({ questionTitle: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field required={true}>
                        <label>Question Description (To include math questions, delimit the latex format with $$)</label>
                        <Label>Example: This is my equation: $$1 \triangleright 1 \bigcirc  \bigcirc $$</Label>
                        <a style={{display: "table-cell"}} href="https://www.codecogs.com/latex/eqneditor.php" target="_blank">Link to Supported Latex Editor</a>
                        <TextArea
                            placeholder="Enter Description"
                            value={this.state.content}
                            onChange={event => this.setState({ content: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Tags</label>
                        <Dropdown clearable
                                  options={this.state.tagOptions}
                                  selection
                                  multiple
                                  allowAdditions
                                  search
                                  placeholder='Select from recently used tags or create your own tags'
                                  value={this.state.tag}
                                  onChange={ (e, { value }) => this.setState({ tag: value })}
                                  onAddItem={this.handleAddition} />

                    </Form.Field>
                    <Form.Field required={true}>
                        <label>EQT(s)</label>
                        <Input
                            label="EQT(s)"
                            labelPosition="right"
                            placeholder='Enter your value of reward'
                            value={this.state.reward}
                            onChange={event => this.setState({ reward: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field required={true}>
                        <label>Maximum Duration</label>
                        <Input
                            label="hour(s)"
                            labelPosition="right"
                            placeholder='Enter the duration for the question to be valid'
                            value={this.state.maxDuration}
                            onChange={event => this.setState({ maxDuration: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                      {this.renderFilesUpload(elmFiles)}
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Modal open={this.state.loading} trigger={<Button primary onClick={this.onSubmit}>Submit Question</Button>} basic size='small'>
                      <Header content='Posting New Question' />
                      <Modal.Content>
                        <p>
                          System is submitting your question to the blockchain. Upon successful submission, you will be redirected to the Home Page.
                          This process might take awhile.
                        </p>
                        <Loader active inline="centered">
                          Loading
                        </Loader>
                      </Modal.Content>
                    </Modal>
                </Form>
              </Container>
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

export default NewQuestion;
