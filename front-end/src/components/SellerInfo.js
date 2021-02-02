import React, { Component } from "react";
import SellerCard from "./SellerCard";
import axios from "axios";

export default class SellerInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addNewPage: false,
    };
  }

  deleteAll = () => {
    axios
      .delete(
        `http://localhost:5000/deleteAllItem?userId=${this.props.sellerId}`
      )
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  openAddItem=()=>{
    window.open("/AddItem");
  }
  render() {
    const ItemCard = this.props.Item.map((Item, key) => {
      return <SellerCard key={key} item={Item} />;
    });

    return (
      <div className="topHeader boot">
          <h1>your item</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button class="btn btn-primary me-md-2" onClick={this.deleteAll}>
            Delete All
          </button>
          <button class="btn btn-primary" type="button" onClick={this.openAddItem}>
            add new item
          </button>
        </div>
        {ItemCard}
      </div>
    );
  }
}
