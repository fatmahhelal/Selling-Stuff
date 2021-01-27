import React, { Component } from 'react'
import Fav from './Fav'

export default class Card extends Component {
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
            <p class="card-text ratingCon">{this.props.item.price} </p>
            <p class="card-text">{this.props.SellerInfo.name}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group botCon">
                <a href="/" target="inlike">
                  <button type="button" class="btn btn-outline-success btnMore"> More
                  </button>
                  <button type="button" class="btn btn-outline-success btnMore"> Contact
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

            
        )
    }
}
