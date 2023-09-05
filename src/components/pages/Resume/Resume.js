import React from "react"

const Resume = () => {
  return (
    <div className="row text-light">
      <div className="col-12 pt-3 pt-md-0 text-center">
        <h1>Full Stack Developer</h1>
        <div className="py-3">
          <h3 className="text-decoration-underline text-secondary-emphasis fw-semibold">Education</h3>
          <p>Full Stack Web Development Bootcamp Certified - University of California, Irvine </p>
          <p>BA in Economics - University of California, San Diego</p>
        </div>
        <div className="py-3">
          <h3 className="text-decoration-underline text-secondary-emphasis fw-semibold">Experience</h3>
          <p>Full Stack Bootcamp</p>
          <p>Solo/Group Projects</p>
          <p>Available for internships</p>
          <p>Candidate for Junior Dev Position</p>
        </div>
        <div className="py-3">
          <h3 className="text-decoration-underline text-secondary-emphasis fw-semibold">Skillset</h3>
          <p>Teamwork and Communication</p>
            <li>
              HTML, CSS, JavaScript, Version Control / Git, Responsive / Accessible Web Design
            </li>
            <li>
              Front-End Frameworks/Libraries: React
            </li>
            <li>
              Back-End Development: Node.js, MySQL, NoSQL, MongoDB
            </li>
        </div>
      </div>
    </div>
  )
}

export default Resume;