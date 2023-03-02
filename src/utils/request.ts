import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import deepmerge from 'deepmerge';

/** 默认配置选项 */
const DEFAULT_CONFIG: AxiosRequestConfig = {
  url: '',
  method: 'GET',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  },
  params: {},
  data: {},
  timeout: 60000,
  responseType: 'json',
};

// Axios 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    handleError(error);
    return Promise.reject(error);
  },
);

// Axios 响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error: AxiosError) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    handleError(error);
    return Promise.reject(error);
  },
);

const handleError = (error: AxiosError) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求';
        break;
      case 401:
        error.message = '未授权，请重新登录';
        break;
      case 403:
        error.message = '拒绝访问';
        break;
      case 404:
        error.message = '请求错误，未找到该资源';
        break;
      case 405:
        error.message = '请求方法未允许';
        break;
      case 408:
        error.message = '请求超时';
        break;
      case 500:
        error.message = '服务器端出错';
        break;
      case 501:
        error.message = '网络未实现';
        break;
      case 502:
        error.message = '网络错误';
        break;
      case 503:
        error.message = '服务不可用';
        break;
      case 504:
        error.message = '网络超时';
        break;
      case 505:
        error.message = 'http版本不支持该请求';
        break;
      default:
        error.message = `连接错误${error.response.status}`;
    }
  } else {
    error.message = '连接到服务器失败';
  }
};

/**
 * 基于 Axios 用于创建并发起 HTTP 请求
 * @param config HTTP 请求的配置选项
 */
const request = <responseType>(config: AxiosRequestConfig) => {
  // 合并默认配置选项
  const _config: AxiosRequestConfig = deepmerge(DEFAULT_CONFIG, config);

  // FormData 数据在 deepmerge 后会丢失，需要重新设置
  if (config.data instanceof FormData) {
    _config.data = config.data;
  }

  // TODO: 可以根据业务接口进行 response 和 types 的进一步统一处理
  return axios<responseType>(_config).then((res) => {
    return res.data;
  });
};

export default request;
