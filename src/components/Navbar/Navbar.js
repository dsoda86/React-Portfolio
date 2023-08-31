import React from "react";
import logo from "../../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#About"><img className="App-logo" src={logo} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#1fc7ab",}} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-uppercase text-white fs-4 ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link text-light" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar