import React, { Component } from "react";
import axios from "axios";
import "../newSeller.css";

export default class NewSeller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      name: "",
      cotactInfo: "",
      password:"",
      welcomeText:""
    };
  }
  ChangHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitHandler = (e) => {
    e.preventDefault();
    console.log("bring state", this.state);
    axios
      .post("http://localhost:5000/addUser", this.state)
      .then((respons) => {
        console.log(respons.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ userName: "" });
    this.setState({ name: "" });
    this.setState({ cotactInfo: "" });
    this.setState({ password: "" });
    this.setState({welcomeText:"You have account now"})
  };

  render() {
    const { userName, name, cotactInfo ,password} = this.state;
    return (
      <div className="container">
        <div className="myCard">
          <div className="row">
            <div className="col-md-6 b">
              <div className="myLeftCtn">
              <header>{this.state.welcomeText}</header>
                <form
                  className="myForm text-center"
                  onSubmit={this.SubmitHandler}
                >
                  
                  <div className="form-group">
                    <i className="fa fa-user"></i>
                    <input
                      className="myInput"
                      type="text"
                      placeholder=" enter your username"
                      name="userName"
                      value={userName}
                      onChange={this.ChangHandler}
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <i className="fa fa-user-circle-o"></i>
                    <input
                      className="myInput"
                      type="text"
                      placeholder="enter your name"
                      name="name"
                      value={name}
                      onChange={this.ChangHandler}
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <i className="fa fa-envelope"></i>
                    <input
                      className="myInput"
                      type="email"
                      placeholder="enter your Email"
                      name="cotactInfo"
                      value={cotactInfo}
                      onChange={this.ChangHandler}
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <i className="fa fa-key"></i>
                    <input
                      className="myInput"
                      type="password"
                      placeholder="enter your password"
                      name="password"
                      value={password}
                      onChange={this.ChangHandler}
                      required
                    />
                  </div>
                  <br></br>

                  <div class="p-t-10">
                    <button className="form-group btn" type="submit">
                      sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 c">
              <div className="myRightCtn">
                <div className="box">
                  <header>welcome</header>
                  <p>
                    After registering, you will be able to view the items you
                    want to sell. You can also delete or update the item
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
