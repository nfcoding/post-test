import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UpdatePostForm from '../components/Form/UpdatePostForm'
import CenterLayout from '../layouts/CenterLayout'
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
    <CenterLayout>
      { posts && <UpdatePostForm data={posts} />}
    </CenterLayout>
  )
}

export default UpdatePostScreen
