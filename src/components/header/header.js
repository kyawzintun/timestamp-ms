import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">API Basejump: Timestamp microservice</h1>
      </header>
    );
  }
}

export default Header;