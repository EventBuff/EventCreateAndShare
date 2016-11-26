/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 20:43:01
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-06 21:57:41
*/

import React, { Component } from 'react';
import './Comment.css';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      value: '',
      userid: localStorage["userid"],
      eventid: this.props.eventid
    };
    this.getCommentList = this.getCommentList.bind(this);
    this.showPosts = this.showPosts.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // this.setState({
    //     eventid: this.props.eventid
    // });
  }

  getCommentList(){
    axios.get('/eventDetail/comment', {
        params: {
          eventid: this.state.eventid
        }
      }).then(res => {
        this.showPosts(res.data);
    });
  }

  componentDidMount() {
    this.getCommentList();
  }

  showPosts(data){
    if (data === null || data.length === 0) {
      this.setState({
          posts: ''
      });
    } else {
      var content = data.map((x) =>
          <div key={x.commentid}>
          <div className="event-comment">
          <p>Anonymity</p>
            <h4>{x.comment} </h4>
            <hr/>
            </div>
          </div>
      );
      // console.log(content);
      this.setState({
          posts: content
      });
    }
  }


  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e){
    axios.get('/eventDetail/makeComment', {
        params: {
          eventid: this.state.eventid,
          userid: this.state.userid,
          comment: this.state.value
        }
      }).then(res => {
        console.log(res.data);
    });
    // console.log(e.target.value);
    // console.log("The comment content is" + this.state.value);
    // The following will handle the make new comment ajax post request.
    this.getCommentList();
  }
  render() {
    // console.log("props eventid = " + this.state.eventid);
    var posts = this.state.posts;

    var makecomment_content =
      <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Making New Comments</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>The length of a comment should be large than 10.</HelpBlock>
            <Button type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </FormGroup>
        </form>

    return(
        <div>
          {posts}
          {makecomment_content}
        </div>
    );
  }

}

export default Comment;
