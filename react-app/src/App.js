import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.jsx'
import DataTable from './components/DataTable.jsx'

class App extends Component {
    state = { 
      nutritionCharts : []
    }
    
    handleSearch = (nutritionChart) => {
      this.setState({
        nutritionCharts: [...this.state.nutritionCharts, nutritionChart]
      })
    }
    
    render() {
      return (
        <div>
          <Search handleSearch = {this.handleSearch}/>
          {this.state.nutritionCharts.length > 0 && <DataTable nutritionCharts = {this.state.nutritionCharts}/>}
        </div>
      );
    }
}

export default App;
