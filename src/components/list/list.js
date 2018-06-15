import React, { Component } from "react";
import { connect } from "react-redux";
// import { RSS_ACTIONS } from '../../redux/actions/rssActions';
import axios from 'axios';
// import Nav from "../../components/Nav/Nav";


const mapStateToProps = reduxToState => ({
  user: reduxToState.user,
  rss: reduxToState.rss
});
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {

      recommendList: [],
    }

  }
 
  

  componentDidMount() {
    this.getRecommendedLinks();
  }

  getRecommendedLinks(rss) {
    axios({
      method: "GET",
      url: "/api/rss/recommend",
      data: rss
  }).then((response) => {
      this.setState({
        recommendList: response.data
      })
      console.log('get RECOMMEND LIST', response.data)
  })
  .catch((error) => {
      alert('Error on axios post');
  });

}



  render() {

    
    return (
    
      <div>
      
        

        <div>
          <ul>
          {this.state.recommendList.map((list, i) => {
            return (
          <li key={i}>  <div style={{textAlign: 'center', margin: '15px', padding: 1}}> <br/>{list.title} <br/><img border-radius='20%' height="160" width="160" src={list.image} alt="" className="img-responsive"/></div></li>)})}
          </ul>
       </div>



      
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(List);
