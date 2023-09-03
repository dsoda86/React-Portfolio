import React from "react";
import logo from "../../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-light bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="App-logo" src={logo} alt="logo"/></a>
                <h4>Douglas Soda</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#1fc7ab",}} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-uppercase text-white d-flex justify-content-even fs-4 mx-5 ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <Link to="/" className="nav-link text-light" aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to="/about" className="nav-link text-light" aria-current="page">
                            About
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to="/portfolio" className="nav-link text-light">
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to="/contact" className="nav-link text-light">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to="/resume" className="nav-link text-light">
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;