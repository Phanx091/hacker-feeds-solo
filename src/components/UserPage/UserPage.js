import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
// import { triggerLogout } from "../../redux/actions/loginActions";
import { RSS_ACTIONS } from "../../redux/actions/rssActions";
import UserPageApi from "../UserPageApi/UserPageApi";
import ReactHtmlParser from 'react-html-parser';




const mapStateToProps = state => ({
  user: state.user,
  rss: state.rss.items
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    // this.prop.dispatch({type: RSS_ACTIONS.FETCH_RSS});
    this.getItems();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push("home");
    }
  }

  getItems() {
    this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS})
  }



  // logout = () => {
  //   this.props.dispatch(triggerLogout());
  //   // this.props.history.push('home');
  // };

  render() {
    const {rss} = this.props;
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
          {/* {JSON.stringify(this.state.rssList)} */}
          <ul>
            {rss.map(feeds => <UserPageApi key={feeds.id} feed={feeds} />)}
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
