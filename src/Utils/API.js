import axios from 'axios';

const baseUrl = 'http://10.22.54.104:8080/asset/tracking';
const userUrl = '/users/';
const assetUrl = '/asset/';

const API = axios.create({
  baseURL: baseUrl
});

export function getCountries() {
  return axios.get('https://restcountries.eu/rest/v2/all').then(res => res);
}

export function getUser(username, password) {
  return API({
    method: 'get',
    url: userUrl + username,
    auth: {
      username,
      password
    }
  }).then(res => res);
}

export function setAsset(data) {
  return API({
    method: 'post',
    url: assetUrl,
    data,
    auth: {
      username: 'testUser',
      password: 'password'
    }
  }).then(res => res);
}
