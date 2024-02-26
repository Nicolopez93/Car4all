import React from 'react'
import imgAuto from '../assets/auto.png'
import '../Styles/Buscador.css'
const Buscador = () => {
  return (
    <div className="buscador-container">
       <div >
          <input type="text" placeholder="Buscar autos..." />
          <button className="buscar-autos-button">Buscar</button>
        </div>
      <div className="carNow-image-container">
        <img src={imgAuto} alt='auto' className="auto-img" />
        </div>
    </div>
  )
}

export default Buscador
