import { NavLink, Outlet } from "react-router-dom"
import BreadCrumps from "../components/BreadCrumps"
import JR from "../hook/Jasurinc.png"

function RootLayout() {
  return (
    <>
       <nav className="d-flex justify-content-between">
       <h3 > <img src={JR} alt="MyLogo" height={100}/></h3>
         <div className="d-flex gap-3"><NavLink to="/" className="btn btn-primary">Home</NavLink>
         <NavLink to="/articles" className="btn btn-primary">Articles</NavLink>
         <NavLink to="/about" className="btn btn-primary">About</NavLink>
         <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
         <NavLink to="/login" className="btn btn-primary">Login</NavLink></div>
       </nav>
       <BreadCrumps/>
       <main>
            <Outlet/>
       </main>
    </>
  )
}

export default RootLayout