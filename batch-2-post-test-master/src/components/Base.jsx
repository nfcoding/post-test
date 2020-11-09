import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import CreatePostScreen from '../screens/CreatePostScreen'
import Secured from './Secured'
import Navbar from './Navbar'
import RedirectToHome from './RedirecToHome'
import PostList from './PostList'
import UpdatePostScreen from '../screens/UpdatePostScreen'

function Base() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Secured>
            <CreatePostScreen />
          </Secured>
        </Route>
        <Route path="/register">
          <RedirectToHome>
            <RegisterScreen />
          </RedirectToHome>
        </Route>
        <Route path="/login">
          <RedirectToHome>
            <LoginScreen />
          </RedirectToHome>
        </Route>
        <Route path="/post-list">
          <Secured>
            <PostList />
          </Secured>
        </Route>
        <Route path="/post-update/:postId">
          <Secured>
            <UpdatePostScreen />
          </Secured>
        </Route>
      </Switch>
    </Router>
  )
}
export default Base
