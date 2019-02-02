import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    'source': 'pc',
    'request': {
      username,
      password
    }
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

