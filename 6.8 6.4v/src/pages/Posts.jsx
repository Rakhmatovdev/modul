import Skeleton from "react-loading-skeleton";
import { useFetch } from "../hook/useFetch";
import { NavLink } from "react-router-dom";

const Posts = () => {
  const { error, loading, users } = useFetch("/users");
  console.log(users);

  return (
    <div className="container">
      <h1> Posts page</h1>
      {loading && (
        <Skeleton count={5} height={100} borderRadius={5} className="my-4" />
      )}
      {error && (
        <h1 className="text-danger text-center">Something wen wrong</h1>
      )}
      {users &&
        users.map((user) => {
          return (
            <div key={user.id} className="col-md-6">
              <div className="card my-4">
                <h3 className="card-header">{user.name}</h3>
                <div className="card-body">
                  <span>
                    <em>Taxallus:{user.username}</em>
                  </span>
                  <br />
                  Contact:{user.email}
                </div>
                <div className="card-footer">
                  <NavLink to={`${user.id}`} className="btn btn-primary">
                    Read Post
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
