import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Posts from './pages/Posts'

import { BrowserRouter , Route,Routes } from 'react-router-dom'
import Price from './pages/Price'
import NotFound from './pages/NotFound'
function App() {
  return (<>
    <div className='App' >
  <BrowserRouter>
  <Navbar/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/posts' element={<Posts/>}/>
<Route path='/Price' element={<Price/>}/>
<Route path='*' element={<NotFound/>}/>
    </Routes>  
    </BrowserRouter>
    </div>
  </>)
}
export default App