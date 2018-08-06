import axios from 'axios';
import base64 from 'base-64';

const username = 'USER_NAME';
const pass = 'PASSWORD';

const encoded_auth = base64.encode(username + ':' + pass);
const headers = {'Authorization': 'Basic ' + encoded_auth}

export const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers
});

