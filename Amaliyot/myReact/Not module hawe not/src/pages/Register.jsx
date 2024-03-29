import { NavLink } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div>
      <div className="container">
      <div className="d-flex justify-content-between"> <header>Signup</header> 
          <NavLink to="/login">login</NavLink></div>
       
        <form action="#">
          <div className="field email-field">
            <div className="input-field">
              <input
                type="email"
                placeholder="Enter your email"
                className="email"
              />
            </div>
            <span className="error email-error">
              <i className="bx bx-error-circle error-icon"></i>
              <p className="error-text">Please enter a valid email</p>
            </span>
          </div>
          <div className="field create-password">
            <div className="input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
              />
              <i className="bx bx-hide show-hide"></i>
            </div>
            <span className="error password-error">
              <i className="bx bx-error-circle error-icon"></i>
              <p className="error-text">
                Please enter atleast 8 charatcer with number, symbol, small and
                capital letter.
              </p>
            </span>
          </div>
          <div className="field confirm-password">
            <div className="input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="cPassword"
              />
              <i className="bx bx-hide show-hide"></i>
            </div>
            <span className="error cPassword-error">
              <i className="bx bx-error-circle error-icon"></i>
              <p className="error-text">Password don`t match</p>
            </span>
          </div>
          <div className="input-field button">
            <input type="submit" value="Submit Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
