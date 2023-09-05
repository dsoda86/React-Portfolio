import React from "react";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";

export default function PortfolioContainer({ currentPage }) {
    let content = null;

    switch (currentPage) {
        case "About":
            content = (
                <div>
                    <About />
                </div>
            );
            break;

        case "Portfolio":
            content = (
                <div>
                    <Portfolio />
                </div>
            );
            break;
        
        case "Contact":
            content = (
                <div>
                    <Contact />
                </div>
            );
            break;
        
        case "Resume":
            content = (
                <div>
                    <Resume />
                </div>
            );
            break;

        default:
            break;
    }

    return (
        <div className={`p-4 ${currentPage} ? "active" : "hidden"}`}>
            <div className="container">{content}</div>
        </div>
    )
}