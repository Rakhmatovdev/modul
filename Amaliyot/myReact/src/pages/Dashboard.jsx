import { NavLink } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
function Dashboard() {
  const { data:users, isPending:loading, error } = useFetch("http://localhost:3500/articles");
  return (
    <div className="container">
      {loading && <h1 className="text-center mt-3">Loading...</h1>}
      {error && <h1 className="text-center text-danger mt-3">APi Hatolik mavjud</h1>}
      <table className="table table-light w-100 table table-bordered mt-5 d-flex justify-content-center">
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr className="table-light" key={index}>
                  <td>Id: {user.id}</td>
                  <td>Title: {user.title}</td>
                  <td>Author: {user.author}</td>
                  <td>
                    <NavLink className="btn btn-secondary" to={`/dashboard/${user.id}`}>
                      Read More
                    </NavLink>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;