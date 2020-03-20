import React, { Component } from 'react';
import { Container, Segment, Icon, Header } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical >
        <Header as='h4' inverted textAlign='center'>
          <Icon name='ethereum'/>Block-Chain Based Question Answering System
        </Header>
        <p style={{textAlign:"center"}}>
          SCSE Final Year Project | Powered By Ethereum | Created Using React JS
        </p>
      </Segment>
    );
  }
}

export default Footer;
