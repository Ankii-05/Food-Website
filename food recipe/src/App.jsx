import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import Home from './pages/Home/Home'
import Header from './component/Layout/Header'
import About from './pages/About/About'
import OurMenu from './pages/OurMenu/OurMenu'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/menu' element={<OurMenu/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
