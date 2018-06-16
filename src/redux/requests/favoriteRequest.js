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
  






    // return axios.post('/api/fav', payload)
    //   .then(response => response.data)
    //   .catch((error) => { throw error; });
    //   console.log('callPostFavorite successful', response)
//   }
  
//   export function placeholder() {
//     console.log('hi');
//   }
  

// export function callPostFavorite(payload) {
//     console.log('this is payload:', payload);
//     const body = ({
//         url: payload.url
//     })
    // const config = {
    //     headers: { 'Content-Type': 'application/json' },
    //     withCredentials: true,
    //   };
        //   return axios.post('/api/rss', body, config)
        //     .then(response => response)
        //     .catch((error) => {
        //       throw error.response || error;
        //     });


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
  
  




