import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';
import './Welcome.css';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// import axios from 'axios';


// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});


// const styles = ({
//     fontSize: 12,
//     input: {
//       display: 'none',
//     },
//   });

class WelcomeStartPage extends Component { // also the page where you cab favorite articles 
  constructor(props) {
    super(props);



    this.state = {
      recommendList: [],
    }

  }





  componentDidMount() {
    this.props.dispatch(fetchUser());
}
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
        this.props.history.push('home');
    }
  }


  render() {
    let content = null;


    if (this.props.user.userName) {

      content = (
        <div className="welcome">
        <p className="welcomeTag">
        <h1 id="welcome">Welcome, {this.props.user.userName}.</h1>
        </p>
        <h5> lets get started by pressing next</h5>
      <ul>

      </ul>
        </div>
      );
    }


    return (
        <div> 
    
        { content }
        <div className="spacing">
        <br />
        </div>
        {/* <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> */}
    
        <div className="next">
        <Link to="/tutorial"><p> Tutorial? </p>
        </Link>
        </div>
        <div className="next">
        <br/>
        <Link to="/user"><p><h1> NEXT </h1></p>
        </Link>
        </div>
    

      </div>
    );
  }
}



// WelcomeStartPage.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
// export default connect(mapStateToProps)(withStyles(styles)(WelcomeStartPage));


export default connect(mapStateToProps)(WelcomeStartPage);