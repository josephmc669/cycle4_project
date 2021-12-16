import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'


export default class Login extends Component {
    render() {
        return (
            <div>          
                {/* BEGIN #app */}
<div id="app" className="app">
  {/* BEGIN login */}
  <div className="login login-v1">
    {/* BEGIN login-container */}
    <div className="login-container">
      {/* BEGIN login-header */}
      <div className="login-header">
        <div className="brand">
          <div className="d-flex align-items-center">
            <span className="logo" /> <b>App</b> Transportes
          </div>
          <small>Gestion de Transportes</small>
        </div>
        <div className="icon">
          <i className="fa fa-lock" />
        </div>
      </div>
      {/* END login-header */}
      {/* BEGIN login-body */}
      <div className="login-body">
        {/* BEGIN login-content */}
        <div className="login-content fs-13px">
          <form action="index.html" method="GET">
            <div className="form-floating mb-20px">
              <input type="email" className="form-control fs-13px h-45px" id="emailAddress" placeholder="Email Address" />
              <label htmlFor="emailAddress" className="d-flex align-items-center py-0">Email Address</label>
            </div>
            <div className="form-floating mb-20px">
              <input type="password" className="form-control fs-13px h-45px" id="password" placeholder="Password" />
              <label htmlFor="password" className="d-flex align-items-center py-0">Password</label>
            </div>
            <div className="form-check mb-20px">
              <input className="form-check-input" type="checkbox" defaultValue id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <div className="login-buttons">
              <button type="submit" className="btn h-45px btn-success d-block w-100 btn-lg">Sign me in</button>
            </div>
          </form>
        </div>
        {/* END login-content */}
      </div>
      {/* END login-body */}
    </div>
    {/* END login-container */}
  </div>
  {/* END login */}
</div>
{/* END #app */}


                <Footer/>
            </div>
        )
    }
}

//export default Footer;