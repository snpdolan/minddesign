import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import {  } from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Signup from './Signup';
import Signin from './Signin';

class App extends Component {
  constructor(props){
    super(props);

  }
  
  render() {
    return (
      <>
        <Navbar />
        <div className='container main-app mt-4'>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <Redirect to='/signin' />
          </Switch>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
    // categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, null)(App);