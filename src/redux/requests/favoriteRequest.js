import axios from 'axios';

export function callPostFavorite(payload) {
    return axios({
        method: "POST",
        url: "/api/fav",
        data: payload
    }).then((response) => {
        console.log('payload success!', response);
    })
    .catch((error) => {
        alert('Error on axios post');
    });
  }
  
export function callGetFavorite() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  return axios.get('/api/fav', config)
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error;
    });
}

export function callDeleteFavorite(id) {
    return axios({
        method: 'DELETE',
        url: `/api/fav/${id}`,
    }).then((response) => {
        console.log('Successful delete rssSaga/rssRequest:', response)
    }).catch((error) => {
        throw error.response || error;
    })
  }
  
  




