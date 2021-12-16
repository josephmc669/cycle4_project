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
            <span className="logo" /> <b>Color</b> Admin
          </div>
          <small>Bootstrap 5 Responsive Admin Template</small>
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
  {/* BEGIN theme-panel */}
  <div className="theme-panel">
    <a href="javascript:;" data-toggle="theme-panel-expand" className="theme-collapse-btn"><i className="fa fa-cog" /></a>
    <div className="theme-panel-content" data-scrollbar="true" data-height="100%">
      <h5>App Settings</h5>
      {/* BEGIN theme-list */}
      <div className="theme-list">
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-red" data-theme="red" data-theme-file="../assets/css/default/theme/red.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Red">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-pink" data-theme="pink" data-theme-file="../assets/css/default/theme/pink.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Pink">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-orange" data-theme="orange" data-theme-file="../assets/css/default/theme/orange.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Orange">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-yellow" data-theme="yellow" data-theme-file="../assets/css/default/theme/yellow.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Yellow">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-lime" data-theme="lime" data-theme-file="../assets/css/default/theme/lime.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Lime">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-green" data-theme="green" data-theme-file="../assets/css/default/theme/green.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Green">&nbsp;</a></div>
        <div className="theme-list-item active"><a href="javascript:;" className="theme-list-link bg-teal" data-theme="default" data-theme-file data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-cyan" data-theme="cyan" data-theme-file="../assets/css/default/theme/cyan.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cyan">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-blue" data-theme="blue" data-theme-file="../assets/css/default/theme/blue.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Blue">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-purple" data-theme="purple" data-theme-file="../assets/css/default/theme/purple.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Purple">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-indigo" data-theme="indigo" data-theme-file="../assets/css/default/theme/indigo.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Indigo">&nbsp;</a></div>
        <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-black" data-theme="black" data-theme-file="../assets/css/default/theme/black.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Black">&nbsp;</a></div>
      </div>
      {/* END theme-list */}
      <div className="theme-panel-divider" />
      {/* BEGIN theme-switch */}
      <div className="row mt-10px align-items-center">
        <div className="col-8 control-label text-inverse fw-bold">Header Fixed</div>
        <div className="col-4 d-flex">
          <div className="form-check form-switch ms-auto mb-0">
            <input type="checkbox" className="form-check-input" name="app-header-fixed" id="appHeaderFixed" defaultValue={1} defaultChecked />
            <label className="form-check-label" htmlFor="appHeaderFixed">&nbsp;</label>
          </div>
        </div>
      </div>
      <div className="row mt-10px align-items-center">
        <div className="col-8 control-label text-inverse fw-bold">Header Inverse</div>
        <div className="col-4 d-flex">
          <div className="form-check form-switch ms-auto mb-0">
            <input type="checkbox" className="form-check-input" name="app-header-inverse" id="appHeaderInverse" defaultValue={1} />
            <label className="form-check-label" htmlFor="appHeaderInverse">&nbsp;</label>
          </div>
        </div>
      </div>
      <div className="row mt-10px align-items-center">
        <div className="col-8 control-label text-inverse fw-bold">Sidebar Fixed</div>
        <div className="col-4 d-flex">
          <div className="form-check form-switch ms-auto mb-0">
            <input type="checkbox" className="form-check-input" name="app-sidebar-fixed" id="appSidebarFixed" defaultValue={1} defaultChecked />
            <label className="form-check-label" htmlFor="appSidebarFixed">&nbsp;</label>
          </div>
        </div>
      </div>
      <div className="row mt-10px align-items-center">
        <div className="col-8 control-label text-inverse fw-bold">Sidebar Grid</div>
        <div className="col-4 d-flex">
          <div className="form-check form-switch ms-auto mb-0">
            <input type="checkbox" className="form-check-input" name="app-sidebar-grid" id="appSidebarGrid" defaultValue={1} />
            <label className="form-check-label" htmlFor="appSidebarGrid">&nbsp;</label>
          </div>
        </div>
      </div>
      <div className="row mt-10px align-items-center">
        <div className="col-md-8 control-label text-inverse fw-bold">Gradient Enabled</div>
        <div className="col-md-4 d-flex">
          <div className="form-check form-switch ms-auto mb-0">
            <input type="checkbox" className="form-check-input" name="app-gradient-enabled" id="appGradientEnabled" defaultValue={1} />
            <label className="form-check-label" htmlFor="appGradientEnabled">&nbsp;</label>
          </div>
        </div>
      </div>
      {/* END theme-switch */}
      <div className="theme-panel-divider" />
      <h5>Admin Design (5)</h5>
      {/* BEGIN theme-version */}
      <div className="theme-version">
        <div className="theme-version-item">
          <a href="../template_html/index_v2.html" className="theme-version-link active">
            <span style={{backgroundImage: 'url(../assets/img/theme/default.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_transparent/index_v2.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/transparent.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_apple/index_v2.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/apple.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_material/index_v2.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/material.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_facebook/index_v2.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/facebook.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_google/index_v2.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/google.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
      </div>
      {/* END theme-version */}
      <div className="theme-panel-divider" />
      <h5>Language Version (7)</h5>
      {/* BEGIN theme-version */}
      <div className="theme-version">
        <div className="theme-version-item">
          <a href="../template_html/index.html" className="theme-version-link active">
            <span style={{backgroundImage: 'url(../assets/img/version/html.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_ajax/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/version/ajax.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_angularjs/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/version/angular1x.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_angularjs10/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/version/angular10x.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="javascript:alert('Laravel Version only available in downloaded version.');" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/version/laravel.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_vuejs/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/version/vuejs.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../template_reactjs/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/version/reactjs.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="javascript:alert('.NET Core 3.1 MVC Version only available in downloaded version.');" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/version/dotnet.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
      </div>
      {/* END theme-version */}
      <div className="theme-panel-divider" />
      <h5>Frontend Design (5)</h5>
      {/* BEGIN theme-version */}
      <div className="theme-version">
        <div className="theme-version-item">
          <a href="../../../frontend/template/template_one_page_parallax/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/one-page-parallax.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../../../frontend/template/template_e_commerce/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/e-commerce.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../../../frontend/template/template_blog/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/blog.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../../../frontend/template/template_forum/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/forum.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
        <div className="theme-version-item">
          <a href="../../../frontend/template/template_corporate/index.html" className="theme-version-link">
            <span style={{backgroundImage: 'url(../assets/img/theme/corporate.jpg)'}} className="theme-version-cover" />
          </a>
        </div>
      </div>
      {/* END theme-version */}
      <div className="theme-panel-divider" />
      <a href="https://seantheme.com/color-admin/documentation/" className="btn btn-inverse d-block w-100 rounded-pill mb-10px" target="_blank"><b>Documentation</b></a>
      <a href="javascript:;" className="btn btn-default d-block w-100 rounded-pill" data-toggle="reset-local-storage"><b>Reset Local Storage</b></a>
    </div>
  </div>
  {/* END theme-panel */}
  {/* BEGIN scroll-top-btn */}
  <a href="javascript:;" className="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i className="fa fa-angle-up" /></a>
  {/* END scroll-top-btn */}
</div>
{/* END #app */}


                <Footer/>
            </div>
        )
    }
}

//export default Footer;