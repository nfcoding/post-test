import Cookies from 'js-cookie'

const key = 'token'

function login(token) {
  Cookies.set(key, token)
}

function getToken() {
  return Cookies.get(key)
}

function logOut() {
  Cookies.remove(key)
}

export default {
  login,
  getToken,
  logOut,
}
