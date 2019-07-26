import request from '@/utils/request'

export function loginByUsername(userInfo) {
  const data = {
    'source': 'pc',
    'request': userInfo
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout() {
  const data = {
    'source': 'pc',
    'request': { }
  }
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'post',
    params: {}
  })
}

