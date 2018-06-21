import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import "./Welcome.css";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  user: state.user
});

class WelcomeStartPage extends Component {
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
        <div className="welcome">
          <p className="welcomeTag">
            <h1 id="welcome">Welcome, {this.props.user.userName}.</h1>
          </p>
          <h5> lets get started by pressing next</h5>
          <ul />
        </div>
      );
    }

    return (
      <div>
        {content}
        <div className="spacing">
          <br />
        </div>

        <div className="next">
          <Link to="/tutorial">
            <p> Tutorial? </p>
          </Link>
        </div>
        <div className="next">
          <br />
          <Link to="/user">
            <p>
              <h1> NEXT </h1>
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(WelcomeStartPage);
