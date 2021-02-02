import React, { Component } from "react";
import axios from "axios";
import SellerInfo from "./SellerInfo";
// import "../newSeller.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class OldUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sellerName: "",
      password: "",
      sellerId: "",
      sellerItem: [],
      login: false,
      name: ""

    };
  }

  getsellerInfo = () => {
    axios
      .get(`http://localhost:5000/oneSellerpas?userName=${this.state.sellerName}&password=${this.state.password}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        console.log("id", response.data[0]._id);
        this.setState({ sellerId: response.data[0]._id, login: true, name: response.data[0].name });
        this.props.handleLogin()
        this.getsellerItem();
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  // componentDidMount = () => {
  //   this.getsellerItem();
  // };



  componentWillUpdate() {
    // localStorage Favorite item array so we don't need to stor in db
    localStorage.setItem("Item", JSON.stringify(this.state.sellerItem));
    localStorage.setItem("sellerId", JSON.stringify(this.state.sellerId)
    );
  }

  render() {
    if (this.state.login == false) {
      return (<Router><div className="container">
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
                      // value={userName}
                      onChange={(e) => {
                        this.setState({ sellerName: e.target.value });
                      }}
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
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </div>
                  <br></br>

                  <div class="p-t-10">
                    <Link to="/SellerInfo">
                      <button className="form-group btn" type="submit" type="submit" onClick={this.getsellerInfo}>
                        sign in
                  </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 c">
              <div className=" myRightCtn">
                <div className="box">
                  <header>Welcome back</header>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <Route
              exact
              path="/SellerInfo"
              component={(props) => {
                return <SellerInfo Item={this.state.sellerItem} />;
              }}
            ></Route> */}
      </Router>
      )
    }
    else {
      return (
        <Router>
          <Switch>
            <Route exact
              path="/SellerInfo"
              component={(props) => {
                return <SellerInfo Item={this.state.sellerItem} sellerId={this.state.sellerId} sellerName={this.state.name} />
              }}
            ></Route>

          </Switch>
        </Router>


      )
    }
    //     return (
    //       // <Router>


    // {/* <div className="container">
    //         <div className="myCard">
    //           <div className="row">
    //             <div className="col-md-6 b">
    //               <div className="myLeftCtn">
    //               <header>{this.state.welcomeText}</header>
    //                 <form
    //                   className="myForm text-center"
    //                   onSubmit={this.SubmitHandler}
    //                 >

    //                   <div className="form-group">
    //                     <i className="fa fa-user"></i>
    //                     <input
    //                       className="myInput"
    //                       type="text"
    //                       placeholder=" enter your username"
    //                       name="userName"
    //                       // value={userName}
    //                       onChange={(e) => {
    //                         this.setState({ sellerName: e.target.value });
    //                       }}
    //                       required
    //                     />
    //                   </div>
    //                   <br></br>
    //                   <div className="form-group">
    //                     <i className="fa fa-key"></i>
    //                     <input
    //                       className="myInput"
    //                       type="password"
    //                       placeholder="enter your password"
    //                       name="password"
    //                       onChange={(e) => {
    //                         this.setState({ password: e.target.value });
    //                       }}
    //                     />
    //                   </div>
    //                   <br></br>

    //                   <div class="p-t-10">
    //                   <Link to="/SellerInfo">
    //                     <button className="form-group btn" type="submit" type="submit" onClick={this.getsellerInfo}>
    //                       sign in
    //                     </button>
    //                     </Link>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //             <div className="col-md-6 c">
    //               <div className=" myRightCtn">
    //                 <div className="box">
    //                   <header>Welcome back</header>

    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       // </div> */}
    //       // {/* <Route
    //       //         exact
    //       //         path="/SellerInfo"
    //       //         component={(props) => {
    //       //           return <SellerInfo Item={this.state.sellerItem} />;
    //       //         }}
    //       //       ></Route>
    //       // </Router> */}
    //     );
  }
}
