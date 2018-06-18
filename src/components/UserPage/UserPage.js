import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
import UserPageApi from "../UserPageApi/UserPageApi";
import { API_ACTIONS } from "../../redux/actions/apiActions";
// import { RSS_ACTIONS } from '../../redux/actions/rssActions';


const mapStateToProps = reduxState => ({
  user: reduxState.user,
  api: reduxState.api
});
class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch({type: API_ACTIONS.FETCH_API});
    // this.props.dispatch({type: RSS_ACTIONS.FETCH_RSS})
    this.logIt();
  }
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push("home");
    }
  }

logIt() {
  console.log('DDADASADSDAAD', this.props.api.items)
}

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
      
        <div>
          <h2 id="latest">Latest ({this.props.api.items.length})</h2>
        <ul>
          <UserPageApi/>
  
        </ul>
        </div>
      );
    }
    return (
      <div>
      {/* <div className="spacing">
      </div> */}
  
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
