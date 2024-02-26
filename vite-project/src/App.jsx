import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './Routes/Home'
import Administrador from './Routes/Administrador';
import IniciarSesion from './Routes/IniciarSesion';
import CrearCuenta from './Routes/CrearCuenta';
import Detalle from './Routes/Detalle';
function App() {
  return (
    <Router>
          <React.Fragment>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/iniciarSesion" element={<IniciarSesion/>} />
              <Route path="/admin" element={<Administrador/>} />
              <Route path='/crearCuenta' element={<CrearCuenta/>}/>
              <Route path="/detalle/:id" element={<Detalle/>} />
            </Routes>
            </React.Fragment>
    </Router>
  )
}

export default App
