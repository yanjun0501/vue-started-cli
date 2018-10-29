import axios from 'axios';

axios.interceptors.request.use(config => config);

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response;
  } else if (response.status === 401) {
    return Promise.reject(response);
  } else if (response.status === 403) {
    return response;
  }
  return response;
}, (error) => {
  if (error.response) {
    if (error.response.status > 399 && error.response.status < 500) {
      if (error.response.status === 401) {
        console.log(error.response);
      }
    } else if (error.response.status > 499) { // 500以上系统错误
      console.log(error.response);
    }
  } else if (error.request) {
    console.log('Error request', error, error.status, error.request);
  } else {
    console.log('Error response', error);
  }
  return Promise.reject(error);
});
