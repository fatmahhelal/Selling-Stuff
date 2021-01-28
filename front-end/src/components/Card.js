import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemInfo from './ItemInfo'
import Fav from './Fav'

export default class Card extends Component {
  // componentDidMount=()=>{
  //   this.props.AddItemToArray(this.props.item)
  // }
    render() {
      
        return (
          
            
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
            <p class="card-text">{this.props.SellerInfo.name}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group botCon">
              
                <Link to={`/ItemInfo/:${this.props.item._id}`} >
                  <button type="button" class="btn btn-outline-success btnMore" >More
                  </button>
                  
                </Link>
                <a href=''>
                <button type="button" class="btn btn-outline-success btnMore"> Contact
                  </button></a>
                  <Route path='/ItemInfo/:id' component={(props)=>{
          <ItemInfo itemTitle={this.props.item.itemTitle} 
          description={this.props.item.description}
          price={this.props.item.price}
          name={this.props.SellerInfo.name}/>
         
        }}></Route>
              </div>
            </div>
          </div>
        </div>
       
      
      </div>

           
        )
    }
}
