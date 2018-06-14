import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class RssList extends Component { // also the page where you cab favorite articles 
  constructor(props) {
    super(props);

    this.state = {
      recommendList: [],
    }
  }


  getRecommendRss = () => {
    axios.get(`/api/rss/recommend/${true}`)
        .then((response) => {
            console.log('success on getRecommendRss:', response)
            console.log(response.data);
            this.setState({
              recommendList: response.data,
            });
        })
        .catch((error) => {
            console.log('error on : getRecommendRss', error);
        })
    }










  componentDidMount() {
    this.props.dispatch(fetchUser());
}
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
        this.props.history.push('home');
    }
  }


  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        // <div className ="Recommend">
        // {this.state.recommendList.map(list => <RecommendCard key = {list.id} title={list.title} image={list.image}/>)}
        // </div>

        <div>
          <p>
            RssList
          </p>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(RssList);
