import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './Routes/Home'
import Administrador from './Routes/Administrador';
import IniciarSesion from './Routes/IniciarSesion';
import CrearCuenta from './Routes/CrearCuenta';
import Detalle from './Routes/Detalle';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
          <React.Fragment>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/iniciarSesion" element={<IniciarSesion/>} />
              <Route path="/admin" element={<Administrador/>} />
              <Route path='/crearCuenta' element={<CrearCuenta/>}/>
              <Route path="/detalle/:id" element={<Detalle/>} />
            </Routes>
            <Footer/>
            </React.Fragment>
    </Router>
  )
}

export default App
