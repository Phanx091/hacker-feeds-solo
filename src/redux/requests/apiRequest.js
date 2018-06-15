import axios from "axios";

export function callApiToFetchData(feed) {
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
