import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const { state, setState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  //handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      username: e.target.value,
    });
  };
  const handleChangePass = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //Add your login loginc hero
    console.log("Login data", formData);
    setState({
      username: formData.username,
      password: formData.password,
    });
    navigate("/account");
  };

  return (
    <>
      <div className="wrapper body">
        <form className="login_box" onSubmit={handleSubmit}>
          <div className="login-header">
            <span>Login</span>
          </div>

          <div className="input_box">
            <input
              type="text"
              id="user"
              className="input-field"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
            {!formData.username && (
              <label htmlFor="user" className="label">
                Username
              </label>
            )}
            <i className="bx bx-user icon"></i>
          </div>

          <div className="input_box">
            <input
              type="password"
              id="pass"
              className="input-field"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            {!formData.password && (
              <label htmlFor="pass" className="label">
                Password
              </label>
            )}
            <i className="bx bx-lock-alt icon"></i>
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <div className="input_box">
            <input type="submit" className="input-submit" value="Submit"/>
          </div>

          <div className="register">
            <span>
              Don`t have an account? <NavLink to="/regiter">Register</NavLink>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
