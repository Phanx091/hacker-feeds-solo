import axios from 'axios';

export function callPostRss(payload) {
    const body = ({
        url: payload.url
    })

  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.post('/api/rss', body, config)
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error;
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




