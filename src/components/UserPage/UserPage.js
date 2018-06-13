import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
// import { RSS_ACTIONS } from "../../redux/actions/rssActions";
import UserPageApi from "../UserPageApi/UserPageApi";
import { API_ACTIONS } from '../../redux/actions/apiActions';


const mapStateToProps = reduxState => ({
  user: reduxState.user,
  // rss: state.rss.items
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.getItems();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push("home");
    }
  }

  getItems() {
    this.props.dispatch({type: API_ACTIONS.FETCH_API});
  }

  // logout = () => {
  //   this.props.dispatch(triggerLogout());
  //   // this.props.history.push('home');
  // };

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
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
