import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = reduxState => ({
  reduxState
});
class RssPageApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=${this.props.feed.url}`)
      .then(response => {
        this.setState({
          apiData: response.data.feed
        });
        // console.log(this.state.apiData); this works
        console.log(`Success axios.get.API`, response.data);
      })
      .catch(error => {
        console.log(`ERROR on axios.get.API`, error);
      });
  }

  render() {
    return (
      <li>
        {/* {JSON.stringify(this.state)} */}
        <div
          style={{
            textAlign: "center",
            margin: "10px",
            padding: "10px",
            border: "1px solid black"
          }}>
          <img
            style={{ width: "150px", height: "150px" }}
            src={this.state.apiData.image}
            alt={this.state.apiData.description}
          />
          <br />
          {this.state.apiData.title}
          <br />
        </div>
      </li>
    );
  }
}

export default connect(mapStateToProps)(RssPageApi);
