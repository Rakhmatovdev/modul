/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";

function PostsDetail() {
  const { id } = useParams();
  const url = `http://localhost:3500/posts?userId=${id}`;
  const { data: users, isPending, error } = useFetch(url);
  return (
    <div className="container-fluid">
      {isPending && <h2>{isPending}</h2>}
      {error && <h2>{error}</h2>}
      {users && 
        <div className="d-flex">
          <PostsAuthor />
          <hr />
          <div className="row">
          
            {  users.map((user) => {
                return (
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-header">{user.title}</div>
                      <div className="card-body">{user.body}</div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      }
    </div>
  );
}

export default PostsDetail;

const PostsAuthor = () => {
  const { id } = useParams();
  const url = `http://localhost:3500/usersp?=${id}`;
  const { data } = useFetch(url);
  return <h3>Post of "{data.name}"</h3>;
};
