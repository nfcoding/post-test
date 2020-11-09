import React, { useEffect, useState } from 'react'
import { getPostsApi } from '../services/api'
import PostCard from './PostCard'

function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPostsApi().then(
      (response) => setPosts(response.data),
    )
  }, [])

  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {
            posts.length > 0 && posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ),
            )
          }
          {
            posts.length < 0 && (<h5>Data Kosong</h5>)
          }
        </div>
      </div>
    </div>
  )
}
export default PostList
