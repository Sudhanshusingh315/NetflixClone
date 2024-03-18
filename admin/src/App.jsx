import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { Home } from './components/Home'
import Movies from './feature/Moives/Movies/Movies'
import Edit from './components/Edit'
import Create from './components/Create'
import List from './feature/List/List'
import MakingList from './feature/List/MakingList'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route  path='/login' element={<Login />}/>
      <Route path='/movies' element={<Movies />} />
      <Route path='/edit/:id' element={<Edit />}/>
      {/* Creating movies */}
      <Route path='/create' element={<Create />}/>
      <Route path='/list' element={<List />} />
      <Route path='/newlist' element={<MakingList />}   />
    </Routes>
  )
}

export default App
