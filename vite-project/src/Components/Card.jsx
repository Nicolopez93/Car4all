import React from 'react'
import imgCronos from '../assets/cronos.png'
import '../Styles/Card.css'
const Card = () => {
  return (
    <div className="card">
    <img src={imgCronos} alt="cronos"/>
    <h2>Fiat Cronos</h2>
    <p>Descripción breve del producto.</p>
    <div className="iconos">
      <i className="fas fa-bed"/>
      <i className="fas fa-bath"/>
      <i className="fas fa-car"/>
      <i className="fas fa-utensils"/>
    </div>
    <p>Precio: $XXX</p>
    <button>Alquilar</button>
    
</div>
  )
}

export default Card
