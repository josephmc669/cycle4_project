import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'


export default class Vehiculos extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                

{/* BEGIN #content */}
<div id="content" className="app-content">
  {/* BEGIN breadcrumb */}
  <ol className="breadcrumb float-xl-end">
    <li className="breadcrumb-item"><a href="javascript:;">Home</a></li>
    <li className="breadcrumb-item"><a href="javascript:;">Tables</a></li>
    <li className="breadcrumb-item"><a href="javascript:;">Managed Tables</a></li>
    <li className="breadcrumb-item active">Buttons</li>
  </ol>
  {/* END breadcrumb */}
  {/* BEGIN page-header */}
  <h1 className="page-header">LISTADO DE VEHICULOS <small>Busqueda</small></h1>
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
            <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
          </div>
        </div>
        {/* END panel-heading */}
        {/* BEGIN alert */}
        <div className="alert alert-warning alert-dismissible rounded-0 mb-0 fade show">
          <button type="button" className="btn-close" data-bs-dismiss="alert">
          </button>
          The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can built.
        </div>
        {/* END alert */}
        {/* BEGIN panel-body */}
        <div className="panel-body">
          <table id="data-table-buttons" className="table table-striped table-bordered align-middle">
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
                <td width="1%" className="fw-bold text-inverse">1</td>
                <td width="1%"><img src="../assets/img/user/user-1.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Trident</td>
                <td>Internet Explorer 4.0</td>
                <td>Win 95+</td>
                <td>4</td>
                <td>X</td>
              </tr>
              <tr className="even gradeC">
                <td width="1%" className="fw-bold text-inverse">2</td>
                <td width="1%"><img src="../assets/img/user/user-2.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Trident</td>
                <td>Internet Explorer 5.0</td>
                <td>Win 95+</td>
                <td>5</td>
                <td>C</td>
              </tr>
              <tr className="odd gradeA">
                <td width="1%" className="fw-bold text-inverse">3</td>
                <td width="1%"><img src="../assets/img/user/user-3.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Trident</td>
                <td>Internet Explorer 5.5</td>
                <td>Win 95+</td>
                <td>5.5</td>
                <td>A</td>
              </tr>
              <tr className="even gradeA">
                <td width="1%" className="fw-bold text-inverse">4</td>
                <td width="1%"><img src="../assets/img/user/user-4.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Trident</td>
                <td>Internet Explorer 6</td>
                <td>Win 98+</td>
                <td>6</td>
                <td>A</td>
              </tr>
              <tr className="odd gradeA">
                <td width="1%" className="fw-bold text-inverse">5</td>
                <td width="1%"><img src="../assets/img/user/user-5.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Trident</td>
                <td>Internet Explorer 7</td>
                <td>Win XP SP2+</td>
                <td>7</td>
                <td>A</td>
              </tr>
              <tr className="even gradeA">
                <td width="1%" className="fw-bold text-inverse">6</td>
                <td width="1%"><img src="../assets/img/user/user-6.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Trident</td>
                <td>AOL browser (AOL desktop)</td>
                <td>Win XP</td>
                <td>6</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">7</td>
                <td width="1%"><img src="../assets/img/user/user-7.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Firefox 1.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.7</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">8</td>
                <td width="1%"><img src="../assets/img/user/user-8.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Firefox 1.5</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">9</td>
                <td width="1%"><img src="../assets/img/user/user-9.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Firefox 2.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">10</td>
                <td width="1%"><img src="../assets/img/user/user-10.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Firefox 3.0</td>
                <td>Win 2k+ / OSX.3+</td>
                <td>1.9</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">11</td>
                <td width="1%"><img src="../assets/img/user/user-11.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Camino 1.0</td>
                <td>OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">12</td>
                <td width="1%"><img src="../assets/img/user/user-12.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Camino 1.5</td>
                <td>OSX.3+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">13</td>
                <td width="1%"><img src="../assets/img/user/user-13.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Netscape 7.2</td>
                <td>Win 95+ / Mac OS 8.6-9.2</td>
                <td>1.7</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">14</td>
                <td width="1%"><img src="../assets/img/user/user-14.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Netscape Browser 8</td>
                <td>Win 98SE+</td>
                <td>1.7</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">15</td>
                <td width="1%"><img src="../assets/img/user/user-1.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Netscape Navigator 9</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">16</td>
                <td width="1%"><img src="../assets/img/user/user-2.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.0</td>
                <td>Win 95+ / OSX.1+</td>
                <td>1</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">17</td>
                <td width="1%"><img src="../assets/img/user/user-3.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.1</td>
                <td>Win 95+ / OSX.1+</td>
                <td>1.1</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">18</td>
                <td width="1%"><img src="../assets/img/user/user-4.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.2</td>
                <td>Win 95+ / OSX.1+</td>
                <td>1.2</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">19</td>
                <td width="1%"><img src="../assets/img/user/user-5.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.3</td>
                <td>Win 95+ / OSX.1+</td>
                <td>1.3</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">20</td>
                <td width="1%"><img src="../assets/img/user/user-6.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.4</td>
                <td>Win 95+ / OSX.1+</td>
                <td>1.4</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">21</td>
                <td width="1%"><img src="../assets/img/user/user-7.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.5</td>
                <td>Win 95+ / OSX.1+</td>
                <td>1.5</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">22</td>
                <td width="1%"><img src="../assets/img/user/user-8.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.6</td>
                <td>Win 95+ / OSX.1+</td>
                <td>1.6</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">23</td>
                <td width="1%"><img src="../assets/img/user/user-9.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.7</td>
                <td>Win 98+ / OSX.1+</td>
                <td>1.7</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">24</td>
                <td width="1%"><img src="../assets/img/user/user-10.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Mozilla 1.8</td>
                <td>Win 98+ / OSX.1+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">25</td>
                <td width="1%"><img src="../assets/img/user/user-11.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Seamonkey 1.1</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">26</td>
                <td width="1%"><img src="../assets/img/user/user-12.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Gecko</td>
                <td>Epiphany 2.20</td>
                <td>Gnome</td>
                <td>1.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">27</td>
                <td width="1%"><img src="../assets/img/user/user-13.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Webkit</td>
                <td>Safari 1.2</td>
                <td>OSX.3</td>
                <td>125.5</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">28</td>
                <td width="1%"><img src="../assets/img/user/user-14.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Webkit</td>
                <td>Safari 1.3</td>
                <td>OSX.3</td>
                <td>312.8</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">29</td>
                <td width="1%"><img src="../assets/img/user/user-1.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Webkit</td>
                <td>Safari 2.0</td>
                <td>OSX.4+</td>
                <td>419.3</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">30</td>
                <td width="1%"><img src="../assets/img/user/user-2.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Webkit</td>
                <td>Safari 3.0</td>
                <td>OSX.4+</td>
                <td>522.1</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">31</td>
                <td width="1%"><img src="../assets/img/user/user-3.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Webkit</td>
                <td>OmniWeb 5.5</td>
                <td>OSX.4+</td>
                <td>420</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">32</td>
                <td width="1%"><img src="../assets/img/user/user-4.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Webkit</td>
                <td>iPod Touch / iPhone</td>
                <td>iPod</td>
                <td>420.1</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">33</td>
                <td width="1%"><img src="../assets/img/user/user-5.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Webkit</td>
                <td>S60</td>
                <td>S60</td>
                <td>413</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">34</td>
                <td width="1%"><img src="../assets/img/user/user-6.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Opera 7.0</td>
                <td>Win 95+ / OSX.1+</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">35</td>
                <td width="1%"><img src="../assets/img/user/user-7.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Opera 7.5</td>
                <td>Win 95+ / OSX.2+</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">36</td>
                <td width="1%"><img src="../assets/img/user/user-8.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Opera 8.0</td>
                <td>Win 95+ / OSX.2+</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">37</td>
                <td width="1%"><img src="../assets/img/user/user-9.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Opera 8.5</td>
                <td>Win 95+ / OSX.2+</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">38</td>
                <td width="1%"><img src="../assets/img/user/user-10.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Opera 9.0</td>
                <td>Win 95+ / OSX.3+</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">39</td>
                <td width="1%"><img src="../assets/img/user/user-11.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Opera 9.2</td>
                <td>Win 88+ / OSX.3+</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">40</td>
                <td width="1%"><img src="../assets/img/user/user-12.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Opera 9.5</td>
                <td>Win 88+ / OSX.3+</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">41</td>
                <td width="1%"><img src="../assets/img/user/user-13.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Opera for Wii</td>
                <td>Wii</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">42</td>
                <td width="1%"><img src="../assets/img/user/user-14.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Nokia N800</td>
                <td>N800</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">43</td>
                <td width="1%"><img src="../assets/img/user/user-1.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Presto</td>
                <td>Nintendo DS browser</td>
                <td>Nintendo DS</td>
                <td>8.5</td>
                <td>C/A<sup>1</sup></td>
              </tr>
              <tr className="gradeC">
                <td width="1%" className="fw-bold text-inverse">44</td>
                <td width="1%"><img src="../assets/img/user/user-2.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>KHTML</td>
                <td>Konqureror 3.1</td>
                <td>KDE 3.1</td>
                <td>3.1</td>
                <td>C</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">45</td>
                <td width="1%"><img src="../assets/img/user/user-3.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>KHTML</td>
                <td>Konqureror 3.3</td>
                <td>KDE 3.3</td>
                <td>3.3</td>
                <td>A</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">46</td>
                <td width="1%"><img src="../assets/img/user/user-4.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>KHTML</td>
                <td>Konqureror 3.5</td>
                <td>KDE 3.5</td>
                <td>3.5</td>
                <td>A</td>
              </tr>
              <tr className="gradeX">
                <td width="1%" className="fw-bold text-inverse">47</td>
                <td width="1%"><img src="../assets/img/user/user-5.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Tasman</td>
                <td>Internet Explorer 4.5</td>
                <td>Mac OS 8-9</td>
                <td>-</td>
                <td>X</td>
              </tr>
              <tr className="gradeC">
                <td width="1%" className="fw-bold text-inverse">48</td>
                <td width="1%"><img src="../assets/img/user/user-6.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Tasman</td>
                <td>Internet Explorer 5.1</td>
                <td>Mac OS 7.6-9</td>
                <td>1</td>
                <td>C</td>
              </tr>
              <tr className="gradeC">
                <td width="1%" className="fw-bold text-inverse">49</td>
                <td width="1%"><img src="../assets/img/user/user-7.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Tasman</td>
                <td>Internet Explorer 5.2</td>
                <td>Mac OS 8-X</td>
                <td>1</td>
                <td>C</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">50</td>
                <td width="1%"><img src="../assets/img/user/user-8.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Misc</td>
                <td>NetFront 3.1</td>
                <td>Embedded devices</td>
                <td>-</td>
                <td>C</td>
              </tr>
              <tr className="gradeA">
                <td width="1%" className="fw-bold text-inverse">51</td>
                <td width="1%"><img src="../assets/img/user/user-9.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Misc</td>
                <td>NetFront 3.4</td>
                <td>Embedded devices</td>
                <td>-</td>
                <td>A</td>
              </tr>
              <tr className="gradeX">
                <td width="1%" className="fw-bold text-inverse">52</td>
                <td width="1%"><img src="../assets/img/user/user-10.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Misc</td>
                <td>Dillo 0.8</td>
                <td>Embedded devices</td>
                <td>-</td>
                <td>X</td>
              </tr>
              <tr className="gradeX">
                <td width="1%" className="fw-bold text-inverse">53</td>
                <td width="1%"><img src="../assets/img/user/user-11.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Misc</td>
                <td>Links</td>
                <td>Text only</td>
                <td>-</td>
                <td>X</td>
              </tr>
              <tr className="gradeX">
                <td width="1%" className="fw-bold text-inverse">54</td>
                <td width="1%"><img src="../assets/img/user/user-12.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Misc</td>
                <td>Lynx</td>
                <td>Text only</td>
                <td>-</td>
                <td>X</td>
              </tr>
              <tr className="gradeC">
                <td width="1%" className="fw-bold text-inverse">55</td>
                <td width="1%"><img src="../assets/img/user/user-13.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Misc</td>
                <td>IE Mobile</td>
                <td>Windows Mobile 6</td>
                <td>-</td>
                <td>C</td>
              </tr>
              <tr className="gradeC">
                <td width="1%" className="fw-bold text-inverse">57</td>
                <td width="1%"><img src="../assets/img/user/user-14.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Misc</td>
                <td>PSP browser</td>
                <td>PSP</td>
                <td>-</td>
                <td>C</td>
              </tr>
              <tr className="gradeU">
                <td width="1%" className="fw-bold text-inverse">58</td>
                <td width="1%"><img src="../assets/img/user/user-1.jpg" className="rounded h-30px my-n1 mx-n1" /></td>
                <td>Other browsers</td>
                <td>All others</td>
                <td>-</td>
                <td>-</td>
                <td>U</td>
              </tr>
            </tbody>
          </table>
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


                <Footer/>
            </div>
        )
    }
}

//export default Footer;