import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default class Clientes extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />

        <div id="content" className="app-content">
          <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item">
              <a href="javascript:;">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript:;">Datos Basicos</a>
            </li>
            <li className="breadcrumb-item active">Clientes</li>
          </ol>
          {/* <!-- END breadcrumb -->
			<!-- BEGIN page-header --> */}
          <h1 className="page-header">
            Listado de Clientes <small>header small text goes here...</small>
          </h1>
          {/* <!-- END page-header -->
			<!-- BEGIN nav-tabs --> */}
          <div
            className="panel panel-default panel-with-tabs"
            data-sortable-id="ui-widget-10"
          >
            <div className="panel-heading">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href="#home"
                    data-bs-toggle="tab"
                    className="nav-link active"
                  >
                    <i className="fa fa-home" />{" "}
                    <span className="d-none d-md-inline">General</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#profile" data-bs-toggle="tab" className="nav-link">
                    <i className="fa fa-user" />{" "}
                    <span className="d-none d-md-inline">Crear</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="panel-body">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="home">
                  <div className="panel-body">
                    <table
                      id="data-table-buttons"
                      className="table table-striped table-bordered align-middle"
                    >
                      <thead>
                        <tr>
                          <th width="1%" />
                          <th width="1%" data-orderable="false" />
                          <th className="text-nowrap">Nit</th>
                          <th className="text-nowrap">Razón social</th>
                          <th className="text-nowrap">Ciudad</th>
                          <th className="text-nowrap">Régimen</th>
                          <th className="text-nowrap">Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd gradeX">
                          <td width="1%" className="fw-bold text-inverse">
                            1
                          </td>
                          <td width="1%">
                            <img
                              src="../assets/img/user/user-1.jpg"
                              className="rounded h-30px my-n1 mx-n1"
                            />
                          </td>
                          <td>Trident</td>
                          <td>Internet Explorer 4.0</td>
                          <td>Win 95+</td>
                          <td>4</td>
                          <td>X</td>
                        </tr>
                        <tr className="even gradeC">
                          <td width="1%" className="fw-bold text-inverse">
                            2
                          </td>
                          <td width="1%">
                            <img
                              src="../assets/img/user/user-2.jpg"
                              className="rounded h-30px my-n1 mx-n1"
                            />
                          </td>
                          <td>Trident</td>
                          <td>Internet Explorer 5.0</td>
                          <td>Win 95+</td>
                          <td>5</td>
                          <td>C</td>
                        </tr>
                        <tr className="odd gradeA">
                          <td width="1%" className="fw-bold text-inverse">
                            3
                          </td>
                          <td width="1%">
                            <img
                              src="../assets/img/user/user-3.jpg"
                              className="rounded h-30px my-n1 mx-n1"
                            />
                          </td>
                          <td>Trident</td>
                          <td>Internet Explorer 5.5</td>
                          <td>Win 95+</td>
                          <td>5.5</td>
                          <td>A</td>
                        </tr>
                        <tr className="gradeA">
                          <td width="1%" className="fw-bold text-inverse">
                            4
                          </td>
                          <td width="1%">
                            <img
                              src="../assets/img/user/user-14.jpg"
                              className="rounded h-30px my-n1 mx-n1"
                            />
                          </td>
                          <td>Gecko</td>
                          <td>Netscape Browser 8</td>
                          <td>Win 98SE+</td>
                          <td>1.7</td>
                          <td>A</td>
                        </tr>

                        <tr className="gradeA">
                          <td width="1%" className="fw-bold text-inverse">
                            16
                          </td>
                          <td width="1%">
                            <img
                              src="../assets/img/user/user-2.jpg"
                              className="rounded h-30px my-n1 mx-n1"
                            />
                          </td>
                          <td>Gecko</td>
                          <td>Mozilla 1.0</td>
                          <td>Win 95+ / OSX.1+</td>
                          <td>1</td>
                          <td>A</td>
                        </tr>

                        <tr className="gradeC">
                          <td width="1%" className="fw-bold text-inverse">
                            55
                          </td>
                          <td width="1%">
                            <img
                              src="../assets/img/user/user-13.jpg"
                              className="rounded h-30px my-n1 mx-n1"
                            />
                          </td>
                          <td>Misc</td>
                          <td>IE Mobile</td>
                          <td>Windows Mobile 6</td>
                          <td>-</td>
                          <td>C</td>
                        </tr>
                        <tr className="gradeC">
                          <td width="1%" className="fw-bold text-inverse">
                            57
                          </td>
                          <td width="1%">
                            <img
                              src="../assets/img/user/user-14.jpg"
                              className="rounded h-30px my-n1 mx-n1"
                            />
                          </td>
                          <td>Misc</td>
                          <td>PSP browser</td>
                          <td>PSP</td>
                          <td>-</td>
                          <td>C</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile">
                  <div className="panel-body">
                    <form>
                      <div className="row mb-15px">
                        <label className="form-label col-form-label col-md-3">
                          Nit
                        </label>
                        <div className="col-md-6">
                          <input type="text" className="form-control mb-5px" />
                        </div>
                      </div>

                      <div className="row mb-15px">
                        <label className="form-label col-form-label col-md-3">
                          Razón social
                        </label>
                        <div className="col-md-6">
                          <div className="input-group ">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="row mb-15px">
                        <label className="form-label col-form-label col-md-3">
                          Departamento
                        </label>
                        <div className="col-md-6">
                          <div className="input-group ">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="row mb-15px">
                        <label className="form-label col-form-label col-md-3">
                          Ciudad
                        </label>
                        <div className="col-md-6">
                          <div className="input-group ">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-15px">
                        <label className="form-label col-form-label col-md-3">
                          Dirección
                        </label>
                        <div className="col-md-6">
                          <div className="input-group ">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-15px">
                        <label className="form-label col-form-label col-md-3">
                          Telefono
                        </label>
                        <div className="col-md-6">
                          <div className="input-group ">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-15px">
                        <label className="form-label col-form-label col-md-3">
                          Email
                        </label>
                        <div className="col-md-6">
                          <div class="input-group mb-3">
                            <div class="input-group-text">@</div>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="juan@dominio.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row mb-3">
                        <label className="col-lg-3 col-form-label form-label">
                          Estado
                        </label>
                        <div className="col-lg-8 pt-2">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="radiorequired"
                              value="foo"
                            />
                            <label className="form-check-label">Activado</label>
                          </div>
                          <div className="form-check mt-2">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="radiorequired"
                            />
                            <label className="form-check-label">
                              Desactivado
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-15px">
                        <label className="form-label col-form-label col-md-3"></label>
                        <div className="col-md-6 text-center">
                          <button type="submit" className="btn btn-primary">
                            Crear
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

//export default Footer;
