import { NavLink } from "react-router-dom"
import "./Login.css"
const Login = () => {
  return (
    <>
    <div className="wrapper body">
  <div className="login_box">
    <div className="login-header">
      <span>Login</span>
    </div>

    <div className="input_box">
      <input type="text" id="user" className="input-field" required/>
      <label htmlFor="user" className="label">Username 
      </label>
      <i className="bx bx-user icon"></i>
    </div>

    <div className="input_box">
      <input type="password" id="pass" className="input-field" required/>
      <label htmlFor="pass" className="label">Password</label>
      <i className="bx bx-lock-alt icon"></i>
    </div>

    <div className="remember-forgot">
      <div className="remember-me">
        <input type="checkbox" id="remember"/>
        <label htmlFor="remember">Remember me</label>
      </div>

      <div className="forgot">
        <a href="#">Forgot password?</a>
      </div>
    </div>

    <div className="input_box">
      <input type="submit" className="input-submit" value="Login"/>
    </div>

    <div className="register">
      <span>Don`t have an account? <NavLink to="/regiter">Register</NavLink></span>
    </div>
  </div>
</div>
    
    
    </>
  )
}

export default Login