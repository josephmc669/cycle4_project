import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from './components/Home'
import Facturas from './components/Facturas'
import Ordenes from './components/Ordenes'
import Reports from './components/Reports'
import Clientes from './components/Clientes'
import Vehiculos from './components/Vehiculos'
import Puertos from './components/Puertos'
import Tarifas from './components/Tarifas'
import DatosEmpresa from './components/DatosEmpresa'
import Dashboard from './components/Dashboard'

function requireAuth(nextState, replace, next) {
  if (this.state.loggedIn) {
    replace({
      pathname: "/login",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      properties: [],      
      loggedIn: false,
      time: new Date().getSeconds()
    };
  }
  render() {
    console.log("app state:", this.state.loggedIn);
    return (
      <Router>        
          <Routes>
            <Route exact path="/" element={<Home/>} onEnter={requireAuth} />
            <Route exact path="/Dashboard" element={<Dashboard/>}/>
            <Route exact path="/Facturas" element={<Facturas/>}/>
            <Route exact path="/Ordenes" element={<Ordenes/>}/>
            <Route exact path="/Reportes" element={<Reports/>}/>
            <Route exact path="/Clientes" element={<Clientes/>}/>
            <Route exact path="/Vehiculos" element={<Vehiculos/>}/>
            <Route exact path="/Puertos" element={<Puertos/>}/>
            <Route exact path="/Tarifas" element={<Tarifas/>}/>
            <Route exact path="/DatosEmpresa" element={<DatosEmpresa/>}/>
          </Routes>        
      </Router>
    );
  }
}
