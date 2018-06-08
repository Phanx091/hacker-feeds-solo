import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
// import { RSS_ACTIONS } from '../../redux/actions/rssActions';
// import { FETCH_RSS } from '../../redux/actions/rssActions';
import Nav from "../../components/Nav/Nav";
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from "../../redux/actions/loginActions";
// import axios from "axios";
import { RSS_ACTIONS } from "../../redux/actions/rssActions";

import ApiArticles from "../ApiArticles/ApiArticles";

const mapStateToProps = state => ({
  user: state.user,
  rss: state.rss
});

// const config = {
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true
// };

class UserPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rssList: []
  //   };
  // }

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
    // console.log(config);
    // axios
    //   .get("/api/rss", config)
    //   .then(response => {
    //     this.setState({
    //       rssList: response.data
    //     });
    //     console.log(`Axios.get.API call all RSS:`, response.data);
    //   })
    //   .catch(error => {
    //     throw error;
    //   });
    this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS})
   
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  };

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>

          {/* {JSON.stringify(this.state.rssList)} */}
          <ul>
            {this.props.rss.map(feed => <ApiArticles key={feed.id} feed={feed} />
            )}
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
