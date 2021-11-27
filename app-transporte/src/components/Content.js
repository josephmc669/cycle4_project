import React, { Component } from 'react'
//El contenido
export default class Content extends Component {
    render() {
        return (
            <div>
  {/* BEGIN #content */}
  <div id="content" className="app-content">
    {/* BEGIN breadcrumb */}
    <ol className="breadcrumb float-xl-end">
      <li className="breadcrumb-item"><a href="javascript:;">Home</a></li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
    {/* END breadcrumb */}
    {/* BEGIN page-header */}
    <h1 className="page-header">Dashboard <small>header small text goes here...</small></h1>
    {/* END page-header */}
    {/* BEGIN row */}
    <div className="row">
      {/* BEGIN col-3 */}
      <div className="col-xl-3 col-md-6">
        <div className="widget widget-stats bg-blue">
          <div className="stats-icon"><i className="fa fa-desktop" /></div>
          <div className="stats-info">
            <h4>TOTAL VISITORS</h4>
            <p>3,291,922</p>	
          </div>
          <div className="stats-link">
            <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right" /></a>
          </div>
        </div>
      </div>
      {/* END col-3 */}
      {/* BEGIN col-3 */}
      <div className="col-xl-3 col-md-6">
        <div className="widget widget-stats bg-info">
          <div className="stats-icon"><i className="fa fa-link" /></div>
          <div className="stats-info">
            <h4>BOUNCE RATE</h4>
            <p>20.44%</p>	
          </div>
          <div className="stats-link">
            <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right" /></a>
          </div>
        </div>
      </div>
      {/* END col-3 */}
      {/* BEGIN col-3 */}
      <div className="col-xl-3 col-md-6">
        <div className="widget widget-stats bg-orange">
          <div className="stats-icon"><i className="fa fa-users" /></div>
          <div className="stats-info">
            <h4>UNIQUE VISITORS</h4>
            <p>1,291,922</p>	
          </div>
          <div className="stats-link">
            <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right" /></a>
          </div>
        </div>
      </div>
      {/* END col-3 */}
      {/* BEGIN col-3 */}
      <div className="col-xl-3 col-md-6">
        <div className="widget widget-stats bg-red">
          <div className="stats-icon"><i className="fa fa-clock" /></div>
          <div className="stats-info">
            <h4>AVG TIME ON SITE</h4>
            <p>00:12:23</p>	
          </div>
          <div className="stats-link">
            <a href="javascript:;">View Detail <i className="fa fa-arrow-alt-circle-right" /></a>
          </div>
        </div>
      </div>
      {/* END col-3 */}
    </div>
    {/* END row */}
    {/* BEGIN row */}
    <div className="row">
      {/* BEGIN col-8 */}
      <div className="col-xl-8">
        {/* BEGIN panel */}
        <div className="panel panel-inverse" data-sortable-id="index-1">
          <div className="panel-heading">
            <h4 className="panel-title">Website Analytics (Last 7 Days)</h4>
            <div className="panel-heading-btn">
              <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
            </div>
          </div>
          <div className="panel-body pe-1">
            <div id="interactive-chart" className="h-300px" />
          </div>
        </div>
        {/* END panel */}
        {/* BEGIN tabs */}
        <ul className="nav nav-tabs nav-tabs-inverse nav-justified" data-sortable-id="index-2">
          <li className="nav-item"><a href="#latest-post" data-bs-toggle="tab" className="nav-link active"><i className="fa fa-camera fa-lg me-5px" /> <span className="d-none d-md-inline">Latest Post</span></a></li>
          <li className="nav-item"><a href="#purchase" data-bs-toggle="tab" className="nav-link"><i className="fa fa-archive fa-lg me-5px" /> <span className="d-none d-md-inline">Purchase</span></a></li>
          <li className="nav-item"><a href="#email" data-bs-toggle="tab" className="nav-link"><i className="fa fa-envelope fa-lg me-5px" /> <span className="d-none d-md-inline">Email</span></a></li>
        </ul>
        <div className="tab-content bg-white rounded-bottom mb-20px" data-sortable-id="index-3">
          <div className="tab-pane fade active show" id="latest-post">
            <div className="h-300px p-3" data-scrollbar="true">
              <div className="d-sm-flex">
                <a href="javascript:;" className="w-sm-200px">
                  <img className="mw-100 rounded" src="../assets/img/gallery/gallery-1.jpg" alt />
                </a>
                <div className="flex-1 ps-sm-3 pt-3 pt-sm-0">
                  <h5>Aenean viverra arcu nec pellentesque ultrices. In erat purus, adipiscing nec lacinia at, ornare ac eros.</h5>
                  Nullam at risus metus. Quisque nisl purus, pulvinar ut mauris vel, elementum suscipit eros. Praesent ornare ante massa, egestas pellentesque orci convallis ut. Curabitur consequat convallis est, id luctus mauris lacinia vel. Nullam tristique lobortis mauris, ultricies fermentum lacus bibendum id. Proin non ante tortor. Suspendisse pulvinar ornare tellus nec pulvinar. Nam pellentesque accumsan mi, non pellentesque sem convallis sed. Quisque rutrum erat id auctor gravida.
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-sm-flex">
                <a href="javascript:;" className="w-sm-200px">
                  <img className="mw-100 rounded" src="../assets/img/gallery/gallery-10.jpg" alt />
                </a>
                <div className="flex-1 ps-sm-3 pt-3 pt-sm-0">
                  <h5>Vestibulum vitae diam nec odio dapibus placerat. Ut ut lorem justo.</h5>
                  Fusce bibendum augue nec fermentum tempus. Sed laoreet dictum tempus. Aenean ac sem quis nulla malesuada volutpat. Nunc vitae urna pulvinar velit commodo cursus. Nullam eu felis quis diam adipiscing hendrerit vel ac turpis. Nam mattis fringilla euismod. Donec eu ipsum sit amet mauris iaculis aliquet. Quisque sit amet feugiat odio. Cras convallis lorem at libero lobortis, placerat lobortis sapien lacinia. Duis sit amet elit bibendum sapien dignissim bibendum.
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-sm-flex">
                <a href="javascript:;" className="w-sm-200px">
                  <img className="mw-100 rounded" src="../assets/img/gallery/gallery-7.jpg" alt />
                </a>
                <div className="flex-1 ps-sm-3 pt-3 pt-sm-0">
                  <h5>Maecenas eget turpis luctus, scelerisque arcu id, iaculis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.</h5>
                  Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque. Nam augue nulla, accumsan quis nisi a, facilisis eleifend nulla. Praesent aliquet odio non imperdiet fringilla. Morbi a porta nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-sm-flex">
                <a href="javascript:;" className="w-sm-200px">
                  <img className="mw-100 rounded" src="../assets/img/gallery/gallery-8.jpg" alt />
                </a>
                <div className="flex-1 ps-sm-3 pt-3 pt-sm-0">
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor accumsan rutrum.</h5>
                  Fusce augue diam, vestibulum a mattis sit amet, vehicula eu ipsum. Vestibulum eu mi nec purus tempor consequat. Vestibulum porta non mi quis cursus. Fusce vulputate cursus magna, tincidunt sodales ipsum lobortis tincidunt. Mauris quis lorem ligula. Morbi placerat est nec pharetra placerat. Ut laoreet nunc accumsan orci aliquam accumsan. Maecenas volutpat dolor vitae sapien ultricies fringilla. Suspendisse vitae orci sed nibh ultrices tristique. Aenean in ante eget urna semper imperdiet. Pellentesque sagittis a nulla at scelerisque.
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="purchase">
            <div className="h-300px" data-scrollbar="true">
              <table className="table table-panel mb-0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th className="hidden-sm text-center">Product</th>
                    <th />
                    <th>Amount</th>
                    <th>User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold text-muted">13/02/2021</td>
                    <td className="hidden-sm text-center">
                      <a href="javascript:;">
                        <img src="../assets/img/product/product-1.png" alt width="32px" />
                      </a>
                    </td>
                    <td className="text-nowrap">
                      <h6><a href="javascript:;" className="text-inverse text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
                    </td>
                    <td className="text-blue fw-bold">$349.00</td>
                    <td className="text-nowrap"><a href="javascript:;" className="text-inverse text-decoration-none">Derick Wong</a></td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-muted">13/02/2021</td>
                    <td className="hidden-sm text-center">
                      <a href="javascript:;">
                        <img src="../assets/img/product/product-2.png" alt width="32px" />
                      </a>
                    </td>
                    <td className="text-nowrap">
                      <h6><a href="javascript:;" className="text-inverse text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
                    </td>
                    <td className="text-blue fw-bold">$399.00</td>
                    <td className="text-nowrap"><a href="javascript:;" className="text-inverse text-decoration-none">Derick Wong</a></td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-muted">13/02/2021</td>
                    <td className="hidden-sm text-center">
                      <a href="javascript:;">
                        <img src="../assets/img/product/product-3.png" alt width="32px" />
                      </a>
                    </td>
                    <td className="text-nowrap">
                      <h6><a href="javascript:;" className="text-inverse text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
                    </td>
                    <td className="text-blue fw-bold">$499.00</td>
                    <td className="text-nowrap"><a href="javascript:;" className="text-inverse text-decoration-none">Derick Wong</a></td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-muted">13/02/2021</td>
                    <td className="hidden-sm text-center">
                      <a href="javascript:;">
                        <img src="../assets/img/product/product-4.png" alt width="32px" />
                      </a>
                    </td>
                    <td className="text-nowrap">
                      <h6><a href="javascript:;" className="text-inverse text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
                    </td>
                    <td className="text-blue fw-bold">$230.00</td>
                    <td className="text-nowrap"><a href="javascript:;" className="text-inverse text-decoration-none">Derick Wong</a></td>
                  </tr>
                  <tr>
                    <td className="fw-bold text-muted">13/02/2021</td>
                    <td className="hidden-sm text-center">
                      <a href="javascript:;">
                        <img src="../assets/img/product/product-5.png" alt width="32px" />
                      </a>
                    </td>
                    <td className="text-nowrap">
                      <h6><a href="javascript:;" className="text-inverse text-decoration-none">Nunc eleifend lorem eu velit eleifend, <br />eget faucibus nibh placerat.</a></h6>
                    </td>
                    <td className="text-blue fw-bold">$500.00</td>
                    <td className="text-nowrap"><a href="javascript:;" className="text-inverse text-decoration-none">Derick Wong</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane fade" id="email">
            <div className="h-300px p-3" data-scrollbar="true">
              <div className="d-flex">
                <a className="w-60px" href="javascript:;">
                  <img src="../assets/img/user/user-1.jpg" alt className="mw-100 rounded-pill" />
                </a>
                <div className="flex-1 ps-3">
                  <a href="javascript:;" className="text-inverse text-decoration-none"><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5></a>
                  <p className="mb-5px">
                    Aenean mollis arcu sed turpis accumsan dignissim. Etiam vel tortor at risus tristique convallis. Donec adipiscing euismod arcu id euismod. Suspendisse potenti. Aliquam lacinia sapien ac urna placerat, eu interdum mauris viverra.
                  </p>
                  <span className="text-muted fs-11px fw-bold">Received on 04/16/2021, 12.39pm</span>
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-flex">
                <a className="w-60px" href="javascript:;">
                  <img src="../assets/img/user/user-2.jpg" alt className="mw-100 rounded-pill" />
                </a>
                <div className="flex-1 ps-3">
                  <a href="javascript:;" className="text-inverse text-decoration-none"><h5>Praesent et sem porta leo tempus tincidunt eleifend et arcu.</h5></a>
                  <p className="mb-5px">
                    Proin adipiscing dui nulla. Duis pharetra vel sem ac adipiscing. Vestibulum ut porta leo. Pellentesque orci neque, tempor ornare purus nec, fringilla venenatis elit. Duis at est non nisl dapibus lacinia.
                  </p>
                  <span className="text-muted fs-11px fw-bold">Received on 04/16/2021, 12.39pm</span>
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-flex">
                <a className="w-60px" href="javascript:;">
                  <img src="../assets/img/user/user-3.jpg" alt className="mw-100 rounded-pill" />
                </a>
                <div className="flex-1 ps-3">
                  <a href="javascript:;" className="text-inverse text-decoration-none"><h5>Ut mi eros, varius nec mi vel, consectetur convallis diam.</h5></a>
                  <p className="mb-5px">
                    Ut mi eros, varius nec mi vel, consectetur convallis diam. Nullam eget hendrerit eros. Duis lacinia condimentum justo at ultrices. Phasellus sapien arcu, fringilla eu pulvinar id, mattis quis mauris.
                  </p>
                  <span className="text-muted fs-11px fw-bold">Received on 04/16/2021, 12.39pm</span>
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-flex">
                <a className="w-60px" href="javascript:;">
                  <img src="../assets/img/user/user-4.jpg" alt className="mw-100 rounded-pill" />
                </a>
                <div className="flex-1 ps-3">
                  <a href="javascript:;" className="text-inverse text-decoration-none"><h5>Aliquam nec dolor vel nisl dictum ullamcorper.</h5></a>
                  <p className="mb-5px">
                    Aliquam nec dolor vel nisl dictum ullamcorper. Duis vel magna enim. Aenean volutpat a dui vitae pulvinar. Nullam ligula mauris, dictum eu ullamcorper quis, lacinia nec mauris.
                  </p>
                  <span className="text-muted fs-11px fw-bold">Received on 04/16/2021, 12.39pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END tabs */}
        {/* BEGIN panel */}
        <div className="panel panel-inverse" data-sortable-id="index-4">
          <div className="panel-heading">
            <h4 className="panel-title">Quick Post</h4>
            <div className="panel-heading-btn">
              <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
            </div>
          </div>
          <div className="panel-toolbar">
            <div className="btn-group me-5px">
              <a className="btn btn-white" href="javascript:;"><i className="fa fa-bold" /></a>
              <a className="btn btn-white active" href="javascript:;"><i className="fa fa-italic" /></a>
              <a className="btn btn-white" href="javascript:;"><i className="fa fa-underline" /></a>
            </div>
            <div className="btn-group">
              <a className="btn btn-white" href="javascript:;"><i className="fa fa-align-left" /></a>
              <a className="btn btn-white active" href="javascript:;"><i className="fa fa-align-center" /></a>
              <a className="btn btn-white" href="javascript:;"><i className="fa fa-align-right" /></a>
              <a className="btn btn-white" href="javascript:;"><i className="fa fa-align-justify" /></a>
            </div>
          </div>
          <hr className="m-0" />
          <textarea className="form-control rounded-0 border-0 shadow-none bg-gray-200 p-3" rows={14} defaultValue={"Enter some comment."} />
          <div className="panel-footer text-end">
            <a href="javascript:;" className="btn btn-white btn-sm">Cancel</a>
            <a href="javascript:;" className="btn btn-primary btn-sm ms-5px">Action</a>
          </div>
        </div>
        {/* END panel */}
        {/* BEGIN panel */}
        <div className="panel panel-inverse" data-sortable-id="index-5">
          <div className="panel-heading">
            <h4 className="panel-title">Message</h4>
            <div className="panel-heading-btn">
              <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
            </div>
          </div>
          <div className="panel-body p-0">
            <div className="h-300px p-3" data-scrollbar="true">
              <div className="d-flex">
                <a href="javascript:;" className="w-60px">
                  <img src="../assets/img/user/user-5.jpg" alt className="mw-100 rounded-pill" />
                </a>
                <div className="flex-1 ps-3">
                  <h5>John Doe</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nunc non eros fermentum vestibulum ut id felis. Nunc molestie libero eget urna aliquet, vitae laoreet felis ultricies. Fusce sit amet massa malesuada, tincidunt augue vitae, gravida felis.</p>
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-flex">
                <a href="javascript:;" className="w-60px">
                  <img src="../assets/img/user/user-6.jpg" alt className="mw-100 rounded-pill" />
                </a>
                <div className="flex-1 ps-3">
                  <h5>Terry Ng</h5>
                  <p>Sed in ante vel ipsum tristique euismod posuere eget nulla. Quisque ante sem, scelerisque iaculis interdum quis, eleifend id mi. Fusce congue leo nec mauris malesuada, id scelerisque sapien ultricies.</p>
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-flex">
                <a href="javascript:;" className="w-60px">
                  <img src="../assets/img/user/user-8.jpg" alt className="mw-100 rounded-pill" />
                </a>
                <div className="flex-1 ps-3">
                  <h5>Fiona Log</h5>
                  <p>Pellentesque dictum in tortor ac blandit. Nulla rutrum eu leo vulputate ornare. Nulla a semper mi, ac lacinia sapien. Sed volutpat ornare eros, vel semper sem sagittis in. Quisque risus ipsum, iaculis quis cursus eu, tristique sed nulla.</p>
                </div>
              </div>
              <hr className="bg-gray-500" />
              <div className="d-flex">
                <a href="javascript:;" className="w-60px">
                  <img src="../assets/img/user/user-7.jpg" alt className="mw-100 rounded-pill" />
                </a>
                <div className="flex-1 ps-3">
                  <h5>John Doe</h5>
                  <p>Morbi molestie lorem quis accumsan elementum. Morbi condimentum nisl iaculis, laoreet risus sed, porta neque. Proin mi leo, dapibus at ligula a, aliquam consectetur metus.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <form>
              <div className="input-group">
                <input type="text" className="form-control bg-light" placeholder="Enter message" />
                <button className="btn btn-primary" type="button"><i className="fa fa-pencil-alt" /></button>
              </div>
            </form>
          </div>
        </div>
        {/* END panel */}
      </div>
      {/* END col-8 */}
      {/* BEGIN col-4 */}
      <div className="col-xl-4">
        {/* BEGIN panel */}
        <div className="panel panel-inverse" data-sortable-id="index-6">
          <div className="panel-heading">
            <h4 className="panel-title">Analytics Details</h4>
            <div className="panel-heading-btn">
              <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-panel align-middle mb-0">
              <thead>
                <tr>	
                  <th>Source</th>
                  <th>Total</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td nowrap><label className="badge bg-danger">Unique Visitor</label></td>
                  <td>13,203 <span className="text-success"><i className="fa fa-arrow-up" /></span></td>
                  <td><div id="sparkline-unique-visitor" /></td>
                </tr>
                <tr>
                  <td nowrap><label className="badge bg-warning">Bounce Rate</label></td>
                  <td>28.2%</td>
                  <td><div id="sparkline-bounce-rate" /></td>
                </tr>
                <tr>
                  <td nowrap><label className="badge bg-success">Total Page Views</label></td>
                  <td>1,230,030</td>
                  <td><div id="sparkline-total-page-views" /></td>
                </tr>
                <tr>
                  <td nowrap><label className="badge bg-blue">Avg Time On Site</label></td>
                  <td>00:03:45</td>
                  <td><div id="sparkline-avg-time-on-site" /></td>
                </tr>
                <tr>
                  <td nowrap><label className="badge bg-default text-gray-900">% New Visits</label></td>
                  <td>40.5%</td>
                  <td><div id="sparkline-new-visits" /></td>
                </tr>
                <tr>
                  <td nowrap><label className="badge bg-inverse">Return Visitors</label></td>
                  <td>73.4%</td>
                  <td><div id="sparkline-return-visitors" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* END panel */}
        {/* BEGIN panel */}
        <div className="panel panel-inverse" data-sortable-id="index-7">
          <div className="panel-heading">
            <h4 className="panel-title">Visitors User Agent</h4>
            <div className="panel-heading-btn">
              <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
            </div>
          </div>
          <div className="panel-body">
            <div id="donut-chart" className="h-300px" />
          </div>
        </div>
        {/* END panel */}
        {/* BEGIN panel */}
        <div className="panel panel-inverse" data-sortable-id="index-8">
          <div className="panel-heading">
            <h4 className="panel-title">Todo List</h4>
            <div className="panel-heading-btn">
              <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
            </div>
          </div>
          <div className="panel-body p-0">
            <div className="todolist">
              <div className="todolist-item active">
                <div className="todolist-input">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="todolist1" data-change="todolist" defaultChecked />
                  </div>
                </div>
                <label className="todolist-label" htmlFor="todolist1">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</label>
              </div>
              <div className="todolist-item">
                <div className="todolist-input">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="todolist2" data-change="todolist" />
                  </div>
                </div>
                <label className="todolist-label" htmlFor="todolist2">Duis a ullamcorper massa.</label>
              </div>
              <div className="todolist-item">
                <div className="todolist-input">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="todolist3" data-change="todolist" />
                  </div>
                </div>
                <label className="todolist-label" htmlFor="todolist3">Phasellus bibendum, odio nec vestibulum ullamcorper.</label>
              </div>
              <div className="todolist-item">
                <div className="todolist-input">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="todolist4" data-change="todolist" />
                  </div>
                </div>
                <label className="todolist-label" htmlFor="todolist4">Duis pharetra mi sit amet dictum congue.</label>
              </div>
              <div className="todolist-item">
                <div className="todolist-input">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="todolist5" data-change="todolist" />
                  </div>
                </div>
                <label className="todolist-label" htmlFor="todolist5">Duis pharetra mi sit amet dictum congue.</label>
              </div>
              <div className="todolist-item">
                <div className="todolist-input">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="todolist6" data-change="todolist" />
                  </div>
                </div>
                <label className="todolist-label" htmlFor="todolist6">Phasellus bibendum, odio nec vestibulum ullamcorper.</label>
              </div>
              <div className="todolist-item">
                <div className="todolist-input">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="todolist7" data-change="todolist" />
                  </div>
                </div>
                <label className="todolist-label" htmlFor="todolist7">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</label>
              </div>
            </div>
          </div>
        </div>
        {/* END panel */}
        {/* BEGIN panel */}
        <div className="panel panel-inverse bg-dark" data-sortable-id="index-9">
          <div className="panel-heading">
            <h4 className="panel-title">World Visitors</h4>
            <div className="panel-heading-btn">
              <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
            </div>
          </div>
          <div className="panel-body p-0">
            <div id="world-map" className="h-300px" />
          </div>
        </div>
        {/* END panel */}
        {/* BEGIN panel */}
        <div className="panel panel-inverse" data-sortable-id="index-10">
          <div className="panel-heading">
            <h4 className="panel-title">Calendar</h4>
            <div className="panel-heading-btn">
              <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus" /></a>
              <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times" /></a>
            </div>
          </div>
          <div className="panel-body">
            <div id="datepicker-inline" className="datepicker-full-width overflow-y-scroll position-relative"><div /></div>
          </div>
        </div>
        {/* END panel */}
      </div>
      {/* END col-4 */}
    </div>
    {/* END row */}
  </div>
  {/* END #content */}
</div>

        )
    }
}
