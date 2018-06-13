import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions/userActions";
import Nav from "../../components/Nav/Nav";
import { triggerLogout } from "../../redux/actions/loginActions";
// import RssPageApi from "../RssPageApi/RssPageApi";
// import { API_ACTIONS } from "../../redux/actions/apiActions";
// import { RSS_ACTIONS } from "../../redux/actions/rssActions";

const mapStateToProps = reduxState => ({
  user: reduxState.user,

});
class RssPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    // this.getItems();
  }
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push("home");
    }


  }
  // getItems() {
  //   this.props.dispatch({type: API_ACTIONS.FETCH_API})
  // }
  // handleClickForDelete = (id) => {
  //   axios.delete(`/api/rss/${id}`, config).then(() => {
  //   }).catch(error => {
  //     throw error;
  //   });
  // }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  };

  render() {
    let content = null;
    // const {rss} = this.props
    if (this.props.user.userName) {
      content = (
        <div>
          <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
          
          <pre>{JSON.stringify(this.props.reduxState)}</pre>
        </div>
      );
    }
    return (
      <div>
        <Nav />
        {content}
        {/* <ul>
            {rss.map(feed => (
              <RssPageApi key={feed.id} feed={feed}/>
            ))}
        </ul> */}
      </div>
    );
  }
}
export default connect(mapStateToProps)(RssPage);






