import React, { Component } from 'react'
import axios from "axios";


export default class ItemPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemInfo: [],
    }
  }

  componentDidMount() {
    this.getItemInfor()

  }

  getItemInfor = () => {
    axios
      .get(`http://localhost:5000/OneItem?id=${this.props.itemId}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ itemInfo: response.data });

      })
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
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group botCon">
                  <button type="button" class="btn btn-outline-success buttonCard">{this.state.itemInfo.cotactInfo}</button>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}