import React from 'react'
import './App.scss'
// react router-dom
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {Home, MealDetails, Error, Category} from './pages/index'
import Header from "./components/Header/Header"
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Sidebar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/meal/:id' element = {<MealDetails/>} />
      <Route path='/meal/category/:name' element = {<Category/>} />
      <Route path='/meal/category/:name' element = {<Category/>} />
      <Route path='*' element = {<Error/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
