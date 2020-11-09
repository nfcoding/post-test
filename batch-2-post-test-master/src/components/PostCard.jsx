import React from 'react'
import { Link } from 'react-router-dom'
import DeletePostButton from './Button/DeletePostButton'

function PostCard(props) {
  const { post } = props

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <h6 className="card-text">{post.author}</h6>
        <DeletePostButton postId={post.id} />
        <Link to={`/post-update/${post.id}`} className="btn btn-warning">Detail</Link>
      </div>
    </div>
  )
}

export default PostCard
