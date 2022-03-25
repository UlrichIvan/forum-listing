import logo from "./images/Group 1@2x.png";
import "./css/navbar.css";
import Button from "../button/Button";
const NavBar = () => {
  return (
    <div className="NavBar-cpn">
      <div className="container-fluid px-0 ">
        <div className="nav-bar d-flex justify-content-between">
          <div className="nav-bar-item-left d-flex align-items-center">
            <div className="navbar-brand">
              <img src={logo} width="187" height="48" alt="logo" />
            </div>
            <ul className="links mb-0 pl-0 d-flex align-items-center">
              <li className="link-item">
                <a href="#">comment ca marche</a>
              </li>
              <li className="link-item nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  les régelementations
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="link-item">
                <a href="#">tarifications</a>
              </li>
              <li className="link-item">
                <a href="#">forom</a>
              </li>
              <li className="link-item">
                <a href="#">Actualités</a>
              </li>
            </ul>
          </div>
          <div className="nav-bar-item-right d-flex align-items-center">
            <li className="link-item">
              <a href="#">créer un compte</a>
            </li>
            <Button>
              <div className="btn btn-primary py-2">
                <li className="link-item">
                  <i className="fa fa-sign-out mr-2" aria-hidden="true"></i>
                  <a href="#">se connecter</a>
                </li>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
