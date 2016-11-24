/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 20:43:01
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-23 20:24:08
*/

import React, { Component, PropTypes } from 'react';
import './CreateEvent.css';
import axios from 'axios';
import { Link } from 'react-router';
import { HelpBlock, Modal, Button, Col, ControlLabel, Form, FormGroup, FormControl, Checkbox}
  from 'react-bootstrap';
import Datetime from 'react-datetime';
import ReactDom from 'react-dom';


// Need update for the api
class CreateEvent extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      equipmentCheckNum: 0,
      userid: localStorage["userid"],
      startTime: new Date(),
      endTime: new Date(),
      equipment: ''
    };
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.getEquipment = this.getEquipment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTimeStamp = this.getTimeStamp.bind(this);
  }

  componentWillMount() {
    // this.getEquipment();
  }

  componentDidMount() {
    this.getEquipment();
  }

  getEquipment(){
    axios.get('/equipment', {
        
      }).then(res => {
        
        this.setState({
          equipment: res.data,
          equipmentCheckNum: 1
        });
      });
    // console.log(this.state.equipment);
  }

  getTimeStamp(now) {
    return (now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + (now.getDate())  + " " + now.getHours() + ':' + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds())));
  }

  handleChangeStartTime(event) {
    // console.log(event._d);
    this.setState({startTime: event._d});
  }

  handleChangeEndTime(event){
    // console.log(event._d);
    this.setState({endTime: event._d});
  }

  handleSubmit(){
    // console.log("click submit profile");
    var eventtitle = ReactDom.findDOMNode(this.refs.eventtitle).value;
    var starttime = this.getTimeStamp(this.state.startTime);
    var endtime = this.getTimeStamp(this.state.endTime);
    
    var eventdescription = ReactDom.findDOMNode(this.refs.eventdescription).value;
    var numofpeople = ReactDom.findDOMNode(this.refs.numofpeople).value;
    var eventtag = ReactDom.findDOMNode(this.refs.eventtag).value;
    
    var eventphoto = ReactDom.findDOMNode(this.refs.eventphoto).value;
    var creatorid = this.state.userid;
    var location = ReactDom.findDOMNode(this.refs.location).value;

    let selected = ReactDom.findDOMNode(this.refs.equipmentid).value
    
    console.log(selected);
    console.log(endtime);
    console.log(starttime);
    console.log(creatorid);
    console.log(eventphoto);
    
    axios.get('/createEvent', {
        params: {
          eventtitle: eventtitle,
          starttime: starttime,
          endtime: endtime,
          eventdescription: eventdescription,
          numofpeople: numofpeople,
          eventtag: eventtag,
          eventphoto: eventphoto,
          creatorid: creatorid,
          location: location,
          equipmentid: selected
        }
      }).then(res => {
        // console.log(res.data);
        if (res.data === 'success'){
          alert("You have successfully ceate an event");
        }
    }); 
    
  }
  render() {
    var equipmentlist = this.state.equipmentCheckNum === 1
      ? this.state.equipment.map((x) => 
          <option key={x.equipmentid} value={x.equipmentid}>{x.equipmentname}</option>
        )
      : ''
    var posts = this.state.posts;
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
              <FormGroup controlId="formControlsSelectMultiple">
                <ControlLabel>Select Equipment</ControlLabel>
                <FormControl componentClass="select" multiple ref="equipmentid">
                  {equipmentlist}
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Photo Url</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="http://example.com/example.jpg"
                  ref="eventphoto"
                />
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
              <Button onClick={this.handleSubmit}>
                Test
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
