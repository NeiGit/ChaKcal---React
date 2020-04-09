import React, { Component } from 'react';
import '../css/Search.css'
import RequestManager from '../services/RequestManager'
class Search extends Component {
    constructor() {
        super()
        this.state = { 
            food : '',
            measure : ''
        }
    }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark indigo mb-4">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline ml-auto" onSubmit = {this.submitSearch}>
                            <div className="md-form my-0">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.searchInputChanged}></input>
                            </div>
                            <button className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
         );
    }

    /******************** FUNCTIONS *****************************/
    searchInputChanged = e => {
        this.setState({
            food : e.target.value
        })
    }

    submitSearch = e => {
        e.preventDefault()
        console.log(this.state.food)
        let promise = RequestManager.handleSimpleRequest2(this.state.food)
        console.log(promise)
        promise.then (foodInfo => {
            console.log(`Search.jsx searched ${this.state.food}:`)
            console.log('Search.jsx received', foodInfo.nutrients)
            console.log('Search.jsx sent to App.js ', foodInfo)
            this.props.handleSearch(foodInfo)
        })
    }
}
 
export default Search;