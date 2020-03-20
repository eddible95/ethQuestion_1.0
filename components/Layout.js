import Head from 'next/head';
import React, { Component } from 'react';
import MobileDetect from 'mobile-detect';
import { Container, Responsive, Sidebar, Divider } from 'semantic-ui-react';
import { getWidthFactory } from '../utils/device';
import DesktopHeader from './DesktopHeader';
import MobileHeader from "./MobileHeader"
import Footer from './Footer';

class DesktopContainer extends Component {
  state = {}

  render() {
    const { accountType, page, getWidth, contextRef, children } = this.props;
    return(
      <Responsive fireOnMount getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <DesktopHeader accountType={accountType} contextRef={contextRef} page={page}>
          <Container style={{minHeight:"100vh", width:"100vw"}}>
            {children}
          </Container>
        </DesktopHeader>
      </Responsive>
    );
  }
}

class MobileContainer extends Component {
  state = { sidebarOpened: false };

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { accountType, getWidth, contextRef, children } = this.props;

    return(
      <Responsive fireOnMount as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
          <MobileHeader contextRef={contextRef}
                      accountType={accountType}
                      handleSidebarHide={this.handleSidebarHide}
                      handleToggle={this.handleToggle}
                      sidebarOpened={this.state.sidebarOpened}>
              <Container style={{ paddingTop: "10em", minHeight:"100vh", width:"100vw"}}>
                {children}
              </Container>
          </MobileHeader>
      </Responsive>
    );
  }
}

class Layout extends Component {
  constructor(props) {
    super(props);
  };
  static async getInitialProps(props) {
    let isMobileFromSSR = false;
    if(props.req){
        const device = props.req.headers["user-agent"];
        const md = new MobileDetect(device);
        isMobileFromSSR = !!md.mobile();
    }
    return { isMobileFromSSR };
  }
  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    return (
      <React.Fragment>
        <Head>
          <link
              rel="stylesheet"
              href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link rel="shortcut icon" href="/static/ethIcon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Block-Chain Based Question Answering System</title>
        </Head>
        <div ref={this.handleContextRef}>
          <DesktopContainer accountType={this.props.accountType} getWidth={getWidthFactory(this.props.isMobileFromSSR)} page={this.props.page}>
            {this.props.children}
          </DesktopContainer>

          <MobileContainer accountType={this.props.accountType} getWidth={getWidthFactory(this.props.isMobileFromSSR)}>
            {this.props.children}
          </MobileContainer>
        </div>
        <Divider hidden/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Layout;
