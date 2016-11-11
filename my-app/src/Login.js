/*
* @Author: Lich Amnesia
* @Date:   2016-11-07 17:26:13
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-09 17:20:28
*/

import React, { Component } from 'react';
// import logo from './logo.svg';
import './Login.css';
// import Navigation from './Navigation';
import axios from 'axios';
import { OverlayTrigger, Tooltip, Popover, Modal, Button, Col, ControlLabel, Form, FormGroup, FormControl, Checkbox}
  from 'react-bootstrap';
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
      window.location.href='/profile/' + userid;
      // window.open('/profile/' + userid);
      // window.open("http://www.w3schools.com");
    }
  }

  handleClick(){
    console.log("value: " + this.state.email + this.state.password);
    axios.get('/login', {
        params: {
          email: this.state.email,
          password: this.state.password
        }
      }).then(res => {
        this.showProfile(res.data);
      });

  }

  handleSubmit(){
    console.log("click sign up");
  }

  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    var signContent =
      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email Address"
                placeholder="Enter Email"
              />
              <FieldGroup
                id="formControlsUserName"
                type="text"
                label="User Name"
                placeholder="User Name"
              />
              <FieldGroup
                id="formControlsPassword"
                type="Password"
                label="Password"
                placeholder="Enter Password"
              />
              <FieldGroup
                id="formControlsRePassword"
                type="Password"
                label="Re Password"
                placeholder="ReEnter Password"
              />
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
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
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
