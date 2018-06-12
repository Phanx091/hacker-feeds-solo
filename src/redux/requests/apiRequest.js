import axios from 'axios';

export function callApiForm(feed) {
  const apiKey = 'aslzrjijkn6uvhmtk18wck8vhkadgl2iwdv2yejm';
    console.log(`apiRequest.axios.get.feed`, feed)
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${feed}&api_key=${apiKey}&order_by=pubDate&order_dir=desc`)
  .then(response => response.data)
  .catch(error => {
    throw error.response || error;
  });
}




// export function callApiItems(items) {
//     console.log(`apiRequest.axios.get.items`, items)
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




  
