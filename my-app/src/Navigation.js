/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 14:58:09
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-09 11:31:04
*/

/*
* @Author: Lich Amnesia
* @Date:   2016-11-04 14:51:22
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-06 14:57:43
*/

import React, { Component } from 'react';
import './Navigation.css';
import Event from './Event';
import axios from 'axios';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      value: '',
      content: '',
      userid:'5',
    };
    this.myFunction = this.myFunction.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
 
  render() {
    var content = this.state.content;
    switch (this.state.current) {
      case "Search Event":
        // window.open();
        content =  <Event />;
        break;
      case "Create":
        content =  "This key is 2";
        break;
      default:
        content = "The original";
    }
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
            <Nav pullRight>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <LinkContainer to="/login">
                <NavItem eventKey="Log In">Log In</NavItem>
              </LinkContainer>
              <LinkContainer to={`/profile/${this.state.userid}`}>
                <NavItem eventKey="Check Profile">Profile</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="content-div">

        </div>
      </div>
    );
  }
}

export default Navigation;
