import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

const mapStateToProps = state => ({
  user: state.user,
});

class My_RSS_Page extends Component {
  

  render() {

    return (
      <div>
          <Nav />

        My_RSS_Page
       
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(My_RSS_Page);

