/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 20:43:01
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-14 11:48:31
*/

import React, { Component, PropTypes } from 'react';
import './CreateEvent.css';
import axios from 'axios';
import { Link } from 'react-router';
import { HelpBlock, Modal, Button, Col, ControlLabel, Form, FormGroup, FormControl, Checkbox}
  from 'react-bootstrap';

// Need update for the api
class CreateEvent extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      postsCheckNum: 0,
      userid: localStorage["userid"]
    };
    this.showEventDetail = this.showEventDetail.bind(this)
  }

  componentWillMount() {
  }

  componentDidMount() {

  }

  showEventDetail(data) {
    console.log(data);
    console.log("is log in" + this.state.userid);
    if (data === null || data.length === 0) {
      this.setState({
          posts: ''
      });
    } else {
      var content =
          <div>
            <h4><Link to={`/eventDetail/${data.eventid}`}> {data.eventtitle} </Link></h4>
            <p> {data.eventtag} </p>
            <p> {data.eventdescription} </p>
          </div>;
      this.setState({
          posts: content,
          postsCheckNum: 1
      });
    }
  }

  render() {
    var posts = this.state.posts
    var content = 
        <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>Event Title</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Mountain Hiking"
                  ref="email"
                />
                <HelpBlock>Enter your event title</HelpBlock>
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
    return(
      <div>
        <Col md={3} />
        <Col md={9}>
        {posts}
        {content}
        </Col>
      </div>
    );
  }

}

export default CreateEvent;
