import React, { Component } from 'react'
import axios from "axios";
import "../newSeller.css";
export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      itemTitle: '',
      image: '',
      description: '',
      price: '',
      stateItem: '',
      youAdded: ''
    }
  }
  ChangHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  SubmitHandler = (e) => {
    const { itemTitle, image, description, price, stateItem } = this.state
    e.preventDefault()
    console.log(this.state)
    axios.post(`http://localhost:5000/AddItem?userName=${this.state.userName}`, { itemTitle, image, description, price, stateItem })
      .then(respons => {
        console.log(respons.data)
        this.setState({ itemTitle: '', image: '', description: '', price: '', stateItem: '', youAdded: 'You Added' })
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    const { userName, itemTitle, image, description, price, stateItem } = this.state
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-6 b">
            <div className="myLeftCtn add">
              <header>Add Item</header>
              <h5>{this.state.youAdded}</h5>
              <form
                className="myForm text-center"
                onSubmit={this.SubmitHandler}
              >

                <div className="form-group">

                  <label>userName</label>
                  <input
                    className="myInput ad"
                    type="text"
                    placeholder=" enter your username"
                    name='userName'
                    value={userName}
                    onChange={this.ChangHandler}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">

                  <label>item Title</label>
                  <input
                    className="myInput ad"
                    type="text"
                    name='itemTitle' value={itemTitle} onChange={this.ChangHandler}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>image link</label>
                  <input
                    className="myInput ad"
                    name='image'
                    value={image}
                    onChange={this.ChangHandler}
                  />
                </div>
                <br></br>
                <div className="form-group">

                  <label>description</label>
                  <input
                    className="myInput ad"
                    name='description'
                    value={description}
                    onChange={this.ChangHandler}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">

                  <label>price item</label>
                  <input
                    className="myInput ad"
                    name='price'
                    value={price}
                    onChange={this.ChangHandler}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>state item</label>
                  <input
                    className="myInput ad"
                    name='stateItem'
                    value={stateItem}
                    onChange={this.ChangHandler}

                  />
                </div>
                <br></br>

                <div class="p-t-10">
                  <button className="form-group btn addbtn" type="submit">
                    Add
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
