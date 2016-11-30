/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 14:58:09
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-28 11:33:38
*/

/*
* @Author: Lich Amnesia
* @Date:   2016-11-04 14:51:22
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-06 14:57:43
*/

import React, { Component } from 'react';
import './Navigation.css';
// import Event from './Event';
import axios from 'axios';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      value: '',
      content: '',
      userid: localStorage["userid"],
      isadmin: localStorage["isadmin"]
    };
    this.myFunction = this.myFunction.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.logout = this.logout.bind(this);
  }
  
  myFunction(){
    axios.get('/greeting?name=2', {
        // name: 2
      }).then(res => {
        const posts = res.data.content;
        this.setState({ posts });
      });
   }

  componentDidMount() {
    this.setState({ posts: '' });
    // this.myFunction();
    
    //     res => {
    //     const posts = res.data;
    //     this.setState({ posts });
    // });
  }

  handleClick(e) {
    console.log('click ', {e});
    var c = this.state.current;
    console.log('click ', {c});
    // alert(`selected ${e}`);
    this.setState({
      current: {e}.e
    });
    c = this.state.current;
    console.log('click ', {c});
  }
 
  logout(){
    localStorage.setItem("userid", '');
    localStorage.setItem("isadmin", '');
    
    this.setState({
      userid: '',
      isadmin: ''
    });
    window.location.href='/';
  }

  render() {
    // var content = this.state.content;
    // switch (this.state.current) {
    //   case "Search Event":
    //     // window.open();
    //     content =  <Event />;
    //     break;
    //   case "Create":
    //     content =  "This key is 2";
    //     break;
    //   default:
    //     content = "The original";
    // }
    console.log(this.state.isadmin);
    var admin_content = this.state.isadmin === "true"
      ?  <LinkContainer to={`/Equipment/${this.state.userid}`}>
            <NavItem eventKey="Add Equipment">Add Equipment</NavItem>
         </LinkContainer>
      : ''
    var log_content = this.state.userid == null || this.state.userid.length === 0
      ? <Nav pullRight>
          <LinkContainer to="/login">
            <NavItem eventKey="Log In">Log In</NavItem>
          </LinkContainer>
        </Nav>
      : <Nav pullRight>
          {admin_content}
          <LinkContainer to={`/profile/${this.state.userid}`}>
            <NavItem eventKey="Check Profile">Profile</NavItem>
          </LinkContainer>
          <NavItem eventKey="Log Out" onClick={this.logout}>Log Out</NavItem>
        </Nav>


    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
               <Link to="/">Event Create and Share</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/event">
                <NavItem eventKey="Search Event">Search Event</NavItem>
              </LinkContainer>
              <LinkContainer to="/createevent">
                <NavItem eventKey="Create Event">Create Event</NavItem>
              </LinkContainer>
            </Nav>
            {log_content}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
