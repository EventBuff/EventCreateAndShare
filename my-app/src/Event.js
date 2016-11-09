/*
* @Author: Lich Amnesia
* @Date:   2016-11-04 14:51:22
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-06 21:33:34
*/


import React, { Component } from 'react';
// import logo from './logo.svg';
import './Event.css';
// import Navigation from './Navigation';
import axios from 'axios';
import { Button, Row, Col}
  from 'react-bootstrap';
import { Link } from 'react-router';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      value: '',
    };
    this.myFunction = this.myFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchEvent = this.searchEvent.bind(this);
    this.showPosts = this.showPosts.bind(this);
  }
  
  myFunction(){
    axios.get('/searchEvent', {
        // name: 2
      }).then(res => {
        const posts = res.data;
        console.log(res.data);
        this.setState({ posts });
      });
      // function(response){
      //     console.log(response);
      //     const post = response.data.content;
      //     console.log(post)
      //     this.setState({ post });
      // });
  }

  componentDidMount() {
    // this.myFunction();
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  searchEvent(event){
    // console.log("value: " + this.state.value);
    axios.get('/searchEvent', {
        params: {
          eventtag: this.state.value
        }
      }).then(res => {
        this.showPosts(res.data);
      });

  }

  showPosts(data){
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
    var value = this.state.value;
    var posts = this.state.posts;
    // Display get product button
    const searchEventButton =
      <Button
          onClick={this.searchEvent}
          bsStyle="success"
          bsSize="large">Search
      </Button>;
    return (
      <div>
        <div className="Event">
          <Row>
            <Col className="Eventtags" xs={12} md={3}>
            Tags:
              <input type="text" value={value} onChange={this.handleChange} />
              <p>{value}</p>
              {searchEventButton}
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

export default Event;
