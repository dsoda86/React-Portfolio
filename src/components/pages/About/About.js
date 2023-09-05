import React from 'react'
import "./About.css"
import profile from "../../../images/profile.png";

const About = () => {
  return (
    <div className="card about-card mb-3 text-bg-dark">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={profile} className="" alt="profle" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;