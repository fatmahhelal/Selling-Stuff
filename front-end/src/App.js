import React from 'react';
import axios from "axios";
import './App.css';
import getAllItem from './api'
import Home from './components/Home'
import Favorite from './components/Favorite'
import Personal from './components/Personal'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Seller: [],
      FavArray: []
    }
  }

  componentDidMount = () => {
    this.getAllItem()
  }

  // function used for add any Item by user to Favorite List
  getFav = (item, isFav) => {
      // bring the favorite list and copy it info faves 
    var faves = [...this.state.FavArray];
    // check the item if was in favorite list?
    var itemIndex = faves.indexOf(item)
    if (itemIndex === -1) {
      faves.push(item)
      this.setState({ FavArray: faves },
        function () {
          console.log("the Fav Array", this.state.FavArray);
        })
      console.log(faves);
    } else {
      // if it in the list we need to remove it
      faves.splice(itemIndex, 1);
      this.setState({ FavArray: faves },
        function () {
          console.log(this.state.FavArray);
        })
    }
  }
  
  // function used for remove any Item by user from Favorite List
  removeFav = (item, isFav) => {
    var faves = [...this.state.FavArray]
    faves.splice(item, 1);
    this.setState({ FavArray: faves },
      function () {
        console.log(this.state.FavArray);
      })
    console.log(faves);
  }
  
  
  // function used for remove all Item by user from Favorite List
  deleteFav = () => {
    console.log(this.state.FavArray);
    this.setState({ FavArray: [] })
}

  componentWillUpdate() {
    // localStorage Favorite item array so we don't need to stor in db
    localStorage.setItem('favArray', JSON.stringify(this.state.favArray));
  }
  
  // connect react with API that you build
  // is the same as before exactly
  // this is the way that we learn till now
  getAllItem = () => {
    axios
      .get(`http://localhost:5000/allSeller`)
      .then((response) => {
        console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        this.setState({ Seller: response.data });
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };


  render() {
    return (
      <div className="App"> 
      <Router>
        {/* <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand">Home</Link>
    <Link to='/Personal' class="navbar-brand">Personal</Link>
    <Link to='/Favorite' class="navbar-brand">Favorite</Link>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav> */}

        <header>
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">Selling Stuff</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  <li class="nav-item active">
                    <Link to='/' class="nav-link" aria-current="page"  >Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/Personal' class="nav-link" >Personal</Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/Favorite' class="nav-link" href="#" tabindex="-1" aria-disabled="true">Favorite</Link>
                  </li>
                </ul>

                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </header>


        <Route exact path="/" component={(props) => {
          return (
            <Home
              SellerState={this.state.Seller}
              getFav={this.getFav} 
            />
          );
        }} />
        <Route />
        <Route exact path="/Favorite" component={(props) => {
          return (
            <Favorite
            FavArray={this.state.FavArray}
              getFav={this.getFav} 
              removeFav={this.removeFav} 
              deleteFav={this.deleteFav}
            />
          );
        }} />
        <Route />
        <Route exact path="/Personal" component={Personal} />
        <Route />
      </Router>

      </div>
    );
  }
}

export default App;
