import { NavLink } from 'react-router-dom'
import NotFound from "../hook/pageNoteFound.avif"
function PageNotFound() {
  return (
    <div className='pageNotFound-container '>
        <h1>👇PageNotFound👇</h1>
        <img src={NotFound} alt="" />
        <NavLink to="/">
            Home Page
        </NavLink>
    </div>
  )
}

export default PageNotFound