import React, { Component } from 'react';
import DataRow from './DataRow.jsx'
class DataTable extends Component {
    state = { 
        foodCharts : []
     }
    render() { 

        const foodChartRows = this.props.foodCharts.map(f => {
            return <DataRow foodChart = {f}/>
          })

        return ( <table id="example" className="table table-striped table-bordered" styleName="width:100%">
        <thead>
            <tr>
                <th>Food</th>
                <th>Measure</th>
                <th>Quantity</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Fat</th>
                <th>Carbs</th>
                <th>Fiber</th>
            </tr>
        </thead>
        <tbody> 
          {foodChartRows}
        </tbody>
        </table>);
    }
}
 
export default DataTable;