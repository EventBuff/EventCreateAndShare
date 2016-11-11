/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 20:43:01
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-06 21:57:41
*/

import React, { Component, PropTypes } from 'react';
import './Comment.css';
import axios from 'axios';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';

class Comment extends Component {
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
    this.showCommentDetail = this.showCommentDetail.bind(this);

  }

  componentWillMount() {

  }

  componentDidMount() {
    //
    // axios.get('/eventDetail', {
    //   params: {
    //     eventid: slug
    //   }
    //   }).then(res => {
    //     this.showEventDetail(res.data);
    //   });
  }

  showCommentDetail(data) {
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
    console.log("props eventid " + this.props.eventid);
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
        {posts}
      </div>
    );
  }

}

export default Comment;
