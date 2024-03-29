import { NavLink } from "react-router-dom";
import "./Register.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
const Register = () => {
  const { createUser  } = useContext(AuthContext);

  const [forms, setForms] = useState({
    username:"",
    email: "",
    password: "",
    forgotPassword:""
  });


  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(forms.password.trim()==forms.forgotPassword.trim()){
      createUser(forms);
      
    }
   else  setForms(prev=>({...prev,password:"",forgotPassword:""}))
  };
  return (
    <div>
      <div className="wrapper body">
        <form className="login_box" onSubmit={handleSubmit}>
          <div className="login-header">
            <span>Register</span>
          </div>

          <div className="input_box">
            <input
              type="text"
              id="user"
              className="input-field"
              value={forms.username}
              onChange={(e)=>setForms({...forms,username: e.target.value})}
              required
            />
           {!forms.username && <label htmlFor="user" className="label">
              Username
            </label>}
            <i className="bx bx-user icon"></i>
          </div>
          <div className="input_box">
            <input
              type="text"
              id="email"
              className="input-field"
              value={forms.email}
              onChange={(e)=>setForms({...forms,email: e.target.value})}
              required
            />
            {!forms.email && <label htmlFor="email" className="label">
              Email
            </label>}
            <i className="bx bx-user icon"></i>
          </div>

          <div className="input_box">
            <input
              type="password"
              id="pass"
              className="input-field"
              value={forms.password}
              onChange={(e) => setForms({...forms,password: e.target.value})}
              required
            />
            {!forms.password &&<label htmlFor="pass" className="label">
              Password
            </label>}
            <i className="bx bx-lock-alt icon"></i>
          </div>
          <div className="input_box">
            <input
              type="password"
              id="fpass"
              className="input-field"
              value={forms.forgotPassword}
              onChange={(e) => setForms({...forms,forgotPassword: e.target.value})}
              required
            />
            {!forms.forgotPassword && <label htmlFor="fpass" className="label">
              Forgot Password
            </label>}
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
            <input type="submit" className="input-submit" value="Register" />
          </div>

          <div className="register">
            <span>
              You have an account? <NavLink to="/login">Login</NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
