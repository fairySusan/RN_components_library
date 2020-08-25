import axios, { AxiosResponse } from 'axios';
import {BaseUrl} from '../../local_config';

const instance = axios.create({
  baseURL: BaseUrl,
  timeout: 3000,
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  },
  headers: {'X-Custom-Header': 'foobar'}
});

instance.defaults.headers.common['Authorization'] ='';

// 请求拦截器
instance.interceptors.request.use(function (config) {
  console.log(config.baseURL);
  return config;
}, function (error) {
 
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((response: AxiosResponse<any>) => {
  const res = response.data;
  const result = {
    data: res.data,
    statusText: res.message,
    status: response.status,
    headers: response.headers,
    config: response.config
  }
  return result;
}, function (error) { // 500 或者请求中断, 视图组件也可以跑通，不用写try catch
  const result = {
    data: undefined,
    status: 500,
    statusText: 'fail',
    headers: {},
    config: {},
    request: {}
  }
  return Promise.resolve(result);
});

export default instance;