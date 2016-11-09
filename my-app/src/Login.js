/*
* @Author: Lich Amnesia
* @Date:   2016-11-07 17:26:13
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-07 17:46:35
*/

import React, { Component } from 'react';
// import logo from './logo.svg';
import './Login.css';
// import Navigation from './Navigation';
import axios from 'axios';
import { Button, Row, Col, ListGroup, ListGroupItem, ControlLabel, Form, FormGroup, FormControl, Checkbox}
  from 'react-bootstrap';
import { Link } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '111@222.com',
      password: '66788',
      posts: '',
      postsCheckNum: 0
    };
    this.showProfile = this.showProfile.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
      var content = 
          <div>
            <h4> {data.email} </h4>
            <p> {data.gender} </p>
            <p> {data.firstname} </p>
            <p> {data.lastname} </p>
            <p> {data.phonenumber} </p>
          </div>;
      this.setState({ 
          posts: content,
          postsCheckNum: 1
      });
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

  render() {
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
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>

    return (
      <div>
      {formInstance}
      </div>
    );
  }
}

export default Login;
