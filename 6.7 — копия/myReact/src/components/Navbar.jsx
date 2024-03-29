import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className="bg-secondary py-3 mb-5">
  <div className="bg-secondary container text-white d-flex justify-content-between"> 
<h3>Website logo</h3>
<div className="d-flex gap-4">
    <NavLink to="/" className="btn btn-dark">Home</NavLink>
    <NavLink to="/about" className="btn btn-dark">About</NavLink>
    <NavLink to="/price" className="btn btn-dark">Price</NavLink>
    <NavLink to="/posts" className="btn btn-dark">Posts</NavLink>
    </div>
</div>
  </nav>
   </>
  )
}

export default Navbar