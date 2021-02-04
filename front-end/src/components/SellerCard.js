import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SellerCard extends Component {
  //function delete item end point delete
  //item id will be {this.props.item._id}
  deleteItem = (e) => {
    e.preventDefault()
    axios
      .delete(`/api/seller/itemDelete?id=${this.props.item._id}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        window.location.reload()
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }


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
              <Link to={`/EditItem/:${this.props.item._id}`}>
                    <button
                      type="button"
                      class="btn btn-outline-success btnMore"
                      onClick="window.open('/EditItem')">
                      Edit
                    </button>
                </Link>
                <a href="">
                  <button
                    type="button"
                    class="btn btn-outline-success btnMore"
                    onClick={this.deleteItem}>
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
