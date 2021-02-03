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
      number:""
    }
  }


  componentDidMount() {
    this.getSeller()
  }

  handleNew = () => {
    this.props.handleItemInfo(this.props.item._id)
    window.open('/ItemInfo')
  }
  getSeller = () => {
    const sellerId = this.props.item.sellerId
    axios
      .get(`http://localhost:5000/oneSellerId?id=${sellerId}`)
      .then((response) => {
        this.setState({
          sellerName: response.data.name,
          sellerContact: response.data.cotactInfo, 
          number: response.data.phoneNumber

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

  componentWillUpdate() {
    // localStorage Favorite item array so we don't need to stor in db
    localStorage.setItem("sellerName", JSON.stringify(this.state.sellerName));
    localStorage.setItem("sellerContact", JSON.stringify(this.state.sellerContact));
    // localStorage.setItem("itemId", JSON.stringify(this.props.item._id));
  }
  render() {

    return (
      <div className="boot">
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
                <Link to={`/ItemInfo/:${this.props.item._id}`}>
                  <button type="button" class="btn btn-outline-success buttonCard" onClick="window.open('/ItemInfo')" >More</button>
                </Link>
                <a href={"mailto:" + this.state.sellerContact + "?subject=your title&body=TThe message"}>
                  <button type="button" class="btn btn-outline-success buttonCard">Email</button>
                </a>
                <a href={"https://wa.me/" + this.state.number + "/?text=urlencodedtext"} target="_blank">
                  <button type="button" class="btn btn-outline-success buttonCard">
                    Whats</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
