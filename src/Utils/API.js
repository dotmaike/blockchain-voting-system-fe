import base64 from 'base-64';

const baseUrl = 'http://10.22.54.104:8080/asset/tracking/';
const userUrl = 'users/testUser';

const API = {
  getUser() {
    const username = 'testUser';
    const password = 'password';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
    headers.append('Access-Control-Allow-Origin', '*');
    return fetch(baseUrl + userUrl, {
      headers,
      method: 'GET'
    }).then(res => res.json());
  },
  getCountries() {
    return fetch('https://restcountries.eu/rest/v2/all', {
      method: 'GET'
    }).then(res => res.json());
  }
};

export default API;
