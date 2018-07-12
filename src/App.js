import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import fields from './fields';
import $ from 'jquery';
import sampleFields from './sampleFields';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import StyledButton from './StyledButton';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      content: "fixed-table",
      loading: true
    }
    // this.onClickLink = this.onClickLink.bind(this);
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
    var content, title;
    switch(this.state.content){
      case 'fixed-table':
        title = "Fixed Data Table"
        content =  !this.state.loading ? <Table data={this.state.data} fields={fields} /> : <div>Loading...</div>
        break;
      case 'styled-component':
        title = "Styled Component Demo"
        content = <ThemeProvider theme={theme}>
                    <StyledButton />
                </ThemeProvider>
        break;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-subHeader">
          <span><a href="#" onClick={this.onClickLink.bind(this,"fixed-table")} > Fixed Data Table </a></span>
          <span><a href="#" onClick={this.onClickLink.bind(this,"styled-component")} > Styled Component </a></span>
        </div>
        <p className="App-intro">
          {title}
        </p>
        <div className="App-content">
          {content}
        </div>
      </div>
    );
  }
  onClickLink(item){
    this.setState({content: item})
  }
}

export default App;