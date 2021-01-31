import React, { Component } from "react";

export default class SellerCard extends Component {
  render() {
    return (
    
        <div id="topHeader" className="boot">
          <div class="card">
            <img src={this.props.item.image} width="300px" height="300px"></img>
            <div class="card-body">
              <h3 class="card-text">{this.props.item.itemTitle}</h3>
              <p class="card-text">{this.props.item.description}</p>
              <p class="card-text ratingCon">{this.props.item.price} .SR </p>
              {/* <p class="card-text">{this.props.SellerInfo.name}</p> */}
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group botCon">
                    <button
                      type="button"
                      class="btn btn-outline-success btnMore"
                    >
                      Edit
                    </button>
                  <a href="">
                    <button
                      type="button"
                      class="btn btn-outline-success btnMore"
                    >
                      {" "}
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
