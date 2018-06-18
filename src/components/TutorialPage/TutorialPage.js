import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';
import './Tutorial.css';
import { Link } from 'react-router-dom';


const mapStateToProps = state => ({
  user: state.user,
});



class TutorialPage extends Component { // also the page where you cab favorite articles 
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

        </div>
      );
    }
    
    return (
        <div> 
     
        { content }
        <p><h2> Lets add your first Rs by navigating to add tab. </h2></p>

        <p><iframe src="https://giphy.com/embed/3ksOIQa9GXDEo9Rz1V" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></p>

        <p><h2> The rest is down hill from here.</h2></p>
        <div className="spacing">
        </div>
        <div className="next">
        <Link to="/user"><p><h1> Ready? </h1></p>
        </Link>
        </div>
      </div>
    );
  }
}






export default connect(mapStateToProps)(TutorialPage);