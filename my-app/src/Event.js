/*
* @Author: Lich Amnesia
* @Date:   2016-11-04 14:51:22
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-23 18:06:20
*/


import React, { Component } from 'react';
// import logo from './logo.svg';
import './Event.css';
// import Navigation from './Navigation';
import axios from 'axios';
import { Button, Row, Col}
  from 'react-bootstrap';
import { Link } from 'react-router';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
const Tags = [
  {
    text: 'hiking'
  },
  {
    text: 'study'
  },
  {
    text: 'shopping'
  },
  {
    text: 'party'
  },
  {
    text: 'tea/coffee'
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : Tags.filter(lang =>
    lang.text.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.text;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.text}
  </div>
);

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
      value: '',
      suggestions: []
    };
    this.myFunction = this.myFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchEvent = this.searchEvent.bind(this);
    this.showPosts = this.showPosts.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested= this.onSuggestionsClearRequested.bind(this);
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

  handleChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
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
            <h1>{x.creatorname}</h1>
            <h4><Link to={`/eventDetail/${x.event.eventid}`}> {x.event.eventtitle} </Link></h4>
            <p> {x.event.eventdescription} </p>
            <p> {x.event.eventtag} </p>
          </div>
      );

      this.setState({
          posts: content
      });
    }
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, posts } = this.state;
    // Display search button
    const searchEventButton =
      <Button
          onClick={this.searchEvent}
          bsStyle="primary"
          >Search
      </Button>;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Type an event tag',
      value,
      onChange: this.handleChange
    };

    return (
      <div>
        <div className="Event">
          <Row>
            <Col className="Eventtags" xs={12} md={3}>
            Tags:
              <div>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
              </div>
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
