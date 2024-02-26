import React from 'react'
import Navbar from '../Components/Navbar'
import Buscador from '../Components/Buscador'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import '../Styles/Home.css'
const Home = () => {

  return (
    <div>
      <Navbar/>
      <Buscador/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Home
