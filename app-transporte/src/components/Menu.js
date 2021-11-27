import React, { Component } from 'react'

export default class Menu extends Component {
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
          <a href="javascript:;" className="menu-profile-link" data-toggle="app-sidebar-profile" data-target="#appSidebarProfileMenu">
            <div className="menu-profile-cover with-shadow" />
            <div className="menu-profile-image">
              <img src="../assets/img/user/user-13.jpg" alt />
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
            <a href="javascript:;" className="menu-link">
              <div className="menu-icon"><i className="fa fa-cog" /></div>
              <div className="menu-text">Settings</div>
            </a>
          </div>
          <div className="menu-item">
            <a href="javascript:;" className="menu-link">
              <div className="menu-icon"><i className="fa fa-pencil-alt" /></div>
              <div className="menu-text"> Send Feedback</div>
            </a>
          </div>
          <div className="menu-item pb-5px">
            <a href="javascript:;" className="menu-link">
              <div className="menu-icon"><i className="fa fa-question-circle" /></div>
              <div className="menu-text"> Helps</div>
            </a>
          </div>
          <div className="menu-divider m-0" />
        </div>
        <div className="menu-header">Navigation</div>
        
        <div className="menu-item has-sub active">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-th-large" />
            </div>
            <div className="menu-text">Dashboard</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item active">
              <a href="index.html" className="menu-link"><div className="menu-text">Dashboard v1</div></a>
            </div>
            <div className="menu-item">
              <a href="index_v2.html" className="menu-link"><div className="menu-text">Dashboard v2</div></a>
            </div>
            <div className="menu-item">
              <a href="index_v3.html" className="menu-link"><div className="menu-text">Dashboard v3</div></a>
            </div>
          </div>
        </div>

        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-hdd" />
            </div>
            <div className="menu-text">Email</div>
            <div className="menu-badge">10</div>
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="email_inbox.html" className="menu-link">
                <div className="menu-text">Inbox</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="email_compose.html" className="menu-link">
                <div className="menu-text">Compose</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="email_detail.html" className="menu-link">
                <div className="menu-text">Detail</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <a href="widget.html" className="menu-link">
            <div className="menu-icon">
              <i className="fab fa-simplybuilt" />
            </div>
            <div className="menu-text">Widgets <span className="menu-label">NEW</span></div>
          </a>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-gem" />
            </div>
            <div className="menu-text">UI Elements <span className="menu-label">NEW</span></div> 
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="ui_general.html" className="menu-link">
                <div className="menu-text">General <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_typography.html" className="menu-link">
                <div className="menu-text">Typography</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_tabs_accordions.html" className="menu-link">
                <div className="menu-text">Tabs &amp; Accordions</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_unlimited_tabs.html" className="menu-link">
                <div className="menu-text">Unlimited Nav Tabs</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_modal_notification.html" className="menu-link">
                <div className="menu-text">Modal &amp; Notification <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_widget_boxes.html" className="menu-link">
                <div className="menu-text">Widget Boxes</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_media_object.html" className="menu-link">
                <div className="menu-text">Media Object</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_buttons.html" className="menu-link">
                <div className="menu-text">Buttons <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_icons.html" className="menu-link">
                <div className="menu-text">Icons</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_simple_line_icons.html" className="menu-link">
                <div className="menu-text">Simple Line Icons</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_ionicons.html" className="menu-link">
                <div className="menu-text">Ionicons</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_tree.html" className="menu-link">
                <div className="menu-text">Tree View</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_language_bar_icon.html" className="menu-link">
                <div className="menu-text">Language Bar &amp; Icon</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_social_buttons.html" className="menu-link">
                <div className="menu-text">Social Buttons</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_tour.html" className="menu-link">
                <div className="menu-text">Intro JS</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="ui_offcanvas_toasts.html" className="menu-link">
                <div className="menu-text">Offcanvas &amp; Toasts <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item ">
          <a href="bootstrap_5.html" className="menu-link">
            <div className="menu-icon-img">
              <img src="../assets/img/logo/logo-bs5.png" alt />
            </div>
            <div className="menu-text">Bootstrap 5 <span className="menu-label">NEW</span></div> 
          </a>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-list-ol" />
            </div>
            <div className="menu-text">Form Stuff <span className="menu-label">NEW</span></div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="form_elements.html" className="menu-link">
                <div className="menu-text">Form Elements <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_plugins.html" className="menu-link">
                <div className="menu-text">Form Plugins <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_slider_switcher.html" className="menu-link">
                <div className="menu-text">Form Slider + Switcher</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_validation.html" className="menu-link">
                <div className="menu-text">Form Validation</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_wizards.html" className="menu-link">
                <div className="menu-text">Wizards <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_wysiwyg.html" className="menu-link">
                <div className="menu-text">WYSIWYG</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_editable.html" className="menu-link">
                <div className="menu-text">X-Editable</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_multiple_upload.html" className="menu-link">
                <div className="menu-text">Multiple File Upload</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_summernote.html" className="menu-link">
                <div className="menu-text">Summernote</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="form_dropzone.html" className="menu-link">
                <div className="menu-text">Dropzone</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-table" />
            </div>
            <div className="menu-text">Tables</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="table_basic.html" className="menu-link">
                <div className="menu-text">Basic Tables</div>
              </a>
            </div>
            <div className="menu-item has-sub">
              <a href="javascript:;" className="menu-link">
                <div className="menu-text">Managed Tables</div>
                <div className="menu-caret" />
              </a>
              <div className="menu-submenu">
                <div className="menu-item">
                  <a href="table_manage.html" className="menu-link">
                    <div className="menu-text">Default</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_buttons.html" className="menu-link">
                    <div className="menu-text">Buttons</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_colreorder.html" className="menu-link">
                    <div className="menu-text">ColReorder</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_fixed_columns.html" className="menu-link">
                    <div className="menu-text">Fixed Column</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_fixed_header.html" className="menu-link">
                    <div className="menu-text">Fixed Header</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_keytable.html" className="menu-link">
                    <div className="menu-text">KeyTable</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_responsive.html" className="menu-link">
                    <div className="menu-text">Responsive</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_rowreorder.html" className="menu-link">
                    <div className="menu-text">RowReorder</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_scroller.html" className="menu-link">
                    <div className="menu-text">Scroller</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_select.html" className="menu-link">
                    <div className="menu-text">Select</div>
                  </a>
                </div>
                <div className="menu-item">
                  <a href="table_manage_combine.html" className="menu-link">
                    <div className="menu-text">Extension Combination</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-cash-register" />
            </div>
            <div className="menu-text">POS System <span className="menu-label">NEW</span></div> 
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="pos_customer_order.html" target="_blank" className="menu-link">
                <div className="menu-text">Customer Order</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="pos_kitchen_order.html" target="_blank" className="menu-link">
                <div className="menu-text">Kitchen Order</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="pos_counter_checkout.html" target="_blank" className="menu-link">
                <div className="menu-text">Counter Checkout</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="pos_table_booking.html" target="_blank" className="menu-link">
                <div className="menu-text">Table Booking</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="pos_menu_stock.html" target="_blank" className="menu-link">
                <div className="menu-text">Menu Stock</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-star" />
            </div>
            <div className="menu-text">Front End <span className="menu-label">NEW</span></div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="../../../frontend/template/template_one_page_parallax/index.html" target="_blank" className="menu-link">
                <div className="menu-text">One Page Parallax</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../../../frontend/template/template_blog/index.html" target="_blank" className="menu-link">
                <div className="menu-text">Blog</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../../../frontend/template/template_forum/index.html" target="_blank" className="menu-link">
                <div className="menu-text">Forum</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../../../frontend/template/template_e_commerce/index.html" target="_blank" className="menu-link">
                <div className="menu-text">E-Commerce</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../../../frontend/template/template_corporate/index.html" target="_blank" className="menu-link">
                <div className="menu-text">Corporate <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-envelope" />
            </div>
            <div className="menu-text">Email Template</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="email_system.html" className="menu-link">
                <div className="menu-text">System Template</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="email_newsletter.html" className="menu-link">
                <div className="menu-text">Newsletter Template</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-chart-pie" />
            </div>
            <div className="menu-text">Chart</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="chart-flot.html" className="menu-link">
                <div className="menu-text">Flot Chart</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="chart-js.html" className="menu-link">
                <div className="menu-text">Chart JS</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="chart-d3.html" className="menu-link">
                <div className="menu-text">d3 Chart</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="chart-apex.html" className="menu-link">
                <div className="menu-text">Apex Chart</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <a href="calendar.html" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-calendar" /> 
            </div>
            <div className="menu-text">Calendar</div>
          </a>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-map" />
            </div>
            <div className="menu-text">Map</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="map_vector.html" className="menu-link">
                <div className="menu-text">Vector Map</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="map_google.html" className="menu-link">
                <div className="menu-text">Google Map</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-image" />
            </div>
            <div className="menu-text">Gallery</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="gallery.html" className="menu-link">
                <div className="menu-text">Gallery v1</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="gallery_v2.html" className="menu-link">
                <div className="menu-text">Gallery v2</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-cogs" />
            </div>
            <div className="menu-text">Page Options <span className="menu-label">NEW</span></div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="page_blank.html" className="menu-link">
                <div className="menu-text">Blank Page</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_footer.html" className="menu-link">
                <div className="menu-text">Page with Footer</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_fixed_footer.html" className="menu-link">
                <div className="menu-text">Page with Fixed Footer <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_without_sidebar.html" className="menu-link">
                <div className="menu-text">Page without Sidebar</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_right_sidebar.html" className="menu-link">
                <div className="menu-text">Page with Right Sidebar</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_minified_sidebar.html" className="menu-link">
                <div className="menu-text">Page with Minified Sidebar</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_two_sidebar.html" className="menu-link">
                <div className="menu-text">Page with Two Sidebar</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_line_icons.html" className="menu-link">
                <div className="menu-text">Page with Line Icons</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_ionicons.html" className="menu-link">
                <div className="menu-text">Page with Ionicons</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_full_height.html" className="menu-link">
                <div className="menu-text">Full Height Content</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_wide_sidebar.html" className="menu-link">
                <div className="menu-text">Page with Wide Sidebar</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_light_sidebar.html" className="menu-link">
                <div className="menu-text">Page with Light Sidebar</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_mega_menu.html" className="menu-link">
                <div className="menu-text">Page with Mega Menu</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_top_menu.html" className="menu-link">
                <div className="menu-text">Page with Top Menu</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_boxed_layout.html" className="menu-link">
                <div className="menu-text">Page with Boxed Layout</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_mixed_menu.html" className="menu-link">
                <div className="menu-text">Page with Mixed Menu</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_boxed_layout_with_mixed_menu.html" className="menu-link">
                <div className="menu-text">Boxed Layout with Mixed Menu</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_transparent_sidebar.html" className="menu-link">
                <div className="menu-text">Page with Transparent Sidebar</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="page_with_search_sidebar.html" className="menu-link">
                <div className="menu-text">Page with Search Sidebar <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-gift" />
            </div>
            <div className="menu-text">Extra <span className="menu-label">NEW</span></div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="extra_timeline.html" className="menu-link">
                <div className="menu-text">Timeline</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="extra_coming_soon.html" className="menu-link">
                <div className="menu-text">Coming Soon Page</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="extra_search_results.html" className="menu-link">
                <div className="menu-text">Search Results</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="extra_invoice.html" className="menu-link">
                <div className="menu-text">Invoice</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="extra_404_error.html" className="menu-link">
                <div className="menu-text">404 Error Page</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="extra_profile.html" className="menu-link">
                <div className="menu-text">Profile Page</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="extra_scrum_board.html" className="menu-link">
                <div className="menu-text">Scrum Board <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="extra_cookie_acceptance_banner.html" className="menu-link">
                <div className="menu-text">Cookie Acceptance Banner <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-key" />
            </div>
            <div className="menu-text">Login &amp; Register</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="login.html" className="menu-link">
                <div className="menu-text">Login</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="login_v2.html" className="menu-link">
                <div className="menu-text">Login v2</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="login_v3.html" className="menu-link">
                <div className="menu-text">Login v3</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="register_v3.html" className="menu-link">
                <div className="menu-text">Register v3</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-cubes" />
            </div>
            <div className="menu-text">Version <span className="menu-label">NEW</span></div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="../template_html/index_v3.html" className="menu-link">
                <div className="menu-text">HTML</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_ajax/" className="menu-link">
                <div className="menu-text">AJAX</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_angularjs/" className="menu-link">
                <div className="menu-text">ANGULAR JS</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_angularjs10/" className="menu-link">
                <div className="menu-text">ANGULAR JS 10</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="javascript:alert('Laravel Version only available in downloaded version.');" className="menu-link">
                <div className="menu-text">LARAVEL</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_vuejs/" className="menu-link">
                <div className="menu-text">VUE JS</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_reactjs/" className="menu-link">
                <div className="menu-text">REACT JS</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="javascript:alert('.NET Core 3.1 MVC Version only available in downloaded version.');" className="menu-link">
                <div className="menu-text">ASP.NET <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_material/index_v3.html" className="menu-link">
                <div className="menu-text">MATERIAL DESIGN</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_apple/index_v3.html" className="menu-link">
                <div className="menu-text">APPLE DESIGN</div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_transparent/index_v3.html" className="menu-link">
                <div className="menu-text">TRANSPARENT DESIGN <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_facebook/index_v3.html" className="menu-link">
                <div className="menu-text">FACEBOOK DESIGN <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
            <div className="menu-item">
              <a href="../template_google/index_v3.html" className="menu-link">
                <div className="menu-text">GOOGLE DESIGN <i className="fa fa-paper-plane text-theme" /></div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-medkit" />
            </div>
            <div className="menu-text">Helper</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item">
              <a href="helper_css.html" className="menu-link">
                <div className="menu-text">Predefined CSS Classes</div>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-item has-sub">
          <a href="javascript:;" className="menu-link">
            <div className="menu-icon">
              <i className="fa fa-align-left" />
            </div>
            <div className="menu-text">Menu Level</div>
            <div className="menu-caret" />
          </a>
          <div className="menu-submenu">
            <div className="menu-item has-sub">
              <a href="javascript:;" className="menu-link">
                <div className="menu-text">Menu 1.1</div>
                <div className="menu-caret" />
              </a>
              <div className="menu-submenu">
                <div className="menu-item has-sub">
                  <a href="javascript:;" className="menu-link">
                    <div className="menu-text">Menu 2.1</div>
                    <div className="menu-caret" />
                  </a>
                  <div className="menu-submenu">
                    <div className="menu-item"><a href="javascript:;" className="menu-link"><div className="menu-text">Menu 3.1</div></a></div>
                    <div className="menu-item"><a href="javascript:;" className="menu-link"><div className="menu-text">Menu 3.2</div></a></div>
                  </div>
                </div>
                <div className="menu-item"><a href="javascript:;" className="menu-link"><div className="menu-text">Menu 2.2</div></a></div>
                <div className="menu-item"><a href="javascript:;" className="menu-link"><div className="menu-text">Menu 2.3</div></a></div>
              </div>
            </div>
            <div className="menu-item"><a href="javascript:;" className="menu-link"><div className="menu-text">Menu 1.2</div></a></div>
            <div className="menu-item"><a href="javascript:;" className="menu-link"><div className="menu-text">Menu 1.3</div></a></div>
          </div>
        </div>
        {/* BEGIN minify-button */}
        <div className="menu-item d-flex">
          <a href="javascript:;" className="app-sidebar-minify-btn ms-auto" data-toggle="app-sidebar-minify"><i className="fa fa-angle-double-left" /></a>
        </div>
        {/* END minify-button */}
      </div>
      {/* END menu */}
    </div>
    {/* END scrollbar */}
  </div>
  <div className="app-sidebar-bg" />
  <div className="app-sidebar-mobile-backdrop"><a href="#" data-dismiss="app-sidebar-mobile" className="stretched-link" /></div>
  {/* END #sidebar */}
</div>

        )
    }
}

//export default Menu;