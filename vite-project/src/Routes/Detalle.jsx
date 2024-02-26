import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Detalle = () => {

  return (
    <div>
      <Navbar/>
      {/* <div>
      <h2>{autos.nombre}</h2>
      <p>Puertas: {autos.puertas}</p>
      <p>Valijas: {autos.valijas}</p>
      <p>Personas: {autos.personas}</p>
      <p>Precio: ${autos.precio}</p>
      <img src={autos.imgUrl} alt={autos.nombre} />
      </div> */}
      <Footer/>
    </div>
  )
}

export default Detalle
