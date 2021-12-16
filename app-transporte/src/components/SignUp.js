import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, useHistory, Redirect, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'


export default class SignUp extends Component {
    render() {
        return (
            <div>
                {/* BEGIN register */}
<div className="register register-with-news-feed">
  {/* BEGIN news-feed */}
  <div className="news-feed">
    <div className="news-image" style={{backgroundImage: 'url(../assets/img/login-bg/login-bg-15.jpg)'}} />
    <div className="news-caption">
      <h4 className="caption-title"><b>App</b> Transporte</h4>
      <p>
        Soluciones Digitales en Transporte y Logistica de Mercancias.
      </p>
    </div>
  </div>
  {/* END news-feed */}
  {/* BEGIN register-container */}
  <div className="register-container">
    {/* BEGIN register-header */}
    <div className="register-header mb-25px h1">
      <div className="mb-1">Sign Up</div>
      <small className="d-block fs-15px lh-16">Create your Color Admin Account. It’s free and always will be.</small>
    </div>
    {/* END register-header */}
    {/* BEGIN register-content */}
    <div className="register-content">
      <form action="index.html" method="GET" className="fs-13px">
        <div className="mb-3">
          <label className="mb-2">Nombre <span className="text-danger">*</span></label>
          <div className="row gx-3">
            <div className="col-md-6 mb-2 mb-md-0">
              <input type="text" className="form-control fs-13px" placeholder="Nombres" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control fs-13px" placeholder="Apellidos" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="mb-2">Email <span className="text-danger">*</span></label>
          <input type="text" className="form-control fs-13px" placeholder="Direccion de email" />
        </div>
        <div className="mb-3">
          <label className="mb-2">Confirmacion Email <span className="text-danger">*</span></label>
          <input type="text" className="form-control fs-13px" placeholder="Confirmar direccion de email" />
        </div>
        <div className="mb-4">
          <label className="mb-2">Password <span className="text-danger">*</span></label>
          <input type="password" className="form-control fs-13px" placeholder="Password" />
        </div>
        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" defaultValue id="agreementCheckbox" />
          <label className="form-check-label" htmlFor="agreementCheckbox">
            Al dar click en registrar, Usted estara aceptando nuestros <a href="javascript:;">Terminos</a> Y debera leer nuestra <a href="javascript:;"> Politica de datos </a>, Incluyendo el <a href="javascript:;">uso Cookies</a>.
          </label>
        </div>
        <div className="mb-4">
          <button type="submit" className="btn btn-primary d-block w-100 btn-lg h-45px fs-13px">Registrar</button>
        </div>
        <div className="mb-4 pb-5">
          Already a member? Click <a href="login_v3.html">here</a> to login.
        </div>
        <hr className="bg-gray-600 opacity-2" />
        <p className="text-center text-gray-600">
          © Color Admin All Right Reserved 2021 - MisionTIC 2021 - UNINORTE
        </p>
      </form>
    </div>
    {/* END register-content */}
  </div>
  {/* END register-container */}
</div>
{/* END register */}

            </div>
        )
    }
}

//export default Footer;