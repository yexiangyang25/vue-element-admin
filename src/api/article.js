import request from '@/utils/request'

export function fetchList(query) {
  const data = {
    'source': 'pc',
    'request': ''
  }
  return request({
    url: '/article/list',
    method: 'post',
    data
  })
}

export function fetchArticle(id) {
  const data = {
    'source': 'pc',
    'request': id
  }
  return request({
    url: '/article/detail',
    method: 'post',
    data
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(obj) {
  const data = {
    'source': 'pc',
    'request': obj
  }
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
