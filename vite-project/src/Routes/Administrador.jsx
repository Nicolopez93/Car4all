import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AgregarProducto from '../Components/AgregarProducto'
import '../Styles/AgregarProducto.css'
const Administrador = () => {
  return (
    <div className='administrador-container'>
      <Navbar/>
      <AgregarProducto/>
      <Footer/>
    </div>
  )
}

export default Administrador
