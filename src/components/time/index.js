import React, { Component } from 'react';
import Header from '../header/header';
import './style.css';

// const apiUrl = "https://kzt-timestamp-ms-api.herokuapp.com/timestamp-ms/";
const apiUrl = "http://localhost:5000/timestamp-ms/";

class Time extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
    }
  }

  componentDidMount() {
    let param = this.props.match.params.timestring;
    let _this = this;
    fetch(apiUrl+param)
      .then(res => { return res.json(); })
      .then(res => {
        console.log(res);
        _this.setState({ data: res, loading: false });
      });
  }

  render() {
    let content;
    if(!this.state.loading) {
      content = this.state.data;
    }
    return (
      <div className='Time'>
        <Header />
        <div className="timestamp-ms">
          {JSON.stringify(content)}
        </div>
      </div>
    );
  }
}

export default Time;