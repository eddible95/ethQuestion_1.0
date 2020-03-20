import React from 'react';
import Head from 'next/head';
import { Container, Divider, Icon, Header, Segment } from 'semantic-ui-react';
import LoginHeader from './LoginHeader';

export default props => {
  return (
      <React.Fragment>
          <Head>
            <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
            />
            <link rel="shortcut icon" href="/static/ethIcon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Block-Chain Based Question Answering System</title>
          </Head>
          <LoginHeader />
          {props.children}
          <Divider hidden/>
          <Segment inverted vertical style={{position:"relative", bottom:"0"}}>
            <Container>
              <Header as='h4' inverted textAlign='center'>
                <Icon name='ethereum'/>Block-Chain Based Question Answering System
              </Header>
              <p style={{textAlign:"center"}}>
               A Final Year Project | Powered by Ethereum | Created Using React JS
              </p>
            </Container>
          </Segment>
      </React.Fragment>
  );
};
