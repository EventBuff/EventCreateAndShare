/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 20:43:01
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-06 21:57:41
*/

import React, { Component, PropTypes } from 'react';
import './EventDetail.css';
import Comment from './Comment';
import axios from 'axios';
import { Link } from 'react-router';
import { Col, Button, Grid } from 'react-bootstrap';

class EventDetail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      postsCheckNum: 0,
      eventid: this.props.params.slug,
      userid: localStorage["userid"],
      has_join_event: 0,
      is_creator: 0
    };
    this.showEventDetail = this.showEventDetail.bind(this)
    this.joinEvent = this.joinEvent.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
    this.closeEvent = this.closeEvent.bind(this);
    this.checkEvent = this.checkEvent.bind(this);
    this.getEventDetail = this.getEventDetail.bind(this);
  }

  componentWillMount() {
    const slug = this.props.params.slug;
    console.log(slug);
  }

  checkEvent(){
    axios.get('/eventDetail/check', {
      params: {
        eventid: this.state.eventid,
        userid: this.state.userid
      }
      }).then(res => {
        console.log(res.data);
        var is_creator = 0;
        var has_join_event = 0;
        if (res.data === 'creator'){
          is_creator = 1;
          has_join_event = 1;
        }else if (res.data === 'participant'){
          has_join_event = 1;
        }else{
          has_join_event = 0
        }
        this.setState({
          is_creator: is_creator,
          has_join_event: has_join_event
        });
        console.log(is_creator, has_join_event);
    });
  }

  getEventDetail(){
    const slug = this.props.params.slug;
    axios.get('/eventDetail', {
      params: {
        eventid: slug
      }
      }).then(res => {
        this.showEventDetail(res.data);
    });
  }

  componentDidMount() {
    this.getEventDetail();
    // Check whether this user has joined or not this event
    this.checkEvent();
  }

  joinEvent(){
    axios.get('/eventDetail/join', {
      params: {
        eventid: this.state.eventid,
        userid: this.state.userid
      }
      }).then(res => {
        this.setState({
          has_join_event: res.data === 'success'? 1: 0
        });
        alert(res.data);
    });
    // get updated event detail
    this.getEventDetail();
  }

  leaveEvent(){
    axios.get('/eventDetail/leave', {
      params: {
        eventid: this.state.eventid,
        userid: this.state.userid
      }
      }).then(res => {
        this.setState({
          has_join_event: res.data === 'success'? 0: 1
        });
        alert(res.data);
    });
    // get updated event detail
    this.getEventDetail();
  }

  closeEvent(){
    axios.get('/eventDetail/close', {
      params: {
        eventid: this.state.eventid,
        userid: this.state.userid
      }
      }).then(res => {
        alert(res.data);
    });
    // get updated event detail
    this.getEventDetail();
  }

  showEventDetail(data) {
    var event_data = data.event;
    // console.log("Event Data = " + data.creatorname);
    // console.log("is log in id = " + this.state.userid);
    var user_event_content = this.state.is_creator
      ? <Button onClick={this.closeEvent}>Close Event</Button>
      : this.state.has_join_event
        ? <Button onClick={this.leaveEvent}>Leave Event</Button>
        : <Button onClick={this.joinEvent}>Join Event</Button>
    // var creator_content = this.state.is_creator
    //   ? <Button onClick={this.closeEvent}>Close Event</Button>
    //   : ''
    // var join_event_content = this.state.has_join_event
    //   ? <Button onClick={this.leaveEvent}>Leave Event</Button>
    //   : <Button onClick={this.joinEvent}>Join Event</Button>


    if (data === null || data.length === 0) {
      this.setState({
          posts: ''
      });
    } else {
      var content =
          <div>
            <h4><Link to={`/eventDetail/${event_data.eventid}`}> {event_data.eventtitle} </Link></h4>
            <p> {event_data.eventtag} </p>
            <p> {event_data.eventdescription} </p>
            <p> {event_data.starttime} </p>
            <p> {event_data.endtime} </p>
            <p> {event_data.numofpeople} </p>
            <p> {event_data.nownum} </p>
            <p> {event_data.eventphoto} </p>
            <p> {event_data.location} </p>
            <p> {event_data.isclose} </p>
            <p> {event_data.closereason} </p>
            <p> {data.creatorname} </p>
            {user_event_content}
            <div>
            <Comment eventid={this.state.eventid}/>
            </div>
          </div>
      this.setState({
          posts: content,
          postsCheckNum: 1
      });
    }
  }

  render() {
    let detail =
      <Grid>
        <h2>We could not find that event.</h2>
        <h3>Try searching or using the top navigation to find what you are looking for.</h3>
      </Grid>;
    var posts = this.state.postsCheckNum
      ? this.state.posts
      : detail;


    return(
      <div>
        <Col md={3}>
        </Col>
        <Col xs={12} md={9}>
          {posts}
        </Col>
      </div>
    );
  }

}

export default EventDetail;
