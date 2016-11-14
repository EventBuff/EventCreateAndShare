/*
* @Author: Lich Amnesia
* @Date:   2016-11-07 17:26:13
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-14 11:29:17
*/

import React, { Component } from 'react';
// import logo from './logo.svg';
import './Login.css';
// import Navigation from './Navigation';
import axios from 'axios';
import { HelpBlock, Modal, Button, Col, ControlLabel, Form, FormGroup, FormControl, Checkbox}
  from 'react-bootstrap';
import ReactDom from 'react-dom';
// import { Link } from 'react-router';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '111@222.com',
      password: '66788',
      posts: '',
      postsCheckNum: 0,
      showModal: false
    };
    this.showProfile = this.showProfile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  componentDidMount() {
    // const slug = this.props.params.slug;
    // axios.get('/profile', {
    //   params: {
    //     userid: slug
    //   }
    //   }).then(res => {
    //     this.showProfile(res.data);
    //   });
  }

  showProfile(data) {
    console.log(data);
    if (data === null || data.length === 0) {
      this.setState({
          posts: ''
      });
    } else {
      const userid = String(data.userid);
      console.log(userid);
      // window.oepn( {} , 'profile', '/profile/' + userid);
      // this.props.history.replaceState(null, '/profile/' + {userid});
      localStorage.setItem("userid", userid);
      localStorage.setItem("isadmin", data.isadmin);

      window.location.href='/profile/' + userid;
      // window.open('/profile/' + userid);
      // window.open("http://www.w3schools.com");
    }
  }


  handleClick(){
    var log_email = ReactDom.findDOMNode(this.refs.log_email).value;
    var log_password = ReactDom.findDOMNode(this.refs.log_password).value;
    console.log("value: " + log_email + log_password);
    axios.get('/login', {
        params: {
          email: log_email,
          password: log_password
        }
      }).then(res => {
        console.log(res.data);
        this.showProfile(res.data);
      });
  }

  // need to add ajax to create account
  handleSubmit(){
    console.log("click sign up");
    var sign_email = ReactDom.findDOMNode(this.refs.email).value;
    var sign_username = ReactDom.findDOMNode(this.refs.username).value;
    var sign_password = ReactDom.findDOMNode(this.refs.password).value;
    var sign_repassword = ReactDom.findDOMNode(this.refs.repassword).value;
    if (sign_password !== sign_repassword){
      alert("password not same");
      return

    }
    axios.get('/signup', {
        params: {
          email: sign_email,
          username: sign_username,
          password: sign_password
        }
      }).then(res => {
        console.log(res.data);
        if (res.data === 'success'){
          alert("You have successfully signed up");
        }
    }); 
    
  }

  render() {
    var signContent =
      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl
                  type="email"
                  placeholder="abcd1234@colorado.edu"
                  ref="email"
                />
                <HelpBlock>Enter the colorado email address</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>User Name</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="User Name"
                  ref="username"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="Password"
                  placeholder="Password"
                  ref="password"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Repeat Password</ControlLabel>
                <FormControl
                  type="Password"
                  placeholder="Repeat Password"
                  ref="repassword"
                />
              </FormGroup>
              <Button type="submit">
                Submit
              </Button>
            </form>
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

    var formInstance =
    this.state.postsCheckNum
      ? this.state.posts
      :
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" ref="log_email"/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" ref="log_password"/>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button onClick={this.handleClick}>
          log in
        </Button>
        <Button
          onClick={this.open}
        >
          Sign Up
        </Button>
      </Col>
    </FormGroup>
  </Form>

    return (
      <div>
      {formInstance}
      {signContent}
      </div>
    );
  }
}

export default Login;
