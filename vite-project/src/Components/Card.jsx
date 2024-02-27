import React from 'react'
import '../Styles/Card.css'
import { Link } from 'react-router-dom'

const Card = (auto) => {  
    return (
        <div className="autos-container">
            <Link to={`/detalle/${auto.auto.id}`} key={auto.auto.id} className="auto-card">
                <img src={auto.auto.imgUrl} alt={auto.auto.nombre} className="auto-image" />
                <p className="auto-name">Nombre: {auto.auto.nombre}</p>
                <p className="auto-doors">Puertas: {auto.auto.puertas}</p>
                <p className="auto-luggage">Valijas: {auto.auto.valijas}</p>
                <p className="auto-people">Personas: {auto.auto.personas}</p>
                <p className="auto-price">Precio: ${auto.auto.precio}</p>
            </Link>
    </div>
      )         
    }

export default Card
