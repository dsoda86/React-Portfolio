import React from "react";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg text-light bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#about"><img className="App-logo" src={logo} alt="logo"/></a>
                <h4>Douglas Soda</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#1fc7ab",}} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-uppercase text-light d-flex justify-content-even fs-4 mx-5 ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <a
                          href="#About" 
                          onClick={() => handlePageChange("About")}
                          className={`nav-link ${
                            currentPage === "About Me" ? "active" : ""
                          }`}
                          aria-current="page"
                        >
                          About
                        </a>
                    </li>
                    <li className="nav-item mx-2">
                        <a 
                          href="#Portfolio" 
                          onClick={() => handlePageChange("Portfolio")}
                          className={`nav-link ${
                            currentPage === "Portfolio" ? "active" : ""
                          }`}
                        >
                          Portfolio
                        </a>
                    </li>
                    <li className="nav-item mx-2">
                        <a 
                          href="#Contact"
                          onClick={() => handlePageChange("Contact")} 
                          className={`nav-link ${
                            currentPage === "Contact" ? "active" : ""
                          }`}
                        >
                          Contact
                        </a>
                    </li>
                    <li className="nav-item mx-2">
                        <a 
                          href="#Resume"
                          onClick={() => handlePageChange("Resume")} 
                          className={`nav-link ${
                            currentPage === "Resume" ? "active" : ""
                          }`}
                        >
                          Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;