import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import "./Tutorial.css";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

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
        <div className="tutorial">
          <h1 id="welcome">Welcome, {this.props.user.userName}.</h1>
        </div>
      );
    }

    return (
      <div>
        {content}
        <h2> Lets add your first Rss by navigating to add tab. </h2>
        <div className="gif">
          <Iframe
            url="https://giphy.com/embed/3ksOIQa9GXDEo9Rz1V"
            display="inline-block"
            position="relative"
            align-item="center"
            width="270"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          />
        </div>

        <h2> The rest is down hill from here.</h2>
        <div className="spacing" />
        <div className="ready">
          <Link to="/user">
            <h1> Ready? </h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TutorialPage);
