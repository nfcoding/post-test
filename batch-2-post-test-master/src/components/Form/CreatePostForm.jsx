import React from 'react'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import SubmitButton from '../Button/SubmitButton'
import TextInput from '../Input/TextInput'
import { createPostApi } from '../../services/api'
import postValidation from '../../validations/postValidation'
import Card from '../Card'

function CreatePostForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(postValidation),
  })
  const history = useHistory()

  function handleCreate(data) {
    createPostApi(data).then(
      () => history.push('/post-list'),
    )
  }

  return (
    <Card title="Create Post">
      <form onSubmit={handleSubmit(handleCreate)}>
        <TextInput name="title" id="title" label="Title" refInput={register} error={errors.title && errors.title.message} />
        <TextInput name="author" id="author" label="Author" refInput={register} error={errors.author && errors.author.message} />
        <SubmitButton label="Post" />
      </form>
    </Card>
  )
}
export default CreatePostForm
