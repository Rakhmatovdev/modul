import { useState } from "react";
import { useFetch } from "../hook/useFetch";

const Dashboard = () => {
  const [author, setAuthor] = useState(1);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const {
    error,
    isPending: loading,
    data: users,
  } = useFetch("http://localhost:3500/usersp");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ 
      id: Date.now(),
      userId:author, 
      title,
       body:text });
  };

  return (
    <div>
      <div className="container">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col-8 offset-2"></div>
          <form action="#" className="form-group" onSubmit={handleSubmit}>
            <select
              name="users"
              id=""
              className="form-control"
              onChange={(e) => setAuthor(e.target.value)}
            >
              {users &&
                users.map((user) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                })}
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="form-control"
              placeholder="Article..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="form-control btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
