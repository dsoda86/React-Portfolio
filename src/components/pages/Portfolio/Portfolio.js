import React from 'react'
import "./Portfolio.css"
import parkTalk from "../../../images/parkTalk.png" 
import jate from "../../../images/jate.png"
import ORM from "../../../images/eCommerceORM.png"
import employeeTracker from "../../../images/employeeTracker.png"
import mealMatch from "../../../images/mealMatch.png"
import noteTaker from "../../../images/noteTaker.png"
import teachTogether from "../../../images/TeachTogetherSS.png"
const Portfolio = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card text-bg-dark h-100 text-center border border-4 card-border-lc">
          <img src={teachTogether} className="card-img-top p-2 border-bottom border-3 img-fluid" alt="app-screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Teach Together</h5>
            <p className="card-text">
              Hi Parents and Teachers! We, the TeachTogether team have dedicated valuable time to create an app which will make communication between Teachers and Parents
              convenient and pleasant. This app helps Teachers and Parents communicate about the topics such as academic progess, extracurricular opportunities, guidance, and much more!
              This is also where announcements about school events can be posted so Parents can be in the loop.
              </p>
            <div className="card-body">
              <a href="https://teachtogether-ffa1db8adbe1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link p-2">Visit Page!</a>
              <a href="https://github.com/dsoda86/TeachTogether" target="_blank" rel="noopener noreferrer" className="card-link p-2">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark h-100 text-center border border-4 card-border-lc">
          <img src={parkTalk} className="card-img-top p-2 border-bottom border-3 img-fluid" alt="app-screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Park Talk</h5>
            <p className="card-text">
              This app is a blog site where people can review parks. It was created so families can find the perfect park for their needs. 
              It utilized MySQL and sequelize to handle database, express-session, connect-session-sequelize, and bcrypt to handle login 
              features, and express-handlebars to dynamically build webpages. It also uses google maps api with axios library to handle
              location data and is deployed via Heroku.
              </p>
            <div className="card-body">
              <a href="https://mighty-lake-15406-ba158194b6db.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link p-2">Visit Page!</a>
              <a href="https://github.com/dsoda86/Park-Talk-Forked" target="_blank" rel="noopener noreferrer" className="card-link p-2">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark h-100 text-center border border-dark border-4 card-border-rc">
          <img src={jate} className="card-img-top p-2 border-bottom border-3 img-fluid" alt="app-screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Just Another Text Editor</h5>
            <p className="card-text">
              This application is text editor that runs in the browser. The app will be a single-page application that meets 
              the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy
              in case one of the options is not supported by the browser. It uses service workers, asset caching, and IndexedDB 
              so that the application can function offline as well.
            </p>
            <div className="card-body card-bottom">
              <a href="https://fathomless-journey-93497-adfd132d8a6e.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link p-2">Visit Page!</a>
              <a href="https://github.com/dsoda86/PWA-Text-Editor" target="_blank" rel="noopener noreferrer" className="card-link p-2">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark h-100 text-center border border-dark border-4 card-border-lc">
          <img src={ORM} className="card-img-top p-2 border-bottom border-3" alt="app-screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">E-Commerce ORM</h5>
            <p className="card-text">
              This e-commerce application is developed using starter code to create a back-end application for an e-commerce site that uses
              the CLI and object-relational mapping for various methods of data manipulation, storage, and retrieval when using HTTP methods 
              with a RESTUL API. Users can perform CRUD operations with Insomnia once the application has been started.
            </p>
            <div className="card-body">
              <a href="https://drive.google.com/file/d/1Mo31UKF2VXXQ-INamnMqCa6lZwqksl18/view" target="_blank" rel="noopener noreferrer" className="card-link p-2">View Demo!</a>
              <a href="https://github.com/dsoda86/E-Commerce-ORM" target="_blank" rel="noopener noreferrer" className="card-link p-2">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark h-100 text-center border border-dark border-4 card-border-rc">
          <img src={employeeTracker} className="card-img-top p-2 border-bottom border-3" alt="app-screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Employee Tracker</h5>
            <p className="card-text">
              Developers frequently have to create interfaces that allow non-developers to easily view and interact with information 
              stored in databases. These interfaces are called content management systems (CMS). This application uses Node.js, Inquirer,
              and MySQL to allow users to access an employee database, view departments, roles, and employees; add a department, role, or
              employee; as well as update current employee information.
              </p>
            <div className="card-body">
              <a href="https://drive.google.com/file/d/1iEY7nPvhLu7YniLZuTjcIvkvune8M8Xo/view" target="_blank" rel="noopener noreferrer" className="card-link p-2">View Demo!</a>
              <a href="https://github.com/dsoda86/Empoyee-Tracker-App" target="_blank" rel="noopener noreferrer" className="card-link p-2">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark h-100 text-center border border-dark border-4 card-border-lc">
          <img src={mealMatch} className="card-img-top p-2 border-bottom border-3" alt="app-screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Meal Match</h5>
            <p className="card-text">
              MealMatch is an app designed for foodies and fitness enthusiasts alike! Users search 
              for recipes by cuisine and are provided with a recipe that contains ingredients, cooking instructions and caloric 
              info, as well as the duration needed to burn that same amount of calories via an assprtment of acitvites.
            </p>
            <div className="card-body">
              <a href="https://dsoda86.github.io/MealMatch/" target="_blank" rel="noopener noreferrer" className="card-link p-2">Visit Page!</a>
              <a href="https://github.com/dsoda86/MealMatch" target="_blank" rel="noopener noreferrer" className="card-link p-2">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-dark h-100 text-center border border-dark border-4 card-border-rc">
          <img src={noteTaker} className="card-img-top p-2 border-bottom border-3" alt="app-screenshot"></img>
          <div className="card-body">
            <h5 className="card-title">Note Taker App</h5>
            <p className="card-text">
              This project is an application called Note Taker that can be used to write, save, and delete notes. The application uses an
              Express.js back end and will save and retrieve note data from a JSON file. The application front-end has already 
              been created. I built the back end, connected the two, and then deployed the entire application to Heroku.
            </p>
            <div className="card-body">
              <a href="https://stark-taiga-27772-3880bf8317a9.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link p-2">Visit Page!</a>
              <a href="https://github.com/dsoda86/Note-Taker" target="_blank" rel="noopener noreferrer" className="card-link p-2">GitHub Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;