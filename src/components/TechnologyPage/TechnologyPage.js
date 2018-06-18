import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import "./Technology.css";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  user: state.user
});

class TutorialPage extends Component {
  // also the page where you cab favorite articles
  constructor(props) {
    super(props);

    this.state = {
      recommendList: []
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchUser());
  }
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push("home");
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className="technology">
          <p>
            <h1>technologies</h1>
          </p>
        </div>
      );
    }

    return (
      <div>
        {content}
    
          <ul><p><h2>
              <li>React</li>
              <br/>
              <li>React redux</li>
              <br/>
              <li>React saga</li>
              <br/>
              <li>Axios</li>
              <br/>
              <li>Material-ui</li>
              <br/>
              <li>Node</li>
              <br/>
              <li>Express</li>
              <br/>
              <li>Passport</li>
              <br/>
              <li>PostgreSQL</li>
              <br/>
              <li>Rss2JSON Api</li></h2></p>
        </ul>
          
  

     

        <div className="next">
          <Link to="/">
            <p>
              <h1> Logout! </h1>
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TutorialPage);
