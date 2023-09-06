import React from 'react'
import "./About.css"
import profile from "../../../images/profile.png";

const About = () => {
  return (
    <div className="card about-card mb-3 text-bg-dark">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={profile} className="m-3 img-fluid profile border border-4" alt="profle" />
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="card-body">
                    <h1 className="card-title text-center py-2">About Me</h1>
                    <p className="card-text">
                    I am a full-stack boot camp graduate via UCI, with a prior BA in Economics from UCSD. I know that there is 
                    much to learn, but I am confident in my current skills and my ability to adapt and learn with experience. 
                    </p>
                    <p className="card-text">
                    I am proficient in front-end and back-end web development as well as using GitHub to effectively manage applications. 
                    I have completed various projects that can be viewed on this site and have more to come. I look forward to learning and
                    building with new technologies in order to further expand my repertoire.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;