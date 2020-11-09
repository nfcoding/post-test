import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginUserApi } from '../../services/api'
import SubmitButton from '../Button/SubmitButton'
import PasswordInput from '../Input/PasswordInput'
import TextInput from '../Input/TextInput'
import Card from '../Card'

function LoginForm() {
  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch()

  function loginUser(data) {
    loginUserApi(data).then(
      (param) => {
        if (param) {
          dispatch({ type: 'loggedIn' })
        }
      },
    )
  }

  return (
    <Card title="Login Form">
      <form onSubmit={handleSubmit(loginUser)}>
        <TextInput name="email" id="email" label="Email" refInput={register} />
        <PasswordInput name="password" id="password" label="Password" refInput={register} />
        <SubmitButton label="Login" />
      </form>
    </Card>
  )
}
export default LoginForm
