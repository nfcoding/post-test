import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import UpdatePostForm from '../components/Form/UpdatePostForm'
import { getPostByIdApi } from '../services/api'

function UpdatePostScreen() {
  const params = useParams()
  const { postId } = params
  const [posts, setPosts] = useState()

  useEffect(() => {
    getPostByIdApi(postId).then(
      // (response) => console.log(response),
      (response) => setPosts(response.data),
    )
  }, [postId])

  return (
    <Fragment>
      { posts && <UpdatePostForm data={posts} />}
    </Fragment>
  )
}

export default UpdatePostScreen
