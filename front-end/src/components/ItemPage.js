import React, { Component } from 'react'
import axios from "axios";


export default class ItemPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemInfo: [],
      sellerName: "",
      sellerContact: "", 
      number: ""
    }
  }

  componentDidMount() {
    this.getItemInfor()

  }

  getItemInfor = () => {
    axios
      .get(`/api/seller/OneItem?id=${this.props.itemId}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ itemInfo: response.data });
        this.getSeller()

      })
  }
  
  
  getSeller = () => {
    const sellerId = this.state.itemInfo.sellerId
    axios
      .get(`/api/seller/oneSellerId?id=${sellerId}`)
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
  
  render() {
    return (
      <div>
        <div className="boot">
          <div class="myCard cardInfo boot">
            <img src={this.state.itemInfo.image} width='500px' height='500px'></img>
            <div class="card-body">
              <h3 class="card-text">{this.state.itemInfo.itemTitle}</h3>
              <p class="card-text">{this.state.itemInfo.description}</p>
              <p class="card-text priceCon">{this.state.itemInfo.price}</p>
              <p class="card-text">Selling By: {this.state.sellerName}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group botCon">
                  <a href={"mailto:" + this.state.sellerContact + "?subject=your title&body=TThe message"}>
                  <button type="button" class="btn btn-outline-success">Email</button>
                </a>
                <a href={"https://wa.me/" + this.state.number + "/?text=urlencodedtext"} target="_blank">
                  <button type="button" class="btn btn-outline-success">
                    What's</button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// mongodb+srv://GhaidaaKhalil:UItJ07EVuLiyiyxi@cluster0.rrwqc.mongodb.net/selling?retryWrites=true&w=majority


