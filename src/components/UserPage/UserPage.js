import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
import UserPageApi from "../UserPageApi/UserPageApi";
import { API_ACTIONS } from "../../redux/actions/apiActions";
import Divider from "@material-ui/core/Divider";

const mapStateToProps = reduxState => ({
  user: reduxState.user,
  api: reduxState.api
});
class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch({ type: API_ACTIONS.FETCH_API });
  }
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push("home");
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName || !this.props.user.userName) {
      content = (
        <div>
          <h2 id="latest">Latest ({this.props.api.items.length})</h2>
          <Divider />
          <ul>
            <UserPageApi />
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

export default connect(mapStateToProps)(UserPage);
