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
import { Grid } from 'react-bootstrap';

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
      has_join_event: 0
    };
    this.showEventDetail = this.showEventDetail.bind(this)
    this.joinEvent = ths.joinEvent.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
  }

  componentWillMount() {
    const slug = this.props.params.slug;
    console.log(slug);
  }

  componentDidMount() {
    const slug = this.props.params.slug;
    axios.get('/eventDetail', {
      params: {
        eventid: slug
      }
      }).then(res => {
        this.showEventDetail(res.data);
      });
    // Check whether this user has joined or not this event
    axios.get('/eventDetail/check', {
      params: {
        eventid: this.state.eventid,
        userid: this.state.userid
      }
      }).then(res => {
        this.setState({
            has_join_event: res.data == 'success'? 1 : 0;
        });
        alert(res.data);
      });
  }

  joinEvent(){
    axios.get('/eventDetail/join', {
      params: {
        eventid: this.state.eventid,
        userid: this.state.userid
      }
      }).then(res => {
        alert(res.data);
      });
  }

  leaveEvent(){
    axios.get('/eventDetail/leave', {
      params: {
        eventid: this.state.eventid,
        userid: this.state.userid
      }
      }).then(res => {
        alert(res.data);
      });
  }

  showEventDetail(data) {
    console.log("Event Data = " + data);
    console.log("is log in id = " + this.state.userid);
    var has_join_event_content = this.state.has_join_event
      ? <Button onClick={this.leaveEvent}>Leave Event</Button>
      : <Button onClick={this.joinEvent}>Join Event</Button>

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
            {has_join_event_content}
            <Comment eventid={this.state.eventid}/>
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
        <div className="React Eshop__nav-spacer" />
        {posts}
      </div>
    );
  }

}

export default EventDetail;
