import request from '@/utils/request'

export function userSearch(name) {
  return request({
    url: '/search/user',
    method: 'get',
    params: { name }
  })
}

export function tagSearch(query) {
  const data = {
    'source': 'pc',
    'request': query
  }
  return request({
    url: '/tag/search',
    method: 'post',
    data
  })
}
