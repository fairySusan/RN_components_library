import {AxiosRequestConfig} from 'axios';
export interface BaseResponse<T> {
  data: T,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any
}