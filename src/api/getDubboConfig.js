import request from '@/utils/request'

export function getConfig(data) {
  return request({
    url: '/api/v1/dubbo/configuration',
    method: 'get',
    params: data,
    baseURL: '127.0.0.1:8090'
  })
}