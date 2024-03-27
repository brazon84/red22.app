import React from "react";
import logo from "../../../src/assets/image/red.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa estilos de Bootstrap
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-gray-200 dark:bg-gray-900">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div className="bx-flashing justify-center items-center">
          <img src={logo} alt="Logo" className="logo" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-black w-1 h-0"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header  ">
            <button
              type="button"
              className="btn-close bg-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ><i className='bx bx-x bx-spin text-white'></i></button>
          </div>
          <ul className="navbar-nav ms-auto mx-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="bx bxs-home"></i> Inicio
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                <i className="bx bxs-id-card"></i> Nosotros
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="planes">
                <i className="bx bxs-info-circle"></i> Planes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                <i className="bx bxs-contact"></i> Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="bx bxs-home"></i> Inicio
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                <i className="bx bxs-id-card"></i> Nosotros
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="planes">
                <i className="bx bxs-info-circle"></i> Planes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                <i className="bx bxs-contact"></i> Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
