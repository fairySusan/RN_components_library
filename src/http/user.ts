import http from './http';

export const getList = (data:{pageIndex: number}) => {
  const params = {...data, pageSize: 10}
  return http.get('user/getUserList', {
    params
  })
}