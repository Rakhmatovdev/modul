import { NavLink, Outlet } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";
import JR from "../hook/Jasurinc.png";
import { useContext, } from "react";
import { AuthContext } from "../context/AuthContext";

function RootLayout() {
  // const [isLoget,setIsLoget]=useState(true)
  const {state} = useContext(AuthContext);
  return (
    <>
      <nav className="d-flex justify-content-between">
        <h3>
          {" "}
          <img src={JR} alt="MyLogo" height={100} />
        </h3>
        <div className="d-flex gap-3">
          <NavLink to="/" className="btn btn-primary">
            Home
          </NavLink>
          <NavLink to="/articles" className="btn btn-primary">
            Articles
          </NavLink>
          <NavLink to="/about" className="btn btn-primary">
            About
          </NavLink>
          <NavLink to="/contact" className="btn btn-primary">
            Contact
          </NavLink>
          <NavLink to="/posts" className="btn btn-primary">
            Posts
          </NavLink>
          {state.username && (
            <NavLink to="/dashboard" className="btn btn-primary">
              Dashboard
            </NavLink>
          )}
          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>
        </div>
      </nav>
      <BreadCrumps />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
