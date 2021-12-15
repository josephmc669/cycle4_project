import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Menu extends Component {

    handleClick = (e) => {
      e.preventDefault();
      console.log('The link was clicked.');
    };
    //onClick={this.handleClick}>
    render() {
        return (
            <div>
  {/* BEGIN #sidebar */}
  <div id="sidebar" className="app-sidebar">
    {/* BEGIN scrollbar */}
    <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
      {/* BEGIN menu */}
      <div className="menu">
        <div className="menu-profile">
          <a href="/Profile" className="menu-profile-link" data-toggle="app-sidebar-profile" data-target="#appSidebarProfileMenu">
            <div className="menu-profile-cover with-shadow" />
            <div className="menu-profile-image">
              <img src="../assets/img/user/user-13.jpg" alt="Imagen" />
            </div>
            <div className="menu-profile-info">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  Sean Ngu
                </div>
                <div className="menu-caret ms-auto" />
              </div>
              <small>Front end developer</small>
            </div>
          </a>
        </div>
        <div id="appSidebarProfileMenu" className="collapse">
          <div className="menu-item pt-5px">
            <a href="/Settings" className="menu-link">
              <div className="menu-icon"><i className="fa fa-cog" /></div>
              <div className="menu-text">Settings</div>
            </a>
          </div>
          <div className="menu-item">
            <a href="/SendFeedback" className="menu-link">
              <div className="menu-icon"><i className="fa fa-pencil-alt" /></div>
              <div className="menu-text"> Send Feedback</div>
            </a>
          </div>
          <div className="menu-item pb-5px">
            <a href="/Helps" className="menu-link">
              <div className="menu-icon"><i className="fa fa-question-circle" /></div>
              <div className="menu-text"> Helps</div>
            </a>
          </div>
          <div className="menu-divider m-0" />
        </div>
        <div className="menu-header">Operaciones</div>
        
        <div className="menu-item">
          <Link to="/Dashboard" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-th-large" />
            </div>
            <div className="menu-text">Dashboard</div>
          </Link>          
        </div>

        <div className="menu-item">
          <Link to="/Facturas" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-money-bill-alt" />
            </div>
            <div className="menu-text">Facturas</div>
          </Link>          
        </div>

        <div className="menu-item">
          <Link to="/Ordenes" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-shopping-cart" />
            </div>
            <div className="menu-text">Ordenes</div>
          </Link>          
        </div>

        <div className="menu-item">
          <Link to="/Reportes" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-print" />
            </div>
            <div className="menu-text">Reportes</div>
          </Link>          
        </div>

        <div className="menu-header">Datos Basicos</div>

        <div className="menu-item">
          <Link to="/Clientes" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-users" />
            </div>
            <div className="menu-text">Clientes</div>
          </Link>          
        </div>

        <div className="menu-item">
          <Link to="/Vehiculos" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-ship" />
            </div>
            <div className="menu-text">Vehiculos</div>
          </Link>          
        </div>

        <div className="menu-item">
          <Link to="/Puertos" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-building" />
            </div>
            <div className="menu-text">Puertos</div>
          </Link>          
        </div>

        <div className="menu-item">
          <Link to="/Tarifas" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-tags" />
            </div>
            <div className="menu-text">Tarifas</div>
          </Link>          
        </div>

        <div className="menu-item">
          <Link to="/DatosEmpresa" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-home" />
            </div>
            <div className="menu-text">Datos Empresa</div>
          </Link>          
        </div>
        
        {/* BEGIN minify-button */}
        <div className="menu-item d-flex">
          <a href="/" className="app-sidebar-minify-btn ms-auto" data-toggle="app-sidebar-minify"><i className="fa fa-angle-double-left" /></a>
        </div>
        {/* END minify-button */}
      </div>
      {/* END menu */}
    </div>
    {/* END scrollbar */}
  </div>
  <div className="app-sidebar-bg" />
  <div className="app-sidebar-mobile-backdrop"><a href="/" data-dismiss="app-sidebar-mobile" className="stretched-link" /></div>
  {/* END #sidebar */}
</div>

        )
    }
}

//export default Menu;