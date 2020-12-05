import React from 'react'
import { useHistory } from 'react-router-dom'
import { deletePostApi } from '../../services/api'

function DeletePostButton(props) {
  const { postId } = props
  const history = useHistory()

  function handleClick() {
    deletePostApi(postId).then(
      () => history.push('/post-list'),
    )
  }

  return (
    <button type="button" className="btn btn-danger" onClick={handleClick}>Delete Post</button>
  )
}

export default DeletePostButton
