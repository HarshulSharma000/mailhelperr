import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {serverProxy} from '../config/keys';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {
  componentWillMount() {
    //this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
