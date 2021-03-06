import axios from 'axios';

export function callPostRss(payload) {
    console.log('this is payload:', payload);
    const body = ({
        url: payload.url
    })

  return axios({
      method: "POST",
      url: "/api/rss",
      data: body,
  }).then((response) => {
      console.log('payload success!', response);
  })
  .catch((error) => {
      alert('Error on axios post');
  });
}

export function callGetRss() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  return axios.get('/api/rss', config)
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error;
    });
}

export function callDeleteRss(id) {
    return axios({
        method: 'DELETE',
        url: `/api/rss/${id}`,
    }).then((response) => {
        console.log('Successful delete rssSaga/rssRequest:', response)
    }).catch((error) => {
        throw error.response || error;
    })
  }




