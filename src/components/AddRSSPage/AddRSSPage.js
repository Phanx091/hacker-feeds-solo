import React, { Component } from "react";
import { connect } from "react-redux";
import { RSS_ACTIONS } from '../../redux/actions/rssActions';
import RssPageApi from "../RssPageApi/RssPageApi";
// import axios from 'axios';

import Nav from "../../components/Nav/Nav";

const mapStateToProps = state => ({
  user: state.user,
  rss: state.rss.items,
});
class AddRssPage extends Component {
  constructor(props) {
    super(props);
    this.state = ''
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push("/rss");
    }
  }
  handleClickForRSS = event => {
    event.preventDefault();
    const action = { type: RSS_ACTIONS.ADD_RSS, payload: this.state};
    this.props.dispatch(action);
    console.log(this.state);
    console.log(action);
  };

  handleChangeForRSS = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  render() {
    const {rss} = this.props;
    return (
      <div>
        <Nav />
        <form>
          <h3>ADD RSS PAGE</h3>
          <input
            onChange={this.handleChangeForRSS}
            name="url"
            placeholder="RSS URL HERE"
          />
            <button onClick={this.handleClickForRSS}> Add </button>
        </form>
        <ul>
            {rss.map(feed => (
              <RssPageApi key={feed.id} feed={feed}/>
            ))}
        </ul>
      
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddRssPage);
