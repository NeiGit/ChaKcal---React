import React, { Component } from 'react';

class DataRow extends Component {
    state = {  }
    render() { 

        const {foodChart} = this.props

        return ( 
            <tr id = {foodChart.foodId}>
                <td>{foodChart.label}</td>
                <td>grams</td>
                <td>100</td>
                <td>{foodChart.nutrients.ENERC_KCAL}</td>
                <td>{foodChart.nutrients.PROCNT}</td>
                <td>{foodChart.nutrients.FAT}</td>
                <td>{foodChart.nutrients.CHOCDF}</td>
                <td>{foodChart.nutrients.FIBTG}</td>
            </tr>
        );
    }
}
 
export default DataRow;