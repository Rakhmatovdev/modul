import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

const PostAuthor = () => {
  const { postId } = useParams();
  const { users, loading, error } = useFetch(`/users/${postId}`);
  return <h3>Posts of {users.name}</h3>;
};
const PostDetail = () => {
  const { postId } = useParams();
  const { users, loading, error } = useFetch(`/posts?postId/${postId}`);
  console.log(postId);
  console.log(users);
  return (
    <>
      <div className="container">
        <PostAuthor />
        <hr />
        <div className="row">
          {users &&
            users.map((user) => {
              return (
                <div key={user.id} className="card col-md-4 mt-3 mb-5">
                  <div className="card-shadow">
                    <div className="card-header">
                    {user.title}</div>
                      <div className="card-body">{user.body}</div>
                    
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
