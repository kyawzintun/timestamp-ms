import React, { Component } from 'react';
import Header from '../header/header';
import './style.css';

class App extends Component {
  render() {
    return (
      < div className='App' >
        <Header />
        <section className="section">
          <blockquote>
            User stories:
            <ul>1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</ul>
            <ul>2) If it does, it returns both the Unix timestamp and the natural language form of that date.</ul>
            <ul>3) If it does not contain a date or Unix timestamp, it returns null for those properties.</ul>
          </blockquote>
          <div>
            <h3>Example usage:</h3>
            <code>https://timestamp-ms.herokuapp.com/December%2015,%202015</code>
            <code>https://timestamp-ms.herokuapp.com/1450137600</code>
          </div>
          <div>
            <h3>Example output:</h3>
            <code>{'{'} "unix": 1450137600, "natural": "December 15, 2015" {'}'}</code>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
