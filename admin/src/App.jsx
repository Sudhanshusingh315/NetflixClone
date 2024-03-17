import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { Home } from './components/Home'
import Movies from './feature/Moives/Movies/Movies'
import Edit from './components/Edit'
import Create from './components/Create'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route  path='/login' element={<Login />}/>
      <Route path='/movies' element={<Movies />} />
      <Route path='/edit/:id' element={<Edit />}/>
      <Route path='/create' element={<Create />}/>
    </Routes>
  )
}

export default App
