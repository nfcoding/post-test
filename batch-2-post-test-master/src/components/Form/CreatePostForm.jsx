import React from 'react'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import SubmitButton from '../Button/SubmitButton'
import TextInput from '../Input/TextInput'
import { createPostApi } from '../../services/api'
import postValidation from '../../validations/postValidation'
import Card from '../Card'

function CreatePostForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(postValidation),
  })

  return (
    <Card title="Create Post">
      <form onSubmit={handleSubmit(createPostApi)}>
        <TextInput name="title" id="title" label="Title" refInput={register} error={errors.title && errors.title.message} />
        <TextInput name="author" id="author" label="Author" refInput={register} error={errors.author && errors.author.message} />
        <SubmitButton label="Post" />
      </form>
    </Card>
  )
}
export default CreatePostForm
