import base64 from 'base-64';

const API = {
  baseUrl: 'http://10.22.54.104:8080/asset/tracking/',
  getUser() {
    const userUrl = 'users/testUser';
    const username = 'testUser';
    const password = 'password';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
    headers.append('Access-Control-Allow-Origin', '*');
    return fetch(this.baseUrl + userUrl, {
      headers,
      method: 'GET'
    }).then(res => res.json());
  }
};

export default API;
