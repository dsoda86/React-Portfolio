import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-light">
      <section className="d-flex justify-content-center justify-content-lg- p-4 border-bottom">
        <a href="https://www.linkedin.com/in/douglas-soda-798396133/" className="me-4 text-reset d-flex justify-content-center">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/dsoda86" className="me-4 text-reset d-flex justify-content-center">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </section>
      <div className="text-center p-4">
        © 2023 Copyright: Douglas Soda
      </div>
    </footer>
  )
}

export default Footer