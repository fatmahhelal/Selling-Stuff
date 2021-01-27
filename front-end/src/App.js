import React from 'react';
import './App.css';
import Articles from './components/Articles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      tryAxios: [],
    };
  }

  // connect react with API that you build
  // is the same as before exactly
  // this is the way that we learn till now
  getAllArticles = () => {
    axios
      .get(`http://localhost:5000/articles`)
      .then((response) => {
        console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        this.setState({ tryAxios: response.data.articles });
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  funcSetArticles = (newArticles) => {
    this.setState({ articles: newArticles });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.getAllArticles}>GET ALL</button>
        <header className="App-header">
          <p>Welcome to Blogy!</p>
        </header>
        <Articles
          articles={this.state.articles}
          setArticles={this.funcSetArticles}
        />
      </div>
    );
  }
}

export default App;
