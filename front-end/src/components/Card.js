import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemInfo from './ItemInfo'
export default class Card extends Component {
  
    render() {
      
        return (
            
                <div id="topHeader" className="boot">
        <div class="card">
          <img src={this.props.item.image} width='300px' height='300px'></img>
          <div class="card-body">
          <div className='material-icons favorite_border'>
          <i class="material-icons">favorite_border</i></div>            
            <h3 class="card-text">{this.props.item.itemTitle}</h3>
            <p class="card-text">{this.props.item.description}</p>
            <p class="card-text ratingCon">{this.props.item.price} .SR </p>
            <p class="card-text">{this.props.SellerInfo.name}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group botCon">
                <Link to={`/ItemInfo/:${this.props.item._id}`} >
                  <button type="button" class="btn btn-outline-success btnMore" >More
                  </button>
                  
                </Link>
                <a href='http://gmail.com'>
                <button type="button" class="btn btn-outline-success btnMore"> Contact
                  </button></a>
              </div>
            </div>
          </div>
        </div>
       
        
      </div>

           
        )
    }
}
