import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const language = 'language'

export function getLanguage() {
  return Cookies.get(language)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
