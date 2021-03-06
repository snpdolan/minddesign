import React, { Component } from 'react';
import { getUserDesigns } from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DesignGrid from './DesignGrid';

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.displayDesigns = this.displayDesigns.bind(this);
  }

  componentDidMount(){
    this.props.getUserDesigns(this.props.auth.id)
  }

  displayDesigns(){
    if (!this.props.designs) {
      return (
        <h1>Nothing to see here yet... hold please...</h1>
      );
    } else if (this.props.designs.length === 0) {
      return (
        <div>
          <h4>Hey! Looks like you don't have any designs yet!</h4>
          <h4>Unless we're briefly searching, head to the homepage and make something awesome.</h4>
        </div>
      );
    } else{

      return (
        <DesignGrid designs={this.props.designs} />
      );
    }
  }

  render() {
    
    return (
      <>
      <div className='row'>
        <div className='col-12 text-center'>
          <div className='jumbotron'>
            <h3>{this.props.auth.name}</h3>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          {this.displayDesigns()}
        </div>
      </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    designs: state.designs
    // timeStamp: state.timeStamp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserDesigns }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);