import axios from 'axios';

export default () => {
  return axios.get(`${process.env.REACT_APP_APIBASE}/getEvents`);
};
