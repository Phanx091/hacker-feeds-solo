import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

const mapStateToProps = state => ({
  user: state.user,
});

class AddRSSPage extends Component {
  

  render() {

    return (
      <div>
          <Nav />

        ADD RSS PAGE
       
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddRSSPage);

