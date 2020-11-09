import React from 'react'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import SubmitButton from '../Button/SubmitButton'
import PasswordInput from '../Input/PasswordInput'
import TextInput from '../Input/TextInput'
import { registerUserApi } from '../../services/api'
import registerValidation from '../../validations/regsiterValidation'
import Card from '../Card'

function RegisterForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(registerValidation),
  })

  return (
    <Card title="Login Form">
      <form onSubmit={handleSubmit(registerUserApi)}>
        <TextInput name="email" id="email" label="Email" refInput={register} error={errors.email && errors.email.message} />
        <PasswordInput name="password" id="password" label="Password" refInput={register} error={errors.email && errors.email.message} />
        <SubmitButton label="Register" />
      </form>
    </Card>
  )
}
export default RegisterForm
