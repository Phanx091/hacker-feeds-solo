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
        <div>
        <h1 id="welcome">Welcome, {this.props.user.userName}.</h1>
        <h2> lets get started by pressing next</h2>
      <ul>

      </ul>
        </div>
      );
    }
    // function TextButton(props) {
    //     const { classes } = props; 
    //     return (
    //     <div>
    //     <label htmlFor="contained-button-file">
    //     <Link to="/user"><div dangerouslySetInnerHTML={{__html:"<h1>" + "NEXT" + "</h1>"}}/>
 
    //     </Link>
    //     </label>
    //     </div>

    //      )
    //     }
    
    return (
        
      <div>
        { content }
     
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <label htmlFor="contained-button-file">
        <div className="welcome"> */}
        <Link to="/user"><h1> NEXT </h1>
        {/* <div dangerouslySetInnerHTML={{__html:"<h1>" + "NEXT" + "</h1>"}}/> */}
 
        </Link>
        {/* </div>
        </label> */}
    

      </div>
    );
  }
}



// WelcomeStartPage.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
// export default connect(mapStateToProps)(withStyles(styles)(WelcomeStartPage));


export default connect(mapStateToProps)(WelcomeStartPage);