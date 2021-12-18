import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default class Facturas extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />

        {/* BEGIN #content */}
        <div id="content" className="app-content">
          {/* BEGIN breadcrumb */}
          <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item">
              <a href="javascript:;">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript:;">Tables</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript:;">Managed Tables</a>
            </li>
            <li className="breadcrumb-item active">Buttons</li>
          </ol>
          {/* END breadcrumb */}
          {/* BEGIN page-header */}
          <h1 className="page-header">
            LISTADO DE FACTURAS <small>Busqueda</small>
          </h1>
          {/* END page-header */}
          {/* BEGIN row */}
          <div className="row">
            {/* BEGIN col-10 */}
            <div className="col-xl-12">
              {/* BEGIN panel */}
              <div className="panel panel-inverse">
                {/* BEGIN panel-heading */}
                <div className="panel-heading">
                  <h4 className="panel-title">DataTable - Buttons</h4>
                  <div className="panel-heading-btn">
                    <a
                      href="javascript:;"
                      className="btn btn-xs btn-icon btn-default"
                      data-toggle="panel-expand"
                    >
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      href="javascript:;"
                      className="btn btn-xs btn-icon btn-success"
                      data-toggle="panel-reload"
                    >
                      <i className="fa fa-redo" />
                    </a>
                    <a
                      href="javascript:;"
                      className="btn btn-xs btn-icon btn-warning"
                      data-toggle="panel-collapse"
                    >
                      <i className="fa fa-minus" />
                    </a>
                    <a
                      href="javascript:;"
                      className="btn btn-xs btn-icon btn-danger"
                      data-toggle="panel-remove"
                    >
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
                {/* END panel-heading */}
                {/* BEGIN alert */}
                <div className="alert alert-warning alert-dismissible rounded-0 mb-0 fade show">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                  ></button>
                  The Buttons extension for DataTables provides a common set of
                  options, API methods and styling to display buttons on a page
                  that will interact with a DataTable. The core library provides
                  the based framework upon which plug-ins can built.
                </div>
                {/* END alert */}
                {/* BEGIN panel-body */}
                <div className="panel-body">
                  <table
                    id="data-table-buttons"
                    className="table table-striped table-bordered align-middle"
                  >
                    <thead>
                      <tr>
                        <th width="1%" />
                        <th width="1%" data-orderable="false" />
                        <th className="text-nowrap">Rendering engine</th>
                        <th className="text-nowrap">Browser</th>
                        <th className="text-nowrap">Platform(s)</th>
                        <th className="text-nowrap">Engine version</th>
                        <th className="text-nowrap">CSS grade</th>
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

                      <tr className="gradeA">
                        <td width="1%" className="fw-bold text-inverse">
                          31
                        </td>
                        <td width="1%">
                          <img
                            src="../assets/img/user/user-3.jpg"
                            className="rounded h-30px my-n1 mx-n1"
                          />
                        </td>
                        <td>Webkit</td>
                        <td>OmniWeb 5.5</td>
                        <td>OSX.4+</td>
                        <td>420</td>
                        <td>A</td>
                      </tr>
                      <tr className="gradeA">
                        <td width="1%" className="fw-bold text-inverse">
                          32
                        </td>
                        <td width="1%">
                          <img
                            src="../assets/img/user/user-4.jpg"
                            className="rounded h-30px my-n1 mx-n1"
                          />
                        </td>
                        <td>Webkit</td>
                        <td>iPod Touch / iPhone</td>
                        <td>iPod</td>
                        <td>420.1</td>
                        <td>A</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="invoice ">
                    {/* BEGIN invoice-company */}
                    <div className="invoice-company">
                      <span className="float-end hidden-print">
                        <a
                          href="javascript:;"
                          className="btn btn-sm btn-white mb-10px"
                        >
                          <i className="fa fa-file-pdf t-plus-1 text-danger fa-fw fa-lg" />{" "}
                          Export as PDF
                        </a>
                        <a
                          href="javascript:;"
                          onclick="window.print()"
                          className="btn btn-sm btn-white mb-10px"
                        >
                          <i className="fa fa-print t-plus-1 fa-fw fa-lg" />{" "}
                          Print
                        </a>
                      </span>
                      Company Name, Inc
                    </div>
                    {/* END invoice-company */}
                    {/* BEGIN invoice-header */}
                    <div className="invoice-header">
                      <div className="invoice-from">
                        <small>from</small>
                        <address className="mt-5px mb-5px">
                          <strong className="text-inverse">
                            Twitter, Inc.
                          </strong>
                          <br />
                          Street Address
                          <br />
                          City, Zip Code
                          <br />
                          Phone: (123) 456-7890
                          <br />
                          Fax: (123) 456-7890
                        </address>
                      </div>
                      <div className="invoice-to">
                        <small>to</small>
                        <address className="mt-5px mb-5px">
                          <strong className="text-inverse">Company Name</strong>
                          <br />
                          Street Address
                          <br />
                          City, Zip Code
                          <br />
                          Phone: (123) 456-7890
                          <br />
                          Fax: (123) 456-7890
                        </address>
                      </div>
                      <div className="invoice-date">
                        <small>Invoice / July period</small>
                        <div className="date text-inverse mt-5px">
                          August 3,2021
                        </div>
                        <div className="invoice-detail">
                          #0000123DSS
                          <br />
                          Services Product
                        </div>
                      </div>
                    </div>
                    {/* END invoice-header */}
                    {/* BEGIN invoice-content */}
                    <div className="invoice-content">
                      {/* BEGIN table-responsive */}
                      <div className="table-responsive">
                        <table className="table table-invoice">
                          <thead>
                            <tr>
                              <th>TASK DESCRIPTION</th>
                              <th className="text-center" width="10%">
                                RATE
                              </th>
                              <th className="text-center" width="10%">
                                HOURS
                              </th>
                              <th className="text-end" width="20%">
                                LINE TOTAL
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span className="text-inverse">
                                  Website design &amp; development
                                </span>
                                <br />
                                <small>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Sed id sagittis arcu.
                                </small>
                              </td>
                              <td className="text-center">$50.00</td>
                              <td className="text-center">50</td>
                              <td className="text-end">$2,500.00</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="text-inverse">Branding</span>
                                <br />
                                <small>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Sed id sagittis arcu.
                                </small>
                              </td>
                              <td className="text-center">$50.00</td>
                              <td className="text-center">40</td>
                              <td className="text-end">$2,000.00</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="text-inverse">
                                  Redesign Service
                                </span>
                                <br />
                                <small>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Sed id sagittis arcu.
                                </small>
                              </td>
                              <td className="text-center">$50.00</td>
                              <td className="text-center">50</td>
                              <td className="text-end">$2,500.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* END table-responsive */}
                      {/* BEGIN invoice-price */}
                      <div className="invoice-price">
                        <div className="invoice-price-left">
                          <div className="invoice-price-row">
                            <div className="sub-price">
                              <small>SUBTOTAL</small>
                              <span className="text-inverse">$4,500.00</span>
                            </div>
                            <div className="sub-price">
                              <i className="fa fa-plus text-muted" />
                            </div>
                            <div className="sub-price">
                              <small>PAYPAL FEE (5.4%)</small>
                              <span className="text-inverse">$108.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="invoice-price-right">
                          <small>TOTAL</small>{" "}
                          <span className="fw-bold">$4508.00</span>
                        </div>
                      </div>
                      {/* END invoice-price */}
                    </div>
                    {/* END invoice-content */}
                    {/* BEGIN invoice-note */}
                    <div className="invoice-note">
                      * Make all cheques payable to [Your Company Name]
                      <br />
                      * Payment is due within 30 days
                      <br />* If you have any questions concerning this invoice,
                      contact [Name, Phone Number, Email]
                    </div>
                    {/* END invoice-note */}
                    {/* BEGIN invoice-footer */}
                    <div className="invoice-footer">
                      <p className="text-center mb-5px fw-bold">
                        THANK YOU FOR YOUR BUSINESS
                      </p>
                      <p className="text-center">
                        <span className="me-10px">
                          <i className="fa fa-fw fa-lg fa-globe" />{" "}
                          matiasgallipoli.com
                        </span>
                        <span className="me-10px">
                          <i className="fa fa-fw fa-lg fa-phone-volume" />{" "}
                          T:016-18192302
                        </span>
                        <span className="me-10px">
                          <i className="fa fa-fw fa-lg fa-envelope" />{" "}
                          rtiemps@gmail.com
                        </span>
                      </p>
                    </div>
                    {/* END invoice-footer */}
                  </div>
                </div>
                {/* END panel-body */}
              </div>
              {/* END panel */}
            </div>
            {/* END col-10 */}
          </div>
          {/* END row */}
        </div>
        {/* END #content */}

        <Footer />
      </div>
    );
  }
}

//export default Footer;
