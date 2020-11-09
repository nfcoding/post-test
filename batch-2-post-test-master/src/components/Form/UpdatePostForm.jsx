import React from 'react'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import SubmitButton from '../Button/SubmitButton'
import TextInput from '../Input/TextInput'
import postValidation from '../../validations/postValidation'
import Card from '../Card'
import { updatePostApi } from '../../services/api'

function UpdatePostForm(props) {
  const { data } = props

  const params = useParams()
  const { postId } = params
  const { register, handleSubmit, errors } = useForm({
    defaultValues: data,
    resolver: joiResolver(postValidation),
  })

  function updatePost(dataForm) {
    updatePostApi(postId, dataForm)
  }
  return (
    <Card title="Update Post">
      <form onSubmit={handleSubmit(updatePost)}>
        <TextInput name="title" id="title" label="Title" refInput={register} error={errors.title && errors.title.message} />
        <TextInput name="author" id="author" label="Author" refInput={register} error={errors.author && errors.author.message} />
        <SubmitButton label="Update Post" />
      </form>
    </Card>
  )
}
export default UpdatePostForm
