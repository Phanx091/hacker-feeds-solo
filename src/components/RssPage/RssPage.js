import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
import RssPageApi from "../RssPageApi/RssPageApi";



const mapStateToProps = reduxState => ({
  user: reduxState.user,
});
class RssPage extends Component {
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
        <div>
          <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
        <ul>

      <RssPageApi/>
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
export default connect(mapStateToProps)(RssPage);






