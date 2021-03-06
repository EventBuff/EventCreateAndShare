/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 20:43:01
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-28 11:10:55
*/

import React, { Component, PropTypes } from 'react';
import './EventDetail.css';
import Comment from './Comment';
import axios from 'axios';
import { Link } from 'react-router';
import { Table, Panel, Button, Grid } from 'react-bootstrap';

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
      is_creator: 0,
      user_event_content: ''
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
    console.log("get Event detail");
    console.log("eventID = " +  this.state.eventid + " userID = " + this.state.userid);
    axios.get('/eventDetail', {
      params: {
        eventid: slug
      }
      }).then(res => {
        this.showEventDetail(res.data);
    });
  }

  componentDidMount() {
    // Check whether this user has joined or not this event
    this.checkEvent();
    this.getEventDetail();
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
    });
    this.setState({
      posts: ''
    });
    // get updated event detail
    this.getEventDetail();
    alert("You have joined this event");
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
    });
    this.setState({
      posts: ''
    });
    // get updated event detail
    this.getEventDetail();
    alert("You have left this event");
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
    alert("You have closed this event");
  }

  showEventDetail(data) {
    var event_data = data.event;
    // console.log("Event Data = " + data.creatorname);
    // console.log("is log in id = " + this.state.userid);
    this.setState({
      user_event_content: this.state.is_creator
       ? <Button onClick={this.closeEvent}>Close Event</Button>
       : ( this.state.has_join_event
         ? <Button onClick={this.leaveEvent}>Leave Event</Button>
         : <Button onClick={this.joinEvent}>Join Event</Button>
         )
    });
    var user_event_content = this.state.user_event_content;
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
      var beginTime = new Date(event_data.starttime).toString();
      var endtime = new Date(event_data.endtime).toString();
      var close =  event_data.isclose === true?1:0;
      var content =
          <div>
          <div className="event-detail-introduction">
          <div className="event-detail-introduction-h1">
            <h1><Link to={`/eventDetail/${event_data.eventid}`}> {event_data.eventtitle} </Link></h1>
            <hr/>
            </div>
            <div className="event-detail-introduction-image">
            <img src={event_data.eventphoto} role="presentation"/>
            </div>
            <div className="event-detail-introduction-info">
            <p> {event_data.eventtag} </p>
            <p> {event_data.eventdescription} </p>
            </div>
          </div>
          <div className="event-detail-detail">
          <Panel header="Event Details">
                <Table responsive className="event-table" >
                    <tbody>
                     <tr>
                        <td>Creator Name:</td>
                        <td>{data.creatorname}</td>
                      </tr>
                      <tr>
                        <td>Begin Time:</td>
                        <td>{beginTime}</td>
                      </tr>
                      <tr>
                        <td>End Time:</td>
                        <td>{endtime}</td>
                      </tr>
                      <tr>
                        <td>Number of People:</td>
                        <td>{event_data.numofpeople}</td>
                      </tr>
                      <tr>
                        <td>the Recent Number of Participants:</td>
                        <td>{event_data.nownum}</td>
                      </tr>
                      <tr>
                        <td>Location:</td>
                        <td>{event_data.location}</td>
                      </tr>
                      <tr>
                        <td>Is close:</td>
                        <td>{close}</td>
                      </tr>
                      <tr>
                        <td>Close Reason:</td>
                        <td>{event_data.closereason}</td>
                      </tr>
                      <tr>
                        <td>{user_event_content}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
              </Panel>
            </div>
          <div>
           <Panel header="Comment">
            <Comment eventid={this.state.eventid}/>
            </Panel>
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
      <div className="EventDetail">
          {posts}
      </div>
    );
  }

}

export default EventDetail;
