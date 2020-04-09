import React, { Component } from 'react';
import '../css/Search.css'
import RequestManager from '../services/RequestManager'
class Search extends Component {
    state = { 
        foodQuery : '',
        measureQuer : ''
        
    }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <span class="navbar-brand"> ChaKcal in REACT </span>
                        <form className="form-inline ml-auto" onSubmit = {this.submitSearch}>
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.searchInputChanged}></input>
                            </div>
                            <button className= "btn btn-outline-info btn-md my-2 my-sm-2" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
         );
    }

    /******************** FUNCTIONS *****************************/
    searchInputChanged = e => {
        this.setState({
            foodQuery : e.target.value
        })
    }

    submitSearch = e => {
        e.preventDefault()
        const {foodQuery} = this.state
        console.log(foodQuery)
        let promise = RequestManager.handleSimpleRequest2(foodQuery)
        console.log(promise)
        promise.then (foodInfo => {
            if (foodInfo === undefined)
                alert(`No results found for ${foodQuery}`)
            else {    
            console.log(`Search.jsx searched ${foodQuery}:`)
            console.log('Search.jsx received', foodInfo.nutrients)
            console.log('Search.jsx sent to App.js ', foodInfo)
            this.props.handleSearch(foodInfo)
            }
        })
    }
}
 
export default Search;