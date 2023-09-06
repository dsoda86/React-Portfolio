import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {setCurrentPage(page);
  };

  return (
    <div className="App">
      <header>
        <Navbar
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <main>
        <PortfolioContainer currentPage={currentPage} />  
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}


export default App;
