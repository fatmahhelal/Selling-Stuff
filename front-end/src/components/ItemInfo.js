import React, { Component } from 'react'

export default class ItemInfo extends Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="boot">
          <div class="myCard cardInfo boot">
            <img src="" width='500px' height='500px'></img>
            <div class="card-body">
              <h3 class="card-text">Titile</h3>
              <p class="card-text">description</p>
              <p class="card-text priceCon">item.price.SR </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group botCon">

                  <button type="button" class="btn btn-outline-success buttonCard">Contact</button>


                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}
