import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Tasks from './components/Tasks'
import Users from './components/Users'
import Posts from './components/Posts'

function App() {
Posts
  return (
    <div className='App'>
      <Router>
        <nav>
          <h1>My Articles</h1>
        </nav>

        <Routes>
            <Route path='/' element={<Tasks/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/posts' element={<Posts/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App