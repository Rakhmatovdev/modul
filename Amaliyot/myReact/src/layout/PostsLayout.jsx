import { Outlet } from 'react-router-dom'

function PostsLayout() {
  return (
    <div>
        <h2>My Posts</h2>
        <hr />
        <Outlet/>
    </div>
  )
}

export default PostsLayout