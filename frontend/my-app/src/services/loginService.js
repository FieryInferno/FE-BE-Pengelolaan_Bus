// import axios from 'axios';
import http from '../http-common';

const create = (data) => {
  return http.post('/auth/login', data);
};

const dataService = {create};

export default dataService;
