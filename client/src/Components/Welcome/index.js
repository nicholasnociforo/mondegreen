import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Welcome.css';

import API from "../../utils/API";


class Welcome extends Component {

  componentDidMount() {
    API.getTest().then((res) => {
      console.log('------------------------------------');
      console.log(res);
      console.log('------------------------------------');
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Welcome;