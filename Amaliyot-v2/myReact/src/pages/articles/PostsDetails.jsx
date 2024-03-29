/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";

function PostsDetail() {
  const { userid } = useParams();
  const url = `http://localhost:3500/posts/?userId=${userid}`;
  const { data: users, isPending, error } = useFetch(url);
  return (
    <div className="container">
      {isPending && <h2>{isPending}</h2>}
      {error && <h2>{error}</h2>}
      {users && 
        <div >
          <PostsAuthor />
          <hr />
          <div className="row">
          
            {  users.map((user) => {
                return (
                  <div className="col-md-4" key={user.id}>
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

export const PostsAuthor = () => {
   const { userid } = useParams();
   const url = `http://localhost:3500/usersp?id=${userid}`;
   const { data:userp } = useFetch(url);
  //  console.log(userp.id);
  return <h3>Post of {userp && userp.name}   </h3>;
};
