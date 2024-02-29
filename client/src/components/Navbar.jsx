const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <a href="../../index3.html" className="navbar-brand">
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>

          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="index3.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  id="dropdownSubMenu1"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle"
                >
                  Dropdown
                </a>
                <ul
                  aria-labelledby="dropdownSubMenu1"
                  className="dropdown-menu border-0 shadow"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      Some action{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Some other action
                    </a>
                  </li>

                  <li className="dropdown-divider"></li>

                  <li className="dropdown-submenu dropdown-hover">
                    <a
                      id="dropdownSubMenu2"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-item dropdown-toggle"
                    >
                      Hover for action
                    </a>
                    <ul
                      aria-labelledby="dropdownSubMenu2"
                      className="dropdown-menu border-0 shadow"
                    >
                      <li>
                        <a tabIndex="-1" href="#" className="dropdown-item">
                          level 2
                        </a>
                      </li>

                      <li className="dropdown-submenu">
                        <a
                          id="dropdownSubMenu3"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="dropdown-item dropdown-toggle"
                        >
                          level 2
                        </a>
                        <ul
                          aria-labelledby="dropdownSubMenu3"
                          className="dropdown-menu border-0 shadow"
                        >
                          <li>
                            <a href="#" className="dropdown-item">
                              3rd level
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              3rd level
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#" className="dropdown-item">
                          level 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          level 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="form-inline ml-0 ml-md-3">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li className="nav-item">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-primary">
                  Left
                </button>
                <button type="button" className="btn btn-primary">
                  Middle
                </button>
                <button type="button" className="btn btn-primary">
                  Right
                </button>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
                role="button"
              >
                <i className="fas fa-th-large"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
