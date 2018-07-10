import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import fields from './fields';
import $ from 'jquery';
import sampleFields from './sampleFields';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: true
    }
  }
  componentDidMount() {
    var self = this;
    $.getJSON('https://9c3c9278-cdef-42f3-8ccf-cc6a5ae84c13.mock.pstmn.io/stats/automate/getBannersAnalytics', function (res) {
      if(res.status == 'ok' && res.data){
        self.setState({data: res.data, loading: false})
        // self.setState({data: sampleFields.data, loading: false})
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Fixed Data Table
          </p>
        <div className="App-content">
          {!this.state.loading ? <Table data={this.state.data} fields={fields} /> : <div>Loading...</div> }
        </div>
      </div>
    );
  }
}

export default App;