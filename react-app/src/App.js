import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = { 
    }
  }
    handleSearch = (foodInfo) => {
      console.log("App.js received: ", foodInfo.nutrients)
    }
    render() {
      return (
        <div>
          <Search handleSearch = {this.handleSearch}/>
        </div>
      );
    }
}

export default App;
