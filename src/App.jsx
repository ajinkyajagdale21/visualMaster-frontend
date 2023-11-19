import React from 'react'
import { MainPage } from './pages/mainPage'
import { LoginPage } from './pages/loginPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
   <Routes>
   <Route path="/login" element={<LoginPage/>} />
   <Route path="/" element={<MainPage/>} />
   </Routes> 
   </>
  )
}

export default App
