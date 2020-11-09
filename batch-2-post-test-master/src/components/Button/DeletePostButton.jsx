import React from 'react'
import { deletePostApi } from '../../services/api'

function DeletePostButton(props) {
  const { postId } = props

  function handleClick() {
    deletePostApi(postId)
  }

  return (
    <button type="button" className="btn btn-danger" onClick={handleClick}>Delete Post</button>
  )
}

export default DeletePostButton
