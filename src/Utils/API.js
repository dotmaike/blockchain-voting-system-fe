import axios from 'axios';

const baseUrl = 'http://10.22.54.104:8080/asset/tracking';
const userUrl = '/users/';
const assetUrl = '/asset/';

export function isAuthenticated() {
  return (
    (sessionStorage.getItem('userInfo') && Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length > 0) || false
  );
}

const API = axios.create({
  baseURL: baseUrl,
  headers: { 'Cache-Control': 'no-cache' }
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
  if (!isAuthenticated) {
    return Promise.reject(new Error('reject'));
  }
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
