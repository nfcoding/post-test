import React from 'react'
import { Provider } from 'react-redux'
import Base from './Base'
import store from '../store'

function App() {
  return (
    <Provider store={store}>
      <Base />
    </Provider>
  )
}

export default App
