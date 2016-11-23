/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 21:56:58
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-23 14:00:09
*/


import React, { Component } from 'react';
// import logo from './logo.svg';
import './Profile.css';
// import Navigation from './Navigation';
import axios from 'axios';
import { Row, Col, ListGroup, ListGroupItem}
  from 'react-bootstrap';
import { Link } from 'react-router';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      postsCheckNum: 0,
      profileData: {},
      check_class: 'active',
      event_class: 'album',
      edit_class: 'album',
      userid: ''
    };
    this.checkProfile = this.checkProfile.bind(this);
    this.showProfile = this.showProfile.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.showEditProfile = this.showEditProfile.bind(this);
    this.showEventHistory = this.showEventHistory.bind(this);
    this.eventHistory = this.eventHistory.bind(this);
  }


  checkProfile(){
    this.setState({'check_class': 'active', event_class: 'album', edit_class: 'album'})
    const slug = this.props.params.slug;
    console.log("for userid " + slug);
    axios.get('/profile', {
      params: {
        userid: slug
      }
      }).then(res => {
        this.showProfile(res.data);
      });
  }

  componentDidMount() {
    this.checkProfile();
    this.setState({
      userid: this.props.params.slug
    });
  }

  showProfile(data) {
    this.setState({
      profileData: JSON.stringify(data)
    })
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

  editProfile(){
    this.setState({'check_class': 'album', event_class: 'album', edit_class: 'active'})
    this.showEditProfile(this.state.profileData);
    console.log(this.state.profileData);
    var data = JSON.parse(this.state.profileData);
    console.log(data)
  }

  showEditProfile(data) {
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

  eventHistory(){
    this.setState({'check_class': 'album', event_class: 'active', edit_class: 'album'})
    // to get event history in userid
    axios.get('/profile/eventhistory', {
      params: {
        userid: this.state.userid
      }
      }).then(res => {
        this.showEventHistory(res.data);
    });
    // this.showEventHistory();
  }

  showEventHistory(data){
    if (data === null || data.length === 0) {
      this.setState({
          posts: ''
      });
    } else {
      var content = data.map((x) =>
          <div key={x.eventid}>
            <h4><Link to={`/eventDetail/${x.eventid}`}> {x.eventtitle} </Link></h4>
            <p> {x.eventdescription} </p>
          </div>
      );

      this.setState({
          posts: content
      });
    }
  }

  render() {
    // var value = this.state.value;
    var posts = this.state.posts;
    // list groun need to changed for editting
    return (
      <div>
        <div>
          <Row>
            <Col className="ProfileNavigation" xs={12} md={3}>
              <p> Profile </p>
              <ListGroup>
                <ListGroupItem className={this.state.check_class} onClick={this.checkProfile}>Check Profile</ListGroupItem>
                <ListGroupItem className={this.state.event_class} onClick={this.eventHistory}>Event History</ListGroupItem>
                <ListGroupItem className={this.state.edit_class} onClick={this.editProfile}>Edit Profile</ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={9}>
              {posts}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Profile;
