import React from "react";
import logo from "../../../src/assets/image/red.png"
import "./nav.css"


const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo bx-flashing" src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i className='bx bx-menu text-white' ></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">
                <i className='bx bxs-home'></i>
               
              </a>
              <a className="nav-link" href="nosotros">
                <i className='bx bxs-id-card'></i>
              </a>
              <a className="nav-link" href="planes">
              <i className='bx bxs-info-circle'></i>
              </a>
              <a className="nav-link" href="contact"><i className='bx bxs-contact' ></i></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
