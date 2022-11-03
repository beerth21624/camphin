import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Location from './pages/loacation/Location'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/location" element={<Location />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
