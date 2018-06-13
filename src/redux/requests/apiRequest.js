// import React from "react";
import axios from "axios";
// import { API_ACTIONS } from '../actions/apiActions';
// import { Component } from "react";
// import { connect } from "react-redux";
// import { takeLatest, put as dispatch } from 'redux-saga/effects';


export function callApiItems(feed) {
  console.log(`apiRequest.axios.get`, feed);
  const apiKey = "aslzrjijkn6uvhmtk18wck8vhkadgl2iwdv2yejm";

  return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${feed.url}&api_key=${apiKey}&order_by=pubDate&order_dir=desc`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
      throw error.response || error;
    })
    // return returnedData
}
