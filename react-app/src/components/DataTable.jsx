import React, { Component } from 'react';
import DataRow from './DataRow.jsx'
import Utils from '../services/Utils.js'
import URLmanager from '../services/URLmanager.js'

class DataTable extends Component {
    state = {
        /* totals: {
            calories: 0,
            weight: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
            fiber: 0,
        } */
     }
    render() { 
        const {nutritionCharts} = this.props
        const nutritionChartRows = []
        const totals = {
            calories: 0,
            weight: 0,
            PROCNT: 0,
            FAT: 0,
            CHOCDF: 0,
            FIBTG: 0,
        }

        nutritionCharts.forEach( nc => {

            // First we have to make sure each nutritionChart has a complete internal state. Some times it comes without a nutrient, instead of having it set to zero. In that case we add the attribute and initialize to zero. Then we update same nutrient of the 'totals' array

            const quantity = 'quantity'

            URLmanager.NUTRIENTS.forEach( nutrient => {
                nc.totalNutrients[nutrient] = Utils.processAttributeValue(quantity, nc.totalNutrients[nutrient], 0)
                totals[nutrient] += nc.totalNutrients[nutrient][quantity]
            })    

            // This two are outside 'totalNutrients' array, so we process them separately
            totals.calories += nc.calories
            totals.weight += nc.totalWeight

            // Finally, a new DataRow component is generated and then pushed to props array
            nutritionChartRows.push(<DataRow key = {nc.food.id} nutritionChart = {nc}/>)

        })

        return ( <table id="example" className="table table-striped table-bordered">
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
          {nutritionChartRows}
          <tr className = 'table-primary' id = 'Totals'>
                <th>TOTALS</th>
                <th>grams</th>
                <th>{totals.weight}</th>
                <th>{totals.calories}</th>
                <th>{totals.PROCNT}</th>
                <th>{totals.FAT}</th>
                <th>{totals.CHOCDF}</th>
                <th>{totals.FIBTG}</th>
            </tr>
        </tbody>
        <tfooter>
         
        </tfooter>
        </table>);
    }
}
 
export default DataTable;