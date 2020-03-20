import React, { Component } from 'react';
import { Icon, Segment, Divider, Container } from 'semantic-ui-react';
import { Link, Router } from '../routes';

class LoginHeader extends Component {
  render() {
    return(
      <React.Fragment>
          <Segment inverted style={{marginBottom:'0px', fontSize:'20px', borderRadius:'0px', border:'0px'}} as='h1' textAlign='center'>
            <Icon name='ethereum' />Block-Chain Based Question Answering System
          </Segment>
          <Divider hidden/>
      </React.Fragment>
    );
  }
}

export default LoginHeader;
