import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { Home } from './components/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route  path='/login' element={<Login />}/>
    </Routes>
  )
}

export default App
