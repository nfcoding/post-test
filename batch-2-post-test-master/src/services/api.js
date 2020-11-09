import Axios from 'axios'
import userCookie from './userCookie'
const config = {
  baseURL: 'http://127.0.0.1:3000/v1',
}

const api = Axios.create(config)

export function registerUserApi(params) {
  return api.post('/register', params)
}

export function loginUserApi(params) {
  return api.post('/login', params)
    .then(
      (response) => {
        const { data } = response
        userCookie.login(data.accessToken)
        return true
      },
    )
}

export function createPostApi(params) {
  return api.post('/posts', params, {
    headers: {
      Authorization: `Bearer ${userCookie.getToken()}`,
    },
  })
}

export function getPostsApi() {
  return api.get('/posts', {
    headers: {
      Authorization: `Bearer ${userCookie.getToken()}`,
    },
  })
}

export function deletePostApi(postId) {
  return api.delete(`/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${userCookie.getToken()}`,
    },
  })
}

export function updatePostApi(postId, data) {
  return api.put(`/posts/${postId}`, data, {
    headers: {
      Authorization: `Bearer ${userCookie.getToken()}`,
    },
  })
}

export function getPostByIdApi(postId) {
  return api.get(`/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${userCookie.getToken()}`,
    },
  })
}
