import React, { Component } from 'react';
import { Menu, Segment, Container, Icon, Header, Grid,
   Input, Button, Sticky, Rail, Sidebar } from 'semantic-ui-react';
import { Link, Router } from '../routes';

class HeaderMobile extends Component {
  constructor(props) {
    super(props);
    this.state ={value:''}

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(e) {
      this.setState({ value: e.target.value });
   }

  keyPress(e){
      if(e.keyCode == 13){
         if (this.state.value!='')
              Router.pushRoute(`/${'search/'+encodeURIComponent(this.state.value)}`);
      }
  }

  renderSideBar() {
    const {
        handleSidebarHide,
        handleToggle,
        sidebarOpened,
        children
    } = this.props;

    return (
      <React.Fragment>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={sidebarOpened}
            width='thin'
            icon='labeled'>
            <Menu.Item header>
              <h3>Question Answering System</h3>
            </Menu.Item>

            <Link route="/home">
              <a className = "item">
                <Icon name='home'/>
                Home
              </a>
            </Link>
            <Link route="/about">
              <a className = "item">
                <Icon name='question'/>
                About
              </a>
            </Link>
            <Link route="/userProfile">
              <a className = "item">
                <Icon name='user'/>
                Profile
              </a>
            </Link>
            <Link route="/new">
              <a className = "item">
                <Icon name='pencil alternate'/>
                Ask Question
              </a>
            </Link>
            <Link route="/feedback">
              <a className = "item">
                <Icon name='comment'/>
                Feedback
              </a>
            </Link>
            <Link route="/leaderboard">
              <a className = "item">
                <Icon name='trophy'/>
                Leaderboard
              </a>
            </Link>
            {this.props.accountType == "Admin" ? <Link route="/admin">
                                                  <a className = "item">
                                                    <Icon name='settings'/>
                                                    Admin Settings
                                                  </a>
                                                 </Link>
                                               : null }
             <Link route="/login">
               <a className = "item">
                 <Icon name='power off'/>
                 Log Out
               </a>
             </Link>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} style={{minHeight: '100vh'}}>
            <Rail
              internal
              position="left"
              attached
              style={{ top: "auto", height: "auto", width: "100%" }}>
              <Sticky context={this.props.contextRef}>
                <Segment inverted vertical style={{ minHeight: 50 , padding: '1em 0em 0em 0em', textAlign: 'flex-end'}}>
                  <Menu inverted fixed='top' size='large' secondary>
                    <Container>
                      <Menu.Item onClick={handleToggle}>
                        <Icon name='sidebar' />
                      </Menu.Item>
                      <Menu.Item header style={{padding: 0}}>
                        <Icon name='ethereum' style={{float: 'left'}}/>
                        Ethereum Question Answering System
                      </Menu.Item>
                    </Container>
                  </Menu>
                  <Container style={{marginTop: '40px'}}>
                    <Grid inverted style={{padding: '0em 0.7em 0em 1.5em'}} verticalAlign='bottom'>
                      <Grid.Row>
                        <Menu secondary inverted fluid>
                          <Menu.Item>
                            <Input icon={<Icon name="search" link onClick={() => {
                             if (this.state.value!='') {
                               Router.pushRoute(`/${'search/'+encodeURIComponent(this.state.value)}`);
                             }
                            }}/>}
                            placeholder="Search..."
                            onKeyDown={this.keyPress}
                            onChange={this.handleChange}
                             />
                          </Menu.Item>
                          <Button compact floated='right' inverted color='orange' onClick={()=>{Router.pushRoute('/new')}}>
                            <Icon name='pencil alternate' circular size='small'/>Ask Question
                          </Button>
                        </Menu>
                      </Grid.Row>
                      </Grid>
                    </Container>
                  </Segment>
                </Sticky>
              </Rail>
              {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </React.Fragment>
    );
  }

  render() {
    return(
      <React.Fragment>
      {this.renderSideBar()}
      </React.Fragment>
    );
  }
}

export default HeaderMobile;
