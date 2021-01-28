import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fav from './Fav'
import axios from "axios";
import ItemInfo from './ItemInfo'

export default class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Item:[]
    }
  }
  
  getAllItem = () => {
    axios
      .get(`http://localhost:5000/oneSellerId`)
      .then((response) => {

        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);


        this.setState({ Item: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
    render() {
      
        return (
          <Router>
            
                <div id="topHeader" className="boot">
        <div class="card">
          <img src={this.props.item.image} width='300px' height='300px'></img>
          <div class="card-body">
          <Fav 
           getFav={this.props.getFav} 
           removeFav={this.props.removeFav}
           item={this.props.item}/>         
            <h3 class="card-text">{this.props.item.itemTitle}</h3>
            <p class="card-text">{this.props.item.description}</p>
            <p class="card-text ratingCon">{this.props.item.price} .SR </p>
            {/* <p class="card-text">{this.props.SellerInfo.name}</p> */}
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group botCon">
              
                <Link to={`/ItemInfo/:${this.props.item._id}`} >
                  <button type="button" class="btn btn-outline-success btnMore" onClick={this.getAllItem} >More
                  </button>
                  
                </Link>
                <a href=''>
                <button type="button" class="btn btn-outline-success btnMore"> Contact
                  </button></a>
                  <Route exact path='/ItemInfo/:id' component={ItemInfo}/>
   
         
      
              </div>
            </div>
          </div>
        </div>
       
      
      </div>
      </Router>

           
        )
    }
}
