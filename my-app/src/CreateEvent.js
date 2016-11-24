/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 20:43:01
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-23 17:43:14
*/

import React, { Component, PropTypes } from 'react';
import './CreateEvent.css';
import axios from 'axios';
import { Link } from 'react-router';
import { HelpBlock, Modal, Button, Col, ControlLabel, Form, FormGroup, FormControl, Checkbox}
  from 'react-bootstrap';
import Datetime from 'react-datetime';

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
      userid: localStorage["userid"],
      startTime: new Date(),
      endTime: new Date()
    };
    this.showEventDetail = this.showEventDetail.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
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

  handleChangeStartTime(event) {
    // console.log(event._d);
    this.setState({startTime: event._d});
  }

  handleChangeEndTime(event){
    // console.log(event._d);
    this.setState({endTime: event._d});
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
                  ref="eventtitle"
                />
                <HelpBlock>Enter your event title</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Start Time</ControlLabel>
                <Datetime value={this.state.startTime} onChange={this.handleChangeStartTime}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>End Time</ControlLabel>
                <Datetime value={this.state.endTime} onChange={this.handleChangeEndTime}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  type="text"
                  ref="eventdescription"
                  placeholder="This is an event about hiking."
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Number of People</ControlLabel>
                <FormControl
                  type="text"
                  ref="numofpeople"
                  placeholder="10"
                />
                <HelpBlock>Enter max number of people in this event except you</HelpBlock>
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select Tag</ControlLabel>
                <FormControl componentClass="select" ref="eventtag">
                  <option value="hiking">hiking</option>
                  <option value="study">study</option>
                  <option value="party">shopping</option>
                  <option value="tea/coffee">tea/coffee</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>location</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Boulder"
                  ref="location"
                />
              </FormGroup>
              <Button type="submit">
                Submit
              </Button>
            </form>
    return(
      <div>

        <Col md={3} />
        <Col md={6}>
        {posts}
        {content}
        </Col>
      </div>
    );
  }

}

export default CreateEvent;
