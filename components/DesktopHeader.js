import React, { Component } from 'react';
import { Menu, Icon, Input, Segment, Sticky, Container, Button, Dropdown, Grid } from 'semantic-ui-react';
import { Link, Router } from '../routes';

class DesktopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    }
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

  render() {
    return (
      <React.Fragment>
        <Segment inverted style={{marginBottom:'0px', fontSize:'20px', borderRadius:'0px', border:'0px', paddingRight:'5%'}} as='h1' textAlign='center'>
          <Icon name='ethereum' />Block-Chain Based Question Answering System
          <Button compact floated='right' inverted color='orange' onClick={()=>{Router.pushRoute('/')}}><Icon name='user' circular size='small'/>Log Out</Button>
        </Segment>
        <Sticky context={this.props.contextRef}>
            <Menu inverted size='massive' fluid style={{marginTop:'0px', borderRadius:'0px', border:'0px', paddingLeft:'5%', paddingRight:'5%'}}>
              <Link route="/home">
                <Menu.Item
                  name='Home'
                  icon='home'
                  active = {this.props.page === 'Home'}
                  color='orange'
                />
              </Link>
              <Link route="/about">
                <Menu.Item
                  name='About'
                  icon='question'
                  active = {this.props.page === 'About'}
                  color='orange'
                />
              </Link>
              <Link route='/userProfile'>
                <Menu.Item
                  name='Profile'
                  icon='user'
                  active = {this.props.page === 'Profile'}
                  color='orange'
                />
              </Link>
              <Link route="/new">
                <Menu.Item
                  name='Ask Question'
                  icon='pencil alternate'
                  active = {this.props.page === 'New'}
                  color='orange'
                />
              </Link>
              <Link route="/feedback">
                <Menu.Item
                  name='Feedback'
                  icon='comment'
                  active = {this.props.page === 'Feedback'}
                  color='orange'
                />
              </Link>
              {this.props.accountType == "Admin" ? <Link route="/admin">
                                                    <Menu.Item
                                                      name='Admin Options'
                                                      icon='settings'
                                                      active = {this.props.page === 'Admin'}
                                                      color='orange'
                                                      />
                                                   </Link>
                                                 : null }
              <Menu.Menu position="right">
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
              </Menu.Menu>
            </Menu>
        </Sticky>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default DesktopHeader;
