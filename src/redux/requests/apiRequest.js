// import React from "react";
import axios from "axios";
// import { API_ACTIONS } from '../actions/apiActions';
// import { Component } from "react";
// import { connect } from "react-redux";
// import { takeLatest, put as dispatch } from 'redux-saga/effects';


export function callApiItems(feed) {
  console.log(`apiRequest.axios.get`, feed);
  const apiKey = "aslzrjijkn6uvhmtk18wck8vhkadgl2iwdv2yejm";

  // let returnedData = {
  //   feeds: [],
  //   items: [],
  // };
    
  return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${feed.url}&api_key=${apiKey}&order_by=pubDate&order_dir=desc`)
    .then(response => {
      // returnedData = {
      //   feeds: [...returnedData.feeds, response.data.feed],
      //   items: [...returnedData.items, ...response.data.items]
      //   };

        return response.data;
    })
    .catch(error => {
      throw error.response || error;
    })
    // return returnedData
}






// const sendApiToReduxStore = (returnedData) => {
//   const action = { type: API_ACTIONS.SET_API, payload: returnedData}; // dispatch data from local state 
//   this.props.dispatch(action);
//   console.log('action', action)
// }





// class apiRequest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       returnedData: {
//         feeds: [],
//         items: []
//       }
//     }
//   }
//   sendApiToReduxStore = event => {
//     const action = { type: API_ACTIONS.SET_API, payload: this.state}; // dispatch data from local state 
//     this.props.dispatch(action);
//   }
//   render() {
//     return (
//       <div>
//         </div>
//     )

//   }
// }

// export default connect()(apiRequest);
  
   




// try dispatching local data to the store by creating a function 



// return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${data}&api_key=${apiKey}&order_by=pubDate&order_dir=desc`)
// .then(response => response.data)
// .catch(error => {
//   throw error.response || error;
// });

// export function callApiItems(items) {
//   console.log(`apiRequest.axios.get.items`, items)
//   const config = {
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true,
//   };
//   return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${items}`)
//   .then(response => response.data.items)
//   .catch(error => {
//     throw error.response || error;
//   });
// }
