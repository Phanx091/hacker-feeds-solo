import axios from 'axios';

export function callApiForm(feed) {
    console.log(`apiRequest.axios.get`, feed)
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`)
  .then(response => response.data.Feed)
  .catch(error => {
    throw error.response || error;
  });
}

export function callApiItems(items) {
    console.log(`apiRequest.axios.get`, items)
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${items}`)
  .then(response => response.data.items)
  .catch(error => {
    throw error.response || error;
  });
}


  
