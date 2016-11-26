import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//  hashHistory can be considered
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Table } from 'react-bootstrap';

// import Navigation from './Navigation';
import NotFound from './NotFound';
import Event from './Event';
import EventDetail from './EventDetail';
import Profile from './Profile';
import Login from './Login';
import CreateEvent from './CreateEvent';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const Home = (() => 
    <div>
    <div className="index-section">
    <div className="background-contain">
    <h1>Bring People Together with Event Share</h1>
    <br/>
    <h4>Tools & tips to set up a great event, reach your audience </h4>
    <h4>and measure performance.</h4>
    </div>
    </div>
    <div className="index-about">
    <div className="index-container">
    <h1>Why Event Share?</h1>
     <Table className="index-about-table" >
                    <tbody>
                     <tr>
                        <td>Our website, Activity Create and Share, is a website that helps people to create events like hiking, biking, reading books, watching movies, studying together and so on.</td>
                        <td>People can search for events that they are interested in and join in the event. The event creator can ask for advices and request for required equipment for the event.</td>
                      </tr>
         </tbody>
     </Table>
    </div>
    </div>
    <div className="index-developer">
    <div className="index-container">
    <h1>Developer Information</h1>
    <hr/>
    <Table className="index-developer-table" >
                    <tbody>
                     <tr>
                        <td><strong>SHEN HUANG</strong></td>
                        <td><strong>YAN LI</strong></td>
                        <td><strong>AMIR KASHIPAZHA</strong></td>
                      </tr>
                      <tr>
                        <td>University of Colorado Boulder 
shen.huang@colorado.edu</td>
                        <td>University of Colorado Boulder 
yali2241@colorado.edu</td>
                        <td>University of Colorado Boulder 
amirhossein.kashipazha@colorado.edu</td>
                      </tr>
         </tbody>
     </Table>
    </div>
    </div>
    </div>

  );

const routes =
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='/event' component={Event} />
    <Route path='/eventDetail/:slug' component={EventDetail} />
    <Route path='/profile/:slug' component={Profile} />
    <Route path='/CreateEvent' component={CreateEvent} />
    <Route path='/login' component={Login} />
    <Route path='*' component={NotFound} />
  </Route>
</Router>;

ReactDOM.render(
  routes,
  document.getElementById('root')
);
