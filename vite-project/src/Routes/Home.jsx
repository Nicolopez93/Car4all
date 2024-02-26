import React from 'react'
import Navbar from '../Components/Navbar'
import Buscador from '../Components/Buscador'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import '../Styles/Home.css'
const Home = () => {
  const Cards = [...Array(10).keys()] 

  return (
    <div>
      <Navbar/>
      <Buscador/>
      <div className="contenedor-cards">
      {Cards.map(card => (
        <Card key={card} />  
      ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Home
