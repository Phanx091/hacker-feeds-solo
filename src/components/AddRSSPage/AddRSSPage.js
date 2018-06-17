import React, { Component } from "react";
import { connect } from "react-redux";
import { RSS_ACTIONS } from '../../redux/actions/rssActions';
// import axios from 'axios';
import Nav from "../../components/Nav/Nav";
import RecommendRSS from "../RecommendRSS/RecommendRSS";


const mapStateToProps = reduxToState => ({
  user: reduxToState.user,
  rss: reduxToState.rss
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

    
    return (
    
      <div>
        <Nav />
        <form>
       
          {/* {(JSON.stringify(this.state.recommendList))} */}
          <input
            onChange={this.handleChangeForRSS}
            name="url"
            placeholder="RSS URL HERE"
          />
           
          {/* <div style={{textAlign: 'center', margin: '20px'}}>
            <p style={{opacity: 0.5}}></p> */}

          <button onClick={this.handleClickForRSS}> Add </button>
          {/* </div> */}

        </form>
        <b>Recommend RSS</b>

        <div>
          <RecommendRSS />
         
       </div>



      
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddRssPage);
