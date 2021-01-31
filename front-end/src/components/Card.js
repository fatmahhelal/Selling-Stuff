import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fav from './Fav'
import axios from "axios";
import ItemInfo from './ItemInfo'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {

      Item: [],
      sellerName: "",
      sellerContact: "",
    }
  }


  componentDidMount() {
    this.getSeller()
  }
  getSeller = () => {
    const sellerId = this.props.item.sellerId
    axios
      .get(`http://localhost:5000/oneSellerId?id=${sellerId}`)
      .then((response) => {
        this.setState({
          sellerName: response.data.name,
          sellerContact: response.data.cotactInfo

        })
        console.log(response.data)
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  }

  getItemInfor = () => {
    axios
      .get(`http://localhost:5000/OneItem?id=${this.props.item._id}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ Item: response.data });

      })
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
  
  componentWillUpdate() {
    // localStorage Favorite item array so we don't need to stor in db
    localStorage.setItem("sellerName", JSON.stringify(this.state.sellerName));
    localStorage.setItem("sellerContact", JSON.stringify(this.state.sellerContact));
  }
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
                item={this.props.item} />
              <h3 class="card-text">{this.props.item.itemTitle}</h3>
              <p class="card-text">{this.props.item.description}</p>
              <p class="card-text priceCon">{this.props.item.price} .SR </p>
              <p class="card-text">Selling By: {this.state.sellerName}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group botCon">
                  <Link to={`/ItemInfo/:${this.props.item._id}`} >
                    <button type="button" class="btn btn-outline-success buttonCard" onClick={this.getAllItem} >More</button>
                  </Link>
                  <button type="button" class="btn btn-outline-success buttonCard" onClick={this.state.sellerContact} >Contact</button>

                  <Route exact path='/ItemInfo/:id' component={ItemInfo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>


    )
  }
}
