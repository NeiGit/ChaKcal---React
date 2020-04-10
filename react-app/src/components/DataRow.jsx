import React, { Component } from 'react';

class DataRow extends Component {
    state = {  }
    render() { 

        const {nutritionChart} = this.props
        console.log(nutritionChart)
        return ( 
            <tr>
                <td>{nutritionChart.food.label}</td>
                <td>grams</td>
                <td>{nutritionChart.totalWeight}</td>
                <td>{nutritionChart.calories}</td>
                <td>{nutritionChart.totalNutrients.PROCNT.quantity}</td>
                <td>{nutritionChart.totalNutrients.FAT.quantity}</td>
                <td>{nutritionChart.totalNutrients.CHOCDF.quantity}</td>
                <td>{nutritionChart.totalNutrients.FIBTG.quantity}</td>
            </tr>
        );
    }
}
 
export default DataRow;