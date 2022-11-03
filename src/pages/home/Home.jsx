import React from 'react'
import Header from './component/Header'
import Couter from './component/Couter'
import Rank from './component/Rank'
import Recomment from './component/Recomment'
import About from './component/About'
import Navbar from '../../components/navbar/Navbar'
const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Header />
      <Couter />
      <Rank />
      <Recomment />
      <About />
    </div>
  )
}

export default Home
