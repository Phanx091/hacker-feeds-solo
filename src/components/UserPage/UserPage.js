import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
import UserPageApi from "../UserPageApi/UserPageApi";
import { RSS_ACTIONS } from '../../redux/actions/rssActions';

const mapStateToProps = reduxState => ({
  user: reduxState.user,
  // rss: state.rss.items
});
class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS})
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
      
        <div>
          <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
        <ul>
          <UserPageApi/>
        </ul>
        </div>
      );
    }
    return (
      <div>
      <div className="spacing">
      </div>
  
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
