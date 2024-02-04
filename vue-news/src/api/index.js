import axios from "axios";

const config = {
  baseUrl : 'https://api.hnpwa.com/v0/'
}

const api = {
  fetchNewsList: () => {
    return axios.get(`${config.baseUrl}news/1.json`);
  },
  fetchAskList: () => {
    return axios.get(`${config.baseUrl}ask/1.json`);
  },
  fetchJobsList: () => {
    return axios.get(`${config.baseUrl}jobs/1.json`);
  },
  fetchUserName: (userName) => {
    console.log('userName', userName);
    return axios.get(`${config.baseUrl}user/${userName}.json`);
  },
  fetchItem: (itemNo) => {
    console.log('itemNo', itemNo);
    return axios.get(`${config.baseUrl}item/${itemNo}.json`);
  },
}

// function fetchNewsList(){
//   return axios.get(`${config.baseUrl}news/1.json`);
// }
// function fetchAskList(){
//   return axios.get(`${config.baseUrl}ask/1.json`);
// }
// function fetchJobsList(){
//   return axios.get(`${config.baseUrl}jobs/1.json`);
// }

export default api;