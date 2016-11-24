/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 21:56:58
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-23 20:25:49
*/


import React, { Component } from 'react';
// import logo from './logo.svg';
import './Profile.css';
// import Navigation from './Navigation';
import axios from 'axios';
import { Table, Panel, FormControl, Button, ControlLabel, FormGroup, Row, Col, ListGroup, ListGroupItem}
  from 'react-bootstrap';
import ReactDom from 'react-dom';
import { Link } from 'react-router';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      postsCheckNum: 0,
      profileData: '',
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  checkProfile(){
    this.setState({'check_class': 'active', event_class: 'album', edit_class: 'album'})
    const slug = this.props.params.slug;
    // console.log("for userid " + slug);
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
    // console.log(data);
    if (data === null || data.length === 0) {
      this.setState({
          posts: ''
      });
    } else {
      var content =
          <div>
            <Col md={8}>
              <Panel header={`${data.firstname}'s Profile`}>
                <Table responsive className="table-user-profile" >
                    <tbody>
                      <tr>
                        <td>Email:</td>
                        <td>{data.email}</td>
                      </tr>
                      <tr>
                        <td>User Name:</td>
                        <td>{data.username}</td>
                      </tr>
                      <tr>
                        <td>Name:</td>
                        <td>{data.firstname} {data.lastname}</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>{data.gender}</td>
                      </tr>
                      <tr>
                        <td>Phonne Number</td>
                        <td>{data.phonenumber}</td>
                      </tr>
                      <tr>
                        <td>Location</td>
                        <td>{data.location}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{data.description}</td>
                      </tr>
                    </tbody>
                  </Table>
              </Panel>
            </Col>
          </div>
      this.setState({
          posts: content,
          postsCheckNum: 1
      });
    }
  }

  editProfile(){
    this.setState({'check_class': 'album', event_class: 'album', edit_class: 'active'});
    var data = JSON.parse(this.state.profileData);
    this.showEditProfile(data);
  }

  showEditProfile(data) {
    // console.log(data);
    if (data === null || data.length === 0) {
      this.setState({
          posts: ''
      });
    } else {
      var content =
          
      this.setState({
          postsCheckNum: 0
      });
    }
  }

  handleSubmit(){
    var data = JSON.parse(this.state.profileData);
    // console.log("click submit profile");
    var edit_id = this.state.userid;
    var edit_email = data.email;
    var edit_username = data.username;
    var edit_firstname = ReactDom.findDOMNode(this.refs.firstname).value;
    var edit_lastname = ReactDom.findDOMNode(this.refs.lastname).value;
    var edit_gender = ReactDom.findDOMNode(this.refs.gender).value;
    var edit_location = ReactDom.findDOMNode(this.refs.location).value;
    var edit_phonenumber = ReactDom.findDOMNode(this.refs.phonenumber).value;
    var edit_description = ReactDom.findDOMNode(this.refs.description).value;

    axios.get('/profile/edit', {
        params: {
          userid: edit_id,
          firstname: edit_firstname,
          lastname: edit_lastname,
          location: edit_location,
          gender: edit_gender,
          phonenumber: edit_phonenumber,
          description: edit_description
        }
      }).then(res => {
        // console.log(res.data);
        if (res.data === 'success'){
          alert("You have successfully edit your profile");
        }
    }); 
    
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
      console.log(data);
      var content = data.map((x) =>
          <div key={x.eventid}>
            <h1>{x.creatorname}</h1>
            <h4><Link to={`/eventDetail/${x.event.eventid}`}> {x.event.eventtitle} </Link></h4>
            <p> {x.eventdescription} </p>
          </div>
      );

      this.setState({
          posts: content,
          postsCheckNum: 1
      });
    }
  }

  render() {
    var editProfileContent = '';
    if (this.state.profileData !== null && this.state.profileData.length !== 0){
      // console.log(this.state.profileData);
      var data = JSON.parse(this.state.profileData);
      var editProfileContent = 
          <div>
            <Col md={8}>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl.Static>
                  {data.email}
                </FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl.Static>
                  {data.username}
                </FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                  type="text"
                  ref="firstname"
                  defaultValue={data.firstname}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                  type="text"
                  ref="lastname"
                  defaultValue={data.lastname}
                />
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select Gender</ControlLabel>
                <FormControl componentClass="select" placeholder={data.gender} defaultValue={data.gender} ref="gender">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Location</ControlLabel>
                <FormControl
                  type="text"
                  ref="location"
                  defaultValue={data.location}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Phone Number</ControlLabel>
                <FormControl
                  type="tel"
                  ref="phonenumber"
                  defaultValue={data.phonenumber}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  type="text"
                  ref="description"
                  defaultValue={data.description}
                />
              </FormGroup>
              
              <Button type="submit">
                Submit
              </Button>
            </form>
            </Col>
          </div>
    }
    // var value = this.state.value;
    var posts = this.state.postsCheckNum === 0
      ? editProfileContent
      : this.state.posts;
    // list groun need to changed for editting
    return (
      <div>
        <div>
          <Row>
          </Row>
          <Row>
            <Col md={1} /> 
            <Col className="ProfileNavigation" xs={12} md={3}>
              <p> Profile </p>
              <ListGroup>
                <ListGroupItem className={this.state.check_class} onClick={this.checkProfile}>Check Profile</ListGroupItem>
                <ListGroupItem className={this.state.event_class} onClick={this.eventHistory}>Event History</ListGroupItem>
                <ListGroupItem className={this.state.edit_class} onClick={this.editProfile}>Edit Profile</ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={8}>
              {posts}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Profile;
