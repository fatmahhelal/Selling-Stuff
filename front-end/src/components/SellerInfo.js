// import React, { Component } from 'react'
// import SellerCard from './SellerCard'



// export default class SellerInfo extends Component {
//     render() {
//         const ItemCard = this.props.Item.map((Item, key) => {
//           return (
//             <SellerCard
//               key={key}
//               item={Item}
//             />

//           );
//         });
//         return <div className="topHeader boot">{ItemCard}</div>;
//       }
//     }

import React, { Component } from 'react'
import SellerDesh from './SellerDesh'
import axios from "axios";

export default class SellerInfo extends Component {
  constructor(props) {

    super(props);


export default class SellerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerItem: [],

    this.state = {
      sellerItem: [],


    };
  }

  componentDidMount() {
    this.getsellerItem()
  }
  getsellerItem = () => {
    axios
      .get(`http://localhost:5000/SellerItem?Id=${this.props.sellerId}`)
      .then((response) => {
        console.log("getSellerItems: ", response);
        console.log("getSellerItemsData: ", response.data);
        this.setState({ sellerItem: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  deleteAll = () => {


  
  deleteAll =()=>{


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
    window.open("/AddItem","_self");
  }

  render() {

    return <div className="topHeader boot">
      <h1>Hello, {this.props.sellerName}</h1>
      <h1>Your Items List</h1>
      <button class="btn btn-danger btnMore" onClick={this.deleteAll}>Delete All</button>

      <button class="btn btn-primary btnMore">Add New Item</button>
      <SellerDesh sellerItem={this.state.sellerItem} /></div>;
  }
}

      <button class="btn btn-primary btnMore"onClick={this.openAddItem}>Add New Item</button>
      <SellerDesh sellerItem={this.state.sellerItem} /></div>;
  }
}

    
    




