
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react'
import NewSeller from './NewSeller'


export default class Personal extends Component {
    render() {
        return (
          <Router>
            <div>
                 <h1>Open Your Personal Page As: </h1>
          <button class="Personal">
            <Link to="/OldUser">Old User</Link>{" "}
          </button>
          <button class="Personal">
            <Link to="/NewSeller">New User</Link>{" "}
          </button>

          
        </div>
        <Route exact path='/NewSeller' component={NewSeller}></Route>
        </Router>
        
            
        )
    }
}
