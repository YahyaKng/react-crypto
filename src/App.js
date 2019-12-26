import React, { Component } from 'react';
import Header from './components/layouts/Header';
import GetPrice from './components/pages/GetPrice';
import News from './components/pages/News';
import About from './components/pages/About';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';

const apiKey = '596e8da66b1ab0f8f30c5434c395a163e05ef079a6a531b5b95fb023c77287f4';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="col-12">
              <Header />
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <GetPrice />
                </React.Fragment>
              )} />
              <Route path='/news' component={News} apiKey={apiKey} />
              <Route path='/about' component={About} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
