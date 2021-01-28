import React, { Component } from "react";
import axios from "axios";
export default class NewSeller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      name: "",
      cotactInfo: "",
    };
  }
  ChangHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  SubmitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:5000/addUser',this.state)
    .then(respons=>{
      console.log(respons.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }


  render() {
    const {userName,name,cotactInfo}= this.state
    return (
      <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
          <div class="card card-3">
            <div class="card-heading"></div>
            <div class="card-body">
              <h2 class="title">Registration Info</h2>
              <form onSubmit={this.SubmitHandler} >
                <div class="input-group">
                  User Name:{" "}
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Name"
                    name="userName"
                    value ={userName}
                    onChange={this.ChangHandler}
                  />
                </div>
                <div class="input-group">
                  name:{" "}
                  <input
                    class="input--style-3 js-datepicker"
                    type="text"
                    placeholder="enter your name"
                    name="name"
                    value = {name}
                    onChange={this.ChangHandler}
                  />
                  <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                </div>

                <div class="input-group">
                  Email:{" "}
                  <input
                    class="input--style-3"
                    type="email"
                    placeholder="enter your Email"
                    name="cotactInfo"
                    value={cotactInfo}
                    onChange={this.ChangHandler}
                  />
                </div>

                <div class="p-t-10">
                  <button class="btn btn--pill btn--green" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
