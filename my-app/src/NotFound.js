/*
* @Author: Lich Amnesia
* @Date:   2016-11-06 20:05:18
* @Last Modified by:   Lich Amnesia
* @Last Modified time: 2016-11-06 20:06:05
*/

import React from 'react';
import { Grid } from 'react-bootstrap';

const NotFound = () => (
  <div>
    <div className="nav-spacer" />
    <Grid>
      <h1>Oops! We Could Not Find That...</h1>
      <h2>
        Please use top menu to navigate elsewhere.
      </h2>
    </Grid>
  </div>
);

export default NotFound;