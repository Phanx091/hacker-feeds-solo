import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

import Nav from '../../components/Nav/Nav';


const mapStateToProps = state => ({
  user: state.user,
});

class AddRSSPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}

}
componentWillReceiveProps(nextProps) {
  if (nextProps.user.userName) {
    this.props.history.push('/rss');
  }
}

handleClickForRSS = (event) => {
  event.preventDefault();
  const action = { type: 'ADD_FORM', payload: this.state};
  this.props.dispatch(action);
  console.log(this.state);
  console.log(action);
}

handleChangeForRSS = (event) => {
  console.log(event.target.name)
  this.setState ({
          [event.target.name]: event.target.value,
  });
}


// getFeedData(data) {
//   const url = `https://api.rss2json.com/v1/api.json?rss_url=${data}`;
// }



// componentDidMount() {

//   axios.get(`https://api.rss2json.com/v1/api.json?rss_url=`)
//   .then(response => {
//     const rssData = response.data;
//     this.setState({
//       url: rssData
//     });
//   })
//   .catch(error => {
//     console.log(`ERROR on axios.get.api: ${error}`);
//   })
// }

  

  render() {

    return (
      <div>
          <Nav />
          <form>
            <h3>ADD RSS PAGE</h3>
            <input onChange={this.handleChangeForRSS} name="URL" placeholder="RSS URL HERE"/>

            <button onClick={this.handleClickForRSS}> Add </button>
       </form>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddRSSPage);

