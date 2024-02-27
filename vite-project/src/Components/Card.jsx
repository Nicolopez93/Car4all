import React from 'react'
import imgToyota from '../assets/toyota.png'
import imgFiat from '../assets/cronos.png'
import imgFord from '../assets/ford.png'
import imgChevrolet from '../assets/chevrolet.png'
import imgHyundai2 from '../assets/hyundai2.png'
import imgMercedes from '../assets/mercedes.png'
import imgPeugeot from '../assets/peugeot.png'
import imgRam from '../assets/ram.png'
import imgPorche from '../assets/porche.png'
import imgToyotaHilux from '../assets/hilux.png'
import '../Styles/Card.css'
import { Link } from 'react-router-dom'

const Card = () => {  
   const autos = [
    {
      id: 1,
      imgUrl: imgToyota,
      nombre: 'Toyota Corolla',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 50,
    },
    {
      id: 2,
      imgUrl: imgFiat,
      nombre: 'Fiat Cronos',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 55,
    },
    {
      id: 3,
      imgUrl: imgFord,
      nombre: 'Ford F100',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 45,
    },
    {
      id: 4,
      imgUrl: imgPorche,
      nombre: 'Porche 120',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 60,
    },
    {
      id: 5,
      imgUrl: imgChevrolet,
      nombre: 'Chevrolet Cruze',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 52,
    },
    {
      id: 6,
      imgUrl: imgToyotaHilux,
      nombre: 'Toyota Hilux',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 65,
    },
    {
      id: 7,
      imgUrl: imgHyundai2,
      nombre: 'Hyundai Elantra',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 49,
    },
    {
      id: 8,
      imgUrl: imgMercedes,
      nombre: 'Mercedes Benz',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 46,
    },
    {
      id: 9,
      imgUrl: imgPeugeot,
      nombre: 'Peugeot 208',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 47,
    },
    {
      id: 10,
      imgUrl: imgRam,
      nombre: 'Ram 1500',
      puertas: 4,
      valijas: 2,
      personas: 5,
      precio: 53,
    },
  ];
  const handleClick = () => {
  };
    return (
        <div className="autos-container">
        {autos.map(auto => (
            <Link to={`/detalle/${auto.id}`} key={auto.id} onClick={handleClick} className="auto-card">
                <img src={auto.imgUrl} alt={auto.nombre} className="auto-image" />
                <p className="auto-name">Nombre: {auto.nombre}</p>
                <p className="auto-doors">Puertas: {auto.puertas}</p>
                <p className="auto-luggage">Valijas: {auto.valijas}</p>
                <p className="auto-people">Personas: {auto.personas}</p>
                <p className="auto-price">Precio: ${auto.precio}</p>
            </Link>
        ))}
    </div>
      )         
    }

export default Card
