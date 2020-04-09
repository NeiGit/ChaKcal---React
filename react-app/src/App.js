import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.jsx'
import DataTable from './components/DataTable.jsx'

class App extends Component {
    state = { 
      foodCharts : []
    }
    handleSearch = (foodInfo) => {
      const {foodCharts} = this.state
      console.log("App.js received: ", foodInfo.nutrients)
      this.setState({
        foodCharts : [...foodCharts, foodInfo]
      })
      console.log('A foodChart was pushed to foodCharts, now with a length of ', foodCharts.length)
    }
    render() {
      return (
        <div>
          <Search handleSearch = {this.handleSearch}/>
          {this.state.foodCharts.length !== 0 && <DataTable foodCharts = {this.state.foodCharts}/>}
        </div>
      );
    }
}

export default App;
