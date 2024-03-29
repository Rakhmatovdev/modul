import { NavLink } from "react-router-dom";
import { useFetch } from "../../hook/useFetch"

const Posts = () => {
    const {error,isPending:loading,data:users}=useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div className="container">
    <div className="row">
    {loading && <h1 className="text-center mt-3">Loading...</h1>}
    {error && <h1 className="text-center text-danger mt-3">APi Hatolik mavjud</h1>}
        {users &&
          users.map((user) => {
            return (
              <div key={user.id} className="col-md-6" >
                <div className="card my-4">
                <h3 className="card-header">{user.username}</h3>
                <div className="card-body">
                    <span>
                        <em>Taxallus:{user.username}</em>
                    </span>
                    <br/>
                    Contacts:{user.email}
                </div>
                <div className="card-footer">
                  <NavLink className="btn btn-primary" to={`/posts/${user.id}`}>
                    Read More
                  </NavLink>
                </div>
                </div>
              </div>
            );
          })}
          </div>
  </div>
  )
}

export default Posts