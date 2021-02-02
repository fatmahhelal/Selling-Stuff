import React, { Component } from 'react'

export default class FavCard extends Component {
  render() {
    return (

      <div className="boot">
        <div class="card">
          <img src={this.props.item.image} width='300px' height='300px'></img>
          <div class="card-body">
            <div className='material-icons favorite' onClick={this.props.removeFav}>
              <i class="material-icons">favorite</i></div>
            <h3 class="card-text">{this.props.item.itemTitle}</h3>
            <p class="card-text">{this.props.item.description}</p>
            <p class="card-text priceCon">{this.props.item.price} .SR</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group botCon">
                <a href="/" target="inlike">
                  <button type="button" class="btn btn-outline-success buttonCard"> More
        </button>
                  <button type="button" class="btn btn-outline-success buttonCard"> Contact
        </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

