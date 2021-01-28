
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react'


export default class Personal extends Component {
    render() {
        return (
            <div>
                 <h1>Open Your Personal Page As: </h1>
          <button class="Personal">
            <Link to="/OldUser">Old User</Link>{" "}
          </button>
          <button class="Personal">
            <Link to="/NewUser">New User</Link>{" "}
          </button>

          
        </div>
        
            
        )
    }
}
