import React, { Component } from "react";
import axios from "axios";
import SellerInfo from "./SellerInfo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class OldUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sellerName: "",
      sellerId: "",
      sellerItem: [],
    };
  }
 

  getsellerInfo = () => {
    axios
      .get(`http://localhost:5000/oneSeller?userName=${this.state.sellerName}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        console.log("id", response.data[0]._id);
        this.setState({ sellerId: response.data[0]._id });
        this.getsellerItem();
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  // componentDidMount = () => {
  //   this.getsellerItem();
  // };

  getsellerItem = () => {
    axios
      .get(`http://localhost:5000/SellerItem?Id=${this.state.sellerId}`)
      .then((response) => {
        console.log("getSellerItems: ", response);
        console.log("getSellerItemsData: ", response.data);
        this.setState({ sellerItem: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  render() {
    return (
      <Router>
        <div>
          <form>
            userName 
            <input
              name="userName"
              // value={userName}
              onChange={(e) => {
                this.setState({ sellerName: e.target.value });
              }}
            ></input>
            <Link to="/SellerInfo">
              <button type="submit" onClick={this.getsellerInfo}>
                submit
              </button>
            </Link>
            <Route
              exact
              path="/SellerInfo"
              component={(props) => {
                return <SellerInfo Item={this.state.sellerItem} sellerId={this.state.sellerId} />;
              }}
            ></Route>
          </form>
        </div>
      </Router>
    );
  }
}
