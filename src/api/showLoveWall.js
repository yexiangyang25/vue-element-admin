import request from '@/utils/request'

export function listShowLoveWall(query) {
  const data = {
    'source': 'pc',
    'request': query
  }
  return request({
    url: '/order/love/list',
    method: 'post',
    data
  })
}

export function fetchShowLoveWall(id) {
  const data = {
    'source': 'pc',
    'request': id
  }
  return request({
    url: '/order/love/detail',
    method: 'post',
    data
  })
}

export function createShowLoveWall(obj) {
  const data = {
    'source': 'pc',
    'request': obj
  }
  return request({
    url: '/order/love/create',
    method: 'post',
    data
  })
}

export function updateShowLoveWall(data) {
  return request({
    url: '/order/love/update',
    method: 'post',
    data
  })
}
