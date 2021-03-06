import Cookies from 'js-cookie'

const initialState = {
  isLoggedIn: !!Cookies.get('token'),
  // isLoggedIn: false,
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'loggedIn':
      return { ...state, isLoggedIn: true }
    case 'loggedOut':
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}

export default authReducer
